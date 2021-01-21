import {combineReducers} from 'redux';
import AddressReducer from './AddressReducer';
import HistoryReducer from './HistoryReducer';

export default combineReducers({
    historyData: HistoryReducer,
    addressData: AddressReducer
})