Tweets = new Mongo.Collection("tweets");

validateTweet = (tweet)=> {
  let errors = {};
  if(!tweet.body) {
    errors.body = "Please write something";
  }

  return errors;
}

Meteor.methods({
  tweetInsert (tweetAttr) {
    check(tweetAttr, {
      body: String
    });

    let errors = validateTweet(tweetAttr);

    if(errors.body) {
      throw new Meteor.error('invalid-tweet', 'You must write something to post');
    }

    let tweet = _.extend(tweetAttr, {
      submitted: new Date(),
      commentsCount: 0,
      retweetCount: 0,
      likes: 0
    });

    let tweetId = Tweets.insert(tweet);

    return {
      _id: tweetId
    };
  }
})
