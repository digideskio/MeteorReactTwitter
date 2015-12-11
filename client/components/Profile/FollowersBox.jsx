FollowersBox = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    // let userId = window.location.pathname.split('/users/')[1].split('/followers')[0];

    let userSubs = Meteor.subscribe('user', this.props.userid);
    let followersSubs = Meteor.subscribe('followers', this.props.userid);
    // if(userSubs.ready() && followersSubs.ready()) {
      console.log('followers: ', Meteor.users.find({}).fetch());
      return {
        user: Meteor.users.findOne({_id: this.props.userid}),
        followers: Meteor.users.find({followings: this.props.userid}).fetch()
      }
    // } else {
    //   return {
    //     user: {},
    //     followers: []
    //   }
    // }

    // return {
    //   user: Meteor.users.findOne({_id: userId})
    //   // followers: Meteor.users.find({followings: userId}).fetch()
    // }
  },

  render(){
    let userItems = "";
    if(this.data.followers){
      userItems = this.data.followers.map((user)=> {
        return <UserItem
              key={user._id}
              userId={user._id}
              username={user.username}
              />
      });
    }

    let profileLink = `/users/${this.props.userid}`;

    return (
      <div>
        <h3>{this.data.user.username}</h3>
        <a href={profileLink}>Profile</a>
        <h4>Followers</h4>
        <ul>
          {userItems}
        </ul>
      </div>
    )
  }
});