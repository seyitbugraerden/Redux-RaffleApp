import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Panel } from "primereact/panel";
import { randomItem } from "../Slice/RaffleAppSlice";
import { useDispatch, useSelector } from "react-redux";
import { deleteTheItem } from "../Slice/RaffleAppSlice";

function panelArea() {
  const [visible, setVisible] = useState(false);
  const name = useSelector((state) => state.raffle.data);
  const dispatch = useDispatch();
  return (
    <>
      <Dialog
        header="Generated Element"
        visible={visible}
        style={{ width: "30vw" }}
      >
        <button
          onClick={() => {
            dispatch(randomItem());
          }}
        ></button>
      </Dialog>
      <Panel header="Raffle List" className="panel_area">
        <Button
          label="Generate"
          icon="pi pi-external-link"
          onClick={() => setVisible(true)}
        />
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
