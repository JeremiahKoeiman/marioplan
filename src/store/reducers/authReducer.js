const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_FAILED':
            console.log('Login failed')
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('Login success')
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('sign out success')
            return state;
        case 'SIGNOUT_FAILED':
            console.log('sign out failed')
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('sign up success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('sign up error');
            return {
                ...state,
                authError: action.error.message()
            }
        default:
            return state
    }
}

export default authReducer;
