Meteor.publish("tweets", (limit)=> {
  // If user clicks "Load More",
  // increment the limit / number of tweets to load
  var limitNum = parseInt(limit);
  if(limitNum){
    check(limitNum, Number);
    return Tweets.find({}, {sort: {submitted: -1}, limit: limitNum});
  } else {
    // Initial load default limit is 3 (3 most recent tweets)
    return Tweets.find({}, {sort: {submitted: -1}, limit: 3});
  }
  
});
