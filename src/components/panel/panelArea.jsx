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
  const selected = useSelector((state) => state.raffle.selectedItem);

  const dispatch = useDispatch();
  return (
    <>
      <Dialog
        header="Generated Element"
        visible={visible}
        style={{
          width: "20vw",
          textAlign: "start",
        }}
      >
        <div>{selected} </div>
        <Button
          icon="bi bi-x-circle"
          style={{ marginTop: "20px" }}
          className="text-light close_button"
          onClick={() => {
            setVisible(false);
          }}
        ></Button>
      </Dialog>
      <Panel header="Raffle List" className="panel_area">
        <Button
          icon="bi bi-lightning-fill"
          onClick={() => {
            dispatch(randomItem());
            setVisible(true);
          }}
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
        <Button
          style={{
            scale: ".7",
            position: "absolute",
            top: "10px",
            right: "10px",
          }}
          icon="bi bi-plus"
          onClick={() => {
            dispatch(randomItem());
            setVisible(true);
          }}
        />
      </Panel>
    </>
  );
}

export default panelArea;
