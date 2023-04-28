import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

import { BASE_URL } from 'redux/servises/constants/constants';

axios.defaults.baseURL = BASE_URL;

// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// // Utility to remove JWT
// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

// const fetchContacts = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('contacts');
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (contact, thunkAPI) => {
//     try {
//       const res = await axios.post('contacts', { ...contact });

//       return res.data;
//     } catch ({ message }) {
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async ({ id, name }, thunkAPI) => {
//     try {
//       const res = await axios.delete(`contacts/${id}`);

//       return res.data;
//     } catch ({ message }) {
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// export const register = createAsyncThunk(
//   'auth/register',
//   async (credentials, thunkAPI) => {
//     try {
//       const res = await axios.post('/users/signup', credentials);
//       // After successful registration, add the token to the HTTP header
//       setAuthHeader(res.data.token);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export { fetchContacts, addContact, deleteContact };

// import { toast } from 'react-toastify';

// import { updateToast } from 'utils';

const token = {
  set(value) {
    axios.defaults.headers.common.Authorization = `Bearer ${value}`;
  },
  clear() {
    axios.defaults.headers.common.Authorization = null;
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);

      return data;
    } catch {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);

      return data;
    } catch {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/logout');
    token.clear();

    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue();
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const { auth } = thunkAPI.getState();
    const persistedToken = auth.token;

    // check if JWT is persisted
    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }

    // set JWT and fetch a current user
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
