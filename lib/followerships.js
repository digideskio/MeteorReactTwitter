Meteor.methods({
  follow: (target)=> {
    check(Meteor.userId(), String);
    check(target, String);

    let self = Meteor.users.findOne({'_id': Meteor.userId()});

    if(self){
      Meteor.users.update({'_id': Meteor.userId()}, {$addToSet: {followings: target}});
      Meteor.users.update({'_id': target}, {$addToSet: {followers: Meteor.userId()}});
    }
  },

  unfollow: (target)=> {
    check(this.userId, String);
    check(target, String);

    let self = Meteor.users.findOne({'_id': Meteor.userId()});

    if(self){
      Meteor.users.update({'_id': Meteor.userId()}, {$pull: {followings: target}});
      Meteor.users.update({'_id': target}, {$pull: {followers: Meteor.userId()}});
    }
  }
});