import "./App.css";
import Layout from "./Layout/Layout";
import Footer from "./components/Footer";
import WeatherApp from "./components/WeatherApp";

function App() {
  return (
    <Layout>
      <WeatherApp />
      <Footer />
    </Layout>
  );
}

export default App;
