import Link from "next/link";

const HomePage = () => {
  return (
    <main>
      <header className="w-full h-16 bg-gray-800 text-white flex items-center justify-between px-4">
        <div className="text-2xl font-bold">
          Boicott
        </div>
        <div className="flex space-x-8 font-semibold">
          <Link href={"#features"} className="hover:underline">Features</Link>
          <Link href={"#video"} className="hover:underline">Video</Link>
          <Link href={"#about"} className="hover:underline">About</Link>
        </div>
        <div></div>
      </header>
      <section className="relative text-center h-screen bg-lightBeige">
        <iframe
          src="https://www.youtube.com/watch?v=-8SnAJYICU0&list=PL5B7QzKgckD1e6Atw6Ji7KZbVb5TZv0JZ"
          className="absolute top-0 left-0 w-full h-full opacity-50 pointer-events-none"
        ></iframe>
        <div className="relative flex flex-col justify-center items-center h-full">
          <h1 className="font-bold text-[100px] text-mossGreen">Boicott</h1>
          <h2 className="text-gray-600 font-semibold text-2xl">| A mobile application empowering consumers to make informed and responsible decisions |</h2>
          <button className="bg-mossGreen text-white px-6 py-4 rounded-lg mt-4">Explore</button>
        </div>
      </section>

      {/* feature section */}
      <section id="features" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center h-screen bg-mossGreen text-white px-20">
        <h1 className="col-span-2 text-4xl font-bold text-center">Features</h1>
        <img src="/images/feature1.png" alt="feature1" className="w-48 h-48 mx-auto" />
        <div>
          <h2 className="text-2xl font-bold">Product Barcode Scanner</h2>
          <p className="text-center md:text-left w-2/3 mt-5">Easily scan product barcodes to access detailed information, including ingredients, manufacturing practices, and ethical ratings. Make quick, informed decisions about the products you choose to support.</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Retrieval Augmented Generation (RAG)-powered Chatbot</h2>
          <p className="text-center md:text-left mt-5 w-2/3">Leverage the power of Retrieval-Augmented Generation (RAG) to interact with an intelligent chatbot that delivers accurate, context-aware responses by combining real-time data retrieval with advanced natural language generation. Perfect for personalized support and dynamic information access.</p>
        </div>
        <img src="/images/feature2.png" alt="feature2" className="w-48 h-48 mx-auto" />
      </section>

      {/* total serial number stored section */}
      <section>
        <div className="bg-gray-800 text-white text-center py-12">
          <h1 className="text-xl">As of now, there are</h1>
          <h2 className="text-7xl font-bold mt-5">9,000+</h2>
          <h2 className="text-3xl font-semibold mt-3">product serial number stored in our database!</h2>
          <div className="flex justify-end">
            <div className="italic mx-10 mt-10">Last updated : 7 January 2024</div>
          </div>
        </div>
      </section>

      {/* video section */}
      <section id="video" className="text-center bg-lightBeige py-12">
        <h2 className="text-4xl font-semibold">Video Showcase</h2>
        <div id="video" className="h-screen flex justify-center items-center">
          <iframe
            src="https://www.youtube.com/watch?v=-8SnAJYICU0&list=PL5B7QzKgckD1e6Atw6Ji7KZbVb5TZv0JZ"
            className="w-3/4 h-3/4"
          ></iframe>
        </div>
      </section>
    </main>
  );
}

export default HomePage;