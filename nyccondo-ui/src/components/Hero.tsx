import { Button } from "./Button";
import { Container } from "./Container";

export function Hero() {
  return (
    <div className="relative pb-20 pt-10 sm:py-24">
      <div className="absolute inset-x-0 -bottom-14 -top-48 overflow-hidden bg-indigo-50">
        {/* <Image
          className="absolute left-0 top-0 translate-x-[-55%] translate-y-[-10%] -scale-x-100 sm:left-1/2 sm:translate-x-[-98%] sm:translate-y-[-6%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
          src={backgroundImage}
          alt=""
          width={918}
          height={1495}
          priority
          unoptimized
        /> */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-6xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
            <span className="sr-only">DeceptiConf - </span>Your Manhattan condo.
          </h1>

          <p>pictures here</p>

          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ["Surface", "1114 ft² / 104 m²"],
              ["Bedrooms", "2"],
              ["Bathrooms", "2"],
              ["Monthly Taxes", "$18"],
              ["Monthly Charges", "$1,188"],
              ["Neighborhood", "Harlem"],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-blue-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ["Gym", "Yes"],
              ["Outdoor Space", "Yes"],
              ["Trains", "2"],
              ["Laundry", "Yes"],
              ["Full-time Doorman", "Yes"],
              ["On-Site Valet Parking", "Yes"],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-blue-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            <p>
              Opportunity to buy at Harlem’s Crown Jewel, Strivers Gardens: a
              full-service condominium, packed with amenities and just steps
              from St. Nicholas Park.
            </p>

            <p>
              Walk into this oversized and sun splashed 2BR/2Bath. It can easily
              be converted to a 3BR. The living and dining area expands almost
              thirty feet making it incredibly bright due to open views to the
              east, north and west.
            </p>
            <p>
              Next is the open pass-thru kitchen featuring Viking stove, Bosch
              dishwasher, and SubZero fridge, with plenty of counter and cabinet
              space.
            </p>

            <p>
              The king-sized main bedroom offers a beautiful en-suite bathroom
              plus a custom-made walk-in closet. Large second bedroom with a
              large custom closet and a well-appointed full bath just across the
              hall.
            </p>

            <p>
              Strivers Gardens is a thoughtfully designed and pet-friendly
              modern condominium in Central Harlem, conveniently situated on the
              corner of Frederick Douglass Blvd and 135th Street. Here,
              residents have access to a full suite of amenities, including
              full-time doorman, a complete fitness center, glass enclosed Zen
              Garden, massive furnished second floor terrace and newly renovated
              resident lounge equipped with Wi-Fi and cable, two laundry rooms,
              storage, bicycle parking, on-site valet parking garage with Zip
              Car, and four elevators between two elevator banks for the North
              and South tower.
            </p>

            <p>
              The convenience of this building’s location is unmatched. The
              A/B/C/D/1/2/3 subway lines within a few minutes away, with a B/C
              line station just outside the buildings front doors. There are
              also convenient bus lines on three sides of the building, and
              several Citibike stations within a 5-block radius. There is a tax
              abatement in place that expires in 2031.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
