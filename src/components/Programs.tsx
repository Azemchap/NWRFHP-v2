import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import car_in_mud from 'public/images/car-in-mud.jpg'
import car_and_mud from 'public/images/car_and_mud.jpg'
import car_and_rock from 'public/images/rock.jpg'
import supply_team from 'public/images/supply-team.jpg'

export default function Programs(): JSX.Element {
  return (
    <div className="space-y-8">
      {/* Introduction Card */}
      <Card className="border-neutral-200 shadow-md">
        <CardContent className="p-8 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-950 mb-6">
            1. Management of Essential Medicines
          </h2>
          <p className="text-body mb-6">
            Essential medicines (EMs), which satisfy the priority health care needs of the population, are backbone of health care and well-being of individuals and populations. However, its physical access was a big challenge particularly in rural communities in Cameroon. This was influenced by many interlinked factors such as the availability of medicines in the health care facilities, availability of sustainable financing and reliable health systems, rational selection and use of medicines, and affordable price. This is the raison d&apos;être of setting up the NWRFHP PIG in 1987 as a revolving medicines program with a high participation of the population.
          </p>
          <p className="text-body">
            Its objective was to improve access to good quality and cost effective medicines, medical consumables and diagnostic materials at all levels of health care on the basis of health needs. Specifically, it was to make available 95% of medicines in the regional medical store and 90% available in all community pharmacies. In order to achieve its objectives the NWRFHP PIG had owned a regional medical store for all the community pharmacies of the 19 health districts and to independently organize its own activities such as investments, uninterrupted drug purchases and continuous community contribution.
          </p>
        </CardContent>
      </Card>

      {/* Image Card 1 */}
      <Card className="border-neutral-200 shadow-md overflow-hidden">
        <CardContent className="p-0">
          <figure>
            <div className="relative w-full h-96">
              <Image
                src={car_in_mud}
                alt="Vehicle stuck in mud on rural road"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
            <figcaption className="px-6 py-4 text-sm italic text-primary-600 bg-neutral-50">
              Poor state of our roads continues to be a major challenge distributing essential medicines
            </figcaption>
          </figure>
        </CardContent>
      </Card>

      {/* Community Coverage Card */}
      <Card className="border-neutral-200 shadow-md">
        <CardContent className="p-8 sm:p-10">
          <p className="text-body mb-6">
            On application, new communities are offered drug seed stock, safety measures for the community pharmacy locality and training. The local community has to provide a well-furnished locality, to select the community pharmacy attendant, and to elect the local Health Committee. In 1995 the NWRFHP PIG provided AND maintained a medicine supply system for an estimated 80% of the rural population and a good portion of the urban areas. Today, 217 community pharmacies are supplied from the regional medical store covering 90% of the population.
          </p>
        </CardContent>
      </Card>

      {/* Image Card 2 */}
      <Card className="border-neutral-200 shadow-md overflow-hidden">
        <CardContent className="p-0">
          <figure>
            <div className="relative w-full h-96">
              <Image
                src={supply_team}
                alt="Supply team with sub-store staff"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
            <figcaption className="px-6 py-4 text-sm italic text-primary-600 bg-neutral-50">
              Supply/Supervision team from the NWRFHP PIG with sub store staff in front of the Nkambe Sub-Store
            </figcaption>
          </figure>
        </CardContent>
      </Card>

      {/* Services Card */}
      <Card className="border-neutral-200 shadow-md">
        <CardContent className="p-8 sm:p-10">
          <p className="text-body">
            The NWRFHP PIG offers services not only to its community pharmacies but also to associated religious and charity institutions, improving pharmaceutical coverage in the region. This has contributed considerably to better quality of care in the North West region. On the one hand, essential drug programs have to assure the continuous availability of drugs, and efficient use of these drugs at the prescriber and consumer level on the other hand. To prevent medical and paramedical personnel from making therapeutic decisions on profit grounds, some guidelines have been developed. By 2017, the turnover of NWRFHP PIG has considerably and positively evolved and it has been able to make available 85% of medicines in the regional medical store and 90% available in all community pharmacies, kept expiry of medicines below 4% and continuously train health personnel on the rational use of medicines/laboratory reagents and medical consumables.
          </p>
        </CardContent>
      </Card>

      {/* Double Image Card */}
      <Card className="border-neutral-200 shadow-md overflow-hidden">
        <CardContent className="p-0">
          <figure>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
              <div className="relative w-full h-64 sm:h-80">
                <Image
                  src={car_and_rock}
                  alt="Vehicle on rocky terrain"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="relative w-full h-64 sm:h-80">
                <Image
                  src={car_and_mud}
                  alt="Vehicle navigating muddy road"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            </div>
            <figcaption className="px-6 py-4 text-sm italic text-primary-600 bg-neutral-50">
              Despite the poor state of our roads, we still ensure effective distribution of essential medicines
            </figcaption>
          </figure>
        </CardContent>
      </Card>

      {/* Sustainability Card */}
      <Card className="border-neutral-200 shadow-md">
        <CardContent className="p-8 sm:p-10">
          <p className="text-body">
            Now the number of items per prescription varies between 2 and 3. This shows that prescribers apply the principles of rational use of medicines. Medicines are dispensed only on presentation of a prescription issued by an authorized medical staff. These prescriptions must either be dispensed completely or referred back to the prescriber. Drugs are issued solely against cash payment. Thus, problems due to debts, incomplete therapy and subsequent self-medication are minimized. Strict adherence to these rules and regulations is accepted by the community as a means to assure the sustainability of their system.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
