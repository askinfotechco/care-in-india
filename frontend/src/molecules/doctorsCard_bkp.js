import React from "react";
import { useNavigate } from "react-router-dom";

export default function DoctorsCard(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/team/teamDetails/${props.data.regId}`, { replace: true });
  };

  return (
    <div class="col-lg-4 col-md-4" style={{ marginTop: "30px" }}>
      <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img
          class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
          src="https://tailwindcss.com/img/erin-lindford.jpg"
          alt="Woman's Face"
        />
        <div class="text-center space-y-2 sm:text-left">
          <div class="space-y-0.5">
            <p class="text-sm text-black font-bold">{`${props.data.firstname} ${props.data.lastname}`}</p>
            <p class="text-sm">
              {props.data.specialization}
            </p>
          </div>
          <button
            class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            onClick={handleClick}
          >
            Schedule Appointment
          </button>
        </div>
      </div>
    </div>
  );
}
