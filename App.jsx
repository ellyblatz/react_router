import './App.css'
import {useState, useEffect} from 'react'
import axios from "axios"
import {Link, useLocation, Route, Routes} from 'react-router-dom'
import Homepage from './home'
import Users from './user'


function App() {

  const [user, setUser] = useState ([])
  const [posts, setPosts] = useState([])

  const location = useLocation()
  const {pathname} = location
  //console.log(pathname)









//Posts component:
const Posts = () => {
    return(
      <div>
        <h1> Posts</h1>
        
        <ul>
        {
          posts.map((posts)=> {
            return (
              <li key={posts.id}>{posts.title}</li>


            )
          })
        }
      </ul>
      </div>
    )
  }







//fetch User data
useEffect(() => {
    const fetchUser = async() => {
      const {data} = await axios.get('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
      //console.log(data)
      setUser(data)
      //console.log(data.length)
    } 
    fetchUser()
}, []);

//fetch Posts data
useEffect (() =>{
    const fetchPosts = async() => {
    const {data} = await axios.get("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/posts")
    setPosts(data)
  }
  fetchPosts()

}, []);




  return (
    <div>
      <h1>hello world</h1>
        
        <nav>
          <Link to='/' className={pathname === '/' ? 'selected' : ""}>Home</Link>
          <Link to='/user' className={pathname === '/user' ? 'selected' : ""}>Users - {user.length}</Link>
          <Link to='/posts' className={pathname === '/posts' ? 'selected' : ""}>Posts - {posts.length}</Link>
        </nav>
       <Routes>
         <Route path='/' element={<Homepage/>} />
         <Route path='/user' element={<Users users={users}/>} />
         <Route path='/Posts' element={<Posts/>} />
         <Route path='user/153' element={<Users users={users}/>}/>
       </Routes>

    </div>
  )
}

export default App
