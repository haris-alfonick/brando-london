import { createSlice, nanoid, current } from '@reduxjs/toolkit'

interface User {
  id: string
  name: string
}

// const initialState: { users: User[] } = {
//   users: typeof window !== "undefined" ? JSON.parse(localStorage.getItem("users") || "[]") : [], // Check for window (browser)
// };

const initialState: { users: User[] } = {
  users: []
};

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
      // let userData = JSON.stringify(current(state.users))
      // localStorage.setItem("users", userData)
    },
    removeUser:(state, action) => {
      const data = state.users.filter((item) => {
        return item.id!==action.payload
      })
      state.users = data;
      //let userData = JSON.stringify(data)
      //localStorage.setItem("users", userData)
    }
  }
})

export const {addUser, removeUser} = Slice.actions
export default Slice.reducer