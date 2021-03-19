export const emailValidator = (email) => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0)
    return "please! Enter Email  cannot be empty.";
  if (!re.test(email)) return "Please! Enter valid email address.";

  return "";
};

export const passwordValidator = (password) => {
  if (!password || password.length <= 0) return "Password cannot be empty.";
  if (password.length < 2) return "password should be minimum 2 characters";

  return "";
};

export const nameValidator = (username) => {
  if (!username || username.length <= 0) return "Name cannot be empty.";

  return "";
};
