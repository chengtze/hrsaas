// 员工的路由文件
import Layout from '@/layout'
export default {

  path: '/departments',
  name: 'departments', // 模块的一级路由，权限用
  component: Layout,
  children: [{
    path: '', //
    component: () => import('@/views/departments'),
    meta: {
      title: '组织架构'// 左侧导航树，显示信息
    }
  }]
}
