import monDAO from "@/API/monDAO";

const state = {
    plats: []
};
const getters = {
    allPlats: (state) => {
        return state.plats;
    }
};
const mutations = {
    setPlat(state, plat) {
        state.plats = plat;
    },
    removePlat(state, id) {
        state.plats = state.plats.filter((plat) => plat._id !== id);
    },
    addPlat(state, newPlat) {
        state.plats.unshift(newPlat);
    },
    updatePlat(state, updatePlat) {
        const index = state.plats.findIndex(
            (plat) => plat._id === updatePlat._id
        );
        if (index !== -1) {
            state.plats.splice(index, 1, updatePlat);
        }
    }
};

const actions = {
    initPlats({ commit }) {
        monDAO.findAll()
            .then(async (response) => {
                const data = await response.data;
                if (response.status === 200) {
                    commit("setPlat", response.data);
                } else {
                    return Promise.reject(data);
                }
            })
            .catch(() => {
                console.log("server probably not up");
            });
    },
    deletePlat({ commit }, id) {
        monDAO.remove(id).then(async (response) => {
            const data = await response.data;
            if (response.status === 200) {
                commit("removePlat", id);
            } else {
                return Promise.reject(data);
            }
        });
    },
    updatePlat({ commit }, updatePlat) {
        monDAO.update(updatePlat._id, updatePlat).then(async (response) => {
            const data = await response.data;
            if (response.status === 200) {
                commit("updatePlat", response.data);
            } else {
                return Promise.reject(data);
            }
        });
    },
    addPlat({ commit }, plat) {
        monDAO.create(plat)
            .then(async (response) => {
                const data = response.data;
                if (response.status === 201) {
                    console.log("Submit Success");
                    commit("addPlat", response.data);
                } else {
                    return Promise.reject(data);
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
