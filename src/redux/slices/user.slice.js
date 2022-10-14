import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {UserService} from "../../services";


const initialState = {
    users:[],
    currentUser:null,
    loading: false,
    error:null,
    usersPosts:[]
}

const getAll = createAsyncThunk(
    'userSlice/getAll',
    async(_,{rejectWithValue})=>{
        try{
            const {data} = await UserService.getAll();
            return data;
        }catch (e){
            return rejectWithValue(e.response.data);
        }
    })

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers:{
        // getAll:(state,action)=>{
        //     state.users = action.payload;
        // },
        setCurrentUser:(state,action)=>{
            state.currentUser = action.payload;
        },
        deleteById:(state,action)=>{
            const index = state.users.findIndex(user=> user.id === action.payload)
            state.users.splice(index,1)
        },
        setUsersPosts:(state,action)=>{
            state.usersPosts = action.payload
        }
    },
    // extraReducers:{
    //     [getAll.fulfilled]:(state,action)=>{
    //         state.users = action.payload;
    //     }
    // }
    extraReducers:builder =>
        builder
            .addCase(getAll.fulfilled,(state,action)=>{
                state.users = action.payload
                state.loading = false
            })
            .addCase(getAll.rejected,(state,action)=>{
                state.error = action.payload
                state.loading = false
            })
            .addCase(getAll.pending,(state,action)=>{
                state.loading = true
            })
})

const {reducer: userReducer, actions:{setCurrentUser,deleteById,setUsersPosts}} = userSlice;

const userActions={
    getAll,
    setCurrentUser,
    deleteById,
    setUsersPosts
}

export {
    userReducer,
    userActions,
}