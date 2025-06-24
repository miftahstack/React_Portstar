import Counter from "../layouts/Counter";
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
     <Logo/>
    </div>
  );
};

export default Home;
