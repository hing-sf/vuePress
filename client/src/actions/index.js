import axios from "axios";
import { FETCH_USER, FETCH_SURVEYS } from "./types";

// check if user is login
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  console.log(res.data)
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
	const res = await axios.post("/api/promoInstance", values);
	history.push("/promosList");
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get("/api/promoInstance");
	dispatch({ type: FETCH_SURVEYS, payload: res.data });
};
