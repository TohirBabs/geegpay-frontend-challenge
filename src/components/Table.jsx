import React from "react";
import marcus from "../assets/images/marcus.png";
import jaydon from "../assets/images/jaydon.png";
import corey from "../assets/images/corey.png";
import cooper from "../assets/images/cooper.png";
import phillip from "../assets/images/phillip.png";

export const Table = () => {
  const headers = ["name", "date", "amount", "status", "invoice"];
  const tableData = [
    {
      img: marcus,
      name: "marcus bergson",
      date: "nov 15, 2023",
      amount: "80,000",
      status: "paid",
    },
    {
      img: jaydon,
      name: "jaydon vaccaro",
      date: "nov 15, 2023",
      amount: "150,000",
      status: "refund",
    },
    {
      img: corey,
      name: "corey schleifer",
      date: "nov 14, 2023",
      amount: "87,000",
      status: "paid",
    },
    {
      img: cooper,
      name: "cooper press",
      date: "nov 14, 2023",
      amount: "100,000",
      status: "refund",
    },
    {
      img: phillip,
      name: "phillip lubin",
      date: "nov 13, 2023",
      amount: "78,000",
      status: "paid",
    },
  ];

  const TableRow = ({ data }) => {
    return (
      <tr className="lg:h-14 h-12 border-t text-sm capitalize">
        <td className="text-[#3a3f51] font-semibold ">
          <img src={data.img} alt="" className="inline mr-2 align-middle" />
          {data.name}
        </td>
        <td className="text-[#737373] ">{data.date}</td>
        <td className="text-[#0d062d] font-medium ">${data.amount}</td>
        {/* <FormattedDate date={data.createdAt} /> */}
        <td
          style={{ color: data.status === "paid" ? "#34caa5" : "#ed544e" }}
          className="text-sm"
        >
          <p>{data.status}</p>
        </td>
        <td>
          <button className="p-2 py-1 rounded-full hover:bg-[#26282c]/10">
            <img
              src="/src/assets/icons/document-download.svg"
              alt=""
              className="inline mr-2"
            />
            view
          </button>
        </td>
      </tr>
    );
  };
  return (
    <div className=" text-[#26282c]  dark:text-[#fff] overflow-x-scroll lg:overflow-hidden w-[95vw] md:w-[98vw] lg:w-[55vw]">
      <div className="p-3 lg:p-4 border  rounded-2xl bg-[#fff] transition dark:bg-[#1e2020] dark:border-[#34caa5]/10 flex flex-col lg:gap-5 gap-3 h-max min-w-[600px] ">
        <div className="flex items-center justify-between">
          <p className="capitalize text-[#26282c] dark:text-[#fff] lg:text-xl text-lg font-semibold">
            latest orders
          </p>
          <button className="text-[#34caa5] px-3 hover:bg-[#34caa5]/10 p-1 rounded-full">
            see all
          </button>
        </div>
        <table>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th
                  className="text-left text-[#9ca4ab] capitalize font-medium h-12"
                  key={index}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <TableRow key={index} data={data} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
