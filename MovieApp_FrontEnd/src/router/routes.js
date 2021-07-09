
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      authAdmin: true
    },
    children: [
      { path: '', name: 'DashboardAdmin', component: () => import('src/pages/Admin/Index.vue') },
      { path: 'inputbarang', name: 'inputBarang', component: () => import('src/pages/Admin/InputBarang.vue') },
      { path: 'datauser', name: 'dataUser', component: () => import('src/pages/Admin/DataUser.vue') },
      { path: 'datadvd', name: 'dataDVD', component: () => import('src/pages/Admin/DataDVD.vue') },
      { path: 'formedit/:id', name: 'formEditDVD', component: () => import('src/pages/Admin/FormEdit.vue') }
    ]
  },
  {
    path: '/user',
    component: () => import('layouts/Userlayout.vue'),
    meta: {
      authUser: true
    },
    children: [
      { path: '', name: 'homeUser', component: () => import('pages/User/Index.vue') },
      { path: '/myorder', name: 'myOrder', component: () => import('pages/User/MyOrder.vue') }
    ]
  },
  {
    path: '/login',
    name: 'loginPage',
    component: () => import('pages/guest/Login.vue')
  },
  {
    path: '/register',
    name: 'registerPage',
    component: () => import('pages/guest/Register.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
