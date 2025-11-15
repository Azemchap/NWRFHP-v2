/* eslint-disable jsx-a11y/no-redundant-roles */
import Image from "next/image";
const sideImg = "/images/096A0583.jpg"; // Import the image

const AboutUs = () => {
  return (
    <div
      className=" max-w-screen-2xl mx-auto  py-24"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className=" " id="about">
        <div className="relative mx-auto bg-white">
          <div className="lg:absolute lg:inset-0">
            <div className="lg:absolute m-4 rounded lg:inset-y-0 lg:left-0 lg:w-1/2">
              <Image
                className="h-56 w-full object-cover lg:absolute lg:h-full"
                src={sideImg}
                alt=""
              />
            </div>
          </div>
          <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
            <div className="lg:col-start-2 lg:pl-8">
              <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
                <h2 className="leading-6 text-blue-600 font-semibold tracking-wide uppercase">
                  About us
                </h2>
                <div>
                  <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Who are we?
                  </h3>
                  <p className="mt-8 text-lg text-gray-500">
                    The North West Regional Fund for Health Promotion - PIG is a
                    public corporate dialogue structure set up by a constituent
                    agreement of the state, the technical/financial partners,
                    and the North West community on June 11, 2012 in line with
                    law no. 2010/023 of December 2010 to define the status of
                    Public Interest Groups in Cameroon.
                  </p>
                </div>
                <div className="mt-8">
                  <h3 className="mt-5 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Brief history
                  </h3>
                  <p className="mt-8 text-lg text-gray-500">
                    The North West Regional Fund for Health Promotion - PIG was
                    set up in 1987 as North West Pro Pharmacy to ensure a
                    constant supply of quality essential medicines to the
                    population of the North West region in line with the 5th
                    principal concerns of the Bamako Initiative. In 1991 it was
                    transformed into North West Provincial Special Fund for
                    Health in line with Law No.90/62 of 19th December 1990
                    relating to Freedom of associations. To improve its services
                    to the population, it was transformed into a Public Interest
                    Group on June 11, 2012 in line with Law No.2010/023 of
                    December 2010 on Public Interest Groups in Cameroon. In
                    compliance with its constituent agreement approved by Prime
                    Ministerial order no. 005/CAB/PM of January 21, 2013 a
                    Constitutive General Assembly was held in December 2013 to
                    put in place the Management Committee and adopt the internal
                    regulations and organizational chart.
                  </p>
                </div>
                <div className="mt-5 prose prose-indigo text-gray-500">
                  <h3 className="mt-5 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    How we’re different
                  </h3>
                  <p className="mt-8 text-lg text-gray-500">
                    As PIG, it is a public corporate dialogue structure of the
                    state, the technical/financial partners and the North West
                    Community. As an essential health care program based on
                    practical, scientifically sound, and socially acceptable
                    methods, its services are made accessible to the population
                    through their full participation and at a cost they can
                    afford. Starting with 59 Community Pharmacies, about 100
                    Village Health Posts (now Integrated Health Centres) and a
                    geographical coverage of 90%, it supplies medicines to 217
                    community pharmacies in public health facilities covering a
                    population of 2.2 million inhabitants.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
