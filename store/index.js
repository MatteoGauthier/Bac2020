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
  currentStep: 1
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
    const step = 1;
    state.responses = { ...state.responses, voie };
    state.currentStep = state.currentStep =
      state.responses.voie.length > 0 ? step : step-1;
  },
  setUserFilliere(state, filliere) {
    const step = 2
    state.responses = { ...state.responses, filliere };
    state.currentStep = state.currentStep =
      state.responses.filliere.length > 0 ? step : step - 1;
  },
  setUserSpe(state, spe) {
    const step = 3;
    state.responses = { ...state.responses, spe };
    state.currentStep = state.currentStep =
      state.responses.spe.length > 0 ? step : step - 1;
  },
  setUserOptions(state, options) {
    const step = 4;
    state.responses = { ...state.responses, options };
    state.currentStep = state.currentStep =
      state.responses.options.length > 0 ? step : step - 1;
  }
};

export const actions = {
  async nuxtServerInit({ commit }) {
    let file = await require("~/assets/form.json");

    await commit("setFormData", file);
  }
};
