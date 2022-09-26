import Joi from "joi";

const CarValidator = Joi.object({
    model:Joi.string().regex(/^[a-zA-ZА-яёЁіІїЇҐґєЄ]{1,20}$/).required(),
    price:Joi.number().min(0).max(100000).required(),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required()

});

export {CarValidator}

