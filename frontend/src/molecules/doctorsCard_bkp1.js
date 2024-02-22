import React from "react";
import professionalBoxImg1 from "../assets/image/professional-box-img1.png";
import { useNavigate } from "react-router-dom";

export default function DoctorsCard(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/team/teamDetails/${props.data.regId}`, { replace: true });
  };

  return (
    <div class="col-lg-4 col-md-4" style={{marginTop: "30px"}} onClick={handleClick}>
      <div class="professional-box-item text-center">
        <figure class="mb-0 align-middle">
          <img
            src={professionalBoxImg1}
            // replace with actual image
            //   src={props.image}
            alt="professional-box-img"
            class="img-fluid"
            style={{margin: "0 auto", marginBottom: "20px", width: "200px"}}
          />
        </figure>
        <h5>{`${props.data.firstname} ${props.data.lastname}`}</h5>
        <small class="d-block">{props.data.specialization}</small>
      </div>
    </div>

  );
}
