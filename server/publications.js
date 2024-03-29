Meteor.publish('tweets', (limit)=> {
  // If user clicks 'Load More',
  // increment the limit / number of tweets to load
  let limitNum = parseInt(limit, 10);
  if (limitNum) {
    check(limitNum, Number);
    return Tweets.find({}, {'sort': {'submitted': -1}, 'limit': limitNum});
  }
  // Initial load default limit is 3 (3 most recent tweets)
  return Tweets.find({}, {'sort': {'submitted': -1}, 'limit': 3});
});

Meteor.publish('user', (userId)=> {
  check(userId, String);
  return Meteor.users.find({'_id': userId});
});

Meteor.publish('profile-tweets', (userId, limit)=> {
  check(userId, String);

  let limitNum = parseInt(limit, 10);
  if (limitNum) {
    check(limitNum, Number);
    return Tweets.find(
      {'userId': userId},
      {'sort': {'submitted': -1}, 'limit': limitNum});
  }
  return Tweets.find(
    {'userId': userId},
    {'sort': {'submitted': -1}, 'limit': 3});
});

Meteor.publish('followings', (userId, limit)=> {
  check(userId, String);

  let limitNum = parseInt(limit, 10);
  if (limitNum) {
    check(limitNum, Number);
    return Meteor.users.find(
      {'followers': userId},
      {'sort': {'username': 1}, 'limit': limitNum});
  }
  return Meteor.users.find(
    {'followers': userId},
    {'sort': {'username': 1}, 'limit': 3});
});

Meteor.publish('followers', (userId, limit)=> {
  check(userId, String);

  let limitNum = parseInt(limit, 10);
  if (limitNum) {
    check(limitNum, Number);
    return Meteor.users.find(
      {'followings': userId},
      {'sort': {'username': 1}, 'limit': limitNum});
  }
  return Meteor.users.find(
    {'followings': userId},
    {'sort': {'username': 1}, 'limit': 3});
});
