import Homepage from './components/Homepage'
import InfoPage from './components/InfoPage'
import Ai from './components/Ai'

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

    
];