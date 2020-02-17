import createDataContext from './createDataContext';

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const singup = (dispatch) => {
    return ({ email, password }) => {

    };
};

const signin = (dispatch) => {
    return ({ email, password }) => {

    };
};

const signout = (dispatch) => {
    return () => {

    };
};

export const { Provider, Context } = createDataContext(
    authReducer, { singup, signin, signout }, { isSignedIn: false }
);