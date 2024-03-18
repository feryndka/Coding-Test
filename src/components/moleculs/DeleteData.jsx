"use client";

import { useState } from "react";
import Button from "../atoms/Button";
import Delete from "../atoms/Delete";

const DeleteData = ({title, body}) => {
  const [modal, setModal] = useState(false);

  function handleDelete() {
    const currentData = JSON.parse(localStorage.getItem("data")) || [];
    const newData = currentData.filter(item => item.title !== title || item.body !== body);
    localStorage.setItem("data", JSON.stringify(newData));

    setModal(false);
  }

  function handleChange() {
    setModal(!modal);
  }

  return (
    <div>
      <Delete onClick={handleChange} />
      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />
      <div className="modal ">
        <div className="modal-box bg-[#1b1a17] border border-[#A35709]">
          <div className="text-2xl text-center">Delete {title} ?</div>
          <div className="modal-action flex items-center justify-center gap-3">
            <Button action={"No"} onClick={handleChange} />
            <Button action={"Yes"} onClick={() => handleDelete()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteData;
