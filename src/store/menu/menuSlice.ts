import { createSlice } from '@reduxjs/toolkit';

interface ModalState {
  viewEditTagsModal: boolean,
  viewAddTagsModal: boolean,
  viewCreateNoteModal: boolean,
  viewFilterModal: boolean,
}


const initialState : ModalState = {
  viewEditTagsModal: false,
  viewAddTagsModal: false,
  viewCreateNoteModal: false,
  viewFilterModal: false,

}

const modalSice = createSlice({
  name: 'modal',
  initialState,
  reducers: {}
})

export default modalSice.reducer