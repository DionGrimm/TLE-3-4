import InfoPage from './components/onboard/InfoPage'
import Login from './components/onboard/Login'
import DataCheck from './components/onboard/DataCheck'
import RouteCheck from './components/onboard/RouteCheck'
import Ai from './components/Ai'
import Routes from './components/onboard/Routes'
import AddRoute from './components/onboard/AddRoute'
import InfoAI from './components/onboard/InfoAI'
import Slider from './components/onboard/Slider'
import CompletedProfile from './components/onboard/CompletedProfile'
import Homepage from './components/Homepage'
import NotFound from './components/NotFound'
import PrivacyVerklaring from './components/onboard/PrivacyVerklaring'
import RouteMap from './components/RouteMap'
import Unlock from './components/Unlock'
import PlannedRoute from './components/PlannedRoute'


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
    {
        name: 'privacyverklaring',
        path: '/privacyverklaring',
        component: PrivacyVerklaring
    },
    {
        name: 'Maps',
        path: '/maps',
        component: RouteMap
    },
    {
        name: 'Unlock',
        path: '/unlock',
        component: Unlock
    },
    {
        name: 'PlannedRoute',
        path: '/plannedroute',
        component: PlannedRoute
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