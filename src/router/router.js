import Vue from 'vue'
import Router from 'vue-router'
import Index from "../views/Index"
import Home from "../views/indexSon/mainPage/Home.vue"
import Committee from "../views/indexSon/mainPage/Committee.vue"
import Speakers from "../views/indexSon/mainPage/Speakers.vue"
import Papers from "../views/indexSon/mainPage/Papers.vue"
import Attendees from "../views/indexSon/mainPage/Attendees.vue"
import Program from "../views/indexSon/mainPage/Program.vue"
import Register from "../views/indexSon/mainPage/Register.vue"
import Venue from "../views/indexSon/mainPage/Venue.vue"
import Contact from "../views/indexSon/mainPage/Contact.vue"
import Chinese from "../views/indexSon/mainPage/Chinese.vue"
import InvitedSpeakers from "../views/indexSon/speakersSon/InvitedSpeakers.vue"
import KeynoteSpeakers from "../views/indexSon/speakersSon/KeynoteSpeakers.vue"
import CallForPapers from "../views/indexSon/papersSon/CallForPapers"
import ImportantDates from "../views/indexSon/papersSon/ImportantDates"
import PaperSubmission from "../views/indexSon/papersSon/PaperSubmission"
import Accommodation from "@/views/indexSon/attendeesSon/Accommodation.vue"
import LatestNews from "@/views/indexSon/attendeesSon/LatestNews"
import Publication from "@/views/indexSon/papersSon/Publication"

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/home',
      redirect: '/'       // 当访问/home时重定向到/
    },
    {
      path: '/',
      component: Index,
      redirect: '/home',
      children: [
        {
          path: '/',
          component: Home
        },
        {
          path: 'committee',
          component: Committee
        },
        {
          path: 'speakers',
          component: Speakers,
          children: [
            {
              path: '/',
              redirect: 'ks'
            },
            {
              path: 'ks',
              component: KeynoteSpeakers
            },
            {
              path: 'is',
              component: InvitedSpeakers
            },
          ]
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
              path: 'imd',
              component: ImportantDates
            },
            {
              path: 'ps',
              component: PaperSubmission,
              alias: '/submission'
            },
            {
              path: 'pb',
              component: Publication,
              alias: '/publication'
            }
          ]
        },
        {
          path: "attendees",
          component: Attendees,
          children: [
            {
              path: '/',
              redirect: 'ad'
            },
            {
              path: 'ad',
              component: Accommodation
            },
            {
              path: 'ln',
              component: LatestNews
            },
          ]
        },
        {
          path: "chinese",
          component: Chinese
        },
        {
          path: 'program',
          component: Program
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

export default router
