import React from "react";

const RocketButton = ({ onClick, rocketId, selectedRocketId }) => {
  const handleClick = () => {
    onClick(rocketId);
  };

  const isDisabled = selectedRocketId !== null && selectedRocketId !== rocketId;

  return (
    <button onClick={handleClick} disabled={isDisabled}>
      {selectedRocketId === rocketId ? "Cancel Reservation" : "Reserve Rocket"}
    </button>
  );
};

export default RocketButton;
