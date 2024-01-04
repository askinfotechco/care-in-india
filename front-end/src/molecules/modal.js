import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PrimaryButton from "../atoms/primaryButton";

const ModalComponent = (props) => {
  //   const openModal = () => {
  //     setModalOpen(true);
  //   };

  /* Add this CSS to your stylesheet or component */
  const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Modal = styled.div`
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    max-width: 400px;
    width: 100%;
  `;

  const Close = styled.span`
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    cursor: pointer;
    color: #333;
    background: #fff;
    padding: 5px;
  `;

  const Wrapper = styled.form`
    margin: auto;
    padding: 8% 8%;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-size: 24px;
  `;

  const Heading = styled.div`
    margin: auto;
    margin-bottom: 32px;
    color: #000;
    text-align: center;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 72px; /* 200% */
    letter-spacing: -0.54px;
  `;

  const Label = styled.div`
    display: block;
    margin-bottom: 24px;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px; /* 150% */
    letter-spacing: -0.36px;
  `;

  const CheckBoxLabel = styled.div`
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: -0.36px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
  `;

  const CheckBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: -18px;
    padding: 0 20%;
  `;

  const Input = styled.input`
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  `;

  //   const closeModal = () => {
  //     setModalOpen(false);
  //   };

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    email: "",
    address: "",
    country: "",
    city: "",
    pincode: "",
    phone: "",
  });

  useEffect(() => {
    setFormData({
      firstname: props.user?.firstname,
      lastname: props.user?.lastname,
      gender: props.user?.gender,
      email: props.user?.email,
      address: props.user?.address,
      country: props.user?.country,
      city: props.user?.city,
      pincode: props.user?.pincode,
      phone: props.user?.phone,
    });
  }, [props.user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      {props.isModalOpen && (
        <ModalOverlay>
          <Modal>
            <Close className="close" onClick={props.closeModal}>
              close &times;
            </Close>
            <Wrapper>
              <Input
                type="text"
                name="firstname"
                placeholder="First name"
                value={formData.firstname}
                onChange={handleChange}
                style={{ width: "47%", marginRight: "3%" }}
              />
              <Input
                type="text"
                name="lastname"
                placeholder="Last name"
                value={formData.lastname}
                onChange={handleChange}
                style={{ width: "47%", marginLeft: "3%" }}
              />
              <br />
              <Input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                disabled={true}
                //onChange={handleChange}
              />
              <br />
              <CheckBox>
                <CheckBoxLabel>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleChange}
                  />
                  {"Male"}
                </CheckBoxLabel>
                <CheckBoxLabel>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                  />
                  {"Female"}
                </CheckBoxLabel>
                <CheckBoxLabel>
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    checked={formData.gender === "other"}
                    onChange={handleChange}
                  />
                  {"Other"}
                </CheckBoxLabel>
              </CheckBox>
              <br />
              <Input
                type="address"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
              />
              <br />
              <Input
                type="country"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
              />
              <br />
              <Input
                type="pincode"
                name="pincode"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={handleChange}
              />
              <Input
                type="phone"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {/* {err && <Error>{err}</Error>} */}
              <br />
              <PrimaryButton
                text={"Save"}
                type={"submit"}
                //onClick={() => register()}
              ></PrimaryButton>
            </Wrapper>
          </Modal>
        </ModalOverlay>
      )}
    </div>
  );
};

// country: "",
// city: "",
// pincode: "",
// phone: "",

export default ModalComponent;
