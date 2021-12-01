const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


// Reason for stopping SP
router.post('/admin-view-3/stop-sp', function(req, res) {
  if ( req.body['stop-sp'] === 'suspend' ) {
    res.redirect('personal-suspended');
  } else if ( req.body['stop-sp'] === 'prison' ) {
    res.redirect('personal-prison');
  } else {
    res.redirect('personal');
  }
});


// Reason for restarting SP
router.post('/admin-view-3/restart-sp', function(req, res) {
  if ( req.body['restart-sp'] === 'prison' ) {
    res.redirect('personal-left-prison');
  } else if ( req.body['restart-sp'] === 'suspend' ) {
    res.redirect('personal-suspendedrestarted');
  } else {
    res.redirect('personal');
  }
});

  module.exports = router;