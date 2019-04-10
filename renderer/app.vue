<template>
  <el-container>
    <el-container>
      <el-aside style="background-color: rgb(238, 241, 246)">
    <el-menu
      class="el-menu-app"
      :default-active="$route.path"
      :router="true"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航</span>
        </template>
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/axios">axios test</el-menu-item>
        <el-menu-item index="/table">table</el-menu-item>
        <el-menu-item index="/error">error</el-menu-item>
        <el-menu-item index="/share">xxxx</el-menu-item>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-aside>

      <el-container>
        <el-header>
          <el-switch v-model="isCollapse"></el-switch>
          <strong>api.env: [{{api.env}}]</strong>
          <strong>api.baseapi: [{{api.baseapi}}]</strong>
          </el-header>

        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>

        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </el-container>
    </el-container>
  </el-container>
</template>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.el-menu-app:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu-app {
  height: 100vh;
}
.el-aside {
  width: auto !important;
  height: 100vh;
  overflow: hidden;
}
</style>
<script>
// import { mapGetters, mapState, mapActions } from "vuex";
import api from "./api";
export default {
  data() {
    return {
      isCollapse: false,
      api:api
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
};
</script>
