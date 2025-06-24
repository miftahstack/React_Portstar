import Counter from "../layouts/Counter";
import Experience from "../layouts/Experience";
import Header from "../layouts/Header";
import Hero from "../layouts/Hero";
import Logo from "../layouts/Logo";
import Portfolio from "../layouts/Portfolio";
import Services from "../layouts/Services";


const Home = () => {
  return (
    <div>
     <Header/>
     <Hero/>
     <Counter/>
     <Services/>
     <Experience/>
     <Logo/>
     <Portfolio/>
    </div>
  );
};

export default Home;
