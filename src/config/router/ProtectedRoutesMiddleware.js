import store from '../../store'

//this should be imported and added to each relevant route using spread operator
//does nothing if user is authenticated & trys entering a protected route
//redirects to /login when user attempts to enter a protected route unauthenticated
const ProtectedRoutesMiddleware = {
    beforeEnter: (to, from, next) => {
        let isAuth = store.getters['auth/isAuthenticated']
        if (isAuth) {
            next()
        } else {
            next('/login');
        }
    }
}

export default ProtectedRoutesMiddleware