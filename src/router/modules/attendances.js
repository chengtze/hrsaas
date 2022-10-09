// 员工的路由文件
import Layout from '@/layout'
export default {

  path: '/attendances',
  name: 'attendances', // 模块的一级路由，权限用
  component: Layout,
  children: [{
    path: '', //
    component: () => import('@/views/attendances'),
    meta: {
      title: '考勤'// 左侧导航树，显示信息
    }
  }]
}
