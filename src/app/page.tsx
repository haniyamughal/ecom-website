import Banner2 from "../components/banner2";
import Blogspost from "../components/blogpost";
import DiscountItem from "../components/discountItem";
import FeaturedProducts from "../components/featured product";
import Footer from "../components/footer";
import Header from "../components/header";
import HeroSection from "@/components/hero";
import LatestProducts from "@/components/latestproduct";
import Navbar from "@/components/navbar";
import Shopex from "@/components/shopex";
import TopCategory from "@/components/topcategory";
import TrendingProducts from "@/components/trending products";
import Image from "next/image";

export default function Page() {
  return (
 <div>
  <Header />
  <Navbar />
  <HeroSection />
  <FeaturedProducts />
  <LatestProducts />
  <Shopex />
  <Banner2 />
  <TrendingProducts />  
  <DiscountItem />
  <TopCategory /> 
  <Blogspost />  
  <Footer />
 </div>
  );
}
