import React from "react";
import styled from "styled-components";
import MultilevelMenu from "../molecules/multilevelItems";
import Breadcrumb from "../molecules/breadcrumb";
import userInfo from "../static/images/userInfo.png";
import { FaEdit } from "react-icons/fa";

const UserDetailsPage = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://example.com/user-avatar.jpg",
    // Add more user details as needed
  };

  const breadcrumbItems = [
    { text: "Home", link: "/" },
    { text: "UserProfile" },
  ];

  const data = [
    { id: "Full Name", name: "John Doe" },
    { id: "Email", name: "Jane.Smith@example.com" },
    { id: "Phone", name: "123456789" },
    { id: "Mobile", name: "987654321" },
    { id: "Address", name: "San Frasico" },
    // Add more data as needed
  ];

  const records = [
    { id: "Appointment History" },
    { id: "Medical Reports" },
    { id: "Lab Tests" },
    { id: "Wallet Balance" },
    { id: "Signout" },
    // Add more data as needed
  ];

  const TopDetails = styled.div`
    background: white;
    margin: 20px;
    padding: 30px;
    flex: 0.5;
    border-radius: 15px;
  `;

  const UserSection = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const MidSection = styled.div`
    display: flex;
    width: 100%;
    margin: 16px;
  `;

  const BreadCrumbs = styled.div`
    text-align: left;
  `;

  const Address = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: white;
    padding: 10px;
    margin: 20px;
    align-self: center;
    flex: 1 1 auto;
    border-radius: 15px;
  `;

  const BottomData = styled.div`
    background-color: white;
    margin: 20px;
    display: flex;
    justify-content: center;
    width: 40%;
    border-radius: 15px;
  `;

  const TableSection = styled.div``;

  const Table = styled.table`
    td {
      border-bottom: 1px solid #ddd; /* Border color */
      padding: 8px;
      text-align: left;
    }
  `;

  const Records = styled.table`
    td {
      border-bottom: 1px solid #ddd; /* Border color */
      padding: 8px;
      text-align: left;
    }
  `;

  return (
    <UserSection>
      <BreadCrumbs>
        <Breadcrumb items={breadcrumbItems} />
      </BreadCrumbs>
      <MidSection>
        <TopDetails>
          <div>
            <img
              src={userInfo}
              className="avatar"
              style={{
                width: "50px",
                height: "50px",
                border: "1px black solid",
                borderRadius: "50%",
                padding: "5px",
              }}
              alt={`${user.name}'s Avatar`}
            />
          </div>
          <div>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            {/* Add more user details as needed */}
          </div>
        </TopDetails>
        <Address>
          <TableSection>
            <Table>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </TableSection>
          <FaEdit />
        </Address>
      </MidSection>
      {/* <MultilevelMenu data={menuData} /> */}
      <BottomData>
        <Records>
          <tbody>
            {records.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
              </tr>
            ))}
          </tbody>
        </Records>
      </BottomData>
    </UserSection>
  );
};

export default UserDetailsPage;
