"use strict";

var express = require('express');

var router = express.Router();
router.post('*', function (req, res, next) {
  console.log(req.body);

  if (req.body['next-page']) {
    res.redirect(req.body['next-page']);
  } else {
    next();
  }
}); // copy the const name and the file path to new version

var newclaims = require('./routes/newclaims');

var bpviteration = require('./routes/bpviteration');

var bpviteration2 = require('./routes/bpviteration2');

var changebanktype = require('./routes/changebanktype');

var iteration1 = require('./routes/iteration1');

var iteration2 = require('./routes/iteration2');

var iteration3 = require('./routes/iteration3');

var iteration4 = require('./routes/iteration4');

var iteration5 = require('./routes/iteration5');

var iteration5b = require('./routes/iteration5b');

var manualpayment = require('./routes/manualpayment');

var iteration6 = require('./routes/iteration6');

var iteration7 = require('./routes/iteration7');

var iteration8a = require('./routes/iteration8a');

var iteration8b = require('./routes/iteration8b');

var iteration10a = require('./routes/iteration10a');

var iteration10c = require('./routes/iteration10c');

var iteration11c = require('./routes/iteration11c');

var bpvdeath6 = require('./routes/bpvdeath6');

var bpvdeath3 = require('./routes/bpvdeath3');

var whatislive = require('./routes/whatislive');

var iteration22b = require('./routes/iteration22b');

var iteration26c = require('./routes/iteration10c');

var iteration28 = require('./routes/iteration28');

var iteration31a = require('./routes/iteration31a');

var iteration31b = require('./routes/iteration31b');

var iteration31c = require('./routes/iteration31c');

var iteration31d = require('./routes/iteration31d');

var iteration31e = require('./routes/iteration31e');

var iteration31f = require('./routes/iteration31f');

var iteration32a = require('./routes/iteration32a');

var iteration32b = require('./routes/iteration32b');

var iteration32c = require('./routes/iteration32c');

var iteration39 = require('./routes/iteration39');

var paperclaims = require('./routes/paperclaims');

var iteration43abefore = require('./routes/iteration43abefore');

var iteration43b = require('./routes/iteration43b');

var reviewanaward = require('./routes/reviewanaward');

var addresstask = require('./routes/addresstask');

var widowstask = require('./routes/widowstask');

var iteration52 = require('./routes/iteration52');

var death = require('./routes/death');

var pcsrb2 = require('./routes/pcsrb2');

var adminview = require('./routes/adminview');

var pcsrbrecord2 = require('./routes/pcsrbrecord2');

var prison = require('./routes/prison');

var manualpayments = require('./routes/manualpayments');

var deatharrears = require('./routes/deatharrears');

var identitycheck = require('./routes/identitycheck');

var debt = require('./routes/debt');

var startdate = require('./routes/startdate');

var startdate2 = require('./routes/startdate2');

var widowsnewclaims = require('./routes/widowsnewclaims'); //copy the router use and update the sprint version


router.use(newclaims);
router.use(bpviteration);
router.use(bpviteration2);
router.use(changebanktype);
router.use(iteration1);
router.use(iteration2);
router.use(iteration3);
router.use(iteration4);
router.use(iteration5);
router.use(iteration5b);
router.use(manualpayment);
router.use(iteration6);
router.use(iteration7);
router.use(iteration8a);
router.use(iteration8b);
router.use(iteration10a);
router.use(iteration10c);
router.use(iteration11c);
router.use(bpvdeath6);
router.use(bpvdeath3);
router.use(whatislive);
router.use(iteration22b);
router.use(iteration26c);
router.use(iteration28);
router.use(iteration31a);
router.use(iteration31b);
router.use(iteration31c);
router.use(iteration31d);
router.use(iteration31e);
router.use(iteration31f);
router.use(iteration32a);
router.use(iteration32b);
router.use(iteration32c);
router.use(iteration39);
router.use(iteration43abefore);
router.use(iteration43b);
router.use(paperclaims);
router.use(addresstask);
router.use(widowstask);
router.use(iteration52);
router.use(death);
router.use(pcsrb2);
router.use(pcsrbrecord2);
router.use(prison);
router.use(manualpayments);
router.use(deatharrears);
router.use(identitycheck);
router.use(widowsnewclaims);
router.use(debt);
router.use(startdate);
router.use(startdate2);
router.use(reviewanaward);
router.use(adminview);
module.exports = router;