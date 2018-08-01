const SET_STEP = 'SET_STEP'
const SET_ROLE = 'SET_ROLE'
const SET_CHARACTER = 'SET_CHARACTER'
const SET_SPECIALIZATION = 'SET_SPECIALIZATION'
const SET_ALTERNATIVE_SPECIALIZATION = 'SET_ALTERNATIVE_SPECIALIZATION'

const apply = (state = {}, action) => {
    switch (action.type) {
        case SET_STEP:
          return { ...state, step: action.step }
        case SET_ROLE:
          return { ...state, step: ++state.step, maxStep: 1, answers: { ...state.anwsers, role: action.role, character: null, specialization: null, alternative_specialization: null }}
        case SET_CHARACTER:
          return { ...state, step: ++state.step, maxStep: 2, answers: { ...state.answers, character: action.character, specialization: null, alternative_specialization: null }}
        case SET_SPECIALIZATION:
          return { ...state, step: ++state.step, maxStep: 3, answers: { ...state.answers, specialization: action.specialization, alternative_specialization: null }}
        case SET_ALTERNATIVE_SPECIALIZATION:
          return { ...state, step: ++state.step, maxStep: 4, answers: { ...state.answers, alternative_specialization: action.alternative_specialization }}
      default:
        return state
    }
  }

  export default apply
