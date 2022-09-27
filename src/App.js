import {
    Routes,
    Route,
    Link,
} from "react-router-dom";

import './App.css';
import Todos from "./components/todos/Todos";
import Albums from "./components/albums/Albums";
import Home from "./components/home/Home";
import Posts from "./components/posts/Posts";
import {CommentsPage} from "./commentsPage/CommentsPage";


function App() {
  return (
      <div>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/todos'}>Todos</Link></li>
                <li><Link to={'/albums'}>Albums</Link></li>
                <li><Link to={'/comments'}>Comments</Link></li>
            </ul>

          <hr/>

          <Routes>
              <Route index element={<Home/>}/>
              <Route path={'todos'} element={<Todos/>}/>
              <Route path={'albums'} element={<Albums/>}/>
              <Route path={'comments'} element={<CommentsPage/>}>
                    <Route path={':postId'} element={<Posts/>}/>
              </Route>
          </Routes>
          <hr/>
      </div>
  )
}

export default App;
