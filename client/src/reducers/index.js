import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';
import promosReducer from './promosReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  promos: promosReducer,
  surveys: surveysReducer
});
