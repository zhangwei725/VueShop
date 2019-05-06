<template>
  <template>
    <div class="index-wrap">
      <el-container>
        <el-aside><navMenu></navMenu></el-aside>
        <el-container id="el-container">
          <el-header><my-header></my-header></el-header>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer><my-footer></my-footer></el-footer>
        </el-container>
      </el-container>
    </div>
  </template>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>
