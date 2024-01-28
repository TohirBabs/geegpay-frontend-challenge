import { useState } from "react";

export const BarChart = () => {
  const [sortMonth, setSortMonth] = useState(true);
  const monthlySalesData = [
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
  const weeklySalesData = [
    { week: "week 1", sales: 18 },
    { week: "week 2", sales: 14 },
    { week: "week 3", sales: 20 },
    { week: "week 4", sales: 16 },
    { week: "week 5", sales: 3 },
  ];
  return (
    <div className=" text-[#26282c] ">
      <div className="lg:p-4 p-4 border rounded-2xl bg-[#fff] overflow-hidden max-w-[96vw] dark:bg-[#000] transition dark:border-gray-600/30  dark:text-[#fff] flex flex-col lg:gap-6 gap-3 shadow h-max lg:w-[55vw] w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <p className="capitalize text-[#26282c] dark:text-[#fff] lg:text-xl text-lg font-semibold">
              sales trends
            </p>
            {sortMonth ? (
              <span className="p-1 lg:rounded-xl text-xs lg:text-base rounded border dark:border-[#f5f5f5]/30 lg:px-4">
                2023
              </span>
            ) : (
              <span className="p-1 lg:rounded-xl rounded border dark:border-[#f5f5f5]/30 text-xs lg:text-base lg:px-4 ">
                2024{" "}
                <span className="font-bold text-[#26282c] dark:text-[#fff]">
                  - JAN
                </span>
              </span>
            )}
          </div>

          <div className="flex items-center lg:text-sm text-xs gap-2 pr-2 bg-[#f5f5f5] dark:bg-[#111111] transition p-1 relative rounded-xl">
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
        <div className="flex lg:gap-8 gap-4 py-2 text-xs relative ">
          {sortMonth ? (
            <div className="flex flex-col   pb-4 justify-between">
              <div className="flex items-center gap-4">
                <p>50,000</p>
                <div className="w-[88%] absolute left-[12%] border-t border-dashed dark:border-[#34caa5]/10"></div>
              </div>
              <div className="flex items-center gap-4">
                <p>40,000</p>
                <div className="w-[88%] absolute left-[12%] border-t border-dashed dark:border-[#34caa5]/10"></div>
              </div>
              <div className="flex items-center gap-4">
                <p>30,000</p>
                <div className="w-[88%] absolute left-[12%] border-t border-dashed dark:border-[#34caa5]/10"></div>
              </div>
              <div className="flex items-center gap-4">
                <p>20,000</p>
                <div className="w-[88%] absolute left-[12%] border-t border-dashed dark:border-[#34caa5]/10"></div>
              </div>
              <div className="flex items-center gap-4">
                <p>10,000</p>
                <div className="w-[88%] absolute left-[12%] border-t border-dashed dark:border-[#34caa5]/10"></div>
              </div>
              <div className="flex items-center gap-4">
                <p>0.0</p>
                <div className="w-[88%] absolute left-[12%] border-t border-dashed dark:border-[#34caa5]/10"></div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col  text-xs pb-4 justify-between">
              <div className="flex items-center gap-4">
                <p>25,000</p>
                <div className="w-[88%] absolute left-[12%] border-t border-dashed dark:border-[#34caa5]/10"></div>
              </div>
              <div className="flex items-center gap-4">
                <p>20,000</p>
                <div className="w-[88%] absolute left-[12%] border-t border-dashed dark:border-[#34caa5]/10"></div>
              </div>
              <div className="flex items-center gap-4">
                <p>15,000</p>
                <div className="w-[88%] absolute left-[12%] border-t border-dashed dark:border-[#34caa5]/10"></div>
              </div>
              <div className="flex items-center gap-4">
                <p>10,000</p>
                <div className="w-[88%] absolute left-[12%] border-t border-dashed dark:border-[#34caa5]/10"></div>
              </div>
              <div className="flex items-center gap-4">
                <p>5,000</p>
                <div className="w-[88%] absolute left-[12%] border-t border-dashed dark:border-[#34caa5]/10"></div>
              </div>
              <div className="flex items-center gap-4">
                <p>0.0</p>
                <div className="w-[88%] absolute left-[12%] border-t border-dashed dark:border-[#34caa5]/10"></div>
              </div>
            </div>
          )}

          <div className="flex flex-1 justify-between items-end text-[#525252] capitalize relative  z-20 lg:h-72 h-[14rem]">
            {sortMonth
              ? monthlySalesData.map((data, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center md:gap-2 gap-2 relative bottom-0"
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
                      style={{ height: `${(data.sales / 50) * 14 - 2}rem` }}
                      className="lg:w-7 w-[2vw] lg:hidden  rounded-t-full bg-[#34caa5]/50"
                    ></div>
                    <p className="text-[#52525]">{data.month}</p>
                  </div>
                ))
              : weeklySalesData.map((data, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center md:gap-2 relative bottom-0"
                  >
                    <div
                      style={{ height: `${data.sales * 0.65}rem` }}
                      className="group lg:w-24 w-3 hidden lg:block rounded-t-full bg-[#34caa5]/20 hover:bg-gradient-to-b hover:from-[#34caa5] hover:to-[#34caa5]/10 hover:to-70% cursor-pointer"
                    >
                      <span className="group-hover:visible invisible absolute z-10 left-[10%] -top-10  w-20 rounded-md text-center bg-[#26282c] text-[#fff] bg-opacity-90 p-2">
                        ${data.sales},000
                      </span>
                    </div>
                    <div
                      style={{ height: `${data.sales * 0.4}rem` }}
                      className="lg:w-7 w-8 lg:hidden  rounded-t-full bg-[#34caa5]/50"
                    ></div>
                    <p className="text-[#52525]">{data.week}</p>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};
