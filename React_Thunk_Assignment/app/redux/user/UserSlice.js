import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Api from '../../config/ApiConfig';

const initialState = {
  userData: {},
  isAddUser: false,
  loginData: {},
  isCheckUser: false,
  cartData: {},
  isFetchCart: false,
  errorMessage: '',
  isUpdateUser: false,
  isLogin: false,
};

const authentication = {
  'X-Authorization': 'sk_52399a1d16daa510ea87f0838081cc3e0e836456d8042',
  Accept: 'application/json',
  'Content-Type': 'application/json',
};
// const {cartId} = useSelector(state => state.cart);

const fetchCart = createAsyncThunk('newCart', async (cartId, api) => {
  try {
    const response = await Api.get(`carts`);
    return response;
  } catch (e) {
    return api.rejectWithValue(e);
  }
});

const addUser = createAsyncThunk('addNewUser', async (user, api) => {
  try {
    const cartResponse = await Api.get(`carts`);
    const newCart = cartResponse.data;

    const response = await Api.post(`customers`, {
      firstname: user.username,
      email: user.email,
      meta: {
        cart: newCart,
        password: user.password,
      },
    });
    return response.data;
  } catch (e) {
    return api.rejectWithValue(e);
  }
});

const checkUser = createAsyncThunk('checkLoginUser', async (_, api) => {
  try {
    const response = await Api.get(`customers?query=${email}`);
    return response.data;
  } catch (e) {
    return api.rejectWithValue(e);
  }
});

const updateUser = createAsyncThunk('updateUser', async (_, api) => {
  try {
    const response = await Api.post(`customers/${id}`).then(
      response => response.data,
    );
    return response;
  } catch (e) {
    return api.rejectWithValue(e);
  }
});

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addUser.pending, state => {
        state.isAddUser = true;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.cartData = action.payload.meta.cart;
        state.isAddUser = false;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.isAddUser = false;
        state.errorMessage = action.payload;
      })
      .addCase(checkUser.pending, state => {
        state.isCheckUser = true;
      });
    builder.addCase(checkUser.fulfilled, (state, action) => {
      state.isCheckUser = false;
      state.loginData = action.payload;
    });
    builder.addCase(checkUser.rejected, (state, action) => {
      state.isCheckUser = false;
      state.errorMessage = action.payload;
    });
    builder.addCase(fetchCart.pending, state => {
      state.isFetchCart = true;
    });
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.cartData = action.payload;
      state.isFetchCart = false;
    });
    builder.addCase(fetchCart.rejected, (state, action) => {
      state.errorMessage = action.payload;
      state.isFetchCart = false;
    });
  },
});

export const UserReducer = UserSlice.reducer;
export const UserAction = {addUser, updateUser, checkUser, fetchCart};
