export const FETCH_ROCKETS_REQUEST = "FETCH_ROCKETS_REQUEST";
export const FETCH_ROCKETS_SUCCESS = "FETCH_ROCKETS_SUCCESS";
export const FETCH_ROCKETS_FAILURE = "FETCH_ROCKETS_FAILURE";

export const FETCH_MISSIONS_REQUEST = "FETCH_MISSIONS_REQUEST";
export const FETCH_MISSIONS_SUCCESS = "FETCH_MISSIONS_SUCCESS";
export const FETCH_MISSIONS_FAILURE = "FETCH_MISSIONS_FAILURE";
export const SET_SELECTED_MISSION_ID = "SET_SELECTED_MISSION_ID";
export const SET_SELECTED_ROCKET_ID = "SET_SELECTED_ROCKET_ID";

export const fetchRockets = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_ROCKETS_REQUEST });

    fetch("https://api.spacexdata.com/v3/rockets")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: FETCH_ROCKETS_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_ROCKETS_FAILURE, payload: error.message });
      });
  };
};

export const fetchMissions = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_MISSIONS_REQUEST });

    fetch("https://api.spacexdata.com/v3/missions")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: FETCH_MISSIONS_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_MISSIONS_FAILURE, payload: error.message });
      });
  };
};

export const setSelectedMissionId = (missionId) => ({
  type: SET_SELECTED_MISSION_ID,
  payload: missionId,
});

export const setSelectedRocketId = (rocketId) => ({
  type: SET_SELECTED_ROCKET_ID,
  payload: rocketId,
});
