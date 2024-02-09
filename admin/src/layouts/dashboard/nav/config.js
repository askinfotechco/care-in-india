// component
import SvgColor from "../../../components/svg-color";

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const navConfig = [
  {
    title: "dashboard",
    path: "/dashboard/app",
    icon: icon("ic_analytics"),
  },
  {
    title: "Users",
    path: "/dashboard/user",
    icon: icon("ic_user"),
  },
  {
    title: "Doctor Details",
    path: "/dashboard/doctordetails",
    icon: icon("ic_blog"),
  },
];

export { navConfig };
