export const strict = process.env.NODE_ENV !== "production";

export const state = () => ({
  responses: {
    name: "",
    voie: "",
    filliere: "",
    spe: "",
    options: []
  }
});

export const getters = {
  getUserVoie: state => state.responses.voie,
  getUserFilliere: state => state.responses.filliere,
  getUserSpe: state => state.responses.spe,
  getUserOptions: state => state.responses.options,
  getUserName: state => state.responses.name
};

export const mutations = {

    setUserName(state, name) {
      state.responses = { ...state.responses, name };
    },
    setUserVoie(state, voie) {
      state.responses = { ...state.responses, voie };
    },
    setUserFilliere(state, filliere) {
      state.responses = { ...state.responses, filliere };
    },
    setUserSpe(state, spe) {
      state.responses = { ...state.responses, spe };
    },
    setUserOptions(state, options) {
      state.responses = { ...state.responses, options };
    }

};
