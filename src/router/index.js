import Vue from 'vue'
import Router from 'vue-router'
import Index from "../views/Index"
import Home from "../views/indexSon/Home"
import Committee from "../views/indexSon/Committee"
import Speakers from "../views/indexSon/Speakers"
import Papers from "../views/indexSon/Papers"
import Attendees from "../views/indexSon/Attendees"
import Register from "../views/indexSon/Register"
import Venue from "../views/indexSon/Venue"
import Contact from "../views/indexSon/Contact"
import CallForPapers from "../views/indexSon/papersSon/CallForPapers"
import CallForSpecialSessions from "../views/indexSon/papersSon/CallForSpecialSessions"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      redirect: '/home',
      children: [
        {
          path: 'home',
          component: Home
        },
        {
          path: 'committee',
          component: Committee
        },
        {
          path: 'speakers',
          component: Speakers
        },
        {
          path: 'papers',
          component: Papers,
          children: [
            {
              path: '/',
              redirect: 'cpf'
            },
            {
              path: 'cpf',
              component: CallForPapers
            },
            {
              path: 'cfss',
              component: CallForSpecialSessions
            }
          ]
        },
        {
          path: "attendees",
          component: Attendees
        },
        {
          path: 'register',
          component: Register
        },
        {
          path: 'venue',
          component: Venue
        },
        {
          path: 'contact',
          component: Contact
        }
      ]
    }
  ],
  mode: 'history'
})
