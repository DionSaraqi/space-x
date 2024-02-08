import { combineReducers } from "redux";
import {
  FETCH_ROCKETS_SUCCESS,
  FETCH_MISSIONS_SUCCESS,
  SET_SELECTED_MISSION_ID,
  SET_SELECTED_ROCKET_ID,
} from "./actions";

const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ROCKETS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_MISSIONS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const initialState = {
  selectedMissionId: null, // Initialize selectedMissionId as null
};

const missionsButtonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_MISSION_ID:
      return {
        ...state,
        selectedMissionId: action.payload,
      };
    default:
      return state;
  }
};
const initialRocketState = {
  selectedRocketId: null, // Initialize selectedMissionId as null
};

const rocketsButtonReducer = (state = initialRocketState, action) => {
  switch (action.type) {
    case SET_SELECTED_ROCKET_ID:
      return {
        ...state,
        selectedRocketId: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  rockets: rocketsReducer,
  missions: missionsReducer,
  selectedMission: missionsButtonReducer,
  selectedRocket: rocketsButtonReducer,
});
