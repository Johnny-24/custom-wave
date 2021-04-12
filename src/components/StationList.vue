<template>
    <ul :class="['station-list', { 'station-list--active': status }]">
        <li>{{ status }}</li>
    </ul>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
    setup() {
        const store = useStore();

        return {
            status: computed(() => store.getters.STATION_LIST_STATUS),
        };
    },
};
</script>

<style lang="scss">
.station-list {
    position: absolute;
    left: 0;
    top: 0;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 300px;
    background: #cfd8dc;
    transform: translateX(-100%);
    transition: all 0.5s cubic-bezier(0.43, 0.01, 1, 1);
    &--active {
        transform: none;
    }
}
</style>
