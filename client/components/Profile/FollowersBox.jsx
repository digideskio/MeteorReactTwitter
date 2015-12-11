FollowersBox = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    // let userId = window.location.pathname.split('/users/')[1].split('/followers')[0];

    // let userSubs = Meteor.subscribe('user', this.props.userid);
    let followersSubs = Meteor.subscribe('followers', this.props.userid);

    let data = {};
    console.log('followers: ', Meteor.users.find({followings: this.props.userid}).fetch());
    if(followersSubs.ready()) { //userSubs.ready() && 

      // return {
      //   // user: Meteor.users.findOne({_id: this.props.userid}),
      //   followers: Meteor.users.find({'followings': this.props.userid}).fetch()
      // }
    // } else {
    //   return {
    //     user: {},
    //     followers: []
    //   }
    //}

      data.followers = Meteor.users.find({followings: this.props.userid}).fetch();

    // return {
    //   user: Meteor.users.findOne({_id: userId})
    //   // followers: Meteor.users.find({followings: userId}).fetch()
    }

    return data;
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

    // let profileLink = `/users/${this.props.userid}`;
    // <h3>{this.data.user.username}</h3>
    //     <a href={profileLink}>Profile</a>
    return (
      <div>
        
        <h4>Followers</h4>
        <ul>
          {followersList}
        </ul>
      </div>
    )
  }
});