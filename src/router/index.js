import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ObjectiveViewsVue from '@/views/ObjectiveViews.vue'
import CharterViewsVue from '@/views/CharterViews.vue'
import StructureViewsVue from '@/views/StructureViews.vue'
import ViceGovernorViewsVue from '@/views/ViceGovernorViews.vue'
import BoardMemberViewsVue from '@/views/BoardMemberViews.vue'
import PanlungsodMembersViewsVue from '@/views/PanlungsodMembersViews.vue'
import CalendarOfActivitiesViewsVue from '@/views/CalendarOfActivitiesViews.vue'
import ElisViewsVue from '@/views/ElisViews.vue'
import OnlineTrackingViewsVue from '@/views/OnlineTrackingViews.vue'
import ResolutionOrdinanceSignInViews from '@/views/ResolutionOrdinanceSignInViews.vue'
import OrdersBusinessViewsVue from '@/views/OrdersBusinessViews.vue'
import MunicipalitiesViewsVue from '@/views/MunicipalitiesViews.vue'
import ContactViewsVue from '@/views/ContactViews.vue'
import SpecifiedMunicipalViewsVue from '@/views/SpecifiedMunicipalViews.vue'
import ResolutionOrdinanceSignUpViews from '@/views/ResolutionOrdinanceSignUpViews.vue'
import NewESubmissionViewsVue from '@/views/NewESubmissionViews.vue';
import SpecifiedOrdinanceView from '@/views/SpecifiedOrdinanceView.vue'
import SpecifiedNewsView from '@/views/SpecifiedNewsView.vue'
import OrdersByCategoryViews from '@/views/OrdersByCategoryViews.vue'
import ResolutionOrdinanceSubmissionViews from '@/views/ResolutionOrdinanceSubmissionViews.vue'
import ResolutionOrdinanceResetPassword from '@/views/ResolutionOrdinanceResetPassword.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: 'view-news/:uuid',
          name: 'view-news',
          component: SpecifiedNewsView,
          props: true
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      children: [
        {
          path: 'objectives',
          component: ObjectiveViewsVue,
        },
        {
          path: 'citizen\'s-charter',
          component: CharterViewsVue,
        },
        {
          path: 'organizational-structure',
          component: StructureViewsVue,
        }
      ],
    },
    {
      path: '/officials',
      name: 'officials',
      children: [
        {
          path: 'vice-governors',
          component: ViceGovernorViewsVue,
        },
        {
          path: 'board-members',
          component: BoardMemberViewsVue,
        },
        {
          path: 'panlungsod-members',
          component: PanlungsodMembersViewsVue,
        }
      ],
    },
    {
      path: '/calendar-of-activities',
      name: 'calendar-of-activities',
      component: CalendarOfActivitiesViewsVue
    },
    {
      path: '/legislative',
      name: 'legislative',
      children: [
        {
          path: 'elis',
          component: ElisViewsVue,
        },
        {
          path: 'online-tracking',
          component: OnlineTrackingViewsVue,
        },
        {
          path: 'resolution',
          children: [
            {
              path: 'ordinance-esubmission',
              component: ResolutionOrdinanceSubmissionViews,
              meta: { requiresAuth: true }
            },
            {
              path: 'new-submission',
              component: NewESubmissionViewsVue,
              meta: { requiresAuth: true }
            },
          ]
          
        }
        
      ],
    },
    {
      path: '/order-of-business',
      children: [
        {
          path: '',
          name: 'order-of-business',
          component: OrdersBusinessViewsVue,
        },
        {
          path: 'view-ordinance/:uuid',
          name: 'view-ordinance',
          component: SpecifiedOrdinanceView,
          props: true
        },
        {
          path: 'category/:uuid',
          name: 'order-of-business-by-category',
          component: OrdersByCategoryViews,
          props: true
        }
      ]
    }, 
    {
      path: '/municipalities',
      children: [
        {
          path: '',
          name: 'municipality',
          component: MunicipalitiesViewsVue,
        },
        {
          path: 'view-municipality/:uuid',
          name: 'view-municipality',
          component: SpecifiedMunicipalViewsVue,
          props: true
        }
      ]
    },     
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactViewsVue
    },
    {
      path: '/login',
      name: 'login',
      component: ResolutionOrdinanceSignInViews
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: ResolutionOrdinanceSignUpViews
    },
    {
      path: '/reset-password/:token',
      name: 'reset-password',
      component: ResolutionOrdinanceResetPassword,
      props: true
    },

  ],
  scrollBehavior(to, from, savedPosition) {
    
    return { 
      el: '#app',
      top: 0 
  }
  },
})

router.beforeEach((to, from, next) => {
  const authToken = localStorage.getItem('authToken');
  const authTime = localStorage.getItem('authTime');
  const currentTime = new Date().getTime();

 
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!authToken || currentTime > authTime) { 
      next('/login');
    } else {
      next();
    }
  } else {
    next(); 
  }
});

router.afterEach((to, from) => {
  const authToken = localStorage.getItem('authToken');
  const authTime = localStorage.getItem('authTime');
  const currentTime = new Date().getTime();

  if (to.path === '/login' && authToken && currentTime <= authTime) {
    router.push(from.path);
  }
});


export default router
