import React from "react";

export const Table = () => {
  const headers = ["name", "date", "amount", "status", "invoice"];
  const tableData = [
    {
      name: "marcus bergson",
      date: "nov 15, 2023",
      amount: "80,000",
      status: "paid",
    },
    {
      name: "jaydon vaccaro",
      date: "nov 15, 2023",
      amount: "150,000",
      status: "refund",
    },
    {
      name: "corey schleifer",
      date: "nov 14, 2023",
      amount: "87,000",
      status: "paid",
    },
    {
      name: "cooper press",
      date: "nov 14, 2023",
      amount: "100,000",
      status: "refund",
    },
    {
      name: "phillip lubin",
      date: "nov 13, 2023",
      amount: "78,000",
      status: "paid",
    },
  ];

  const TableRow = ({ data }) => {
    return (
      <tr className="md:h-14 h-12 border-t capitalize">
        <td>
          <img
            src={`/src/assets/images/${data.name}.png`}
            alt=""
            className="inline mr-2 align-middle"
          />
          {data.name}
        </td>
        <td className="text-[#737373] text-sm">{data.date}</td>
        <td className="text-[#0d062d]">${data.amount}</td>
        {/* <FormattedDate date={data.createdAt} /> */}
        <td
          style={{ color: data.status === "paid" ? "#34caa5" : "#ed544e" }}
          className=""
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
    <div className=" text-[#26282c]  overflow-x-scroll md:overflow-hidden w-[95vw] md:w-[55vw]">
      <div className="p-3 md:p-4 border rounded-2xl bg-[#fff] flex flex-col md:gap-5 gap-3 h-max min-w-[700px] ">
        <div className="flex items-center justify-between">
          <p className="capitalize text-[#26282c] md:text-xl text-lg font-semibold">
            latest orders
          </p>
          <button className="text-[#34caa5] px-3">see all</button>
        </div>
        <table>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th
                  className="text-left text-[#9ca4ab] capitalize font-semibold md:h-14 h-12"
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
