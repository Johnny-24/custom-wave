<template>
  <header class="header">
    <NuxtLink to="/" class="header__link">Radio</NuxtLink>
    <div class="header__right">
      <NuxtLink to="/signin" class="header__link">SignIn</NuxtLink>
      /
      <NuxtLink to="/signup" class="header__link">SignUp</NuxtLink>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background: #445a64;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2%), 0 0 10px rgba(0, 0, 0, 0.24%);
  justify-content: space-between;
  &__right {
    color: #fff;
  }
  &__link {
    color: #fff;
    text-decoration: none;
  }
}
.logo {
  color: #fff;
}
</style>
