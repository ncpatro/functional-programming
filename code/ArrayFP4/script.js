// Code goes here

let meetups = [{
  name: 'JS',
  isActive: true,
  members: 450
}, {
  name: 'Angular',
  isActive: true,
  members: 900
}, {
  name: 'Node',
  isActive: false,
  members: 900
}];

let sum = 0;
for (let i = 0; i < meetups.length; i++) {
  sum += meetups[i].members;
}
console.log(sum);


let sumFP = 0;
sumFP = meetups.reduce((accumulator, meetup) => {
  return accumulator + meetup.members;
}, 0);
console.log(sumFP);
