import Login from '../components/login/Login'
import SignUp from '../components/signup/SignUp'
import Dashboard from '../components/dashboard/Dashboard'
import UserProfile from '../components/profile/UserProfile'
import CourseCatalog from '../components/course-catalog/CourseCatalog'

var PortalRoutes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        icon: 'dashboard',
        component: Dashboard,
        layout: '/user'
    },
    {
        path: '/user-profile',
        name: 'Profile',
        icon: 'user',
        component: UserProfile,
        layout: '/user'
    },
    {
        path: '/course-catalog',
        name: 'Course Catalog',
        icon: 'book',
        component: CourseCatalog,
        layout: '/user'
    },
    {
        path: '/signOut',
        name: 'Sign Out',
        icon: 'sign-out',
        component: Login,
        layout: '/auth'
    },
    {
        path: '/login',
        name: 'Login',
        icon: 'sign-in',
        component: Login,
        layout: '/auth'
    },
    {
        path: '/register',
        name: 'Sign Up',
        icon: 'sign-up',
        component: SignUp,
        layout: '/auth'
    },
]

export default PortalRoutes;