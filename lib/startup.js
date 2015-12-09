if(Meteor.isClient) {
  Meteor.startup(()=>{
    Session.setDefault("limit", 3);
  });
}