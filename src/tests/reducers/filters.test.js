import moment from "moment";
import filtersReducer from "../../reducers/filters";

test('should set up default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set up sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set up sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'    
    };
    const action = { type: 'SORT_BY_DATE' };    
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set up text filter', () => {
    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'e'
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe('e');
});

test('should set up startDate filter', () => {
    const action = {
        type: 'SET_START_DATE',
        date: moment(0)
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(moment(0));
});

test('should set up endDate filter', () => {
    const action = {
        type: 'SET_END_DATE',
        date: moment(0)
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(moment(0));
});