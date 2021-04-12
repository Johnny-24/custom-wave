<template>
    <div class="control" @click="onHandler">
        <span class="control__ico">
            <slot></slot>
        </span>
    </div>
</template>

<script>
export default {
    setup(props, { emit }) {
        const onHandler = () => {
            emit("onHandler");
        };
        return {
            onHandler,
        };
    },
};
</script>

<style lang="scss">
.control {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
        & * {
            color: #fff;
        }
    }
    &__ico {
        font-family: "Material Icons";
        color: #cfd8dc;
        transition: all 0.3s;
        font-size: 24px;
    }
}
</style>
