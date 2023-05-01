<template>
  <div class="login-container flx-center">
    <div class="login-box">
      <SwitchDark class="dark" />
      <div class="login-left">
        <img class="login-left-img" src="@/assets/images/login_left.png" alt="login" />
      </div>
      <div class="login-form">
        <div class="login-logo">
          <!-- <img class="login-icon" src="@/assets/images/logo.svg" alt="" /> -->
          <h2 class="logo-text">管理平台</h2>
        </div>
        <LoginByMobileForm />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="login">
import LoginByMobileForm from "./components/LoginByMobileForm.vue";
import SwitchDark from "@/components/SwitchDark/index.vue";
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
