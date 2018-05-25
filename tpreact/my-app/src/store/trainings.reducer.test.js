import { trainingsReducer, initialState }
from './trainings.reducer';
import { LOAD_TRAININGS, ADD_TRAINING } from './trainings.action';

describe('trainings.reducer.js', () => {
    it('should validate state after defaut action.type', () => {
        expect(trainingsReducer(initialState, { type: 'NOT_VALID' })).toEqual( initialState);
    });
    it('should validate state after LOAD_TRAININGS action', () => {
        const state = {
            ...initialState,
            loading: true,
            loaded: false,
        };
        expect(trainingsReducer(initialState, { type: LOAD_TRAININGS })).toEqual(state);
    });

    it('should validate state after LOAD_TRAININGS action', () => {
        const state = {
            ...initialState,
            loading: false,
            loaded: false,
        };
        expect(trainingsReducer(initialState, { type: ADD_TRAINING })).toEqual(state);
    });
});
