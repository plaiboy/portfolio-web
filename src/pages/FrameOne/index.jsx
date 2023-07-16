import React from "react";

import { Button, Img, Input, List, Text, TextArea } from "components";

const FrameOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-josefinsans items-center justify-start mx-auto pb-0.5 w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[1011px] md:px-5 relative w-full">
            <Img
              className="h-[1011px] m-auto object-cover w-full"
              src="images/img_rectangle1.png"
              alt="rectangleOne"
            />
            <div className="absolute flex md:flex-col flex-row md:gap-10 items-center justify-between right-[0] top-[3%] w-[45%]">
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtJosefinSansRomanBold24"
              >
                HOME
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtJosefinSansRomanBold24"
              >
                ABOUT
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtJosefinSansRomanBold24"
              >
                SERVICE
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtJosefinSansRomanBold24"
              >
                PORTFOLIO
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtJosefinSansRomanBold24"
              >
                CONTACT
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtJosefinSansRomanBold24"
              >
                BLOG
              </Text>
            </div>
            <div className="absolute bg-blue-800_a5 flex flex-col font-saira md:gap-10 gap-[93px] h-full inset-y-[0] items-center justify-center left-[0] my-auto p-[213px] md:px-10 sm:px-5 w-[53%]">
              <Text
                className="mt-[183px] text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                size="txtSairaRomanBold48"
              >
                LETS GET STARTED
              </Text>
              <Button className="bg-red-600 cursor-pointer font-bold leading-[normal] mb-36 min-w-[274px] py-3 sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1556px] mt-[156px] mx-auto md:px-5 w-full">
            <div className="bg-gray-50 flex flex-col gap-[35px] justify-start p-[19px] rounded-[25px] shadow-bs">
              <Text
                className="md:ml-[0] ml-[87px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtSairaRomanBold40"
              >
                web design
              </Text>
              <Text
                className="mb-[151px] md:ml-[0] ml-[29px] mr-[11px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                size="txtJosefinSansRomanBold32"
              >
                <>
                  i have experience in <br />
                  UI/UX desjoseign using tools
                  <br />
                  like figma.
                </>
              </Text>
            </div>
            <List
              className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[107px] grid md:grid-cols-1 grid-cols-2 w-[67%] md:w-full"
              orientation="horizontal"
            >
              <div className="md:h-[416px] h-[417px] sm:ml-[0] relative w-full">
                <div className="absolute bg-gray-50 flex flex-col font-saira h-full inset-[0] items-center justify-center m-auto p-[18px] rounded-[25px] shadow-bs">
                  <Text
                    className="mb-[299px] mt-[18px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                    size="txtSairaRomanBold40"
                  >
                    fullstack development{" "}
                  </Text>
                </div>
                <Text
                  className="absolute right-[0] md:text-3xl sm:text-[28px] text-[32px] text-black-900 top-[29%]"
                  size="txtJosefinSansRomanBold32"
                >
                  <>
                    Iam a fullstack developer
                    <br />
                    with skills in Nodejs, Reactjs
                    <br />
                    Html5 MongoDb and <br />
                    expressJs
                  </>
                </Text>
              </div>
              <div className="md:h-[415px] h-[417px] sm:ml-[0] relative w-full">
                <div className="absolute bg-gray-50 flex flex-col font-saira h-full inset-[0] items-start justify-center m-auto p-[15px] rounded-[25px] shadow-bs">
                  <Text
                    className="mb-[322px] md:ml-[0] ml-[13px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                    size="txtSairaRomanBold40"
                  >
                    SEO and Saas
                  </Text>
                </div>
                <Text
                  className="absolute right-[0] md:text-3xl sm:text-[28px] text-[32px] text-black-900 top-[23%]"
                  size="txtJosefinSansRomanBold32"
                >
                  <>
                    As an accomplished SEO and
                    <br /> SaaS specialist, I bring a <br />
                    unique blend of expertise in
                    <br /> both search engine
                    <br /> optimization (SEO) and <br />
                    software-as-a-service.
                  </>
                </Text>
              </div>
            </List>
          </div>
          <div className="bg-gray-50_01 flex flex-col items-center justify-start mt-[217px] pt-[79px] w-full">
            <div className="flex md:flex-col flex-row gap-[31px] items-start justify-between w-full">
              <div className="flex md:flex-1 flex-col md:gap-10 gap-[125px] justify-start md:px-5 w-[48%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[610px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                  size="txtJosefinSansRomanBold40"
                >
                  About me
                </Text>
                <div className="h-[946px] mr-[52px] relative w-[94%] md:w-full">
                  <Img
                    className="h-[946px] m-auto object-cover w-full"
                    src="images/img_rectangle11.png"
                    alt="rectangleEleven"
                  />
                  <div className="absolute bg-black-900_a0 bottom-[0] flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-center justify-end mx-auto p-5 w-full">
                    <Img
                      className="h-[60px] w-[60px]"
                      src="images/img_5296501linkedi.svg"
                      alt="5296501linkedi"
                    />
                    <Img
                      className="h-[60px] md:h-auto sm:ml-[0] ml-[155px] object-cover w-[60px]"
                      src="images/img_5296514birdtw.png"
                      alt="5296514birdtw"
                    />
                    <Img
                      className="h-[60px] md:h-auto sm:ml-[0] ml-[131px] mr-[113px] object-cover w-[60px]"
                      src="images/img_5296499fbfacebookfacebook.png"
                      alt="5296499fbfacebo"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start md:mt-0 mt-[217px] md:px-5">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                  size="txtJosefinSansRomanBold48"
                >
                  <>
                    Hello there, I am a web designer and <br />
                    software developer.
                  </>
                </Text>
                <Text
                  className="mt-[50px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtJosefinSansRomanBold32"
                >
                  <>
                    Highly skilled and results-driven software engineer <br />
                    with a strong background in designing, developing,
                    <br /> and implementing innovative <br />
                    software solutions. Proficient in multiple
                    <br /> programming languages and
                    <br /> frameworks, with expertise in full-stack
                    <br /> development.{''}
                  </>
                </Text>
                <Text
                  className="md:ml-[0] ml-[38px] mt-[166px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtJosefinSansRomanBold32"
                >
                  My skills
                </Text>
                <Text
                  className="md:ml-[0] ml-[29px] mt-[30px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtJosefinSansRomanBold32"
                >
                  <>
                    Html
                    <br />
                    css
                    <br />
                    Javascript
                    <br />
                    Typescript
                  </>
                </Text>
              </div>
            </div>
          </div>
          <div className="md:h-[1295px] h-[548px] sm:h-[650px] mt-[102px] md:px-5 relative w-full">
            <Img
              className="h-[500px] mt-[13px] mx-auto object-cover w-full"
              src="images/img_rectangle14.png"
              alt="rectangleFourteen"
            />
            <div className="absolute bg-black-900_c9 flex md:flex-col flex-row md:gap-10 h-full inset-[0] items-start justify-between m-auto p-[87px] md:px-10 sm:px-5 w-full">
              <div className="bg-black-900_3f flex flex-col gap-7 items-center justify-start mb-[145px] md:mt-0 mt-[60px] outline outline-[1px] outline-white-A700 p-8 sm:px-5">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtJosefinSansRomanBold32WhiteA700"
                >
                  Experience
                </Text>
                <Text
                  className="mb-[11px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtJosefinSansRomanBold32WhiteA700"
                >
                  2 years
                </Text>
              </div>
              <div className="flex h-[169px] md:h-[313px] justify-end mb-[145px] md:mt-0 mt-[60px] relative w-[24%] md:w-full">
                <Text
                  className="mb-[43px] mt-auto mx-auto md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtJosefinSansRomanBold32WhiteA700"
                >
                  Nairobi Kenya
                </Text>
                <div className="absolute bg-black-900_3f flex flex-col h-full inset-[0] items-start justify-center m-auto outline outline-[1px] outline-white-A700 p-[31px] sm:px-5 w-full">
                  <Text
                    className="mb-[74px] md:ml-[0] ml-[67px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                    size="txtJosefinSansRomanBold32WhiteA700"
                  >
                    Location
                  </Text>
                </div>
              </div>
              <div className="bg-black-900_3f h-[169px] mb-[145px] mr-[35px] md:mt-0 mt-[60px] outline outline-[1px] outline-white-A700 w-[24%]"></div>
            </div>
          </div>
          <div className="bg-indigo-A700 flex flex-col items-center justify-start mt-[213px] p-[39px] sm:px-5 w-full">
            <div className="bg-white-A700 flex flex-col items-start justify-start max-w-[1575px] mb-[30px] mt-[7px] mx-auto p-[81px] md:px-5 rounded-[35px] w-full">
              <div className="flex flex-col items-center justify-start mb-[661px] md:ml-[0] ml-[518px]">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                  size="txtJosefinSansRomanBold40"
                >
                  TESTIMONIAL
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 flex flex-col md:gap-10 gap-[76px] items-center justify-start mt-[133px] p-[45px] md:px-10 sm:px-5 w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtJosefinSansRomanBold40"
            >
              CONTACT ME
            </Text>
            <div className="bg-gray-50_01 flex flex-col items-center justify-end max-w-[1032px] mb-[117px] mx-auto p-[21px] md:px-5 shadow-bs w-full">
              <div className="flex flex-col items-start justify-start mt-[52px] w-[94%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-11 items-center justify-between ml-0.5 md:ml-[0] w-full">
                  <Text
                    className="bg-blue_gray-100 h-[68px] justify-center pb-[35px] pt-[11px] sm:px-5 px-[35px] text-gray-700_a0 text-xl w-[438px]"
                    size="txtJosefinSansRomanBold20"
                  >
                    NAME
                  </Text>
                  <Text
                    className="bg-blue_gray-100 h-[68px] justify-center pb-5 pl-4 sm:pr-5 pr-[35px] pt-[27px] text-gray-700_a0 text-xl w-[438px]"
                    size="txtJosefinSansRomanBold20"
                  >
                    EMAIL
                  </Text>
                </div>
                <Input
                  name="groupThree"
                  placeholder="SUBJECT"
                  className="font-bold leading-[normal] p-0 placeholder:text-gray-700_a0 sm:pr-5 text-gray-700_a0 text-left text-xl w-full"
                  wrapClassName="bg-blue_gray-100 ml-0.5 md:ml-[0] mt-[49px] pb-[19px] pl-5 pr-[35px] pt-7 w-[48%]"
                ></Input>
                <TextArea
                  className="bg-blue_gray-100 font-bold leading-[normal] mt-[49px] pb-[35px] pl-[22px] pr-[35px] pt-2.5 sm:px-5 placeholder:text-gray-700_a0 text-gray-700_a0 text-left text-xl w-full"
                  name="groupTwo"
                  placeholder="MESSAGE"
                  name="groupTwo"
                  placeholder="MESSAGE"
                ></TextArea>
                <Button className="bg-black-900 cursor-pointer font-bold leading-[normal] min-w-[216px] md:ml-[0] ml-[337px] mt-[31px] py-[18px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl">
                  SEND MESSAGE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameOnePage;
