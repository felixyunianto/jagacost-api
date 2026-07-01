import * as Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),

  PORT: Joi.number().default(3000),
  DATABASE_URL: Joi.string().required(),

  REDIS_HOST: Joi.string().required(),
  REDIS_PORT: Joi.number().required(),

  JWT_ACCESS_SECRET: Joi.string().required(),
  JWT_REFRESH_SECRET: Joi.string().required(),

  RESEND_API_KEY: Joi.string().required(),

  MIDTRANS_SERVER_KEY: Joi.string().required(),
  MIDTRANS_CLIENT_KEY: Joi.string().required(),
});
