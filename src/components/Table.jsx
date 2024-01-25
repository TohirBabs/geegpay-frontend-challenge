import React from 'react'

export const Table = () => {

    const tableData = [
        { name: "marcus bergson", date: "nov 12, 2023", amount: 80000, status: "paid" },
        { name: "marcus bergson", date: "nov 12, 2023", amount: 80000, status: "paid" },
        { name: "marcus bergson", date: "nov 12, 2023", amount: 80000, status: "paid" },
        { name: "marcus bergson", date: "nov 12, 2023", amount: 80000, status: "paid" },
        { name: "marcus bergson", date: "nov 12, 2023", amount: 80000, status: "paid" },
        
    ]

    const TableRow = ({ key, data }) => {
    

    return (
      <tr key={key}>
        <td>{data.name}</td>
        <td>{data.date}</td>
        <td>{data.amount}</td>
        {/* <FormattedDate date={data.createdAt} /> */}
        <td className="">
          <p>{data.status}</p>
        </td>
        {/* <td>
          <img src={dots_icon} onClick={() => setShowMenu((show) => !show)} />
          {showMenu && (
            <div className="row_menu" onClick={() => setShowMenu(false)}>
              <NavLink to={data.id}>
                <img src={view_icon} />
                <p>view details</p>
              </NavLink>
              <button onClick={() => setStatus("blacklisted")}>
                <img src={cancel_user_icon} />
                <p>blacklist user</p>
              </button>
              <button onClick={() => setStatus("active")}>
                <img src={activate_user_icon} />
                <p>activate</p>
              </button>
            </div>
          )}
        </td> */}
      </tr>
    );

  };
  return (
    <div className=" text-[#26282c]">
          <div className="p-4 border rounded-2xl bg-[#fff] flex flex-col gap-6 h-max md:w-[55vw]">
              <div className="flex items-center justify-between">
          <p className="capitalize text-[#26282c] text-xl font-semibold">latest orders</p>
            <p>see all</p>
              </div>
              <table>
          {/* <thead>
            <tr>
              {headers.map((header, index) => (
                <TableHeader key={index} header={header} />
              ))}
            </tr>
          </thead> */}
          <tbody>
            {tableData.map((data, index) => (
              <TableRow key={index} data={data} />
            ))}
          </tbody>
        </table>
          </div>
      </div>
  )
}
