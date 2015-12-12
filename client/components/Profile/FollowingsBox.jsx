FollowingsBox = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
      return {
        user: Meteor.users.findOne({_id: this.props.userid}) || {},
        followings: Meteor.users.find({followers: this.props.userid}).fetch() || []
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

    let profileLink = `/users/${this.props.userid}`;

    return (
      <div>
        <h3>{this.data.user.username}</h3>
        <a href={profileLink}>Profile</a>
        <h4>Followings</h4>
        <ul>
          {userItems}
        </ul>
      </div>
    )
  }
});