import { createStore } from "vuex";
import stationListStatus from "./modules/stationListStatus";

export default createStore({
    modules: {
        stationListStatus,
    },
});
