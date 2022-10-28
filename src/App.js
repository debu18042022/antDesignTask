import { Table } from "antd";
import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: () => <a>Delete</a>,
  },
];


const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
      });
  }, []);

  let data = users && users.map((i) => {
      return {
        key: i.id,
        name: i.name,
        phone: i.phone,
        address: i.address.city,
        description: [i.company.name, i.company.catchPhrase, i.company.bs],
      };
    });

  return (
    <Table
      columns={columns}
      dataSource={data}
    />
  );
};
export default App;
