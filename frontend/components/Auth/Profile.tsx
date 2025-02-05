import { useAuth0 } from "@auth0/auth0-react";
 
const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

 
  return (
    isAuthenticated && (
      <div className="row flex items-center space-x-1">
        <h2>{user?.name}</h2>
        <img src={user?.picture} alt={user?.name}   className="rounded-full h-12"/>
        {/* <p>{user?.email}</p> */}
      </div>
    )
  );
};

export default Profile;