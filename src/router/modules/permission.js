// 员工的路由文件
import Layout from '@/layout'
export default {

  path: '/permission',
  name: 'permission', // 模块的一级路由，权限用
  component: Layout,
  children: [{
    path: '', //
    component: () => import('@/views/permission'),
    meta: {
      title: '权限'// 左侧导航树，显示信息
    }
  }]
}
