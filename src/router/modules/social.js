// 员工的路由文件
import Layout from '@/layout'
export default {

  path: '/social',
  name: 'social', // 模块的一级路由，权限用
  component: Layout,
  children: [{
    path: '', //
    component: () => import('@/views/social'),
    meta: {
      title: '社保'// 左侧导航树，显示信息
    }
  }]
}
