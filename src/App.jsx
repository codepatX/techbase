import NavBar from "./components/navbar/nav";
import Homepage from "./components/homepage/homepage";
import Sponsors from "./components/sponsors/sponsors";
import Techvid from "./components/techvid/techvid";
import Services from "./components/services/services";
import Departments from "./components/Departments/departments";
import Blog from "./components/Blog/blog";
import Premier from "./components/premier/premier";
import Somos from "./components/somos/somos";
import Nosos from "./components/nosos/nosos";
import Footer from "./components/footer/footer";


function App() {

  return (
    <>
      <NavBar />
      <Homepage />
      <Sponsors />
      <Techvid />
      <Services />
      <Departments />
      <Blog />
      <Premier/>
      <Somos/>
      <Nosos/>
      <Footer/>
    </>
  )
}

export default App;
