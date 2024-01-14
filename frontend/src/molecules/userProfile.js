import React, { useEffect, useState } from "react";
import userInfo from "../assets/image/userInfo.png";

const UserProfile = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setName(sessionStorage.getItem("name"));
    setEmail(sessionStorage.getItem("email"));
  });

  return (
    <div
      className="user-profile-dropdown"
      style={{
        position: "relative",
        display: "inline-block",
      }}
    >
      <div
        className="profile-button"
        style={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
        }}
        onClick={toggleDropdown}
      >
        <img
          src={userInfo}
          alt="User Avatar"
          className="avatar"
          style={{
            borderRadius: "50%",
            marginRight: "8px",
            width: "32px",
            height: "32px",
          }}
        />
        <span className="username" style={{ fontWeight: "bold" }}>
          {name}
        </span>
      </div>
      {isOpen && (
        <div
          className="dropdown-content"
          onBlur={closeDropdown}
          tabIndex="0"
          style={{
            position: "absolute",
            top: "40px",
            right: 0,
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "4px",
            background: "#fff",
            padding: "8px",
            zIndex: 1,
          }}
        >
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
            }}
          >
            <li
              style={{
                padding: "8px",
                cursor: "pointer",
                borderBottom: "1px solid #ccc",
              }}
            >
              Profile
            </li>
            <li
              style={{
                padding: "8px",
                cursor: "pointer",
                borderBottom: "1px solid #ccc",
              }}
            >
              Settings
            </li>
            <li
              style={{
                padding: "8px",
                cursor: "pointer",
              }}
              onClick={props.handleLogout}
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
