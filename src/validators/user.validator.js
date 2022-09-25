import Joi from "joi";

const UserValidator = Joi.object({
    name: Joi.string().regex(/^[a-zA-ZА-яёЁіІїЇҐґєЄ]{4,20}$/).required().messages({
        "string.pattern.base": "put more than 4 char"
        }),
    username: Joi.string().regex(/^[a-zA-ZА-яёЁіІїЇҐґєЄ]{4,20}$/).required().messages({
        'string.pattern.base': 'put more than 4 char'
    })
});

export {UserValidator};