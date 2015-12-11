FollowingsBox = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {

    let userSubs = Meteor.subscribe('user', this.props.userid);
    let followingsSubs = Meteor.subscribe('followings', this.props.userid);
    // if(userSubs.ready() && followersSubs.ready()) {
      console.log('followings: ', Meteor.users.find({}).fetch());
      return {
        user: Meteor.users.findOne({_id: this.props.userid}),
        followings: Meteor.users.find({followings: this.props.userid}).fetch()
      }
  },

  render(){
    let userItems = "";
    if(this.data.followings){
      userItems = this.data.followings.map((user)=> {
        return <UserItem
              key={user._id}
              userId={user._id}
              username={user.username}
              />
      });
    }

    return (
      <div>
        <h3>{this.data.user.username}</h3>
        <h4>Followings</h4>
        <ul>
          {userItems}
        </ul>
      </div>
    )
  }
});