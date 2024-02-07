import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedMissionId } from "./actions";
import Button from "./button";
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
    <div>
      <h2>Missions Page</h2>
      <table>
        <thead>
          <tr>
            <th>Mission ID</th>
            <th>Mission Name</th>
            <th>Mission Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_id}</td>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>
                {/* Pass selectedMissionId as a prop to Button component */}
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
  );
};

export default Missions;
