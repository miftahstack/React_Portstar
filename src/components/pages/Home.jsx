import Counter from "../layouts/Counter";
import Experience from "../layouts/Experience";
import Header from "../layouts/Header";
import Hero from "../layouts/Hero";
import Logo from "../layouts/Logo";
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
    </div>
  );
};

export default Home;
