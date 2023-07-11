const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  //app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);


  // app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard){
  //   console.log("token:")
  //   console.log(authJwt.verifyToken)
  // };

  // app.get("/api/test/user", (req, res) => {
  //   console.log("token:")
  //   console.log(authJwt.verifyToken)
  //   res.json({ message: "Welcome to bezkoder application." });
  // });

  // app.get(
  //   "/api/test/mod",
  //   [authJwt.verifyToken, authJwt.isModerator],
  //   controller.moderatorBoard
  // );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};
