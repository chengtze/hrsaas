// 员工的路由文件
import Layout from '@/layout'
export default {

  path: '/setting',
  name: 'setting', // 模块的一级路由，权限用
  component: Layout,
  children: [{
    path: '', //
    component: () => import('@/views/setting'),
    meta: {
      title: '设置'// 左侧导航树，显示信息
    }
  }]
}
