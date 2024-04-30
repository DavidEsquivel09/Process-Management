import { Router } from 'express';
import * as userCtrl from '../controllers/user.controller.js';
import { authRequired } from '../middlewares/validateToken.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { registerSchema, loginSchema } from '../schemas/user.schema.js';

const router = Router();

router.post('/register', validateSchema(registerSchema), userCtrl.register)
router.post('/login', validateSchema(loginSchema), userCtrl.login)
router.post('/logout', userCtrl.logout)
router.get('/profile', authRequired, userCtrl.profile)
router.get('/verify', userCtrl.verifyToken)

export default router;