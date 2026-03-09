import React from "react";
import MachineRoomElevatorDetails from "../../components/MachineRoomElevatorDetails";
import MachineRoomElevators from "../../components/machine-room-elevators";
import MachineRoomElevators1 from "../../components/machine-room-elevators1";

const page = () => {
  return (
    <div>
      <MachineRoomElevators1 />
      <MachineRoomElevatorDetails />
    </div>
  );
};

export default page;
