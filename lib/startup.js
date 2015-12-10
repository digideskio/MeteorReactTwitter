if(Meteor.isClient) {
  Meteor.startup(()=>{
    Session.setDefault("limit", 3);
    Session.setDefault("profilelimit", 3);
  });
}