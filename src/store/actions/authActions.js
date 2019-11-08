import {getFirebase} from "react-redux-firebase";

export const signIn = (credentials) => {
    return (dispatch, getState) => {

        const firebase = getFirebase()

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        )
            .then(() => {
                dispatch({ type: 'LOGIN_SUCCESS' })
            })
            .catch((error) => {
                dispatch({ type: 'LOGIN_FAILED', error })
            })
    }
}

export const signOut = () => {
    return(dispatch, getState) => {
        const firebase = getFirebase()

        firebase.auth().signOut()
            .then(() => {
                dispatch({ type:  'SIGNOUT_SUCCESS'})
            })
            .catch((error) => {
                dispatch({ type: 'SIGNOUT_FAILED', error })
            })
    }
}
