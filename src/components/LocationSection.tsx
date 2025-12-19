export function LocationSection() {
  return (
    <section className="bg-[#f5f1ed] py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl text-[#9d5d3f] leading-tight">
              Bespoke Tailors in Islamabad
            </h2>
            <div className="space-y-2 text-[#6b5d54]">
              <p className="text-lg">7-8 Madni Plaza, Jinnah Avenue,</p>
              <p className="text-lg">Blue Area, Islamabad</p>
            </div>
            <p className="text-lg text-[#9d5d3f]">+92 51 2342222</p>
          </div>

          {/* Right: Map */}
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.8!2d73.07!3d33.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQzJzEyLjAiTiA3M8KwMDQnMTIuMCJF!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bespoke Tailors Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
