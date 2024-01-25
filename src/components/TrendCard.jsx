import React from "react";

export const TrendCard = ({ data }) => {
  return (
    <div className="border rounded-xl p-3 shadow-sm bg-[#fff] md:flex-1 w-max h-max flex flex-col gap-2 text-[#26282c]">
      <div className="flex justify-between items-center">
        <div className="p-2 border rounded-full ">
          <img src={`/src/assets/icons/${data.icon}.svg`} />
        </div>
        <div>
          {data.trendUp ? (
            <img src="/src/assets/icons/positive-graph.svg" />
          ) : (
            <img src="/src/assets/icons/negative-graph.svg" />
          )}
        </div>
      </div>
      <p className="text-xl">{data.title}</p>
      <p className="text-2xl">{data.quantity}</p>
      <div className="flex gap-2 items-center w-max text-xs">
        <p
          style={{
            background: data.trendUp ? "rgb(220 252 231)" : "rgb(255 220 230)",
            color: data.trendUp ? "#34caa5" : "#ed544e",
          }}
          className=" rounded-full px-3 p-1"
        >
          {data.trendUp ? (
            <img
              src="/src/assets/icons/trending-up.svg"
              className="inline mr-1"
            />
          ) : (
            <img
              src="/src/assets/icons/trending-down.svg"
              className="inline mr-1"
            />
          )}
          {data.percent}%
        </p>
        <p>vs prev. month</p>
      </div>
    </div>
  );
};
