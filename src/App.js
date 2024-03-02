import { Route, Routes } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavouritesPage from "./pages/Favourites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
        {/* <Route path='/'>
          <AllMeetupsPage/>
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupPage/>
        </Route>
        <Route path='/favourites'>
          <FavouritesPage/>
        </Route> */}

      <Routes>
        <Route index element={<AllMeetupsPage/>}/>
        <Route path="/" element={<AllMeetupsPage/>}/>
        <Route path="/new-meetup" element={<NewMeetupPage/>}/>
        <Route path="/favourites" element={<FavouritesPage/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
