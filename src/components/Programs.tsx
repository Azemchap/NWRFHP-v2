import Image from 'next/image';
import car_in_mud from 'public/images/car-in-mud.jpg';
import car_and_mud from 'public/images/car_and_mud.jpg';
import car_and_rock from 'public/images/rock.jpg';
import supply_team from 'public/images/supply-team.jpg';

export default function Programs(): JSX.Element {
    return (
        <div className="relative py-16 bg-white overflow-hidden">
            <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
                <div className="relative h-full text-lg max-w-screen-lg mx-auto" aria-hidden="true">
                    <svg
                        className="absolute top-12 left-full transform translate-x-32"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
                    >
                        <defs>
                            <pattern
                                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
                    </svg>
                    <svg
                        className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
                    >
                        <defs>
                            <pattern
                                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
                    </svg>
                    <svg
                        className="absolute bottom-12 left-full transform translate-x-32"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
                    >
                        <defs>
                            <pattern
                                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
                    </svg>
                </div>
            </div>
            <div className="relative sm:px-6 ">
                <div className="text-lg max-w-screen-lg mx-auto">
                    <h1>
                        <span className="mt-2 block text-xl text-left leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl">
                            1.	Management of Essential Medicines
                        </span>
                    </h1>
                    <p className="mt-4 text-xl text-gray-500 leading-8">
                        Essential medicines (EMs), which satisfy the priority health care needs of the population, are backbone of health care and well-being of individuals and populations. However, its physical access was a big challenge particularly in rural communities in Cameroon. This was influenced by many interlinked factors such as the availability of medicines in the health care facilities, availability of sustainable financing and reliable health systems, rational selection and use of medicines, and affordable price. This is the raison d'être of setting up the NWRFHP PIG in 1987 as a revolving medicines program with a high participation of the population.
                    </p>
                </div>
                <div className="mt-6 max-w-screen-lg text-gray-500 mx-auto">
                    <p className='mt-4 text-xl text-gray-500 leading-8'>
                        Its objective was to improve access to good quality and cost effective medicines, medical consumables and diagnostic materials at all levels of health care on the basis of health needs. Specifically, it was to make available 95% of medicines in the regional medical store and 90% available in all community pharmacies. In order to achieve its objectives the NWRFHP PIG had owned a regional medical store for all the community pharmacies of the 19 health districts and to independently organize its own activities such as investments, uninterrupted drug purchases and continuous community contribution.
                    </p>
                    <figure>
                        <Image
                            className="w-full rounded-lg object-cover"
                            src={car_in_mud}
                            alt=""
                            width={1310}
                            height={873}
                        />
                        <figcaption className='italic text-sm text-sky-700'>Poor state of our roads continues to be a major challenge distributing essential medicines</figcaption>
                    </figure>

                    <p className='mt-4 text-xl text-gray-500 leading-8'>
                        On application, new communities are offered drug seed stock, safety measures for the community pharmacy locality and training. The local community has to provide a well-furnished locality, to select the community pharmacy attendant, and to elect the local Health Committee. In 1995 the NWRFHP PIG provided AND maintained a medicine supply system for an estimated 80% of the rural population and a good portion of the urban areas. Today, 217 community pharmacies are supplied from the regional medical store covering 90% of the population.
                    </p>
                    <figure>
                        <Image
                            className="w-full rounded-lg object-cover"
                            src={supply_team}
                            alt=""
                            width={1310}
                            height={873}
                        />
                        <figcaption className='italic text-sm text-sky-700'>Supply/Supervision team from the NWRFHP PIG with sub store staff in front of the Nkambe Sub-Store</figcaption>
                    </figure>

                    <p className='mt-4 text-xl text-gray-500 leading-8'>
                        The NWRFHP PIG offers services not only to its community pharmacies but also to associated religious and charity institutions, improving pharmaceutical coverage in the region. This has contributed considerably to better quality of care in the North West region. On the one hand, essential drug programs have to assure the continuous availability of drugs, and efficient use of these drugs at the prescriber and consumer level on the other hand. To prevent medical and paramedical personnel from making therapeutic decisions on profit grounds, some guidelines have been developed. By 2017, the turnover of NWRFHP PIG has considerably and positively evolved and it has been able to make available 85% of medicines in the regional medical store and 90% available in all community pharmacies, kept expiry of medicines below 4% and continuously train health personnel on the rational use of medicines/laboratory reagents and medical consumables.
                    </p>

                    <figure className=''>
                        <div className="flex gap-4 p-0">
                            <Image
                                className="w-1/2 rounded-lg  object-cover"
                                src={car_and_rock}
                                alt=""
                                width={1310}
                                height={873}
                            />

                            <Image
                                className="w-1/2 rounded-lg object-cover"
                                src={car_and_mud}
                                alt=""
                                width={1310}
                                height={873}
                            />
                        </div>


                        <figcaption className='italic mt-0 text-sm text-sky-700'>Despite the poor state of our roads, we still ensure effective distribution of essential medicines</figcaption>
                    </figure>


                    <p className='mt-4 text-xl text-gray-500 leading-8'>
                        Now the number of items per prescription varies between 2 and 3. This shows that prescribers apply the principles of rational use of medicines. Medicines are dispensed only on presentation of a prescription issued by an authorized medical staff. These prescriptions must either be dispensed completely or referred back to the prescriber. Drugs are issued solely against cash payment. Thus, problems due to debts, incomplete therapy and subsequent self-medication are minimized. Strict adherence to these rules and regulations is accepted by the community as a means to assure the sustainability of their system.
                    </p>
                </div>
            </div>
        </div>
    )
}
