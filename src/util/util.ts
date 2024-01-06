export const emailValidation = (email: string) => {
  const emailRegEx = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
  return emailRegEx.test(email);
};

export const inputValidation = (value: string) => {
  return value.trim() === "";
};
