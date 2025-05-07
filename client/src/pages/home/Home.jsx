import Featured from "../../component/featured/Featured.jsx";
import FeaturedProperties from "../../component/featuredProperties/FeaturedProperties.jsx";
import Footer from "../../component/footer/Footer.jsx";
import Header from "../../component/header/Header.jsx";
import MailList from "../../component/mailList/MailList.jsx";
import Navbar from "../../component/navbar/Navbar.jsx";
import PropertyList from "../../component/propertyList/PropertyList.jsx";
import "./home.css";
function Home() {
  
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
