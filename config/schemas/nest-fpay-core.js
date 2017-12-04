
const joi = require('joi');

module.exports = joi.object({
    node: joi.object({
        env: joi.string().default('development').description('Node environment (aka NODE_ENV)'),
    }),
    port: joi.number().default(3050),
    flexSdk: joi.object({
        host: joi.string().default(null),
        key: joi.string().default(null),
        secret: joi.string().default(null)
    }),
    redis: joi.object({
        path: joi.string().default(null),
        port: joi.number().default(6379)
    }),
    pagerduty: joi.object({
        enabled: joi.boolean().default(false)
    })
});
