export const getUsername = (username) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const userData = getState().firebase.userData;
    const userUid = getState().firebase.auth.uid;
    firestore
      .collection('users')
      .where('username', '==', `${username}`)
      .get()
      .then((user) => {
        dispatch({
          type: 'GET_USERDATA',
          user
        })
      })
      .catch(err => {
        dispatch({
          type: 'GET_USERFETCH_ERROR',
          err
        })
      })
    dispatch({})
  }
}