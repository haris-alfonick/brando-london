import { createSlice, nanoid } from '@reduxjs/toolkit'

interface User {
  id: string
  name: string
}

const initialState: { users: User[] } = {
  users: []
}

const Slice = createSlice({
  name: 'users',
  initialState,
  reducers:{
    addUser:(state, action) => {
      const data = {
        id: nanoid(),
        name: action.payload
      }
      state.users.push(data)
    }
  }
})

export const {addUser} = Slice.actions
export default Slice.reducer