import Healer from "components/healer";
import App from "./app";

export default store => {
  return [
    { path: "/", component: App },
    { path: "/healer", component: Healer }
  ];
};
