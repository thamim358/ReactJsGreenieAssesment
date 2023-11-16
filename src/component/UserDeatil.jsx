import React, { useEffect, useState } from "react";
import { Table, Input, Modal, Button } from "antd";

const { Search } = Input;

const UserDetails = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [openModal, setopenModal] = useState(false);
  const [selectRow, setselectRow] = useState(null);

  useEffect(() => {
    const data = [
      {
        id: 1,
        username: "thamim ",
        email: "thamim358@gmai.com",
        phone: "1234567890",
        creationDate: "2023-11-15",
      },
      {
        id: 2,
        username: "siva kumar",
        email: "siva12@gmail.com",
        phone: "1234567890",
        creationDate: "2023-11-15",
      },
      {
        id: 3,
        username: "aravind",
        email: "aravind12@gmail.com",
        phone: "1234567890",
        creationDate: "2023-11-15",
      },
      {
        id: 4,
        username: "arun",
        email: "arun12@gmail.com",
        phone: "1234567890",
        creationDate: "2023-11-15",
      },
      {
        id: 5,
        username: "hari",
        email: "hari12@gmail.com",
        phone: "1234567890",
        creationDate: "2023-11-15",
      },
    ];
    setUsers(data);
  }, []);

  const searchUser = users.filter(
    (user) =>
      user.username.toLowerCase().includes(search.toLowerCase()) ||
      user.id.toString().includes(search.toLowerCase())
  );
  const generateReport = () => {
    console.log("Generating report for user:", selectRow);
    alert("Report Generated");
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },

    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Creation Date",
      dataIndex: "creationDate",
      key: "creationDate",
    },
  ];

  const handleModal = (user) => {
    setselectRow(user);
    setopenModal(true);
  };

  return (
    <>
      <div className="flex justify-between">
        <div className="text-left font-bold text-green-500 text-4xl ">
          User Dashboard
        </div>
        <Search
          size="large"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Users"
          className="flex justify-end mb-4 w-56 shadow-xl bg-green-500 border ring-2 ring-green-500 rounded-lg  "
        />
      </div>

      <div className="overflow-y-auto max-h-full">
        <div className="p-10 rounded-lg drop-shadow-lg bg-white text-bold mt-5">
          <div className="text-left font-bold text-green-500 text-2xl pb-3">
            User Details
          </div>

          <div className="overflow-x-auto shadow-xl cursor">
            <Table
              className="rounded-2xl bg-gray-100 cursor rounded-2xl "
              dataSource={searchUser}
              columns={columns}
              rowKey={(record) => record.id}
              onRow={(record) => ({
                onClick: () => handleModal(record),
              })}
            />
          </div>
          <Modal
            title="User Details"
            visible={openModal}
            onCancel={() => setopenModal(false)}
            footer={[
              <button
                key="generateReport"
                onClick={generateReport}
                className="rounded-2xl bg-green-500 p-2 text-white font-bold hover:bg-green-400"
              >
                Generate Report
              </button>,
            ]}
          >
            {selectRow && (
              <div>
                <p className="mt-2">
                  <strong>ID:</strong> {selectRow.id}
                </p>
                <p className="mt-2">
                  <strong>Username:</strong> {selectRow.username}
                </p>
                <p className="mt-2">
                  <strong>Email:</strong> {selectRow.email}
                </p>
                <p className="mt-2">
                  <strong>Phone:</strong> {selectRow.phone}
                </p>

                <p className="mt-2">
                  <strong>Creation Date:</strong> {selectRow.creationDate}
                </p>
              </div>
            )}
          </Modal>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
