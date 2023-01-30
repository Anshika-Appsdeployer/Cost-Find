import { changeBedroom } from './changeBedroom';
import { changeBathroom } from '../redux/changeBathroom';

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    changeBedroom,
    changeBathroom
})

export default rootReducer;