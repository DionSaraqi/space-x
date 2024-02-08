import React from "react";
import { useSelector } from "react-redux";
import "./styles/mypage.css";

const MyStatus = () => {
  const selectedMission = useSelector((state) => {
    const missionId = state.selectedMission.selectedMissionId;
    return state.missions.find((mission) => mission.mission_id === missionId);
  });
  const selectedRocket = useSelector((state) => {
    const rocketId = state.selectedRocket.selectedRocketId;
    return state.rockets.find((rocket) => rocket.id === rocketId);
  });

  return (
    <div className="card-container">
      {/* Card for Selected Mission */}
      <div className="card">
        <div className="card-header">Selected Mission</div>
        <div className="card-body">
          {selectedMission ? (
            <div>
              <h3>{selectedMission.mission_name}</h3>
              <p>{selectedMission.description}</p>
            </div>
          ) : (
            <p>No mission selected</p>
          )}
        </div>
      </div>

      {/* Card for Selected Rocket */}
      <div className="card">
        <div className="card-header">Selected Rocket</div>
        <div className="card-body">
          {selectedRocket ? (
            <div>
              <h3>{selectedRocket.rocket_name}</h3>
              <img
                src={selectedRocket.flickr_images}
                alt={selectedRocket.name}
                style={{ maxWidth: "150px", margin: "0 auto" }}
              />
            </div>
          ) : (
            <p>No rocket selected</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyStatus;
