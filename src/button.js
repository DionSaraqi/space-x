import React from "react";

const Button = ({ onClick, missionId, selectedMissionId }) => {
  const handleClick = () => {
    onClick(missionId);
  };

  const isDisabled =
    selectedMissionId !== null && selectedMissionId !== missionId;

  return (
    <button onClick={handleClick} disabled={isDisabled}>
      {selectedMissionId === missionId ? "Leave Mission" : "Action"}
    </button>
  );
};

export default Button;
