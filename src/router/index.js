import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Discover = () => import('views/discover/Discover.vue')
const Podcast = () => import('views/podcast/PodCast.vue')
const Video = () => import('views/video/Video.vue')
const Friend = () => import('views/friend/Friend.vue')
const Live = () => import('views/live/Live.vue')
const FM = () => import('views/fm/FM.vue')

const Music = () => import('views/music/Music.vue')
const DownLoad = () => import('views/download/DownLoad.vue')
const Lately = () => import('views/lately/Lately.vue')

const CloudSearch = () => import('views/cloudsearch/CloudSearch.vue')
const Profile = () => import('views/profile/Profile.vue')

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    redirect: '/discover'
  },
  {
    path: '/discover',
    component: Discover
  },
  {
    path: '/podcast',
    component: Podcast
  },
  {
    path: '/video',
    component: Video
  },
  {
    path: '/friend',
    component: Friend
  },
  {
    path: '/live',
    component: Live
  },
  {
    path: '/fm',
    component: FM
  },
  {
    path: '/music',
    component: Music
  },
  {
    path: '/download',
    component: DownLoad
  },
  {
    path: '/lately',
    component: Lately
  },
  {
    path: '/cloudsearch',
    component: CloudSearch
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
