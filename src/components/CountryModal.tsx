import React, { useEffect, useState } from 'react';
import {
  Animated,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Modal, Portal } from 'react-native-paper';

import { checkAddressImage, searchImage } from '../../assets/images';
import { COLORS } from '../constants/colors';
import { COUNTRY_CODE } from '../constants/countryCode';
import { FONT_SIZE } from '../constants/fonts';
import { Text, TextInput } from '../core-ui';
import { CountryCode } from '../generated/server/globalTypes';
import { useKeyboardListener } from '../helpers/keyboardListener';
import { useGetShop } from '../hooks/api/useCustomerAddress';

type Props = {
  countryVisible: boolean;
  toggleModal: () => void;
  onPressCountry: (country: string, code: any) => void;
};

function EmptyCountryList(searchCountry: string) {
  return (
    <View style={styles.emptyContainer}>
      <Image source={searchImage} style={styles.searchImage} />
      <View style={styles.flexRow}>
        <Text>{t("There's no result for")}</Text>
        <Text weight="medium">{searchCountry}</Text>
      </View>
      <Text>{t('Please try another word')}</Text>
    </View>
  );
}

export default function CountryModal(props: Props) {
  let { countryVisible, toggleModal, onPressCountry } = props;

  let { keyboardHeight } = useKeyboardListener();

  let [searchCountry, setSearchCountry] = useState('');
  let [selectedCountry, setSelectedCountry] = useState('');
  let [countryList, setCountryList] = useState<Array<CountryCode>>([]);

  let { data } = useGetShop();

  useEffect(() => {
    if (data) {
      let countryCodes: Array<CountryCode> = [];
      if (searchCountry === '') {
        countryCodes = data.shop.shipsToCountries;
      } else {
        countryCodes = data.shop.shipsToCountries.filter((item) =>
           COUNTRY_CODE[item as keyof typeof COUNTRY_CODE]?.includes(searchCountry),
);
      }
      setCountryList(countryCodes); 
    }
  }, [data, searchCountry]);

  let animatedViewStyle = () => {
    return [
      {
        transform: [
          {
            translateY: Animated.multiply(keyboardHeight, -1),
          },
        ],
      },
    ];
  };

  return (
    <Portal>
      <Modal
        contentContainerStyle={styles.modal}
        visible={countryVisible}
        onDismiss={toggleModal}
      >
        <Animated.View style={[styles.defaultModal, animatedViewStyle()]}>
          <View style={styles.modalTitleContainer}>
            <Text weight="medium" style={styles.modalTitle}>
              {t('Select Country')}
            </Text>
            <TextInput
              placeholder={t('Find Country')}
              containerStyle={styles.textInputContainer}
              value={searchCountry}
              onChangeText={setSearchCountry}
              autoCapitalize="words"
              clearButtonMode="while-editing"
              autoFocus={true}
            />
          </View>
          <FlatList
            style={styles.countryList}
            data={countryList}
            ListEmptyComponent={EmptyCountryList(searchCountry)}
            keyboardShouldPersistTaps="always"
            renderItem={({ item }) => {
              let isActive = selectedCountry === COUNTRY_CODE[item as keyof typeof COUNTRY_CODE];
              return (
                <TouchableOpacity
                  style={styles.countryContainer}
                  onPress={() => {
                    setSelectedCountry(COUNTRY_CODE[item as keyof typeof COUNTRY_CODE]);
                    onPressCountry(COUNTRY_CODE[item as keyof typeof COUNTRY_CODE],item);
                  }}
                >
                  {isActive ? (
                    <Text weight="medium" style={styles.textActive}>
                      {COUNTRY_CODE[item as keyof typeof COUNTRY_CODE]}
                    </Text>
                  ) : (
                    <Text>{COUNTRY_CODE[item as keyof typeof COUNTRY_CODE]}</Text>
                  )}
                  {isActive && (
                    <View style={styles.imageContainer}>
                      <Image
                        style={styles.checkImage}
                        source={checkAddressImage}
                      />
                    </View>
                  )}
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item}
          />
        </Animated.View>
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },
  defaultModal: {
    backgroundColor: COLORS.white,
  },
  emptyContainer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: COLORS.white,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  modalTitleContainer: {
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGrey,
  },
  modalTitle: {
    paddingVertical: 16,
    fontSize: FONT_SIZE.large,
    textAlign: 'center',
  },
  textInputContainer: {
    height: 42,
    marginHorizontal: 24,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: COLORS.darkWhite,
    borderColor: COLORS.darkWhite,
  },
  countryList: {
    height: 200,
    marginBottom: 16,
  },
  countryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 24,
  },
  textActive: {
    color: COLORS.primaryColor,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkImage: {
    width: 24,
    height: 24,
  },
  searchImage: {
    width: 84,
    height: 84,
  },
});
