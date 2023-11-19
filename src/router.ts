import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },

        // ======= SMALL THEME =======
        {
            path: '/small',
            name: 'small',
            component: () => import('./views/SmallTheme.vue')
            // meta: {
            //     title: 'Learn | About Page'
            // }
        },
        {
            path: '/small/small-1',
            name: 'small.small.1',
            component: () => import('./small/small_1/views/Small1.vue')
        },


        // ======= MEDIUM THEME =======
        {
            path: '/medium',
            name: 'medium',
            component: () => import('./views/MediumTheme.vue'),
        },
        {
            path: '/medium/medium-1',
            name: 'medium.medium.1',
            component: () => import('./medium/medium_1/views/Medium1.vue'),
            children: [
                {
                    path: '',
                    name: 'medium.medium.1.home',
                    component: () => import('./medium/medium_1/views/Medium1Home.vue')
                }
            ]
        },


        // ======= LARGE THEME =======
        {
            path: '/large',
            name: 'large',
            component: () => import('./views/LargeTheme.vue'),
        },
    ]
})
router.beforeEach((to, from) => {
    console.log('TO >>> ', to)
    console.log('FROM >>> ', from)
    // document.title = to.meta?.title ?? 'Default Title'
})

export default router
