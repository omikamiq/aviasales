import { combineReducers } from 'redux';
import { ticketReducer } from './ticketReducer';
import { sortReducer } from './sortReducer';

export const rootReducer = combineReducers({
  ticket: ticketReducer,
  sort: sortReducer,
});
