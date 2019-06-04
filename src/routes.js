import InfoPage from './components/onboard/InfoPage'
import Login from './components/onboard/Login'
import DataCheck from './components/onboard/DataCheck'
import RouteCheck from './components/onboard/RouteCheck'
import Ai from './components/Ai'
import AddRoute from './components/onboard/AddRoute'
import InfoAI from './components/onboard/InfoAI'
import Slider from './components/onboard/Slider'
import MainSlider from './components/Slider'
import CompletedProfile from './components/onboard/CompletedProfile'
import Homepage from './components/Homepage'
import NotFound from './components/NotFound'
import PrivacyVerklaring from './components/onboard/PrivacyVerklaring'
import RouteMap from './components/RouteMap'
import Unlock from './components/Unlock'
import PlannedRoute from './components/PlannedRoute'
import PersonalRoute from './components/PersonalRoutes'


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
        name: 'slider',
        path: '/slider/:index',
        component: Slider
    },
    {
        name: 'mainslider',
        path: '/mainslider',
        component: MainSlider,
        props: true,
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
        component: PlannedRoute,
        props: true
    },
    {
        name: 'PersonalRoute',
        path: '/personalroutes',
        component: PersonalRoute
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