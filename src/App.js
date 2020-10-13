import React from 'react';
import Search from "./pages/Search";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Wrapper from './components/Wrapper';
import "./App.css";

function App() {
  document.title = "Employee Directory";
  return (
    <div>
      <Nav />
      <Wrapper>
        <Search />
      </Wrapper>
      <Footer />
    </div>
  );
}
export default App;
