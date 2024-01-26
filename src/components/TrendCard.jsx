import positiveGraph from "../assets/images/positive-graph.svg";
import negativeGraph from "../assets/images/negative-graph.svg";
import { TrendingUp } from "../assets/icons/TrendingUp";
import { TrendingDown } from "../assets/icons/TrendingDown";


export const TrendCard = ({ data }) => {
  return (
    <div className="border rounded-2xl md:p-3 p-2 shadow hover:shadow-md bg-[#fff] md:flex-1 md:w-max flex-1 h-max flex flex-col md:gap-2 gap-1 text-[#26282c]">
      <div className="flex justify-between items-center">
        <div className="md:p-2 p-1 border rounded-full ">
          {data.icon}
        </div>
        <div>
          <img src={data.trendUp ? positiveGraph : negativeGraph} alt="" />
        </div>
      </div>
      <p className="md:text-lg text-md text-[#898989] font-medium capitalize">
        {data.title}
      </p>
      <p className="md:text-2xl text-xl font-semibold">{data.quantity}</p>
      <div className="flex md:gap-2 gap-1 items-center w-max text-xs">
        <div
          style={{
            background: data.trendUp ? "rgb(220 252 231)" : "rgb(255 220 230)",
            color: data.trendUp ? "#34caa5" : "#ed544e",
          }}
          className=" rounded-full md:px-3 p-1 flex items-center gap-1"
        >
          {data.trendUp ? (
            <TrendingUp/>
          ) : (
            <TrendingDown/>
          )}
         <p> {data.percent}%</p>
        </div>
        <p className="text-[#606060]">vs prev. month</p>
      </div>
    </div>
  );
};
