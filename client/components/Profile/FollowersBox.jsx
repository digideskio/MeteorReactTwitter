FollowersBox = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      user: Meteor.users.findOne({_id: this.props.userid}) || {},
      followers: Meteor.users.find({'followings': this.props.userid}, {sort: {username: 1}}).fetch() || []
    }
  },

  setLimit(e) {
    e.preventDefault();
    if(this.data.followers.length === Session.get('followerslimit')){
      Session.set('followerslimit', Session.get('followerslimit') + 3);
    } else {
      document.getElementById('followers-loadmore').setAttribute('class', 'disabledBtn');
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
        <button id="followers-loadmore">
          <a href="" onClick={this.setLimit}>Load More</a>
        </button>
      </div>
    )
  }
});