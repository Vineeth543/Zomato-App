import joi from "joi";

export const validateSignup = (userData) => {
  const Schema = joi.object({
    fullname: joi.string().required().min(3),
    email: joi.string().email(),
    password: joi.string().min(8),
    address: joi
      .array()
      .items(joi.object({ detail: joi.string(), for: joi.string() })),
    phoneNumber: joi.number(),
  });

  return Schema.validateAsync(userData);
};

export const validateSignin = (userData) => {
  const Schema = joi.object({
    email: joi.string().email(),
    password: joi.string().min(8),
  });

  return Schema.validateAsync(userData);
};
