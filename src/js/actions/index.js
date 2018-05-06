const SET_STEP = 'SET_STEP'
const SET_ROLE = 'SET_ROLE'
const SET_CHARACTER = 'SET_CHARACTER'
const SET_SPECIALIZATION = 'SET_SPECIALIZATION'
const SET_ALTERNATIVE_SPECIALIZATION = 'SET_ALTERNATIVE_SPECIALIZATION'

export function setStep(step) {
  return {
    type: SET_STEP,
    step
  }
}

export function setRole(role) {
  return {
    type: SET_ROLE,
    role
  }
}

export function setCharacter(character) {
  return {
    type: SET_CHARACTER,
    character
  }
}

export function setSpecialization(specialization) {
  return {
    type: SET_SPECIALIZATION,
    specialization
  }
}

export function setAlternativeSpecialization(alternative_specialization) {
  return {
    type: SET_ALTERNATIVE_SPECIALIZATION,
    alternative_specialization
  }
}