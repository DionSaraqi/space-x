import React from "react";
import { useSelector } from "react-redux";
import "./styles/mypage.css";

const MyStatus = () => {
  const selectedMissionId = useSelector(
    (state) => state.selectedMission.selectedMissionId
  );
  const selectedRocket = useSelector((state) => {
    const rocketId = state.selectedRocket.selectedRocketId;
    return state.rockets.find((rocket) => rocket.id === rocketId);
  });

  return (
    <div>
      <h2>My Status</h2>
      <div>
        <h3>Selected Mission:</h3>
        <p>
          {selectedMissionId
            ? `Mission ID: ${selectedMissionId}`
            : "No mission selected"}
        </p>
      </div>
      <div>
        <h3>Selected Rocket:</h3>
        {selectedRocket ? (
          <div>
            <p>{selectedRocket.rocket_name}</p>
            <br />
            <img
              src={selectedRocket.flickr_images}
              alt={selectedRocket.name}
              style={{ maxWidth: "200px" }}
            />
          </div>
        ) : (
          <p>No rocket selected</p>
        )}
      </div>
    </div>
  );
};

export default MyStatus;
