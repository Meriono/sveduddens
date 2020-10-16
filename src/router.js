import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: () => import('@/components/Start'),
        },
        {
            name: "news",
            path: '/news',
            component: () => import('@/components/News')
        },
        {
            name: "sveduddensKennel",
            path: '/sveduddensKennel',
            component: () => import('@/components/SveduddensKennel')
        },
        {
            name: "hundarna",
            path: '/hundarna',
            component: () => import('@/components/Hundarna')
        },
        {
            name: "valpar",
            path: '/valpar',
            component: () => import('@/components/Valpar')
        },
        {
            name: "champions",
            path: '/champions',
            component: () => import('@/components/Champions')
        },
        {
            name: "galleri",
            path: '/galleri',
            component: () => import('@/components/Galleri')
        },
        {
            name: "kontakt",
            path: '/kontakt',
            component: () => import('@/components/Kontakt')
        },
        {
            name: "lankar",
            path: '/lankar',
            component: () => import('@/components/Lankar')
        },
    ]
})

export default router;