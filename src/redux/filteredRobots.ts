// import { CHANGE_SEARCHFIELD } from "./constant";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';

const URL_USERS = 'https://jsonplaceholder.typicode.com/users';


type robotsData = {
    id:number,
    name:string,
    email:string,

}

type RobotState = {
    robots:robotsData[]
    searchfield: string,
    loading: boolean
}


export async function fetchUsers(): Promise</*unresolved*/ any> {
    try {
        const response = await axios.get(URL_USERS);
        console.log(response.data);
        const users = response.data
        return {users}
    } catch (error) {
        console.error(error);
    }
}


export const getUsersAsync = createAsyncThunk('users/getUsersAsync', fetchUsers);


const initialState: RobotState = {        
    robots:[],
    searchfield: '',
    loading: true,
}


export const filteredRobotsSlice = createSlice({
    name: 'filteredRobots',
    initialState,
    reducers: {
        filterRobot: (state, action: PayloadAction<string>) => {
            state.searchfield = action.payload;
        }
    },
    extraReducers: (builder) => {
    builder.addCase(getUsersAsync.fulfilled, (state, action: PayloadAction<any>) => {   
        state.robots = action.payload.users
        state.loading = false
    })
  },

})

export const { filterRobot } = filteredRobotsSlice.actions

export default filteredRobotsSlice.reducer