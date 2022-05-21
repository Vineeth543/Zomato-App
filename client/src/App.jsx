// Import HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";

// Import Component
import Temp from "./Components/temp.jsx";

function App() {
  return (
    <>
      <HomeLayoutHOC path="/" exact component={Temp} />
    </>
  );
}

export default App;
