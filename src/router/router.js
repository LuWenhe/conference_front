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
// import ImportantDates from "../views/indexSon/papersSon/ImportantDates"
import PaperSubmission from "../views/indexSon/papersSon/PaperSubmission"
import Accomodation from "@/views/indexSon/attendeesSon/Accomodation";
import LatestNews from "@/views/indexSon/attendeesSon/LatestNews";
import CallForSpecialSessions from "../views/indexSon/papersSon/CallForSpecialSessions";
import AdEdit from "../components/manage/AdEdit";
import AdMain from "../components/manage/AdMain";
import AdminHome from "../components/manage/AdminHome";
import Edit from "../components/manage/Edit";
import EditLunBo from "../components/manage/EditLunBo";
import Login from "../components/manage/Login";
import Main from "../components/manage/Main";
import Welcome from "../components/manage/Welcome";
import News from "@/components/manage/News";
import EditInfo from "@/components/manage/EditInfo";
import Publication from "@/views/indexSon/papersSon/Publication"

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/login', component: Login },
    {
      path: '/administrator',
      component: AdminHome, //跳转到组件
      children: [
        { path: 'welcome', component: Welcome },
        { path: 'main', component: Main },
        { path: 'edit', component: Edit },
        { path: 'news', component: News },
        { path: 'editlunbo', component: EditLunBo },
        { path: 'admain', component: AdMain },
        { path: 'adedit', component: AdEdit },
        { path: 'editInfo', component: EditInfo}
      ]
    },
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
              path: 'pb',
              component: Publication
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

export default router

