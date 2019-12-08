import app from '../../base'

const loginAction = (email, password) => async dispatch => {
    app
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => dispatch({ 
            type: 'login', 
            payload: 'true' 
        }))
        .catch(e => alert(e))
}

export default loginAction