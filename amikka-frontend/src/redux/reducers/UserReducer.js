const initUserDashboardState = {
  name: "",
  registeredCourses: 0,
  coursesStarted: 0,
  completedCourses: 0,
  totalCompletion: 0,
}

const userReducer = (state = initUserDashboardState, action) => {
  switch (action.type) {
    case 'GET_USERDATA':
      console.log('User: ', action.payload.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
      }))
      return {
        ...state,
        user: action.payload
      }
    case 'GET_USERFETCH_ERROR':
      console.log('create project error', action.err)
      return state
    default:
      return state;
  }
}

export default userReducer