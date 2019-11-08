import {getFirebase} from "react-redux-firebase";
import {getFirestore} from "redux-firestore";

export const signIn = (credentials) => {
    return (dispatch, getState) => {

        const firebase = getFirebase()

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        )
            .then(() => {
                dispatch({type: 'LOGIN_SUCCESS'})
            })
            .catch((error) => {
                dispatch({type: 'LOGIN_FAILED', error})
            })
    }
}

export const signOut = () => {
    return (dispatch, getState) => {
        const firebase = getFirebase()

        firebase.auth().signOut()
            .then(() => {
                dispatch({type: 'SIGNOUT_SUCCESS'})
            })
            .catch((error) => {
                dispatch({type: 'SIGNOUT_FAILED', error})
            })
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState) => {
        const firebase = getFirebase()
        const firestore = getFirestore()

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((response) => {
            return firestore.collection('users').doc(response.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(() => {
            dispatch({type: 'SIGNUP_SUCCESS'})
        }).catch((error) => {
            dispatch({ type: 'SIGNUP_ERROR', error })
        })
    }
}
