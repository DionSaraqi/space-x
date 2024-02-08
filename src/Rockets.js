import React from "react";
import { useSelector, useDispatch } from "react-redux";
import RocketButton from "./rocketButton";
import "./styles/rocketstyle.css";
import { setSelectedRocketId } from "./actions";

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const selectedRocketId = useSelector(
    (state) => state.selectedRocket.selectedRocketId
  );

  const dispatch = useDispatch();

  const handleButtonClick = (rocketId) => {
    if (selectedRocketId === rocketId) {
      dispatch(setSelectedRocketId(null));
    } else {
      dispatch(setSelectedRocketId(rocketId));
    }
  };

  return (
    <div className="page-container">
      <div className="title-container">
        <h2>Rockets Page</h2>
      </div>
      <div className="rockets-container">
        {rockets.map((rocket) => (
          <div className="rocket-card" key={rocket.id}>
            <div className="rocket-header">
              <h3>{rocket.rocket_name}</h3>
              <p>ID: {rocket.id}</p>
            </div>
            <div className="rocket-img">
              <img
                src={rocket.flickr_images[0]} // Assuming first image is used
                alt="Rocket"
              />
            </div>
            <div className="rocket-description">
              <p>{rocket.description}</p>
            </div>

            <div className="rocket-button">
              <RocketButton
                onClick={handleButtonClick}
                rocketId={rocket.id}
                selectedRocketId={selectedRocketId}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rockets;
