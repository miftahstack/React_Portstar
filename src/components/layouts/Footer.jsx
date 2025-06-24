import Container from "../Container";
import Flex from "../Flex";
import Fonts from "../Fonts";
import Logo from "../../assets/LOGO-1.png";
import Envelop from "../../assets/Frame.svg";
import Call from "../../assets/Frame-2.svg";
import FB from "../../assets/Frame-3.svg";
import IG from "../../assets/Frame-4.svg";
import In from "../../assets/Frame-5.svg";
import Drib from "../../assets/Frame-6.svg";

const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <section>
        <Container className={`mt-20 bg-[#333333] rounded-t-2xl py-15 px-25`}>
          <Fonts>
            <Flex className={`justify-between`}>
              <div className="">
                <img src={Logo} alt="" />
                <p className="w-[300px] text-white py-10 text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  vitae blandit lectus. Praesent at hendrerit.
                </p>
              </div>
              <div className="">
                <div className="flex ">
                  <img src={Envelop} />
                  <p className="text-white ml-3">inquiry@portostar.com</p>
                </div>
                <div className="flex my-7.5">
                  <img src={Call} />
                  <p className="text-white ml-3">(001) 1231 3435</p>
                </div>

                <div className="flex gap-x-5">
                  <img src={FB} alt="" />
                  <img src={IG} alt="" />
                  <img src={In} alt="" />
                  <img src={Drib} alt="" />
                </div>
              </div>
            </Flex>
            <hr className=" border-[#404040]" />
          </Fonts>
          <div className="flex justify-between mt-5 text-white text-[14px]">
            <ul className="flex gap-x-5 uppercase">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About US</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Works</a>
              </li>
            </ul>

            <p>© All Right Reserved</p>
          </div>
        </Container>
      </section>
      {/* Footer Section */}
    </>
  );
};

export default Footer;
