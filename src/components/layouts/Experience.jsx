import Container from "../Container";
import Flex from "../Flex";
import Fonts from "../Fonts";
import group from "../../assets/Group 41.png";


const Experience = () => {
  return (
    <>
      {/* Experience Section */}
      <section>
        <Container className={`py-25`}>
          <Fonts>
            <Flex className={`justify-between`}>
              <div className="w-[50%]">
                <p class="text-primary text-[16px] uppercase mb-8">
                graphic Designer
              </p>
              <h3 class="text-5xl font-bold text-[60px] leading-20">Graphic</h3>
              <h3 class="text-5xl font-bold text-[60px] leading-20">Designer With</h3>
              <h3 class="text-5xl font-bold text-[60px] leading-20">10 Years Of</h3>
              <h3 class="text-5xl font-bold text-[60px] leading-20">Experience.</h3>
              <p class="py-5 pr-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                vitae blandit lectus. Praesent at hendrerit velit, at dictum
                nisl.
              </p>
              <button
                class="cursor-pointer py-4 px-8 text-[13px] bg-[#5E3BEE] text-white btn uppercase bg-primary rounded-full mt-6"
                type="button">
                contact me
              </button>
              </div>
              <img src={group} alt="" />
            </Flex>
          </Fonts>
        </Container>
      </section>
      {/* Experience Section */}
    </>
  );
};

export default Experience;
