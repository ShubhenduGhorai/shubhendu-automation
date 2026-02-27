export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      
      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-100">
        <h1 className="text-4xl font-bold">
          I Build Automation Systems For Small Businesses
        </h1>
        <p className="mt-4 text-lg">
          Websites • AI Support • WhatsApp Automation • Maintenance
        </p>
        <a 
          href="#contact"
          className="inline-block mt-6 px-6 py-3 bg-black text-white rounded-lg"
        >
          Get Free Consultation
        </a>
      </section>

      {/* Services */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center">My Services</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="p-6 border rounded-xl">
            <h3 className="font-bold">Website Development</h3>
            <p>Modern fast websites for small businesses.</p>
          </div>
          <div className="p-6 border rounded-xl">
            <h3 className="font-bold">AI Automation</h3>
            <p>Customer support, lead capture & follow-up systems.</p>
          </div>
          <div className="p-6 border rounded-xl">
            <h3 className="font-bold">Maintenance Plan</h3>
            <p>Monthly updates, hosting & automation monitoring.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <form className="mt-8 max-w-md mx-auto flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Your Name"
            className="border p-3 rounded"
          />
          <input 
            type="email" 
            placeholder="Your Email"
            className="border p-3 rounded"
          />
          <textarea 
            placeholder="Your Message"
            className="border p-3 rounded"
          />
          <button className="bg-black text-white py-3 rounded">
            Send Message
          </button>
        </form>
      </section>

    </main>
  );
}