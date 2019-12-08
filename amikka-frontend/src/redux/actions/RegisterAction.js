import app from '../../base'

const databaseRef = app.database().ref();

const userDetailsRef = databaseRef.child('user-details');

const registerAction = (name, email, password) => async dispatch => {
    app
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
            userDetailsRef.push().set({
                userId: user.user.uid,
                userName: name
            })
            dispatch({
                type: 'register',
                payload: true
            })
        })
        .catch(e => alert(e))
}

export default registerAction