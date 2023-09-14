import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// Define a type for the slice state
interface PostsState {
  posts: Post[];
  loading: boolean;
}

// Define the initial state using that type
const initialState: PostsState = {
  posts: [],
  loading: false,
};

// First, create the thunk
export const fetchPosts = createAsyncThunk(
  "posts/fetchByIdStatus",
  async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const posts = response.data.slice(0, 5);
    return posts;
  }
);

// Then, handle actions in your reducers:
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },

  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(
      fetchPosts.fulfilled,
      (state, action: PayloadAction<Post[]>) => {
        // Add user to the state array
        state.loading = false;
        state.posts = action.payload;
      }
    );

    builder.addCase(fetchPosts.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    });
  },
});

export const {} = postsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const posts = (state: RootState) => state.posts;

export default postsSlice.reducer;
