"use client";

import React, { useState } from "react";
import Input from "../atoms/Input";
import Add from "../atoms/Add";

const PostData = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const currentData = JSON.parse(localStorage.getItem("data")) || [];
    const newData = { title: title, body: body };
    currentData.push(newData);

    localStorage.setItem("data", JSON.stringify(currentData));

    setTitle("");
    setBody("");
  }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <Input
          placeholder={"Title..."}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          placeholder={"About..."}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <Add />
    </form>
  );
};

export default PostData;
