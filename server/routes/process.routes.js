import * as processCtrl from '../controllers/processes.controller.js';
import { authRequired } from '../middlewares/validateToken.js';
import { Router } from 'express';
import { createProcessSchema } from '../schemas/process.schema.js';
import { validateSchema } from '../middlewares/validator.middleware.js';

const router = Router();

router.get('/processes', authRequired, processCtrl.getProcesses);
router.get('/processes/:id', authRequired, processCtrl.getProcessById);
router.post('/processes', authRequired, validateSchema(createProcessSchema), processCtrl.createProcess);
router.put('/processes/:id', authRequired, processCtrl.updateProcess);
router.delete('/processes/:id', authRequired, processCtrl.deleteProcess);

export default router;
