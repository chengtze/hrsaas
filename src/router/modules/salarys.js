// 员工的路由文件
import Layout from '@/layout'
export default {

  path: '/salarys',
  name: 'salarys', // 模块的一级路由，权限用
  component: Layout,
  children: [{
    path: '', //
    component: () => import('@/views/salarys'),
    meta: {
      title: '工资'// 左侧导航树，显示信息
    }
  }]
}
