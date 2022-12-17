"use strict";

//var mongoose = require('mongoose'),
//  Task = mongoose.model('Tasks');

const clubListData1 = [
  {
    ClubID: 2128,
    ClubName: "Woking",
    ClubAddress: "Kingfield Road, Woking, Surrey, GU22 9AA",
    ContactEmailAddr: null,
    MainWebsite: "http://www.wokingfc.co.uk/",
    LongLat: null,
    Source: "skrill",
    ClubPostcode: null,
    UrlFriendlyName: "woking",
    PyramidId: "1112",
    Nicknames: "The cardinals",
    Active: true,
    ClubGuid: "3cefd4b0-110c-4f98-9a41-6b288713f9d9",
    MinorClub: false,
    DisableAutoUpdate: false,
    StatusTypeId: 1,
  },
];

const clubListData = [
  {
    name: "Woking FC",
    url: "woking-fc",
    active: true,
    clubofficialwebsiteurl: "https://wokingfc.co.uk/",
    logoname: "WokingLogo.png",
  },
  {
    name: "Leyton Orient FC",
    url: "leyton-orient-fc",
    active: false,
    clubofficialwebsiteurl: "",
    logoname: "",
  },
  {
    name: "Knaphill FC",
    url: "knaphill-fc",
    active: true,
    clubofficialwebsiteurl: "https://knaphill.co.uk/",
    logoname: "",
  },
  {
    name: "Hastings UTD",
    url: "hastings-utd",
    active: true,
    clubofficialwebsiteurl: "",
    logoname: "",
  },
  {
    name: "Sutton UTD",
    url: "sutton-utd",
    active: false,
    clubofficialwebsiteurl: "",
    logoname: "",
  },
  {
    name: "Solihull Moors",
    url: "solihull-moors",
    active: true,
    clubofficialwebsiteurl: "",
    logoname: "",
  },
];

exports.list_all_clubs = function (req, res) {
  //Task.find({}, function(err, task) {
  //  if (err)
  //    res.send(err);
  //  res.json(task);
  //});
  res.json(clubListData);
};

exports.find_a_club = function (req, res) {
  //Task.findById(req.params.taskId, function(err, task) {
  //  if (err)
  //    res.send(err);
  //  res.json(task);
  //});
  const clubRes = clubListData.find(
    (x) => x.url.toLowerCase() === req.params.url.toLowerCase()
  );
  if (clubRes === undefined || clubRes === null)
    res.status(404).send("Not found");
  else {
    res.json(clubRes);
  }
};
