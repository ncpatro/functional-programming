let meetups = [{
    name: 'JS',
    isActive: true,
    members: 700
  }, {
    name: 'Angular',
    isActive: true,
    members: 900
  }, {
    name: 'Node',
    isActive: false,
    members: 600
  }, {
    name: 'React',
    isActive: true,
    members: 500
  }];
    /*--------------------- */
  let sum = 0;
  let activeMeetups = []
  for (let i = 0; i < meetups.length; i++) {
    if (meetups[i].isActive) {
      activeMeetups.push(meetups[i]);
    }
  }
  for (let j=0; j<activeMeetups.length; j++) {
    activeMeetups[j].members = activeMeetups[j].members- (0.1*activeMeetups[j].members)
    sum += activeMeetups[j].members;
  }
  console.log(activeMeetups);
  console.log(sum);
  
    /*--------------------- */
  let sumFP;
  let isActiveMeetups = meetups.filter((m)=>{
    return m.isActive;
  });
  let updatedMembers = isActiveMeetups.map((m)=>{
      return m.members- (0.1*m.members);
  });
  sumFP = updatedMembers.reduce((acc, m)=>{
    return acc + m;
  },0);
  console.log(sumFP);
  
    /*--------------------- */
  let sumFPChain = meetups.filter((m)=>{return m.isActive;})
  .map((m)=>{return m.members- (0.1*m.members);})
  .reduce((acc, m)=>{return acc + m;},0);
  console.log(sumFPChain);
  
  
  /*--------------------- */
  function isActive(m) {
    return m.isActive;
  }
  
  function subtractTenPercent(m) {
    return m.members- (0.1*m.members)
  }
  
  function add(acc, m){
    return acc + m;
  }
  
  let sumFPChain1 = meetups.filter(isActive)
  .map(subtractTenPercent)
  .reduce(add,0);
  console.log(sumFPChain);
  
  