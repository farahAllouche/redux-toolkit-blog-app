import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id : 0,  title : "Lorem ipsum dolor sit amet. " , content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan nunc nec ipsum ultricies gravida. Morbi efficitur suscipit fermentum. Phasellus ut erat turpis."},
     { id : 1 , title :"Lorem ipsum dolor sit. " , content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
    ]

export const postsSlice = createSlice({
    name:"posts", 
    initialState,
    reducers : {
        addPost (state, action) { 
            state.push(action.payload) 
        }

    }
});

export const selectAllPosts = (state) => state.posts;

export const {addPosts} = postsSlice.actions;

export default postsSlice.reducer;