// 员工的路由文件
import Layout from '@/layout'
export default {

  path: '/approvals',
  name: 'approvals', // 模块的一级路由，权限用
  component: Layout,
  children: [{
    path: '', //
    component: () => import('@/views/approvals'),
    meta: {
      title: '审批'// 左侧导航树，显示信息
    }
  }]
}
