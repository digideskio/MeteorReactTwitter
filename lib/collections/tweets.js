Tweets = new Mongo.Collection('tweets');

validateTweet = (tweet)=> {
  let errors = {};
  if (!tweet.body) {
    errors.body = 'Please write something';
  }

  return errors;
};

ownsTweet = (userId, tweet) => {
  return tweet && tweet.userId === userId;
};

Tweets.allow({
  remove(userId, tweet) {
    return ownsTweet(userId, tweet);
  }
});

Meteor.methods({
  tweetInsert(tweetAttr) {
    check(this.userId, String);
    check(tweetAttr, {
      'body': String
    });

    let errors = validateTweet(tweetAttr);

    if (errors.body) {
      throw new Meteor.Error('invalid-tweet',
        'You must write something to post');
    }

    if (Meteor.user()) {
      let user = Meteor.user();

      let tweet = _.extend(tweetAttr, {
        'userId': user._id,
        'author': user.username,
        'authorEmail': user.emails[0].address,
        'submitted': new Date(),
        'commentsCount': 0,
        'retweeters': [],
        'likers': [],
        'likes': 0
      });

      let tweetId = Tweets.insert(tweet);

      return {
        '_id': tweetId
      };
    }

    throw new Meteor.Error('login-required', 'You must login to tweet');
  },

  likeTweet(tweetId) {
    check(this.userId, String);
    check(tweetId, String);

    let affected = Tweets.update({
      '_id': tweetId,
      'likers': {'$ne': this.userId}
    }, {
      '$addToSet': {'likers': this.userId},
      '$inc': {'likes': 1}
    });

    if (! affected) {
      throw new Meteor.Error('invalid',
        'You were not able to like that tweet');
    }
  }
});
