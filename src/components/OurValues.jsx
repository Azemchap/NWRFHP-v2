/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from "@heroicons/react/24/outline";

const features = [
  {
    name: "Collaboration",
    description:
      "Improving and sustaining performance depend on everyone in the system as a team (team work).",
  },
  {
    name: "Communication",
    description: "Effective communication between all levels; community.",
  },
  {
    name: "Openness",
    description: "Transparent performance, monitoring and reporting of facts .",
  },
  {
    name: "Respect",
    description:
      "The role of everyone engaged in improving performance is valued.",
  },
  {
    name: "Partnership ",
    description:
      "Partnership in providing access and equity to health care services for sustainable outcomes.",
  },
  {
    name: "Outcome focused",
    description:
      "Performance based decision making for programmes and services.",
  },
];

export default function OurValues() {
  return (
    <div
      className=" flex flex-col md:flex-row container mx-auto gap-4 p-3"
      id="mission-wrapper"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="bg-white">
        <div className="container  mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="leading-6 text-blue-600 font-semibold tracking-wide uppercase">
              {" "}
              Our core values
            </h2>
            <h3 className="mt-2 mb-6 text-3xl leading-8 font-extrabold text-center tracking-tight text-gray-900 sm:text-4xl">
              What we believe!
            </h3>
            <p className="mt-2 text-lg text-gray-500">
              In order to continuously improve its services, the NWRFHP upholds
              06 values and attitudes that shape and influence behaviour in the
              organisation.
            </p>
          </div>

          <dl className="mt-16 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon
                    className="absolute h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
