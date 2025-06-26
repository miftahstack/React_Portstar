import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "../../assets/logo.png";
import Sakib from "../../assets/Avatar.png";
import Fonts from "../Fonts";
import { BsEnvelope } from "react-icons/bs";



const Header = () => {
  return (
    <>
      {/* Navbar */}
      <section>
        <Container>
          <Fonts>
            <Flex className={`justify-between mt-5`}>
              <Image src={Logo} alt={Logo.png} />

              <ul className="flex items-center gap-x-7.5 uppercase font-Poppins">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About US</a>
                </li>
                <li>
                  <a href="">Services</a>
                </li>
                <li>
                  <a href="">Works</a>
                </li>
              </ul>

              <button
                className="flex items-center  btn-info py-3 px-7 text-[14px] rounded-full bg-[#5E3BEE] text-white uppercase"
                type="button">
                 Hire Me <BsEnvelope className="ml-2 text-[18px]"/>
              </button>
            </Flex>
          </Fonts>
        </Container>
      </section>
      {/* Navbar */}


    </>
  );
};

export default Header;
