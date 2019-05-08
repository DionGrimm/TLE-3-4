import InfoPage from './components/onboard/InfoPage'
import Login from './components/onboard/Login'
import DataCheck from './components/onboard/DataCheck'
import RouteCheck from './components/onboard/RouteCheck'
import Ai from './components/Ai'
import Routes from './components/onboard/Routes'
import AddRoute from './components/onboard/AddRoute'
import InfoAI from './components/onboard/InfoAI'
import Carousel from './components/onboard/Carousel'
import Slider from './components/onboard/Slider'
import CompletedProfile from './components/onboard/CompletedProfile'
import Homepage from './components/onboard/Homepage'
import NotFound from './components/NotFound'

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
        name: 'infoai',
        path: '/infoai',
        component: InfoAI
    },
    {
        name: 'carousel',
        path: '/carousel',
        component: Carousel
    },
    {
        name: 'cslider',
        path: '/slider',
        component: Slider
    },
    {
        name: 'completedprofile',
        path: '/completedprofile',
        component: CompletedProfile
    },
    {
        name: 'homepage',
        path: '/homepage',
        component: Homepage
    },

    //App routes before this section//
    {   
        path: '/404',
        component: NotFound 
    },  
    { 
        path: '*',
        redirect: '/404' 
    },  
];