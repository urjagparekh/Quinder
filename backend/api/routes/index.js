const routes = app => {
  const controllers = require("../controllers");

  app.route("/create-user").post(controllers.addMember1);
  app.route("/update-user").post(controllers.updateMember);
  app.route("/search-user").get(controllers.searchMember1);
  // app.route("/delete-member").get(controllers.deleteMember);

  app.route("/create-college").post(controllers.addDues1);
  // app.route("/udpate-dues").post(controllers.updateDues);
  app.route("/search-college").get(controllers.searchDues1);
};

export default routes;
