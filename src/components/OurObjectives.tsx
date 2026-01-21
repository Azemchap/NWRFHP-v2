
import React from "react";
/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/24/outline'

interface Feature {
  name: string;
  description: string;
}

const features: Feature[] = [
  {
    name: 'Pharmaceutical products',
    description: 'Ensure the selection, procurement, distribution and use of pharmaceutical products.',
  },
  { name: 'Assistance', description: '	Assist the Ministry of Public Health of Cameroon in financing the functioning of health services.' },
  {
    name: 'Donations',
    description: 'Donate whenever possible, pharmaceutical products, medical supplies and basic health equipment to charity bodies and communities afflicted by disasters within the Region.',
  },
  { name: 'Quality services', description: 'Contribute to the reinforcement of the health system within the Region to assure quality of health services.' },
  { name: 'Resourcefulness', description: 'Set up resource generating entities strictly in the health domain to reinforce the health system.' },
  { name: 'Promotions', description: 'Strengthen health promotion, rehabilitative and preventive activities in the Region.' },
  { name: 'Community', description: 'Ensure effective community participation in health activities in the Region.' },
  { name: 'Capacity building', description: 'Support capacity building of health personnel and dialogue structures.' },
]

const OurObjectives: React.FC = () => {
  return (
    <div
      className="container-fluid findus-wrapper"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="bg-white">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div>
            <h2 className="leading-6 text-blue-600 font-semibold tracking-wide uppercase">Our Objectives</h2>
            <h3 className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl">Objectives of NWRFHP - PIG</h3>
            <p className="mt-4 text-lg text-gray-500">
              The main objective of the Fund is to promote quality health care for people in the North West Region. The Specific Objectives include the following:
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                    <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurObjectives;
