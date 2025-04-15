import React from "react";
import ReactDOM from "react-dom/client";
import "./index.less";
import App from "./app";
import { init } from "@easycode/client-detector";
import ErrorBoundary from "@/components/error-boundary";

const serviceHost = "https://openxlab.org.cn/gw/data-bury"; // 必填，服务请求地址
const serviceName = "safe-platform"; // 必填且唯一，找管理员查询

init(
  serviceHost,
  {
    serviceName,
  },
  import.meta.env.MODE === "production" ? "production" : "development",
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
);
