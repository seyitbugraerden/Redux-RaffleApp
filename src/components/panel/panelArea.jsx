import React from "react";
import { Panel } from "primereact/panel";
import { useSelector } from "react-redux";

function panelArea() {
  const name = useSelector((state) => state.raffle.data);
  return (
    <>
      <Panel header="Raffle List" className="panel_area">
        {name.map((item) => (
          <div key={item.id}>
            <p>
              {item.name}
              <i className="bi bi-archive"></i>
            </p>
          </div>
        ))}
      </Panel>
    </>
  );
}

export default panelArea;
