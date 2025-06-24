import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "../../assets/logo.png";
import Sakib from "../../assets/Avatar.png";
import Fonts from "../Fonts";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section>
        <Container className={`py-15`}>
          <Fonts>
            <Flex>
              <div className="w-[50%]">
                <p className="text-[16px] uppercase text-[#5E3BEE] ">
                  Sakib Al Hasan
                </p>
                <h3 className="text-[55px] font-bold  ">Hello, my</h3>
                <h3 className="text-[55px] font-bold  ">name's Sakib</h3>
                <h3 className="text-[55px] font-bold  ">I'm MERN Stack</h3>
                <h3 className="text-[55px] font-bold  ">Developer.</h3>
                <div className="font-Poppins py-10 text-[14px]">
                  <button
                    className="mr-5 btn-info py-3 text-[14px] px-5 rounded-full bg-[#5E3BEE] text-white uppercase"
                    type="button">
                    Contact ME<i class="fa-solid fa-envelope"></i>
                  </button>
                  <button
                    className=" btn-info rounded-full uppercase"
                    type="button">
                    Download CV<i class="fa-solid fa-envelope"></i>
                  </button>
                </div>
              </div>
              <img className="w-170" src={Sakib} />
            </Flex>
          </Fonts>
        </Container>
      </section>
      {/* Hero Section */}
    </>
  );
};

export default Hero;
