export default {
    state: {
        stationListStatus: false,
    },
    getters: {
        STATION_LIST_STATUS: (state) => {
            return state.stationListStatus;
        },
    },
    mutations: {
        SET_STATION_LIST_STATUS: (state, payload) => {
            state.stationListStatus = payload;
        },
    },
    actions: {
        TOGGLE_STATION_LIST_STATUS: ({ commit, state }) => {
            commit("SET_STATION_LIST_STATUS", !state.stationListStatus);
        },
    },
};
