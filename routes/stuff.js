const express = require('express');
const router = express.Router();
const stuffCtl = require('../controllers/stuff');

router.post('/', stuffCtl.createThing)
router.get('/', stuffCtl.getAllThings);
router.get('/:id', stuffCtl.getOneThing);
router.put('/:id', stuffCtl.putOneThing);
router.delete('/:id', stuffCtl.deleteOneThing);

module.exports = router;