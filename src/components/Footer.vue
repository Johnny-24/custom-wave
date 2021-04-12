<template>
    <footer class="footer">
        <audio src="http://stream.laut.fm/deutschrap" ref="player"></audio>

        <Control @onHandler="toggleList">
            list
        </Control>

        <div class="footer__controls">
            <Control>
                skip_previous
            </Control>

            <Control @onHandler="onPlay" v-if="!status">
                play_arrow
            </Control>
            <Control @onHandler="onPause" v-else>
                pause
            </Control>

            <Control>
                skip_next
            </Control>
        </div>
        <Control>
            volume_up
        </Control>
    </footer>
</template>

<script>
import Control from "@/components/Control";
import { ref } from "vue";
import { useStore } from "vuex";

export default {
    components: {
        Control,
    },

    setup() {
        const store = useStore();
        const player = ref(null);
        const status = ref(false);

        const onPlay = () => {
            status.value = !status.value;
            player.value.play();
        };

        const onPause = () => {
            status.value = !status.value;
            player.value.pause();
        };

        return {
            player,
            status,
            onPlay,
            onPause,
            toggleList: () => store.dispatch("TOGGLE_STATION_LIST_STATUS"),
        };
    },
};
</script>

<style lang="scss">
.footer {
    background: #445a64;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 15px;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2%), 0 0 10px rgba(0, 0, 0, 0.24%);
    justify-content: space-between;
    &__controls {
        display: flex;
        align-items: start;
    }
}
.btn__ico {
    fill: #fff;
}
</style>
