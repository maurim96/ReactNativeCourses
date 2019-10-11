import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
    switch (action.type) {
        // case "add_blogpost":
        //     return [
        //         ...state,
        //         { id: Math.floor(Math.random() * 99999), title: action.payload.title, content: action.payload.content }
        //     ];
        case "delete_blogpost":
            return state.filter(blogPost => blogPost.id !== action.payload);
        case "edit_blogpost":
            return state.map(blogPost => {
                return blogPost.id === action.payload.id ? action.payload : blogPost;
            });
        case "get_blogposts":
            return action.payload;
        default:
            return state;
    }
};

const addBlogPost = dispatch => {
    return async (title, content, callback) => {
        // dispatch({ type: "add_blogpost", payload: { title, content } });
        try {
            await jsonServer.post("/blogposts", { title, content });
        } catch (error) {
            // delete the "added" blogpost on client side
        }
        if (callback) {
            callback();
        }
    };
};

const deleteBlogPost = dispatch => {
    return async id => {
        dispatch({ type: "delete_blogpost", payload: id });
        try {
            await jsonServer.delete(`/blogposts/${id}`);
        } catch (error) {
            // add again the "deleted" blogpost on client side
        }
    };
};

const editBlogPost = disptach => {
    return async (id, title, content, callback) => {
        disptach({ type: "edit_blogpost", payload: { id, title, content } });

        try {
            await jsonServer.put(`blogposts/${id}`, { title, content });
        } catch (error) {
            // rollback the "updated" blogpost on client side
        }
        if (callback) {
            callback();
        }
    };
};

const getBlogPosts = dispatch => {
    return async () => {
        const response = await jsonServer.get("/blogposts");
        dispatch({ type: "get_blogposts", payload: response.data });
    };
};

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
    []
);
