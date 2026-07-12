import React from "react";
import MachineRoomElevatorDetails from "../../components/MachineRoomElevatorDetails";
import MachineRoomElevator from "../../components/machine-room-elevators";
import MachineRoomElevator1 from "../../components/machine-room-elevators1";

const page = () => {
  return (
    <div>
      <MachineRoomElevator1 />
      <MachineRoomElevatorDetails />
    </div>
  );
};

export default page;
