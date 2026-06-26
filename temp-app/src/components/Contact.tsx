export default function Contact() {
  return (
    <section className="bg-[#EEFF52] py-28">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">

        <div>

          <h2 className="text-[90px] leading-none font-black">
            Let's Talk
            <br />
            Growth
          </h2>

          <p className="mt-6">
            Fill out the form and we'll design
            a custom growth strategy.
          </p>

        </div>

        <form className="space-y-6">

          <div className="grid grid-cols-2 gap-4">

            <input
              placeholder="Name"
              className="border-b border-black bg-transparent outline-none py-2"
            />

            <input
              placeholder="Company"
              className="border-b border-black bg-transparent outline-none py-2"
            />

          </div>

          <input
            placeholder="Phone"
            className="w-full border-b border-black bg-transparent outline-none py-2"
          />

          <input
            placeholder="Email"
            className="w-full border-b border-black bg-transparent outline-none py-2"
          />

          <button className="rounded-full bg-black text-white px-8 py-3">
            SEND
          </button>

        </form>

      </div>

    </section>
  );
}