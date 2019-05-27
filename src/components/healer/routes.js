import Create from "./partial/create";
import Read from "./partial/read";
import Update from "./partial/update";
import Remove from "./partial/remove";
import List from "./partial/list";

export default store => {
  return [
    { path: "/", component: List },
    { path: "/create", component: Create },
    { path: "/{:id}", component: Read },
    { path: "/{:id}/update", component: Update },
    { path: "/{:id}/remove", component: Remove }
  ];
};
