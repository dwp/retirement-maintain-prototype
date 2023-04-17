const express = require('express');
const router = express.Router()

// Send forms

router.post('/international-task/anzac-iteration-1/award-improvement', function(req, res) {
  if ( req.body['improvement'] === 'yes' ) {
    res.redirect('issue-letter');
  } else {
    res.redirect('no-improvement');
  }
});

router.post('/international-task/anzac-iteration-2/award-improvement', function(req, res) {
  if ( req.body['improvement'] === 'yes' ) {
    res.redirect('issue-letter');
  } else {
    res.redirect('no-improvement');
  }
});



// CFN1282

router.post('/international-task/anzac-cfn1282-iteration-1/cfn-task', function(req, res) {
  if ( req.body['cfn1282-returned'] === 'yes' ) {
    res.redirect('date-of-entry');
  } else {
    res.redirect('get-a-task-2');
  }
});

router.post('/international-task/anzac-cfn1282-iteration-1/date-of-entry', function(req, res) {
  if ( req.body['date-of-entry'] === 'before' ) {
    res.redirect('rf1-send');
  } else {
    res.redirect('improvement');
  }
});

router.post('/international-task/anzac-cfn1282-iteration-1/rf1-send', function(req, res) {
  if ( req.body['rf1'] === 'request' ) {
    res.redirect('rf1-hmrc');
  } else if ( req.body['rf1'] === 'received' ) {
    res.redirect('improvement');
  } else {
    res.redirect('get-a-task-2');
  }
});



  module.exports = router;
