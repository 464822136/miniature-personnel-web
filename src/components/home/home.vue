<template>
    <div class="div-home">
      <div class="div-home-header">
        <el-row>
          <el-col  :span="12" align="left">
            <span class="project-name">微人事</span>
          </el-col>
          <el-col :span="12" align="right">
            <span class="role-name">{{this.$store.state.user.name}}</span>
            <el-image class="photo"  src="../../assets/photo/photo.jpg"></el-image>
          </el-col>
        </el-row>
      </div>
      <el-row>
          <el-col :span="5">
            <el-menu
                    :default-active="activeIndex"
                    class="el-menu-vertical-demo"
                    background-color="#545c64"
                    router
                    text-color="#fff"
                    active-text-color="#ffd04b">
                <el-submenu :key="menu.id" :index="menu.path" v-for="(menu) in this.$store.state.routes">
                    <template slot="title">
                        <i :class="menu.icon"></i>
                        <span slot="title">{{menu.title}}</span>
                    </template>
                    <el-menu-item :key="child.id" :index="child.path" v-for="(child) in menu.children" >{{child.title}}</el-menu-item>
                </el-submenu>
            </el-menu>
          </el-col>
        <el-col :span="17">
          <el-breadcrumb class="separator-demo" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
    created() {
    },
  name: 'home.vue',
  data() {
    return {
      activeIndex: '1',
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  .div-home-header {
    background-color: #20a0ff;
    padding: 5px;
  }
  .project-name {
    color: white;
    font-size: 20px;
    line-height: 50px;
  }
  .role-name {
    color: white;
    font-size: 14px;
    display: table-cell;
    vertical-align: middle;
    padding: 5px;
  }
  .photo {
    display: table-cell;
    vertical-align: middle;
    width:50px;
    height:50px;
    border-radius: 25px;
  }
  .el-menu-vertical-demo {
    width: 25%;
    min-width: 250px;
    height: 694px;
  }
  .separator-demo {
      width: 100%;
    padding: 10px;
    border:1px solid red;
  }

</style>
