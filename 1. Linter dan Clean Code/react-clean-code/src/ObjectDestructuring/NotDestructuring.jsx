const Profile = (props) =>{
    return(
        <div>
            <p>Name : {props.name}</p>
            <p>Email : {props.email}</p>
            <p>Bio : {props.bio}</p>
        </div>
    )
}

export default Profile;