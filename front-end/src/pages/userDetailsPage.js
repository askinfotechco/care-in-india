import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MultilevelMenu from "../molecules/multilevelItems";
import Breadcrumb from "../molecules/breadcrumb";
import userInfo from "../static/images/userInfo.png";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import { useCookies } from "react-cookie";
import { URL } from "../connection";
import ModalComponent from "../molecules/modal";

const UserDetailsPage = () => {
  const [cookies, setCookie, removeCookie] = useCookies("jwt");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const dataToSend = { email: sessionStorage.getItem("email") };
        const response = await axios.post(`${URL}/auth/user/byid`, dataToSend, {
          headers: {
            Authorization: "Bearer " + cookies.jwt,
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        });
        setUser(response.data.user);
      } catch (err) {
        console.log("request not wokring", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // const user = {
  //   name: "John Doe",
  //   email: "john.doe@example.com",
  //   avatar: "https://example.com/user-avatar.jpg",
  //   // Add more user details as needed
  // };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const breadcrumbItems = [
    { text: "Home", link: "/" },
    { text: "UserProfile" },
  ];

  const data = [
    { id: "Full Name", name: `${user?.firstname} ${user?.lastname}` },
    { id: "Email", name: user?.email },
    { id: "Phone", name: user?.phone ? user.phone : " - " },
    { id: "Address", name: user?.address ? user.address : " - " },
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
    <>
      <ModalComponent
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        user={user}
      />
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
                alt={`${user?.firstname} ${user?.lastname}'s Avatar`}
              />
            </div>
            <div>
              <h2>{`${user?.firstname}`}</h2>
              <p>Email: {user?.email}</p>
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
                    </tr>
                  ))}
                </tbody>
              </Table>
            </TableSection>
            <FaEdit style={{ cursor: "pointer" }} onClick={openModal} />
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
                </tr>
              ))}
            </tbody>
          </Records>
        </BottomData>
      </UserSection>
    </>
  );
};

export default UserDetailsPage;
