import Container from "../Container";
import Flex from "../Flex";
import Fonts from "../Fonts";
import UI from "../../assets/Group 21.svg";
import Box from "../../assets/Group 19.svg";
import Eye from "../../assets/Group 27.svg";

const Services = () => {
  return (
    <>
      {/* Service Section */}
      <section>
        <Container className={`py-15`}>
          <Fonts>
            <div className=" text-center">
              <p className="text-[#5E3BEE] text-[18px]  uppercase">Services</p>
              <h3 className=" text-[48px] py-5 font-bold ">
                What I Do For My Customer.
              </h3>
              <p className="text-[#121212] text-[16px] px-65 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                vitae blandit lectus. Praesent at hendrerit velit, at dictum
                nisl.
              </p>
            </div>
            <Flex className={`justify-between`}>
              <div class="serviceCard mt-15 w-[30%] rounded-2xl border border-gray-200 px-10 py-12 flex justify-center items-center flex-col text-center shadow-2xl shadow-gray-300 ">
                <img src={UI} alt="" />
                <h3 class="py-5">UI/UX Design</h3>
                <p class="px-10 text-gray-600">
                  lorem ipsum dolor sit amet consectur adi pising leo
                </p>
              </div>
              <div class="serviceCard mt-15 w-[30%] rounded-2xl border border-gray-200 px-10 py-12 flex justify-center items-center flex-col text-center shadow-2xl shadow-gray-300 ">
                <img src={Box} alt="" />
                <h3 class="py-5">UI/UX Design</h3>
                <p class="px-10 text-gray-600">
                  lorem ipsum dolor sit amet consectur adi pising leo
                </p>
              </div>
              <div class="serviceCard mt-15 w-[30%] rounded-2xl border border-gray-200 px-10 py-12 flex justify-center items-center flex-col text-center shadow-2xl shadow-gray-300 ">
                <img src={Eye} alt="" />
                <h3 class="py-5">UI/UX Design</h3>
                <p class="px-10 text-gray-600">
                  lorem ipsum dolor sit amet consectur adi pising leo
                </p>
              </div>
            </Flex>
          </Fonts>
        </Container>
      </section>
      {/* Service Section */}
    </>
  );
};

export default Services;
