import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput as TextInputType,
  TouchableOpacity,
  View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { ModalBottomSheetMessage } from '../components';
import { COLORS } from '../constants/colors';
import { FONT_SIZE } from '../constants/fonts';
import {
  defaultButton,
  defaultButtonLabel,
  flatTextInputContainerStyle,
  flatTextInputStyle,
  textInputLabel,
} from '../constants/theme';
import { Button, ModalBottomSheet, Text, TextInput } from '../core-ui';
import { ScreenSize, useDimensions } from '../helpers/dimensions';
import { useAuth } from '../helpers/useAuth';
import { useSetAuthenticatedUser } from '../hooks/api/useAuthenticatedUser';
import {
  useCustomerCreateToken,
  useGetCustomerData,
} from '../hooks/api/useCustomer';
import { useSetShoppingCart } from '../hooks/api/useShoppingCart';
import { StackNavProp } from '../types/Navigation';

export default function LoginScene() {
  let { navigate, reset } = useNavigation<StackNavProp<'Login'>>();
  let { setAuthToken } = useAuth();
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [expiresDate, setExpiresDate] = useState('');
  let [errorMessage, setErrorMessage] = useState('');
  let [isModalVisible, setIsModalVisible] = useState(false);
  const [tokenState, setTokenState] = useState({token:"" ,expiresDate :""})
  let emailRef = useRef<TextInputType>(null);
  let passwordRef = useRef<TextInputType>(null);

  let { screenSize } = useDimensions();

  let containerStyle = () => {
    let styleApplied;

    switch (screenSize) {
      case ScreenSize.Small: {
        styleApplied = styles.normal;
        break;
      }
      case ScreenSize.Medium: {
        styleApplied = styles.tabPortrait;
        break;
      }
      case ScreenSize.Large: {
        styleApplied = styles.landscape;
        break;
      }
    }
    return styleApplied;
  };

  let {
    setShoppingCart,
    loading: setShoppingCartLoading,
  } = useSetShoppingCart();

  let {
    setUser,
    loading: setAuthenticatedUserLoading,
  } = useSetAuthenticatedUser({
    onCompleted: () => {
      reset({
        index: 0,
        routes: [
          {
            name: 'Home',
            state: {
              routes: [{ name: 'HomeTab' }],
            },
          },
        ],
      });
    },
  });

  let { createToken, loading: createTokenLoading } = useCustomerCreateToken({
    variables: { email, password },
    onCompleted: ({ customerAccessTokenCreate }) => {
      if (
        customerAccessTokenCreate &&
        customerAccessTokenCreate.customerAccessToken
      ) {
        let {
          accessToken,
          expiresAt,
        } = customerAccessTokenCreate.customerAccessToken;
        setTokenState({token:accessToken ,expiresDate :expiresAt});
        login({ variables: { accessToken } });
      } else {
        setErrorMessage(t('Your email or password might be wrong!'));  
        toggleModalVisible();
      }
    },
  });


  let { getCustomer: login, loading: getCustomerLoading } = useGetCustomerData({
    onCompleted: async ({ customer }) => {
      if (customer) {
        let {
          email,
          id,
          firstName,
          lastName,
          lastIncompleteCheckout,
        } = customer;
        let items: Array<{ quantity: number; variantId: string }> = [];
        if (lastIncompleteCheckout) {
          let { id: cartID } = lastIncompleteCheckout;
          items = lastIncompleteCheckout.lineItems.edges.map(({ node }): {
            quantity: number;
            variantId: string;
          } => {
            let { quantity, variant } = node;
            let variantId = '';
            if (variant) {
              variantId = variant.id;
            }
            return { quantity, variantId };
          });
          await setShoppingCart({ variables: { items, id: cartID } });
        }
        if (email && firstName && lastName) {
          setUser({
            variables: {
              user: {
                email,
                id,
                expiresAt: tokenState?.expiresDate,
                firstName,
                lastName,
              },
            },
          });
          setExpiresDate(tokenState?.expiresDate);
          setAuthToken(tokenState?.token)
        }
      }
    },
  });

  let onSubmit = () => {
    createToken();
  };

  let isLoading =createTokenLoading || getCustomerLoading || setAuthenticatedUserLoading || setShoppingCartLoading;

  let toggleModalVisible = () => setIsModalVisible(!isModalVisible);

  return (
    <SafeAreaView style={styles.flex}>
      <ModalBottomSheet
        title={t('Something went wrong!')}
        isModalVisible={isModalVisible}
        toggleModal={toggleModalVisible}
      >
        <ModalBottomSheetMessage
          isError={true}
          message={errorMessage}
          onPressModalButton={toggleModalVisible}
        />
      </ModalBottomSheet>
      <View style={[containerStyle(), styles.container]}>
        <View>
          <TextInput
            onSubmitEditing={() => {
              passwordRef.current && passwordRef.current.focus();
            }}
            returnKeyType="next"
            ref={emailRef}
            mode="flat"
            label={t('Email Address')}
            value={email}
            onChangeText={setEmail}
            labelStyle={textInputLabel}
            autoCapitalize="none"
            containerStyle={flatTextInputContainerStyle}
            style={flatTextInputStyle}
          />
          <TextInput
            returnKeyType="done"
            ref={passwordRef}
            label={t('Password')}
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            secureTextEntry={true}
            mode="flat"
            labelStyle={textInputLabel}
            containerStyle={flatTextInputContainerStyle}
            style={flatTextInputStyle}
          />
          <TouchableOpacity
            style={styles.forgetPassword}
            onPress={() => navigate('ForgotPassword')}
          >
            <Text
              style={[styles.colorPrimary, styles.textSize]}
              weight="medium"
            >
              {t('Forgot Password?')}
            </Text>
          </TouchableOpacity>
        </View>
        <Button
          loading={isLoading}
          style={defaultButton}
          labelStyle={defaultButtonLabel}
          onPress={onSubmit}
        >
          {!isLoading && t('Log in')}
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 16,
    paddingBottom: 24,
    justifyContent: 'space-between',
  },
  forgetPassword: { alignSelf: 'flex-end', marginTop: 24 },
  textSize: { fontSize: FONT_SIZE.medium },
  colorPrimary: { color: COLORS.primaryColor },
  normal: {
    paddingHorizontal: 24,
  },
  tabPortrait: {
    paddingHorizontal: 36,
  },
  landscape: {
    paddingHorizontal: 36,
  },
});
