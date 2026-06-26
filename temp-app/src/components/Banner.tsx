import Image from "next/image";

export default function Banner() {
  return (
    <>
      <section className="bg-[#EEFF52] py-16">

        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-20">

          <h2 className="text-6xl font-black leading-none">
            Breakthrough
            <br />
            Consulting,
            <br />
            Redefined
          </h2>

          <p className="text-sm leading-6">
            We turn bold objectives into concrete victories.
            Our seasoned strategists cut through noise,
            identify leverage points,
            and ignite momentum.
          </p>

          <p className="text-sm leading-6">
            From startups hungry for traction to enterprises
            scaling the next leap, we embed with your team,
            challenge assumptions,
            and deliver results that stick.
          </p>

        </div>

      </section>

      <section className="relative h-[520px]">

        <Image
          src="/images/team.jpg"
          alt=""
          fill
          className="object-cover"
        />

      </section>
    </>
  );
}