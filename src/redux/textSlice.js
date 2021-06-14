import {createSlice} from "@reduxjs/toolkit"

const slice = createSlice({
  name: "text",
  initialState: {
    value: "",
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload
    },
  },
})

export default slice.reducer