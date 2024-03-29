const initState = {
    authError: null,
    loggedIn: false
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SIGNUP_SUCCESS':
            console.log('signup success')
            return {
                ...state,
                loggedIn: true
            };
        case 'SIGNUP_ERROR':
            console.log('signup error')
            return {
                ...state,
                authError: action.err.message
            }
        case 'LOGIN_ERROR':
            console.log('login error')
            return {
                ...state,
                authError: 'Login failed!'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success')
            return {
                ...state,
                loggedIn: true
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout success')
            return state
        default:
            return state;
    }
}

export default authReducer