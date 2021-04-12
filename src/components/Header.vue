<template>
    <header class="header">
        <router-link to="/" class="header__link">Radio</router-link>
        <div class="header__right">
            <router-link to="/signin" class="header__link">SignIn</router-link>
            /
            <router-link to="/signup" class="header__link">SignUp</router-link>
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
        transition: all 0.3s;
        color: #cfd8dc;
        text-decoration: none;
        &:hover {
            color: #fff;
        }
    }
}
</style>
