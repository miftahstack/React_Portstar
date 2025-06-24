import Container from "../Container";
import Flex from "../Flex";
import Fonts from "../Fonts";

const Connect = () => {
  return (
    <>
      {/* Connect Section */}
      <section>
        <Container className={`py-30 bg-[.]`}>
          <Fonts>
            <div class="text-center">
              <h3 class="text-[50px] font-semibold px-70">
                Interested Working With me? Let's connect!
              </h3>
              <button
                className=" btn-info py-3 px-7 text-[14px] rounded-full bg-[#5E3BEE] text-white uppercase"
                type="button">
                Hire Me<i class="fa-solid fa-envelope"></i>
              </button>
            </div>
          </Fonts>
        </Container>
      </section>
      {/* Connect Section */}
    </>
  );
};

export default Connect;
