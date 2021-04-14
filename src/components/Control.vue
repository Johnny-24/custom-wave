<template>
    <div :class="['control', modificators]" @click="onHandler">
        <span class="control__ico">
            <slot></slot>
        </span>
    </div>
</template>

<script>
export default {
    props: {
        modificators: {
            type: String,
        },
    },
    setup({ modificators }, { emit }) {
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
    width: 84px;
    height: 84px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    border: 1px solid rgba(0, 0, 0, 0.5);
    background: linear-gradient(
        180deg,
        rgba(48, 48, 48, 0.2) 0%,
        rgba(196, 196, 196, 0) 100%
    );
    transition: all 0.3s;
    &::after {
        content: "";
        transition: all 0.3s;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: calc(100% - 2px);
        height: calc(100% - 2px);
        border-radius: 50%;
        background: linear-gradient(180deg, #2c2f34 0%, #1d1e23 100%);
        z-index: 1;
        box-shadow: -6px -6px 26px rgba(255, 255, 255, 0.2),
            6px 6px 16px rgba(0, 0, 0, 0.5);
    }
    &:hover {
        & * {
            color: #fff;
        }
    }
    &:active {
        background: linear-gradient(141.77deg, #cb4706 14.65%, #de5410 85.88%);
        border: 1px solid rgba(0, 0, 0, 0.6);
        box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.5),
            -6px -6px 26px rgba(255, 255, 255, 0.2);
        &::after {
            background: linear-gradient(
                141.72deg,
                #b92e0d 13.86%,
                #de5410 86.42%
            );
        }
        .control__ico {
            color: rgba(255, 255, 255, 0.8);
        }
    }
    &.active {
        background: linear-gradient(141.77deg, #cb4706 14.65%, #de5410 85.88%);
        border: 1px solid rgba(0, 0, 0, 0.6);
        box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.5),
            -6px -6px 26px rgba(255, 255, 255, 0.2);
        &::after {
            background: linear-gradient(
                141.72deg,
                #b92e0d 13.86%,
                #de5410 86.42%
            );
        }
        .control__ico {
            color: rgba(255, 255, 255, 0.8);
        }
    }
    &.prev {
        margin-right: 50px;
        width: 75px;
        height: 75px;
        margin-top: 5px;
    }
    &.next {
        margin-left: 50px;
        width: 75px;
        height: 75px;
        margin-top: 5px;
    }
    &__ico {
        font-family: "Material Icons";
        color: #cfd8dc;
        transition: all 0.3s;
        font-size: 34px;
        position: relative;
        z-index: 2;
        color: rgba(219, 221, 219, 0.6);
    }
}
</style>
