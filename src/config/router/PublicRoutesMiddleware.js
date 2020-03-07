import store from '../../store'

//this should be imported and added to each relevant route using spread operator
//redirects user if autheniticated
//Prevents user from entering a route if authenticated 
const PublicRoutesMiddleware = {
    beforeEnter: (to, from, next) => {
        let isAuth = store.getters['auth/isAuthenticated']
        if (!isAuth) {
            next()
        } else {
            next('/');
        }
    }
}

export default PublicRoutesMiddleware