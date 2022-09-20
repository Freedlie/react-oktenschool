import './App.css';
import Users from "./components/users/Users";
import {useState} from "react";
import Posts from "./components/posts/Posts";


function App() {
    let [postsId, setPostsId] = useState(null);

    const getPostsById = (id) => {
        setPostsId(id)
    }
  return (
      <div className='row'>
          <div className='users'>
              <h2>Users</h2>
              <Users getPostsById = {getPostsById}/>

          </div>
          <div className='posts'>
              <Posts postsId = {postsId}/>
          </div>
      </div>

  )
}

export default App;
