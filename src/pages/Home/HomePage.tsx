import Categories from "../../components/Categories";
import Featured from "../../components/Featured";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import JustArrived from "../../components/JustArrivedProduct";
import Navbar from "../../components/NavBar";
import Offers from "../../components/Offers";
import Subscrise from "../../components/Subscrise";
import TrendyProducts from "../../components/TrendyProducts";
export default function HomePage(){
   return(
      <>
      <Header/>
      <Navbar/>
      <Featured/>
      <Categories/>
      <Offers/>
      <TrendyProducts/>
      <Subscrise/>
      <JustArrived/>
      <Footer/>
      </>
   );
}