// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { BASE_URL } from './servises/constants/constants';

// axios.defaults.baseURL = BASE_URL;

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

// export { fetchContacts, addContact, deleteContact };
