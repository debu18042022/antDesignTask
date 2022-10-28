import { Table } from "antd";
import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";

const App = () => {
  const [users, setUsers] = useState([]);
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
      dataIndex: "action",
      key: "x",
      
    },
  ];
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
      });
  }, []);

  let data =
    users &&
    users.map((i, index) => {
      return {
        key: i.id,
        name: i.name,
        phone: i.phone,
        address: i.address.city,
        description: [i.company.name, i.company.catchPhrase, i.company.bs],
        action: <button onClick={(e) => RemoveUsers(index)}>Delete</button>,
      };
    });

  const RemoveUsers = (index) => {
    alert(index);
    let tempUsers = [...users];
    tempUsers.splice(index, 1);
    setUsers(tempUsers);
  };
  console.log("data", data);

  return (
    <Table
      expandable={{
        expandedRowRender: (record) => (
          <p style={{ margin: 0 }}>{record.description}</p>
        ),
        rowExpandable: (record) => record.name !== "Not Expandable",
      }}
      columns={columns}
      dataSource={data}
    />
  );
};
export default App;
