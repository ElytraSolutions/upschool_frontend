import React from "react";

function acknowledgement() {
  return (
    <>
      <div
        className="bg-cover  bottom-0  "
        style={{ backgroundImage: `url('/images/ack/back.jpg')` }}
      >
        <div className="bg-[#462615F0] flex  justify-center">
          <div className="container max-w-4xl ">
            <div className="row justify-center">
              <div className="flex flex-col text-[#fff] items-center p-14 gap-4">
                <span className="text-center md:p-6 font-bold text-2xl md:text-5xl tracking-wide ">
                  Acknowledgement of Country
                </span>
                <img
                  src="/images/ack/ack1.png"
                  className="max-w-[250px] md:max-w-[450px]"
                  alt=""
                />
                <img src="/images/ack/flag.png" className="max-h-[50px]" />
                <div className=" flex justify-center w-[50vw] md:w-[30vw] "></div>
                <p className="text-[16px] tracking-wide max-w-2xl font-light text-center md:max-w-3xl lg:max-w-4xl  leading-6 pb-6">
                  Upschool would like to acknowledge that we live, work, learn
                  and play on Upschool would like to acknowledge that we live,
                  work, learn and play on the lands of the Aboriginal and Torres
                  Strait Islander people’s – who are the oldest continuing
                  culture in human history and the traditional owners of the
                  land we now call Australia. We acknowledge the wisdom and
                  diversity of these people and seek to learn from and be
                  inspired by their culture. We are grateful for the dignity
                  they show us in allowing us to share this land with them. Our
                  pledge is to continue to work to bring more awareness to
                  topics that the elders past, present and emerging bring our
                  attention to and take meaningful action to create positive
                  change here in Australia and the wider world. We also
                  acknowledge the struggle of indigenous cultures across the
                  globe and pledge to do our part to bring fairness, justice and
                  a balance of power to them as well..&nbsp;
                </p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default acknowledgement;
