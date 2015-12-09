Meteor.publish("tweets", (limit)=> {
  console.log('LIMIT: ', limit);
  var limitNum = parseInt(limit);
  console.log(typeof limitNum);
  if(limitNum){
    check(limitNum, Number);
    return Tweets.find({}, {sort: {submitted: -1}, limit: limitNum});
  } else {
    return Tweets.find({}, {sort: {submitted: -1}, limit: 10});
  }
  
});
