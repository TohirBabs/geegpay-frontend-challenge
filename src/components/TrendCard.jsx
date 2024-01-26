import React from "react";

export const TrendCard = ({ data }) => {
  return (
    <div className="border rounded-2xl md:p-3 p-2 shadow bg-[#fff] md:flex-1 md:w-max flex-1 h-max flex flex-col md:gap-2 gap-1 text-[#26282c]">
      <div className="flex justify-between items-center">
        <div className="md:p-2 p-1 border rounded-full ">
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
      <p className="md:text-lg text-md text-[#898989] font-medium capitalize">
        {data.title}
      </p>
      <p className="md:text-2xl text-xl font-semibold">{data.quantity}</p>
      <div className="flex md:gap-2 gap-1 items-center w-max text-xs">
        <p
          style={{
            background: data.trendUp ? "rgb(220 252 231)" : "rgb(255 220 230)",
            color: data.trendUp ? "#34caa5" : "#ed544e",
          }}
          className=" rounded-full md:px-3 p-1"
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
        <p className="text-[#606060]">vs prev. month</p>
      </div>
    </div>
  );
};
