import {combineReducers}  from 'redux';
import {reducer as headReducer} from '../common/header/store';

const reducer = combineReducers({
    header: headReducer
})

export default reducer;