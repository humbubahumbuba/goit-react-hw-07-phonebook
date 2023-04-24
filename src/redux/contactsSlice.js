import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operation';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // -------------------------------- function method ----------------------------
  //
  extraReducers: builder => {
    builder
      // fetch contacts
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.error = null;
      })
      // add contact
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.rejected, handleRejected)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
        state.error = null;
      })
      // delete contact
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      });
  },
});

// -------------------------------- object method ----------------------------
//
// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: {
//     // fetch contacts
//     [fetchContacts.pending]: handlePending,
//     [fetchContacts.rejected]: handleRejected,
//     [fetchContacts.fulfilled](state, action) {
//       state.isLoading = false;
//       state.items = action.payload;
//       state.error = null;
//     },

//     // add contact
//     [addContact.pending]: handlePending,
//     [addContact.rejected]: handleRejected,
//     [addContact.fulfilled](state, action) {
//       state.isLoading = false;
//       state.items.push(action.payload);
//       state.error = null;
//     },
//     // delete contact
//     [deleteContact.pending]: handlePending,
//     [deleteContact.rejected]: handleRejected,
//     [deleteContact.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.items.findIndex(
//         contact => contact.id === action.payload.id
//       );
//       state.items.splice(index, 1);
//     },
//   },
// });

export const contactsReducer = contactsSlice.reducer;
