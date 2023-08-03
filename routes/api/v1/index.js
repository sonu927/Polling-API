const express = require('express');
const router = express.Router();
const quesController = require('../../../controllers/question_controller');
const optionController = require('../../../controllers/option_controller');

router.post('/question/create',quesController.create);
router.post('/question/:id/option/create',optionController.createOption);
router.delete('/question/:id/delete',quesController.delete);
router.delete('/option/:id/delete',optionController.deleteOption);
router.post('/option/:id/add_vote',optionController.addVote);
router.get('/question/:id/view',quesController.view);

module.exports = router;