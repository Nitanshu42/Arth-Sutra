import Image from "next/image";

const services = [
  {
    title: "Basic Service",
    price: "₹99.00",
    image: "/images/service1.jpg",
  },
  {
    title: "Intermediate Service",
    price: "₹149.00",
    image: "/images/service2.jpg",
    featured: true,
  },
  {
    title: "Advanced Service",
    price: "₹199.00",
    image: "/images/service3.jpg",
  },
];

export default function Services() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-3 gap-8 items-end">

          {services.map((item) => (

            <div
              key={item.title}
              className={`${
                item.featured
                  ? "scale-110"
                  : ""
              }`}
            >

              <div
                className={`relative overflow-hidden ${
                  item.featured
                    ? "h-[700px]"
                    : "h-[480px]"
                }`}
              >
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-3">

                <h3 className="text-2xl">
                  {item.title}
                </h3>

                <p className="text-lg">
                  {item.price}
                </p>

                <button className="mt-4 w-full rounded-full bg-[#223624] text-white py-3 hover:opacity-90 transition">
                  ADD TO CART
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}