<template>
    <footer class="footer">
        <audio src="http://stream.laut.fm/deutschrap" ref="player"></audio>

        <div class="footer__controls">
            <Control modificators="prev">
                skip_previous
            </Control>

            <Control @onHandler="onPlay" v-if="!status">
                play_arrow
            </Control>
            <Control @onHandler="onPause" modificators="active" v-else>
                pause
            </Control>

            <Control modificators="next">
                skip_next
            </Control>
        </div>
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
    height: 135px;
    display: flex;
    align-items: flex-start;
    padding: 0 35px;
    &__controls {
        display: flex;
        align-items: start;
        margin: 0 auto;
    }
}
.btn__ico {
    fill: #fff;
}
</style>
