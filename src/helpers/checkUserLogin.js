const checkUserLogin = (input) => {
  var usernameRegex = /^[a-zA-Z0-9]+$/;
  return usernameRegex.test(input);
};

export default checkUserLogin;
