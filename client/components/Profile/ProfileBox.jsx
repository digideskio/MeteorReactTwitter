ProfileBox = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const ready = FlowRouter.subsReady();
    if(!ready) {
      return {};
    }
    return {
      user : Meteor.users.find({}).fetch()[0]
    }
  },

  render(){
    if(this.data.user){

      return (
        <div>
          <h3>Profile</h3>

          <h3>{this.data.user.username}</h3>
          <a href="/tweets">TWEETS</a>
        </div>
      )
    } else {
      return (
        <div>
          <h1>No user found</h1>
          <a href="/tweets">TWEETS</a>
        </div>
      )
    }
  }
});