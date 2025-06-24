import Container from "../Container";
import Flex from "../Flex";
import Fonts from "../Fonts";
import Star from "../../assets/star.svg";
import Inbox from "../../assets/inbox.svg";

const Review = () => {
  return (
    <>
      {/* Review Section */}
      <section>
        <Container className={`py-15`}>
          <Fonts>
            <div class="text-center">
              <h4 class="text-[#5E3BEE] uppercase">Testimony</h4>
              <h3 class="text-[44px] font-semibold">What My Clients Say.</h3>
              <p class="text-[16px] px-80 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                vitae blandit lectus. Praesent at hendrerit velit, at dictum
                nisl.
              </p>
            </div>
            <div class="flex justify-between items-center mt-10">
                <div class="hover:shadow-2xl w-[47.5%] border-gray-200 border shadow-gray-300 p-7.5 rounded-[20px] bg-white">
                  <div class="flex gap-x-2">
                    <img src={Star} />
                    <img src={Star} />
                    <img src={Star} />
                    <img src={Star} />
                    <img src={Star} />
                  </div>
                  <p class="pr-18 py-5">
                    Nulla nunc orci, suscipit vitae rutrum vitae, sagittis eget
                    dui. Vestibulum nisl lorem, porta at mollis varius,
                    tincidunt in lectus. Nam pulvinar auctor sem ac dictum. Ut
                    sed felis urna.
                  </p>
                  <div class="flex justify-between items-center">
                    <div class="flex">
                      <div class="rounded-full h-13.5 w-13.5 mr-5 bg-[#5E3BEE]"></div>
                      <div class="">
                        <h4 class="text-[16px]">David Gueta</h4>
                        <p class="text-[16px] text-gray-500">UI/UX Designer</p>
                      </div>
                    </div>
                    <img src={Inbox} alt="" />
                  </div>
                </div>
                <div class="hover:shadow-2xl w-[47.5%] border-gray-200 border shadow-gray-300 p-7.5 rounded-[20px] bg-white">
                  <div class="flex gap-x-2">
                    <img src={Star} />
                    <img src={Star} />
                    <img src={Star} />
                    <img src={Star} />
                    <img src={Star} />
                  </div>
                  <p class="pr-18 py-5">
                    Nulla nunc orci, suscipit vitae rutrum vitae, sagittis eget
                    dui. Vestibulum nisl lorem, porta at mollis varius,
                    tincidunt in lectus. Nam pulvinar auctor sem ac dictum. Ut
                    sed felis urna.
                  </p>
                  <div class="flex justify-between items-center">
                    <div class="flex">
                      <div class="rounded-full h-13.5 w-13.5 mr-5 bg-[#5E3BEE]"></div>
                      <div class="">
                        <h4 class="text-[16px]">David Gueta</h4>
                        <p class="text-[16px] text-gray-500">UI/UX Designer</p>
                      </div>
                    </div>
                    <img src={Inbox} alt="" />
                  </div>
                </div>
            </div>
          </Fonts>
        </Container>
      </section>
      {/* Review Section */}
    </>
  );
};

export default Review;
