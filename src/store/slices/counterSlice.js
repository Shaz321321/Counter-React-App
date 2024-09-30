import {createSlice} from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
        // email: "abc@g.com",
        students: []
    },
    reducers:{
        increment: (state) => {
            state.count = state.count + 1
            // state.email = Math.random()
        },
        decrement: (state) => {
            state.count = state.count - 1
        },
    }
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer


// const fetchUserById = createAsyncThunk(
//     'users/fetchById',
//     // Declare the type your function argument here:
//     async (userId) => {
//       const response = await fetch(`https://reqres.in/api/users/${userId}`)
//       // Inferred return type: Promise<MyData>
//       return (await response.json())
//     },
//   )
