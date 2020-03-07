import router from '../../router'
import store from '../../store'

//global router middleware
router.beforeEach((to, from, next) => {
    let isAuth = store.getters['auth/isAuthenticated']
    if (!isAuth) {
        store.dispatch('auth/tryAutoLogin')
    }
    next();
});