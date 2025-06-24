import Counter from "../layouts/Counter";
import Experience from "../layouts/Experience";
import Header from "../layouts/Header";
import Hero from "../layouts/Hero";
import Services from "../layouts/Services";
import Portfolio from "../layouts/Portfolio";
import Logo from "../layouts/Logo";
import Review from "../layouts/Review";
import Connect from "../layouts/Connect";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Counter />
      <Services />
      <Experience />
      <Logo />
      <Portfolio />
      <Review/>
      <Connect/>
    </div>
  );
};

export default Home;
