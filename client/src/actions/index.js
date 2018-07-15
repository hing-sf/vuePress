import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  
  
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  console.log('submit Surveys Start');
  
  const res = await axios.post('/api/promoInstance', values);

  console.log('submit Surveys finish');
  console.log(values);
  history.push('/slugList');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get('/api/promoInstance');
  console.log('fetch Surveys Start');
  
  dispatch({ type: FETCH_SURVEYS, payload: res.data });
  console.log('fetch Surveys finish');
  
};