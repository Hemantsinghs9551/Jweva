import { useGetCart } from '../hooks/api/useShoppingCart';

function useCartFilled() {
  let isFilled = false;
  let numOfItems = 0;
  let data = useGetCart().data;
  if (data && data.shoppingCart && !!data?.shoppingCart?.items[0]?.variantId) {
    numOfItems = data.shoppingCart.items.length;
    isFilled = numOfItems > 0;
  }
  return { isFilled, numOfItems };
}

export { useCartFilled };
