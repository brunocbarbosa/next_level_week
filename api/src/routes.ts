import express from 'express';

//controllers imports
import PointsController from './controllers/pointsController';
import ItemsController from './controllers/itemsController';

//init express router
const routes = express.Router();
//init controllers
const pointsController = new PointsController();
const itemsController = new ItemsController();

//items route
routes.get('/items', itemsController.index);

//points route
routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;
