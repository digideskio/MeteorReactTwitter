if(Meteor.isClient) {
  Meteor.startup(()=>{
    Session.setDefault("limit", 3);
    Session.setDefault("profilelimit", 3);
    Session.setDefault("followerslimit", 3);
    Session.setDefault("followingslimit", 3);
  });
}