//Import component for the router to work
import Homepage from './components/Homepage'
import InfoPage from './components/onboard/InfoPage'
import Ai from './components/Ai'
import Routes from './components/onboard/Routes'
import AddRoute from './components/onboard/AddRoute'

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Homepage
    },
    { 
        name: 'ai',
        path: '/ai',
        component: Ai
    },
    {
        name: 'info',
        path: '/info',
        component: InfoPage
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
];