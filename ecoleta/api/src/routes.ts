import express from 'express';
import multer from 'multer';
import { celebrate, Joi } from 'celebrate';

import multerConfig from './config/multer';

//controllers imports
import PointsController from './controllers/pointsController';
import ItemsController from './controllers/itemsController';

//init express router
const routes = express.Router();
const upload = multer(multerConfig);
//init controllers
const pointsController = new PointsController();
const itemsController = new ItemsController();

//items route
routes.get('/items', itemsController.index);

//points route
routes.post(
    '/points', 
    upload.single('image'),
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.number().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required(),
        })
    }, {
        abortEarly: false
    }),
    pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;
