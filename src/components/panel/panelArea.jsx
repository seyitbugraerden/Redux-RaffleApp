import React from "react";
import { Panel } from "primereact/panel";
import { useDispatch, useSelector } from "react-redux";
import { deleteTheItem } from "../Slice/RaffleAppSlice";

function panelArea() {
  const name = useSelector((state) => state.raffle.data);
  const dispatch = useDispatch();
  return (
    <>
      <Panel header="Raffle List" className="panel_area">
        {name.map((item) => (
          <div key={item.id}>
            <p>
              {item.name}
              <i
                className="bi bi-archive"
                onClick={() => {
                  dispatch(deleteTheItem(item.id));
                }}
              ></i>
            </p>
          </div>
        ))}
      </Panel>
    </>
  );
}

export default panelArea;
