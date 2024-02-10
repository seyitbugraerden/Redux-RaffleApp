import React from "react";
import { Panel } from "primereact/panel";
import { useSelector } from "react-redux";

function panelArea() {
  const name = useSelector((state) => state.raffle.data);
  return (
    <>
      <Panel header="Raffle Element">
        {name.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </Panel>
    </>
  );
}

export default panelArea;
