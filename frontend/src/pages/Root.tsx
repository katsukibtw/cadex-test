import { Outlet } from "react-router";

const Root = () => {
  return (
    <>
      <div>root</div>
      <Outlet />
    </>
  );
};

export default Root;
