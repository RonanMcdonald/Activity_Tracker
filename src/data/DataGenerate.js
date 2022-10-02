function RandomHexString(l) {
  var hexstring = '';
  for (var i = 0; i < l; i++) {
    hexstring += Math.floor(Math.random() * 16).toString(16);
  }
  return hexstring;
}

let jsonObj = [];
const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const tasks = ['Make cookies', 'Eat cookies', 'Poop cookies', 'Flush cookies', 'Think about cookies', 'Cookie monster', 'Cookie?'];
const tagText = ['cardio', 'strenght', 'diet', 'sport', 'other'];
const tagColor = ['4BD2FD', '594BFD', '4BFD5D', 'FD4B4B', 'EB00FF'];
const conditions = [true, false];
let dayCounter = 0;
let tagCounter = 0;

for (let index = 1; index < 16; index++) {
  var item = {
    id: RandomHexString(16),
    week: 4,
    day: days[dayCounter],
    activity: tasks[dayCounter],
    tagText: tagText[tagCounter],
    tagColor: tagColor[tagCounter],
    complete: conditions[Math.floor(Math.random() * 2)],
  };

  tagCounter != 4 ? tagCounter++ : (tagCounter = 0);
  dayCounter != 6 ? dayCounter++ : (dayCounter = 0);
  jsonObj.push(item);
}

var fs = require('fs');
fs.writeFile('WEEK_DATA.json', JSON.stringify(jsonObj), function (err, result) {
  err ? console.log('error', err) : console.log('WEEK_DATA.json created');
});

// {"id": "c7bf", "complete": false, "activity": "Dummy activity - 1", "week": 1, day: "monday"}
