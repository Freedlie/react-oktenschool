
import css from './app.module.css';
import {Header} from "./components/Header/Header";
import {Users} from "./components/Users/Users";
import {Posts} from "./components/Posts/Posts";

const App = () => {
  return (
      <div>
            <Header/>
          <div className={css.row}>
              <Users/>
              <div className={css.posts}>
                  <Posts/>
              </div>
          </div>
      </div>

  );
};

export {App};
