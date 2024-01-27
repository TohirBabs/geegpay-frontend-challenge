import { useState } from "react";

export const BarChart = () => {
  const [sortMonth, setSortMonth] = useState(true);
  const salesData = [
    { month: "jan", sales: 22 },
    { month: "feb", sales: 42 },
    { month: "mar", sales: 30 },
    { month: "apr", sales: 25 },
    { month: "may", sales: 18 },
    { month: "jun", sales: 35 },
    { month: "jul", sales: 20 },
    { month: "aug", sales: 47 },
    { month: "sep", sales: 35 },
    { month: "oct", sales: 41 },
    { month: "nov", sales: 25 },
    { month: "dec", sales: 26 },
  ];
  return (
    <div className=" text-[#26282c] ">
      <div className="lg:p-4 p-3 border rounded-2xl bg-[#fff] overflow-hidden max-w-[96vw] dark:bg-[#000] transition dark:border-[#34caa5]/10 dark:text-[#fff] flex flex-col lg:gap-6 gap-3 shadow h-max lg:w-[55vw] w-full">
        <div className="flex items-center justify-between">
          <p className="capitalize text-[#26282c] dark:text-[#fff] text-xl font-semibold">
            sales trends
          </p>
          <div className="flex items-center text-sm gap-2 pr-2 bg-[#f5f5f5] dark:bg-[#111111] transition p-1 relative rounded-xl">
            <div
              style={{ left: sortMonth ? "4px" : "5rem" }}
              className="w-[4.3rem] h-7 rounded-lg bg-white dark:bg-[#000] border dark:border-[#f5f5f5]/20  absolute transition-all"
            ></div>
            <button
              onClick={() => setSortMonth(true)}
              className="p-1 px-2 rounded-lg  z-10"
            >
              monthly
            </button>
            <button
              onClick={() => setSortMonth(false)}
              className="p-1 px-2 rounded-lg  z-10"
            >
              weekly
            </button>
          </div>
        </div>
        <div className="flex lg:gap-8 gap-4 text-xs relative ">
          <div className="flex flex-col   pb-4 justify-between">
            <div className="flex items-center gap-4">
              <p>50,000</p>
              <div className="w-[92%] absolute left-[8%] border-t border-dashed dark:border-[#34caa5]/10"></div>
            </div>
            <div className="flex items-center gap-4">
              <p>40,000</p>
              <div className="w-[92%] absolute left-[8%] border-t border-dashed dark:border-[#34caa5]/10"></div>
            </div>
            <div className="flex items-center gap-4">
              <p>30,000</p>
              <div className="w-[92%] absolute left-[8%] border-t border-dashed dark:border-[#34caa5]/10"></div>
            </div>
            <div className="flex items-center gap-4">
              <p>20,000</p>
              <div className="w-[92%] absolute left-[8%] border-t border-dashed dark:border-[#34caa5]/10"></div>
            </div>
            <div className="flex items-center gap-4">
              <p>10,000</p>
              <div className="w-[92%] absolute left-[8%] border-t border-dashed dark:border-[#34caa5]/10"></div>
            </div>
            <div className="flex items-center gap-4">
              <p>0.0</p>
              <div className="w-[92%] absolute left-[8%] border-t border-dashed dark:border-[#34caa5]/10"></div>
            </div>
          </div>
          <div className="flex flex-1 justify-between items-end text-[#525252] capitalize relative min-w-[600px]  z-20 lg:h-72 h-[11rem]">
            {salesData.map((data, index) => (
              <div
                key={index}
                className="flex flex-col items-center md:gap-2 relative bottom-0"
              >
                <div
                  style={{ height: `${(data.sales / 50) * 18 - 2}rem` }}
                  className="group lg:w-8 w-3 hidden lg:block rounded-t-full bg-[#34caa5]/20 hover:bg-gradient-to-b hover:from-[#34caa5] hover:to-[#34caa5]/10 hover:to-70% cursor-pointer"
                >
                  <span className="group-hover:visible invisible absolute z-10 -left-[57%] -top-10  w-20 rounded-md text-center bg-[#26282c] text-[#fff] bg-opacity-90 p-2">
                    ${data.sales},000
                  </span>
                </div>
                <div
                  style={{ height: `${(data.sales / 50) * 12 - 2}rem` }}
                  className="lg:w-7 w-8 lg:hidden  rounded-t-full bg-[#34caa5]/50"
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
