import React, { useEffect, useMemo, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import axios from "axios";
import "./index.less";

const Login = () => {
  const [pageIndex, setPageIndex] = useState("");


  // useEffect(() => {
  //   axios
  //     .post("https://optima-production-59c4.up.railway.app/api/user/apply", {
  //       walletAddress: "edsdfsdfsd4321",
  //       device: "PC",
  //     })
  //     .then(function (response) {
  //       console.log("请求返回的数据");
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <div className="main">
      123
    </div>
  );
};

export default Login;