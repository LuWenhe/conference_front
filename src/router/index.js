import Vue from 'vue'
import Router from 'vue-router'
import Index from "../views/Index"
import Home from "../views/indexSon/Home"
import Committee from "../views/indexSon/Committee"
import Speakers from "../views/indexSon/Speakers"
import Papers from "../views/indexSon/Papers"
import Attendees from "../views/indexSon/Attendees"
import Program from "../views/indexSon/Program";
import Register from "../views/indexSon/Register"
import Venue from "../views/indexSon/Venue"
import Contact from "../views/indexSon/Contact"
import Chinese from "../views/indexSon/Chinese";
import InvitedSpeakers from "../views/indexSon/papersSon/InvitedSpeakers"
import KeynoteSpeakers from "../views/indexSon/papersSon/KeynoteSpeakers"
import CallForPapers from "../views/indexSon/papersSon/CallForPapers"
import ImportantDates from "../views/indexSon/papersSon/ImportantDates"
import PaperSubmission from "../views/indexSon/papersSon/PaperSubmission"
import Accomodation from "../views/indexSon/papersSon/Accomodation"
import LatestNews from "../views/indexSon/papersSon/LatestNews"
import CallForSpecialSessions from "../views/indexSon/papersSon/CallForSpecialSessions";

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
              path: 'cfss',
              component: CallForSpecialSessions
            },
            {
              path: 'ps',
              component: PaperSubmission
            },
            {
              path: 'id',
              component: ImportantDates
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
              component: Accomodation
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
