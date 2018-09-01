import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import promosReducer from './promosReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  promos: promosReducer
});
