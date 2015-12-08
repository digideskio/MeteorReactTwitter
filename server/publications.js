Meteor.publish("tweets", (skipNum)=> {
  return Tweets.find({}, {sort: {submitted: -1}, skip: skipNum, limit: 3});
});
