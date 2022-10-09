// 员工的路由文件
import Layout from '@/layout'
export default {

  path: '/employees',
  name: 'employees', // 模块的一级路由，权限用
  component: Layout,
  children: [{
    path: '', //
    component: () => import('@/views/employees'),
    meta: {
      title: '员工'// 左侧导航树，显示信息
    }
  }]
}
