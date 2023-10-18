import "./App.css";
import Header from "./components/Header";
import MobileSeachBar from "./components/MobileSearch/";
import Filter from "./components/Filter/"
import Footer from "./components/Footer ";
import Cards from "./components/Cards";
function App() {
  return (
    <div>
      <Header />
      <MobileSeachBar />
      <Filter />
      <Cards />
    </div>
  );
}

export default App;
