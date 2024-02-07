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
    <div>
      <h2>Rockets Page</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rockets.map((rocket) => (
            <tr key={rocket.id}>
              <td>{rocket.id}</td>
              <td>{rocket.rocket_name}</td>
              <td>{rocket.description}</td>
              <td>
                {rocket.flickr_images.map((imageUrl) => (
                  <img
                    key={imageUrl}
                    src={imageUrl}
                    alt="Rocket"
                    style={{ width: "100px", height: "auto" }}
                  />
                ))}
              </td>
              <td>
                <RocketButton
                  onClick={handleButtonClick}
                  rocketId={rocket.id}
                  selectedRocketId={selectedRocketId}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Rockets;
