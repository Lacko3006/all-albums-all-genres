const withAuth = (req, res, next) => {
  // redirect to the login route, if user isnt logged in
  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;
