import Container from "../Container";
import Flex from "../Flex";
import Fonts from "../Fonts";
import port1 from "../../assets/camppusa.jpeg";
import port2 from "../../assets/gawwi.jpeg";

const Portfolio = () => {
  return (
    <>
      {/* Portfolio Section */}
      <section>
        <Container className={`py-15`}>
          <Fonts>
            <div className="flex justify-between items-center">
              <div class="portfolioText">
                <h4 class="text-[#5E3BEE] text-[16px] uppercase">Portfolio</h4>
                <h3 class="text-[48px]">Selected Works.</h3>
              </div>
              <div className="font-thin">
                <p className="text-[#121212] text-[14px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  vitae
                </p>
                <p className="text-[#121212] text-[14px]">
                  blandit lectus. Praesent at hendrerit velit, at dictum nisl.
                </p>
              </div>
            </div>
            <div class="flex justify-between rounded-2xl flex-wrap gap-y-7.5">
              <div class="w-[45%] rounded-[20px] bg-white shadow-lg m-2 ">
                <img className="rounded-t-2xl " src={port1} alt="" />
                <div className="py-10 p-7.5">
                  <h5 class="text-[16px]  text-gray-800 font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus.
                  </h5>
                  <p className="text-[14px] text-gray-400 ">
                    Campusa - Presentation Template
                  </p>
                </div>
              </div>
              <div class="w-[45%] rounded-[20px] bg-white shadow-lg m-2 ">
                <img className="rounded-t-2xl " src={port2} alt="" />
                <div className="py-10 p-7.5">
                  <h5 class="text-[16px]  text-gray-800 font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus.
                  </h5>
                  <p className="text-[14px] text-gray-400 ">
                    Gawwi - Presentation Template
                  </p>
                </div>
              </div>
              <div class="w-[45%] rounded-[20px] bg-white shadow-lg m-2 ">
                <img className="rounded-t-2xl " src={port2} alt="" />
                <div className="py-10 p-7.5">
                  <h5 class="text-[16px]  text-gray-800 font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus.
                  </h5>
                  <p className="text-[14px] text-gray-400 ">
                    Gawwi - Presentation Template
                  </p>
                </div>
              </div>
              <div class="w-[45%] rounded-[20px] bg-white shadow-lg m-2 ">
                <img className="rounded-t-2xl " src={port1} alt="" />
                <div className="py-10 p-7.5">
                  <h5 class="text-[16px]  text-gray-800 font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus.
                  </h5>
                  <p className="text-[14px] text-gray-400 ">
                    Campusa - Presentation Template
                  </p>
                </div>
              </div>
            </div>
          </Fonts>
        </Container>
      </section>
      {/* Portfolio Section */}
    </>
  );
};

export default Portfolio;
