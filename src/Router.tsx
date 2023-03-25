import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Join from "./SignUp";
import MyPage from "./MyPage";
import Memo from "./Memo";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/mymemo'>
          <Memo />
        </Route>
        <Route path='/mypage'>
          <MyPage />
        </Route>
        <Route path='/sign-up'>
          <Join />
        </Route>
        <Route path='/'>
          <App />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
