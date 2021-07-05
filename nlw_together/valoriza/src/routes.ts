import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateCompliment Controller';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';
import { ListTagsController } from './controllers/ListTagsController';
import { ListUserReceiveComplimentsController } from './controllers/ListUserReceiveComplimentsController';
import { ListUsersController } from './controllers/ListUsersController';
import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAutenticated } from './middlewares/ensureAutenticated';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listTagsController = new ListTagsController()
const listUserController = new ListUsersController()

router.post('/users', createUserController.handle);
router.get('/users', ensureAutenticated, listUserController.handle)
router.get('/users/compliments/send', ensureAutenticated, listUserSendComplimentsController.handle);
router.get('/users/compliments/receive', ensureAutenticated, listUserReceiveComplimentsController.handle);

router.post('/tags', ensureAutenticated, ensureAdmin, createTagController.handle);
router.get('/tags', ensureAutenticated, listTagsController.handle)

router.post('/login', authenticateUserController.handle)

router.post('/compliments', ensureAutenticated, createComplimentController.handle)

export { router }