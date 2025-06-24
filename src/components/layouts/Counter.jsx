import Container from "../Container";
import Flex from "../Flex";
import Fonts from "../Fonts";

const Counter = () => {
  return (
      <>
      {/* Counter Section */}
      <section>
        <Container className={`py-15`}>
          <Fonts>
            <Flex className={`justify-between`}>
              <div className="flex flex-col items-center uppercase">
                <h4 className="text-[48px] font-semibold">100+</h4>
                <p className="text-[#121212] text-[13px]">Projects</p>
              </div>
              <div className="flex flex-col items-center uppercase">
                <h4 className="text-[48px] font-semibold">24</h4>
                <p className="text-[#121212] text-[13px]">Winning award</p>
              </div>
              <div className="flex flex-col items-center uppercase">
                <h4 className="text-[48px] font-semibold">70+</h4>
                <p className="text-[#121212] text-[13px]">happy clients</p>
              </div>
              <div className="flex flex-col items-center uppercase">
                <h4 className="text-[48px] font-semibold">10</h4>
                <p className="text-[#121212] text-[13px]">Experience</p>
              </div>
            </Flex>
          </Fonts>
        </Container>
      </section>
      {/* Counter Section */}
    </>
  )
}

export default Counter