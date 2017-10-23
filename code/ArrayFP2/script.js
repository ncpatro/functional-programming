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
  
  let meetup;
  for (let i = 0; i < meetups.length; i++) {
    if (meetups[i].name == 'JS' ) {
      meetup = meetups[i];
    }
  }
  console.log(meetup);
  
  
  let meetupFP;
  meetupFP = meetups.find((m) => {
    return m.name === 'JS';
  });
  console.log(meetupFP);

  