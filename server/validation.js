import Joi from "joi";

const registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(2).max(50).required(),
    email: Joi.string().min(10).max(100).email().required(),
    password: Joi.string().min(6).max(1024).required(),
    role: Joi.string().valid("admin", "member").required()
  });

  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(10).max(100).email().required(),
    password: Joi.string().min(6).max(1024).required()
  });

  return schema.validate(data);
};

const itemValidation = (data) => {
  const schema = Joi.object({
    id: Joi.number().min(0).max(9999).required(),
    title: Joi.string().min(2).max(10).required(),
    description: Joi.string().min(5).max(999).required(),
    price: Joi.number().min(100).required()
  });

  return schema.validate(data);
};

export { registerValidation, loginValidation, itemValidation };
