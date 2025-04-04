import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import {
  ErrorPage,
  ModalBottomSheetMessage,
  PaymentDetails,
} from '../../components';
import { COLORS } from '../../constants/colors';
import { emptyAddress } from '../../constants/defaultValues';
import { defaultButton, defaultButtonLabel } from '../../constants/theme';
import {
  Button,
  KeyboardAvoidingView,
  ModalBottomSheet,
  Text,
} from '../../core-ui';
import { ScreenSize, useDimensions } from '../../helpers/dimensions';
import { useAuth } from '../../helpers/useAuth';
import useCurrencyFormatter from '../../hooks/api/useCurrencyFormatter';
import { useGetCustomerAddresses } from '../../hooks/api/useCustomer';
import { useCheckoutUpdateAddress } from '../../hooks/api/useShopifyCart';
import { StackNavProp, StackRouteProp } from '../../types/Navigation';
import {
  AddressItem,
  PaymentDetailsProps,
  PaymentInfo,
} from '../../types/types';
import { AddressList, ShippingAddressForm } from './components';

export default function CheckoutScene() {
  let { navigate } = useNavigation<StackNavProp<'Checkout'>>();
  let {
    params: {
      cartData: { id: cartId, subtotalPrice: cartSubtotalPrice, totalPrice },
    },
  } = useRoute<StackRouteProp<'Checkout'>>();

  let [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    subtotalPrice: cartSubtotalPrice,
    totalPrice: totalPrice,
  });
  let { subtotalPrice } = paymentInfo;
  let { authToken } = useAuth();
  let [address, setAddress] = useState<AddressItem>(emptyAddress);
  let [selectedAddress, setSelectedAddress] = useState<AddressItem>(
    emptyAddress,
  );
  let [isModalVisible, setIsModalVisible] = useState(false);
  let { screenSize } = useDimensions();
  const first = 5;
  let formatCurrency = useCurrencyFormatter();

  let toggleModalVisible = () => setIsModalVisible(!isModalVisible);

  let {
    updateCartAddress,
    data: updateAddressData,
    loading: updateAddressLoading,
  } = useCheckoutUpdateAddress({
    onCompleted: ({ checkoutShippingAddressUpdateV2 }) => {
      if (
        checkoutShippingAddressUpdateV2 &&
        checkoutShippingAddressUpdateV2.checkout
      ) {
        let { subtotalPriceV2 } = checkoutShippingAddressUpdateV2.checkout;

        setPaymentInfo({
          ...paymentInfo,
          subtotalPrice: Number(subtotalPriceV2.amount),
        });
      }
    },
  });

  let {
    addresses,
    error,
    refetch: refetchAddresses,
    hasMore,
    isFetchingMore,
    loading,
  } = useGetCustomerAddresses(first, authToken);

  useFocusEffect(
    useCallback(() => {
      let firstIn = async () => {
        await updateAddress(selectedAddress);
      };
      firstIn();
      refetchAddresses('update', { first, customerAccessToken: authToken });
      return undefined;
    }, []), // eslint-disable-line react-hooks/exhaustive-deps
  );

  useEffect(() => {
    let defaultAddress = addresses.find((item) => item.default === true);

    if (defaultAddress) {
      setSelectedAddress(defaultAddress);
      updateAddress(defaultAddress);
    }
    if (address !== emptyAddress) {
      updateAddress(address);
    }
  }, [addresses, address]); // eslint-disable-line react-hooks/exhaustive-deps

  let updateAddress = async (address: AddressItem) => {
    let { id, name, default: defaultStatus, cursor, ...usedAddress } = address;

    await updateCartAddress({
      variables: {
        checkoutId: cartId,
        shippingAddress: {
          ...usedAddress,
        },
      },
    });
  };

  let navigateToPayment = (webUrl: string) => {
    navigate('WebView', { webUrl, type: 'payment' });
  };

  let containerStyle = () => {
    if (screenSize === ScreenSize.Small) {
      return styles.normal;
    } else {
      return styles.tab;
    }
  };
  let addNewAddress = () => {
    navigate('AddEditAddress', { rootScene: 'Checkout' });
  };

  let onPressEdit = (address: AddressItem) => {
    navigate('AddEditAddress', { address, rootScene: 'Checkout' });
  };

  let onSelect = async (item: AddressItem) => {
    setSelectedAddress(item);
    await updateAddress(item);
  };

  let onProceedPressed = async () => {
    if (!updateAddressLoading) {
      if (updateAddressData && updateAddressData.checkoutShippingAddressUpdateV2?.checkoutUserErrors.length === 0
      ) {
        navigateToPayment(updateAddressData.checkoutShippingAddressUpdateV2.checkout?.webUrl, );
      } else {
        toggleModalVisible();
      }
    }
  };

  let onEndReached = () => {
    if (!isFetchingMore && hasMore) {
      refetchAddresses('scroll', {
        first,
        customerAccessToken: authToken,
        after: addresses[addresses.length - 1].cursor || null,
      });
    }
  };

  let isDisabled = authToken
    ? selectedAddress === emptyAddress || false
    : !address.address1 ||
      !address.city ||
      !address.country ||
      !address.firstName ||
      !address.lastName ||
      !address.phone ||
      !address.province ||
      !address.zip;

  if (error) {
    return (
      <ErrorPage
        onRetry={() => {
          refetchAddresses('update', { first, customerAccessToken: authToken });
        }}
      />
    );
  }

  let renderShippingAddress = () => {
    if (authToken) {
      return (
        <View style={styles.flex}>
          <Text style={styles.opacity}>{t('Shipping Address')}</Text>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <AddressList
              addresses={addresses}
              selectedAddress={selectedAddress}
              onEditAddress={onPressEdit}
              onSelectAddress={onSelect}
              onEndReached={onEndReached}
              hasMore={hasMore}
            />
          )}
          <Button
            preset="secondary"
            style={[defaultButton, styles.newAddressButton]}
            icon="plus"
            labelStyle={defaultButtonLabel}
            onPress={addNewAddress}
          >
            {t('Add New Address')}
          </Button>
        </View>
      );
    } else {
      return (
        <ShippingAddressForm address={address} onChangeAddress={setAddress} />
      );
    }
  };

  let paymentData: Array<PaymentDetailsProps> = [
    {
      name: t('Subtotal'),
      value: formatCurrency(subtotalPrice),
    },
    {
      name: t('Shipping'),
      value: t('Calculated at next step'),
    },
    {
      name: t('Total'),
      value: formatCurrency(subtotalPrice),
    },
  ];

  let renderPaymentView = () => (
    <View
      style={
        screenSize === ScreenSize.Large && [
          styles.flex,
          styles.priceViewLandscape,
        ]
      }
    >
      <PaymentDetails
        data={paymentData}
        containerStyle={styles.surfacePaymentDetails}
      />
      <Button
        style={[defaultButton, styles.proceedButtonStyle]}
        labelStyle={defaultButtonLabel}
        onPress={onProceedPressed}
        disabled={isDisabled || updateAddressLoading}
      >
        {t('Proceed to payment')}
      </Button>
    </View>
  );
  let renderBottomModal = () => (
    <ModalBottomSheet
      title={t('An Error Occured!')}
      isModalVisible={isModalVisible}
      toggleModal={toggleModalVisible}
    >
      <ModalBottomSheetMessage
        isError={true}
        message={t('Please insert a valid address')}
        onPressModalButton={toggleModalVisible}
        buttonText={t('Close')}
      />
    </ModalBottomSheet>
  );

  if (authToken) {
    return (
      <SafeAreaView
        style={[
          styles.container,
          containerStyle(),
          screenSize === ScreenSize.Large && styles.landscape,
        ]}
      >
        {renderBottomModal()}
        {renderShippingAddress()}
        {renderPaymentView()}
      </SafeAreaView>
    );
  } else if (screenSize === ScreenSize.Large) {
    return (
      <KeyboardAvoidingView>
        <SafeAreaView style={[styles.flex, styles.landscape, containerStyle()]}>
          {renderBottomModal()}
          <ScrollView style={styles.flex}>{renderShippingAddress()}</ScrollView>
          {renderPaymentView()}
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  } else {
    return (
      <KeyboardAvoidingView>
        <SafeAreaView style={[styles.flex, containerStyle()]}>
          {renderBottomModal()}
          <ScrollView style={styles.flex}>
            {renderShippingAddress()}
            {renderPaymentView()}
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  newAddressButton: {
    borderWidth: 1,
    borderColor: COLORS.lightGrey,
    marginTop: 12,
  },
  opacity: { opacity: 0.6, marginTop: 16 },
  proceedButtonStyle: { marginBottom: 24 },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  normal: {
    marginHorizontal: 24,
    paddingTop: 16,
  },
  tab: {
    marginHorizontal: 36,
    marginTop: 24,
  },
  landscape: { flexDirection: 'row' },
  priceViewLandscape: { marginLeft: 24 },
  surfacePaymentDetails: { paddingHorizontal: 15, marginBottom: 24 },
});
