import React from "react";

export const BarChart = () => {
  const salesData = [
    { month: "jan", sales: 22 },
    { month: "feb", sales: 18 },
    { month: "mar", sales: 9 },
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
    <div className=" text-[#26282c] ">
      <div className="lg:p-4 p-2 border rounded-2xl bg-[#fff] dark:bg-[#1e2020] transition dark:border-[#34caa5]/10 dark:text-[#fff] flex flex-col lg:gap-6 gap-3 shadow h-max lg:w-[55vw] w-full">
        <div className="flex items-center justify-between">
          <p className="capitalize text-[#26282c] dark:text-[#fff] text-xl font-semibold">
            sales trends
          </p>
          <div className="flex items-center gap-2 text-sm">
            <p>sort by:</p>
            <div className="p-1 px-2 rounded-full border">weekly</div>
          </div>
        </div>
        <div className="flex lg:gap-8 gap-4 text-xs relative">
          <div className="lg:flex flex-col hidden  pb-4 justify-between">
            <div className="flex items-center gap-4">
              <p>50.0</p>
              <div className="w-[92%] absolute left-[8%] border-t border-dashed dark:border-[#34caa5]/10"></div>
            </div>
            <div className="flex items-center gap-4">
              <p>40.0</p>
              <div className="w-[92%] absolute left-[8%] border-t border-dashed dark:border-[#34caa5]/10"></div>
            </div>
            <div className="flex items-center gap-4">
              <p>30.0</p>
              <div className="w-[92%] absolute left-[8%] border-t border-dashed dark:border-[#34caa5]/10"></div>
            </div>
            <div className="flex items-center gap-4">
              <p>20.0</p>
              <div className="w-[92%] absolute left-[8%] border-t border-dashed dark:border-[#34caa5]/10"></div>
            </div>
            <div className="flex items-center gap-4">
              <p>10.0</p>
              <div className="w-[92%] absolute left-[8%] border-t border-dashed dark:border-[#34caa5]/10"></div>
            </div>
            <div className="flex items-center gap-4">
              <p>0.0</p>
              <div className="w-[92%] absolute left-[8%] border-t border-dashed dark:border-[#34caa5]/10"></div>
            </div>
          </div>
          <div className="flex flex-1 justify-between items-end text-[#525252] capitalize relative z-20 lg:h-72 h-56">
            {salesData.map((data, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 relative bottom-0"
              >
                <div
                  style={{ height: `${(data.sales / 50) * 18 - 2}rem` }}
                  className="group lg:w-8 w-3 hidden lg:block rounded-t-full bg-[#34caa5]/20 hover:bg-gradient-to-b hover:from-[#34caa5] hover:to-[#34caa5]/10 hover:to-70% cursor-pointer"
                >
                  <span className="group-hover:visible invisible absolute z-10 -left-[50%] -top-10 after:absolute after:top-[100%] after:left-[50%] after:-mt-[5px] after:border-b-[#26282c] after:border-transparent after:border-[5px] w-20 rounded-md text-center bg-[#26282c] bg-opacity-80 p-2">
                    {data.sales}
                  </span>
                </div>
                <div
                  style={{ height: `${(data.sales / 50) * 12 - 2}rem` }}
                  className="lg:w-7 w-[4vw] lg:hidden  rounded-t-full bg-[#34caa5]/50"
                ></div>
                <p className="text-[#52525]">{data.month}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
