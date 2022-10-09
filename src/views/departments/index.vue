<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card>
        <el-row type="flex" justify="space-between">
          <el-col>
            <span>科技有限公司</span>
          </el-col>
          <el-col>
            <el-row type="flex" justify="end">
              <span class="fzr">负责人</span>
              <el-dropdown>
                <span class="el-dropdown-link"> 操作<i class="el-icon-arrow-down el-icon--right" /></span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>狮子</el-dropdown-item>
                  <el-dropdown-item>老虎</el-dropdown-item>
                  <el-dropdown-item>豹子</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-row>
          </el-col>
        </el-row>
        <el-tree :data="data" :props="defaultProps" default-expand-all="true">
          <el-row slot-scope="{ data }" type="flex" justify="space-between" align="middle" style="height:40px;width: 100%">
            <el-col>
              <span>{{ data.name }}</span>
            </el-col>
            <el-col>
              <el-row type="flex" justify="end">
                <span class="fzr">{{ data.manager }}</span>
                <el-dropdown>
                  <span class="el-dropdown-link"> 操作<i class="el-icon-arrow-down el-icon--right" /></span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>添加</el-dropdown-item>
                    <el-dropdown-item>编辑</el-dropdown-item>
                    <el-dropdown-item>删除</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </el-row>
            </el-col>
          </el-row>
        </el-tree>
      </el-card>
      <hr>
      <h2>组织架构信息</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [{
        name: '总部', manager: '曹操',
        children: [{
          name: '子公司1',
          children: [{
            name: ' 财务部', manager: '校长飞'
          }, {
            name: ' 研发部', manager: '李飞'
          }, {
            name: ' 投资部', manager: '工长飞'
          }]
        },
        {
          name: '子公司2',
          children: [{
            name: ' 财务部', manager: '校长飞'
          }, {
            name: ' 研发部', manager: '李飞'
          }, {
            name: ' 投资部', manager: '工长飞'
          }]
        }]
      }, {
        name: '总部（备份）', manager: '曹操'
      }],
      defaultProps: {
        children: 'children',
        label: 'name'
      }
    }
  }
}
</script>
<style>
.fzr{
  margin-right: 20px;
}
.el-dropdown-link{
  font-size: 16px;
}
</style>
