import * as offerCtrl from '../controllers/offers.controller.js';
import { authRequired } from '../middlewares/validateToken.js';
import { Router } from 'express';
import { createOfferSchema } from '../schemas/offer.schema.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
const router = Router();

router.get('/offers', authRequired, offerCtrl.getOffers)
router.get('/offers/:id', authRequired, offerCtrl.getOfferById)
router.post('/offers', authRequired, validateSchema(createOfferSchema), offerCtrl.createOffer)
router.put('/offers/:id', authRequired, offerCtrl.updateOffer)
router.delete('/offers/:id', authRequired, offerCtrl.deleteOffer)

export default router;