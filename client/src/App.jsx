// Import HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";

// Import Component
import Temp from "./Components/temp.jsx";
import Master from "./Components/master.jsx";

function App() {
  return (
    <>
      <HomeLayoutHOC path="/" exact component={Temp} />
      <HomeLayoutHOC path="/:type" exact component={Master} />
    </>
  );
}

export default App;
