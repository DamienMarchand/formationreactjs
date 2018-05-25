import { ADD_TRAINING, LOAD_TRAININGS, TRAININGS_LOADED } from './trainings.action';

export const initialState = {
  list: [],
  loading: false,
  loaded: false,
};

export function trainingsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TRAININGS:
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    case TRAININGS_LOADED:
      return {
        ...state,
        list: action.trainings,
        loading: false,
        loaded: true,
      };
    case ADD_TRAINING:
      const training = {
        id: state.list.length + 1,
        name: action.name,
      };
      return {
        ...state,
        list: [...state.list, training],
      };
    default:
      return state;
  }
}
