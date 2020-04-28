import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchUsers} from "./redux";

function Usercontainer({userData, fetchUsers}){
  useEffect(()=> {
    fetchUsers()
  },[])
  return userData.loading ? (
    <h2>Loading</h2> 
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
    <h2>user data</h2>
    <div>
    { userData && 
        userData.users && 
          userData.users.map(user => <p>{user.username}</p>)}
    </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userData : state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers : () => dispatch(fetchUsers())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Usercontainer);