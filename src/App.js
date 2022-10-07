import {
    Routes,
    Route,
    Link,
} from "react-router-dom";

import './App.css';
import {CommentsPage, Home, PostsPage, UsersPage} from "./pages";


function App() {

  return (
      <div>
          <ul>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/users'}>Users</Link></li>
              <li><Link to={'/comments'}>comments</Link></li>
              <li><Link to={'/posts'}>posts</Link></li>
          </ul>

          <hr/>

          <Routes>
              <Route index element={<Home/>}/>
              <Route path={'users'} element={<UsersPage/>}/>
              <Route path={'comments'} element={<CommentsPage/>}/>
              <Route path={'posts'} element={<PostsPage/>}/>
          </Routes>
          <hr/>
      </div>

  )
}

export default App;
