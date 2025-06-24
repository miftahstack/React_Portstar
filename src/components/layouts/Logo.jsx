import Container from "../Container";
import Flex from "../Flex";
import Fonts from "../Fonts";
import one from "../../assets/logo-3.png";
import two from "../../assets/logo-5.png";
import three from "../../assets/logo-6.png";
import fou from "../../assets/logo-7.png";

const Logo = () => {
  return (
     <>
      {/* Logo Section */}
      <section>
        <Container className={`py-20`}>
          <Fonts>
            <Flex className={`justify-between`}>
             <img src={one}/>
             <img src={two}/>
             <img src={three}/>
             <img src={fou}/>
            </Flex>
          </Fonts>
        </Container>
      </section>
      {/* Logo Section */}
    </>
  )
}

export default Logo