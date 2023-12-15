
function User() {


//User component:
const Users = () => {
  return(
    <div>
      <h1> Users</h1>
      <ul>
        {
          user.map((user)=> {
            return (
              <li key={user.id}>
                <Link to="/artists/">
                
                {user.name}
                
                </Link>
                </li>
            )
          })
        }
      </ul>
    </div>
  )
}

}

export default User