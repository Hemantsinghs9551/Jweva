import React from 'react';
import { FlatList, FlatListProps, View } from 'react-native';
import { Product } from '../types/types';
import ProductItem from './ProductItem';
import PropTypes from 'deprecated-react-native-prop-types';
type BaseProps = FlatListProps<Product>;

type Props = {
  numColumns: number;
  data: Array<Product>;
  onItemPress: (item: Product) => void;
} & Omit<PropTypes.FlatListProps<Product>, 'data' | 'renderItem' | 'numColumns'>;

const ProductList: React.FC<Props> = (props) => {
  let { numColumns, data, onItemPress, ...otherProps } = props;
  let itemRemainder: number = data.length % numColumns;

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      key={numColumns.toString()} // Convert to string
      renderItem={({ item, index }) => {
        let productItem = (
          <ProductItem product={item} onPress={() => onItemPress(item)} />
        );
        if (index >= data.length - itemRemainder) {
          return <View style={{ flex: 1 / numColumns }}>{productItem}</View>;
        }
        return productItem;
      }}
      showsVerticalScrollIndicator={false}
      {...otherProps}
    />
  );
};

export default ProductList;
