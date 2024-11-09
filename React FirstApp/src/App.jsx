import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Navbar />
      <div className="greet">
        Hello👋
        <br />
        What are you looking for?
      </div>
      <div className="cards">
        <Card title="LEARN" description="Code" />
        <Card title="BUILD" description="Big" />  
        <Card title="SELL" description="Skills" />
      </div>
      <Footer />
    </>
  );
}

export default App;
