FollowersBox = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      user: Meteor.users.findOne({_id: this.props.userid}) || {},
      followers: Meteor.users.find({'followings': this.props.userid}).fetch() || []
    }
  },

  render(){
    let followersList = "";
    if(this.data.followers){
      followersList = this.data.followers.map((user)=> {
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
          {followersList}
        </ul>
      </div>
    )
  }
});