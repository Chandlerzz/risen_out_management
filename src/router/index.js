import Vue from 'vue'
import Router from 'vue-router'

/**
 * vue-router报错Uncaught (in promise)及解决方法
 * 对Router原型链上的push方法进行重写，这样就不用每次调用方法都要加上catch
 */
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export const constantRoutes = [
  {
    path:"/",
    name:"home",
    component: (resolve) => require(['@/views/home'], resolve),
  },
  {
    path:"/login",
    name:"login",
    component: (resolve) => require(['@/views/login'], resolve),
  },
  {
    path:"/order/create",
    name:"orderCreate",
    component: (resolve) => require(['@/views/order/create'], resolve),
  },
  {
    path:"/order/photoupload",
    name:"photoupload",
    component: (resolve) => require(['@/views/order/photoupload'], resolve),
  }
]

export default new Router({
  mode: 'hash', // 去掉url中的#
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
