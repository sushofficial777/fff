import React, { useMemo,  useEffect } from "react";
// import CardMenu from "components/card/CardMenu";
import Card from "components/card";
// import Checkbox from "components/checkbox";
import { Link } from "react-router-dom";


import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

const CheckTable = (props) => {
  const { columnsData, tableData } = props;

  console.log(tableData);

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);
  // const [user, setUser] = useState("");

  // Getting User Data start......
  const fetchDta = () => {
    fetch('/admin/user/list/').then((res) => {
        // console.log(res);
        return res.json();
    }).then((userdata) => {
        const userData = userdata;
        // setUser(userData);
        console.log(userData);
    })
}

useEffect(() => {
  fetchDta();
}, [])
  // Getting User Data end........

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 11;

  return (
    <Card extra={" w-full sm:overflow-auto p-4"}>
      <header className="relative flex items-center justify-between ">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          User Data
        </div>

        <Link to='/admin/users/add'><button className="bg-gray-200 p-1  rounded-md dark:text-white dark:bg-navy-900 px-3"  >add user</button></Link>
      </header>

      <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
        <table
          {...getTableProps()}
          className="w-full"
          variant="simple"
          color="gray-500"
          mb="24px"
        >
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700"
                    key={index}
                  >
                    <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                      {column.render("Header")}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
             
              return (
                <tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => {
                     console.log(cell);
                    let data = "";
                    if (cell.column.Header === "NAME") {
                      data = (
                        <div className="flex items-center gap-2">
                          {/* <Checkbox /> */}
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                            {cell.value[0]}
                          </p>
                        </div>
                      );
                    } else if (cell.column.Header === "PROGRESS") {
                      data = (
                        <div className="flex items-center">
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                            {cell.value}%
                          </p>
                        </div>
                      );
                    } else if (cell.column.Header === "QUANTITY") {
                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {" "}
                          {cell.value}{" "}
                        </p>
                      );
                    } else if (cell.column.Header === "DATE") {
                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {cell.value}
                        </p>
                      );
                    }
                    return (
                      <td
                        {...cell.getCellProps()}
                        key={index}
                        className="pt-[14px] pb-[16px] sm:text-[14px]"
                      >
                        {data}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default CheckTable;
