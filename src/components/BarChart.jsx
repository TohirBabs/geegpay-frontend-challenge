import React from "react";

export const BarChart = () => {
  const salesData = [
    { month: "jan", sales: 22 },
    { month: "feb", sales: 18 },
    { month: "mar", sales: 9},
    { month: "apr", sales: 25 },
    { month: "may", sales: 16 },
    { month: "jun", sales: 30 },
    { month: "jul", sales: 20 },
    { month: "aug", sales: 50 },
    { month: "sep", sales: 35 },
    { month: "oct", sales: 31 },
    { month: "nov", sales: 12 },
    { month: "dec", sales: 26 },
  ];
  return (
    <div className=" text-[#26282c]">
      <div className="p-4 border rounded-2xl bg-[#fff] flex flex-col gap-6 h-max w-[55vw]">
        <div className="flex items-center justify-between">
          <p className="capitalize text-[#26282c] text-xl font-bold">sales trends</p>
          <div className="flex items-center gap-2 text-sm">
            <p>sort by:</p>
            <div className="p-1 px-2 rounded-full border">weekly</div>
          </div>
        </div>
        <div className="flex gap-8 text-xs relative">
          <div className="flex flex-col pb-4 justify-between">
            <div className="flex items-center gap-4">
              <p>50.0</p>
              <div className="w-[92%] absolute left-[8%] border-t border-dashed"></div>
            </div>{" "}
            <div className="flex items-center gap-4">
              <p>40.0</p>
              <div className="w-[92%] absolute left-[8%] border-t border-dashed"></div>
            </div>
            <div className="flex items-center gap-4">
              <p>30.0</p>
              <div className="w-[92%] absolute left-[8%] border-t border-dashed"></div>
            </div>
            <div className="flex items-center gap-4">
              <p>20.0</p>
              <div className="w-[92%] absolute left-[8%] border-t border-dashed"></div>
            </div>
            <div className="flex items-center gap-4">
              <p>10.0</p>
              <div className="w-[92%] absolute left-[8%] border-t border-dashed"></div>
            </div>
            <div className="flex items-center gap-4">
              <p>0.0</p>
              <div className="w-[92%] absolute left-[8%] border-t border-dashed"></div>
            </div>
          </div>
          <div
            className="flex flex-1 justify-between items-end text-[#525252] capitalize
         relative h-72"
          >
            {salesData.map((data, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 relative bottom-0"
              >
                <div
                  style={{ height: `${(data.sales / 50) * 18 - 2}rem` }}
                  className="w-7 h-20 rounded-t-full bg-green-200/50"
                ></div>
                <p>{data.month}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};