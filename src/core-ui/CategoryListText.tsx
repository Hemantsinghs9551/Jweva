import React from 'react';
import {
    FlatList,
    FlatListProps,
    ImageBackground,
    StyleProp,
    StyleSheet,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';

import { COLORS } from '../constants/colors';
import { FONT_SIZE } from '../constants/fonts';
import { CategoryItem } from '../types/types';

import Text from './Text';

type BaseProps = FlatListProps<CategoryItem>;

type Props = Omit<BaseProps, 'data' | 'renderItem' | 'numColumns'> & {
    containerStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    categories: Array<CategoryItem>;
    onSelect: (category: CategoryItem) => void;
};

function Separator() {
    return <View style={styles.separator} />;
}

export default function CategoryListText(props: Props) {
    let {
        containerStyle,
        textStyle,
        categories,
        onSelect,
        ...otherprops
    } = props;

    return (
        <FlatList

            data={categories}
            renderItem={({ item }) => (
                <View style={{ marginLeft: 10, marginTop: 10, }}>
                    <TouchableOpacity onPress={() => onSelect(item)} >
                        <Text style={styles.text1}>{item.title}</Text>
                    </TouchableOpacity>
                </View>
            )}
            ItemSeparatorComponent={Separator}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.flatlistContainer}
            {...otherprops}
        />
    );
}

const styles = StyleSheet.create({
    categoryItemContainer: {
        flex: 1,
        height: 48,
        minWidth: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    borderRadius: {
        borderRadius: 2,
    },
    color: {
        backgroundColor: COLORS.primaryColor,
    },
    categoryItemText: {
        marginHorizontal: 12,
        color: COLORS.white,
        fontSize: FONT_SIZE.medium,
    },
    separator: {
        marginHorizontal: 6,
    },
    flatlistContainer: {
        paddingStart: 24,
        paddingEnd: 24,
    },
    text1: {
        color: '#000',

    },
});
