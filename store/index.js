export const strict = process.env.NODE_ENV !== "production";

export const state = () => ({
  formData: {},
  responses: {
    name: "",
    voie: "",
    filliere: "",
    spe: "",
    options: []
  },
  currentStep: 0
});

export const getters = {
  getUserVoie: state => state.responses.voie,
  getUserFilliere: state => state.responses.filliere,
  getUserSpe: state => state.responses.spe,
  getUserOptions: state => state.responses.options,
  getUserName: state => state.responses.name,
  getCurrentStep: state => state.currentStep
};

export const mutations = {
  setFormData(state, data) {
    state.formData = data;
  },

  setUserName(state, name) {
    state.responses = { ...state.responses, name };
    // state.currentStep =
  },
  setUserVoie(state, voie) {
    state.responses = { ...state.responses, voie };
    state.currentStep += 1
  },
  setUserFilliere(state, filliere) {
    state.responses = { ...state.responses, filliere };
    state.currentStep += 1;
  },
  setUserSpe(state, spe) {
    state.responses = { ...state.responses, spe };
    state.currentStep += 1;
  },
  setUserOptions(state, options) {
    state.responses = { ...state.responses, options };
    state.currentStep += 1;
  }
};

export const actions = {
  async nuxtServerInit({ commit }) {
    let file = await require("~/assets/form.json");

    await commit("setFormData", file);
  }
};
