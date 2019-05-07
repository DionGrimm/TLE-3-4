import InfoPage from './components/onboard/InfoPage'
import Login from './components/onboard/Login'
import DataCheck from './components/onboard/DataCheck'
import RouteCheck from './components/onboard/RouteCheck'
import Ai from './components/Ai'
import Routes from './components/onboard/Routes'
import AddRoute from './components/onboard/AddRoute'
import Carousel from './components/onboard/Carousel'

export const routes = [
    {
        name: 'info',
        path: '/',
        component: InfoPage
    },
    { 
        name: 'ai',
        path: '/ai',
        component: Ai
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'datacheck',
        path: '/datacheck',
        component: DataCheck
    },
    {
        name: 'routecheck',
        path: '/routecheck',
        component: RouteCheck
    },
    {
        name: 'routes',
        path: '/routes',
        component: Routes
    },
    {
        name: 'addroutes',
        path: '/routes/add',
        component: AddRoute
    },
    {
        name: 'carousel',
        path: '/carousel',
        component: Carousel
    }
];