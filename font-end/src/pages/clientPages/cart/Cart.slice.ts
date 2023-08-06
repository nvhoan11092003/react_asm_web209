import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IProduct {
  _id?: string;
  name: string;
  imgUrl: string[];
  originPrice: number;
  processingInstructions: string;
  storageInstructions: string;
  price: number;
  description: string;
  categoryId: {
    _id: string;
    name: string;
  };
  quantity: number;
}
const initialState = {
  items: [],
} as { items: any[] };
// export const createCart = createAsyncThunk(
//   "cart/create",
//   async (film: IProduct, thunkAPI) => {
//     try {
//       const data = await postFilm(film);
//       return data;
//     } catch (err: any) {
//       return thunkAPI.rejectWithValue(err.response.data);
//     }
//   }
// );
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    save: (state, action: PayloadAction<IProduct>) => {
      const cart = action.payload;
    },
    add: (state, action: PayloadAction<IProduct>) => {
      const newProduct = action.payload;

      const existProductIndex = state.items.findIndex(
        (item: any) => item._id == newProduct._id
      );
      if (existProductIndex === -1) {
        state.items.push(newProduct);
      } else {
        state.items[existProductIndex].quantity++;
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    remove: (state, action: PayloadAction<string>) => {
      const currentProduct = state.items.find(
        (item: any) => item._id === action.payload
      );
      const confirm = window.confirm("Are you sure?");
      if (confirm)
        state.items = state.items.filter(
          (item: any) => item._id !== action.payload
        );
      currentProduct.quantity = 0;
    },
    increase: (state, action: PayloadAction<number>) => {
      state.items.find((item: any) => item._id === action.payload).quantity++;
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    decrease: (state, action: PayloadAction<number>) => {
      const currentProduct = state.items.find(
        (item: any) => item._id === action.payload
      );
      currentProduct.quantity--;

      if (currentProduct.quantity < 1) {
        const confirm = window.confirm("Are you sure?");
        if (confirm)
          state.items = state.items.filter(
            (item: any) => item._id !== action.payload
          );
        currentProduct.quantity = 1;
      }
    },
  },
});

export const { add, increase, decrease, remove } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
