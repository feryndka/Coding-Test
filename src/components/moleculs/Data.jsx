"use client";

import { useEffect, useState } from "react";
import DeleteData from "./DeleteData";

const Data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("data"));
    setData(storage);
  }, []);

  return (
    <div className="gap-5 grid md:grid-cols-4 my-5">
      {data && data.length > 0
        ? data.map((item, index) => {
            return (
              <div
                key={index}
                className="border border-[#A35709] flex justify-between items-center rounded-lg bg-[#242320] p-[16px]"
              >
                <div className="flex flex-col gap-1">
                  <h1 className="text-xl">{item.title}</h1>
                  <h4 className="text-xs">{item.body}</h4>
                </div>
                <DeleteData title={item.title} body={item.body} />
              </div>
            );
          })
        : "Data not found"}
    </div>
  );
};

export default Data;
