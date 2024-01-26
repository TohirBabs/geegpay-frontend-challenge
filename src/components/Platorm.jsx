import React from "react";

export const Platorm = ({}) => {
  const platformData = [
    {
      title: "book bazaar",
      progress: 50,
      amount: "2,500,000",
      percent: "15",
      color: "#6160dc",
    },
    {
      title: "artisan aile",
      progress: 40,
      amount: "1,800,000",
      percent: "10",
      color: "#54c5eb",
    },
    {
      title: "toy troop",
      progress: 30,
      amount: "1,200,000",
      percent: "8",
      color: "#ffb74a",
    },
    {
      title: "x store",
      progress: 25,
      amount: "500,000",
      percent: "6",
      color: "#ff4a55",
    },
  ];
  const PlatormItem = ({ data }) => {
    return (
      <div className="flex flex-col gap-2">
        <p className="capitalize font-semibold">{data.title}</p>
        <div className="rounded-full h-2 bg-[#f5f5f5]">
          <div
            style={{ width: `${data.progress}%`, background: data.color }}
            className="w-1/2 h-full bg-[#6160dc] rounded-full"
          ></div>
        </div>
        <div className="flex justify-between text-sm">
          <p>${data.amount}</p>
          <p>+{data.percent}%</p>
        </div>
      </div>
    );
  };

  return (
    <div className=" text-[#26282c]   flex-1">
      <div className="p-4 border shadow-md rounded-2xl bg-[#fff] flex flex-col gap-5 ">
        <div className="flex items-center justify-between">
          <p className="capitalize text-[#26282c] text-lg font-semibold">
            top platforms
          </p>
          <p>see all</p>
        </div>
        <div className="flex flex-col gap-4">
          {platformData.map((data, index) => (
            <PlatormItem key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};
