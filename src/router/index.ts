import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },

        // ======= LANDING PAGE THEME =======
        {
            path: '/landing-page',
            name: 'landing.page',
            component: () => import('../views/LandingPageTheme.vue')
            // meta: {
            //     title: 'Learn | About Page'
            // }
        },
        {
            path: '/landing-page/landing-page-1',
            name: 'landing.page.1',
            component: () => import('../landing_page/landing_page_1/views/LandingPage1.vue')
        },


        // ======= MEDIUM THEME =======
        // {
        //     path: '/medium',
        //     name: 'medium',
        //     component: () => import('../views/MediumTheme.vue'),
        // },
        // {
        //     path: '/medium/medium-1',
        //     name: 'medium.medium.1',
        //     component: () => import('../medium/medium_1/views/Medium1.vue'),
        //     children: [
        //         {
        //             path: '',
        //             name: 'medium.medium.1.home',
        //             component: () => import('../medium/medium_1/views/Medium1Home.vue')
        //         },
        //         {
        //             path: 'product',
        //             name: 'medium.medium.1.product',
        //             component: () => import('../medium/medium_1/views/Medium1Product.vue')
        //         },
        //         {
        //             path: 'about',
        //             name: 'medium.medium.1.about',
        //             component: () => import('../medium/medium_1/views/Medium1About.vue')
        //         },
        //         {
        //             path: 'contact',
        //             name: 'medium.medium.1.contact',
        //             component: () => import('../medium/medium_1/views/Medium1Contact.vue')
        //         }
        //     ]
        // },


        // ======= MULTI PAGE THEME =======
        {
            path: '/multi-page',
            name: 'multi.page',
            component: () => import('../views/MultiPageTheme.vue'),
        },
        {
            path: '/multi-page/multi-page-1',
            name: 'multi.page.1',
            component: () => import('../multi_page/multi_page_1/views/Multi1.vue'),
            children: [
                {
                    path: '',
                    name: 'multi.page.1.home',
                    component: () => import('../multi_page/multi_page_1/views/Multi1Home.vue')
                },
                {
                    path: 'about',
                    name: 'multi.page.1.about',
                    component: () => import('../multi_page/multi_page_1/views/Multi1About.vue')
                },
                {
                    path: 'product',
                    name: 'multi.page.1.product',
                    component: () => import('../multi_page/multi_page_1/views/Multi1Product.vue')
                },
                {
                    path: 'gallery',
                    name: 'multi.page.1.gallery',
                    component: () => import('../multi_page/multi_page_1/views/Multi1Gallery.vue')
                },
                {
                    path: 'contact',
                    name: 'multi.page.1.contact',
                    component: () => import('../multi_page/multi_page_1/views/Multi1Contact.vue')
                }
            ]
        },
    ]
})
router.beforeEach((to, from) => {
    console.log('TO >>> ', to)
    console.log('FROM >>> ', from)
    // document.title = to.meta?.title ?? 'Default Title'
})

export default router
