import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedMissionId } from "./actions";
import Button from "./missionButton";
import "./styles/missionstyle.css";

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const selectedMissionId = useSelector(
    (state) => state.selectedMission.selectedMissionId
  );
  const dispatch = useDispatch();

  const handleButtonClick = (missionId) => {
    if (selectedMissionId === missionId) {
      dispatch(setSelectedMissionId(null));
    } else {
      dispatch(setSelectedMissionId(missionId));
    }
  };

  return (
    <div class="page-container">
      <div class="missions-table-container">
        <table class="missions-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {missions.map((mission) => (
              <tr key={mission.mission_id}>
                <td>{mission.mission_id}</td>
                <td>{mission.mission_name}</td>
                <td>{mission.description}</td>
                <td>
                  <Button
                    onClick={handleButtonClick}
                    missionId={mission.mission_id}
                    selectedMissionId={selectedMissionId}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Missions;
