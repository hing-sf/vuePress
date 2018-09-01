import axios from "axios";
import { FETCH_USER, FETCH_PROMOS, FETCH_SURVEYS } from "./types";

// check if user is login
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitPromo = (values, history) => async dispatch => {
	console.log(values);
	const res = await axios.post("/api/promoInstance", values);
	history.push("/promosList");
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
	console.log(values);
	const res = await axios.post("/api/promoInstance", values);
	history.push("/promosList");
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
	const res = await axios.get("/api/promoInstance");
	console.log(res);
	dispatch({ type: FETCH_SURVEYS, payload: res.data });
};