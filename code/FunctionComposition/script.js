let meetups = [{name:'JS',isActive:true,members:450}, 
{name:'Angular',isActive:true,members:900},
{name:'Node',isActive:false,members:900}];

var isActive = (meetup) => {
    return meetup.isActive;
}
console.log(meetups.filter(isActive));

let byName = (name) =>{
    return (meetup) =>{
        return meetup.name == name;
    }
}
let isValid = isFinite(meetups.find(byName('JS')).members);

console.log(isValid);