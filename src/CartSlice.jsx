import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Initialize items as an empty array
    },
    reducers: {
        // ✅ Add item to cart
        addItem: (state, action) => {
            const item = action.payload;

            const existingItem = state.items.find(
                (cartItem) => cartItem.name === item.name
            );

            if (existingItem) {
                // If item already exists, increase quantity
                existingItem.quantity += 1;
            } else {
                // Otherwise add new item with quantity 1
                state.items.push({
                    ...item,
                    quantity: 1,
                });
            }
        },

        // ✅ Remove item completely from cart
        removeItem: (state, action) => {
            const name = action.payload;
            state.items = state.items.filter(
                (item) => item.name !== name
            );
        },

        // ✅ Update quantity of an item
        updateQuantity: (state, action) => {
            const { name, quantity } = action.payload;

            const item = state.items.find(
                (cartItem) => cartItem.name === name
            );

            if (item) {
                item.quantity = quantity;
            }
        },
    },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
