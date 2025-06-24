import Container from "../Container";
import Flex from "../Flex";
import Fonts from "../Fonts";

const Services = () => {
  return (
    <>
       {/* Service Section */}
      <section>
        <Container className={`py-15`}>
          <Fonts>
            <div className=" text-center">
                 <p className="text-[#5E3BEE] text-[18px]  uppercase">Services</p>
                 <h3 className=" text-[48px] py-5 font-bold ">What I Do For My Customer.</h3>
                 <p className="text-[#121212] text-[16px] px-65 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl.</p>
            </div>
           <Flex>
            
           </Flex>
          </Fonts>
        </Container>
      </section>
      {/* Service Section */}
    </>
  )
}

export default Services