import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Panel } from "primereact/panel";
import { InputText } from "primereact/inputtext";
import { randomItem } from "../Slice/RaffleAppSlice";
import { editItem } from "../Slice/RaffleAppSlice";
import { addItem } from "../Slice/RaffleAppSlice";
import { useDispatch, useSelector } from "react-redux";
import { deleteTheItem } from "../Slice/RaffleAppSlice";

function panelArea() {
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  const name = useSelector((state) => state.raffle.data);
  const selected = useSelector((state) => state.raffle.selectedItem);
  const newItem = useSelector((state) => state.raffle.newItem);

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
          icon="bi bi-x"
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
            setShow(true);
          }}
        />
      </Panel>
      <Dialog
        header="Add New Element"
        visible={show}
        style={{
          width: "20vw",
          textAlign: "start",
        }}
      >
        <Button
          style={{
            scale: ".7",
            position: "absolute",
            top: "10px",
            right: "10px",
          }}
          icon="bi bi-x"
          onClick={() => {
            setShow(false);
          }}
        />
        <InputText
          placeholder="Add New Element"
          value={newItem}
          onChange={(e) => {
            dispatch(editItem(e.target.value));
          }}
        />
        <Button
          label="Add"
          style={{ float: "right" }}
          onClick={() => {
            dispatch(addItem());
          }}
        />
      </Dialog>
    </>
  );
}

export default panelArea;
