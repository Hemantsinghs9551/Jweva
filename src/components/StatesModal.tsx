/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { STATES } from '../constants/states';
import { FONT_SIZE } from '../constants/fonts';
import { Text, TextInput } from '../core-ui';
import { useKeyboardListener } from '../helpers/keyboardListener';
import { useGetShop } from '../hooks/api/useCustomerAddress';

type Props = {
  statesVisible: boolean;
  toggleModal: () => void;
  onPressState: (stateItem: StateItem) => void;
  selectedCountry: string;
  selectedCountryCode: any
};

type StateItem = {
  id: number;
  name: string;
  country_id: number;
  country_code: string;
  country_name: string;
  state_code: string;
  // Add other properties if necessary
};

function EmptyStatesList(searchState: string) {
  return (
    <View style={styles.emptyContainer}>
      <Image source={searchImage} style={styles.searchImage} />
      <View style={styles.flexRow}>
        <Text>{t("There's no result for")}</Text>
        <Text weight="medium">{searchState}</Text>
      </View>
      <Text>{t('Please try another word')}</Text>
    </View>
  );
}

export default function StatesModal(props: Props) {
  let { statesVisible, toggleModal, onPressState, selectedCountry, selectedCountryCode = "" } = props;

  let { keyboardHeight } = useKeyboardListener();

  let [searchState, setSearchStates] = useState('');
  let [selectedState, setSelectedState] = useState({id : 0})
  let [statesList, setStatesList] = useState(STATES);

  let { data } = useGetShop();

  useEffect(() => {
    if (data) {
      let filteredStates = [];
      if (searchState === '') {
        // If no search text is provided, filter based on selectedCountryCode and selectedCountry
        filteredStates = STATES.filter((state) => {
          return state.country_name === selectedCountry || state.country_code === selectedCountryCode;
        });
      } else {
        // If there's search text, filter based on that and also consider selectedCountryCode and selectedCountry
        filteredStates = STATES.filter((state) => {
          return (
            (state.country_name === selectedCountry || state.country_code === selectedCountryCode) &&
            JSON.stringify(state).toLowerCase().includes(searchState.toLowerCase())
          );
        });
      }
      setStatesList(filteredStates);
    }
  }, [data, searchState, selectedCountry, selectedCountryCode]);

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
        visible={statesVisible}
        onDismiss={toggleModal}
      >
        <Animated.View style={[styles.defaultModal, animatedViewStyle()]}>
          <View style={styles.modalTitleContainer}>
            <Text weight="medium" style={styles.modalTitle}>
              {t('Select States')}
            </Text>
            <TextInput
              placeholder={t('Find Country')}
              containerStyle={styles.textInputContainer}
              value={searchState}
              onChangeText={setSearchStates}
              autoCapitalize="words"
              clearButtonMode="while-editing"
              autoFocus={true}
            />
          </View>
          <FlatList
            style={styles.statesList}
            data={statesList}
            ListEmptyComponent={EmptyStatesList(searchState)}
            keyboardShouldPersistTaps="always"
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }: { item: StateItem }) => {
              let isActive = selectedState.id === item.id;
              return (
                <TouchableOpacity
                  style={styles.countryContainer}
                  onPress={() => {
                    setSelectedState(item);
                    onPressState(item);
                  }}
                >
                  {isActive ? (
                    <Text weight="medium" style={styles.textActive}>
                      {item.name}
                    </Text>
                  ) : (
                    <Text>{item.name}</Text>
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
  statesList: {
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
