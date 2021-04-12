<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<style lang="scss">
.container {
    margin: 0 auto;
    height: calc(100vh - 100px);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    position: relative;
}
</style>
