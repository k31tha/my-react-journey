'use strict';

//var mongoose = require('mongoose'),
//  Task = mongoose.model('Tasks');
const clubListData =
  [{
    name: 'Woking FC',
    url: 'woking-fc',
    active: true,
    clubofficialwebsiteurl: 'https://wokingfc.co.uk/',
    logoname:'WokingLogo.png'
  },
  {
    name: 'Leyton Orient FC',
    url: 'leyton-orient-fc',
    active: false,
    clubofficialwebsiteurl:'',
    logoname:''
  },
  {
    name: 'Knaphill FC',
    url: 'knaphill-fc',
    active: true,
    clubofficialwebsiteurl: 'https://knaphill.co.uk/',
    logoname:''
  },
  {
    name: 'Hastings UTD',
    url: 'hastings-utd',
    active: true,
    clubofficialwebsiteurl: '',
    logoname:''
  }
];

exports.list_all_clubs = function(req, res) {
  //Task.find({}, function(err, task) {
  //  if (err)
  //    res.send(err);
  //  res.json(task);
  //});
  res.json(clubListData);
};

exports.find_a_club = function(req, res) {
  //Task.findById(req.params.taskId, function(err, task) {
  //  if (err)
  //    res.send(err);
  //  res.json(task);
  //});
  const clubRes = clubListData.find(
    x => x.url.toLowerCase() === req.params.url.toLowerCase()
  );
  if (clubRes === undefined || clubRes === null) res.status(404).send('Not found')
  else {
    res.json(
      clubRes
    );
  }
};