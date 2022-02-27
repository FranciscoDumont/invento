import React, { useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Typed from 'typed.js';

function App() {
  const equisde = React.useRef(null);
  const typed = React.useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        'la vamos a llenar de hentai',
        'le vamos a dejar un sorete arriba',
        'la vamos a fundir',
        'la vamos a potenciar',
      ],
      typeSpeed: 50,
      backSpeed: 20,
      loop: false,
      showCursor: false,
      backDelay: 1200,
    };
    typed.current = new Typed(equisde.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <>
      {/* Header */}
      <header>
        <nav className="container mx-auto p-4 mt-4 sm:mt-12 flex items-center">
          <div className="p-3 bg-blue-100 rounded-full">
            <img className="w-24 h-auto" src="./img/logo.png" alt="Logo" />
          </div>
          <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-blue-500 uppercase font-bold">
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Contact</li>
            <button
              type="button"
              className="bg-yellow-400 text-black rounded-lg px-7 py-3 uppercase font-bold"
            >
              Login
            </button>
          </ul>
          <div className="flex sm:hidden flex-1 justify-end">
            <FontAwesomeIcon icon={faBars} className="text-3xl" />
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="container mx-auto p-4 flex flex-col-reverse lg:flex-row items-center gap-6">
          {/* Content */}
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className="text-blue-600 text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
              <FontAwesomeIcon
                icon={faLightbulb}
                className="text-4xl pr-1 text-yellow-400 align-baseline animate-pulse"
              />
              Invento
            </h2>
            <p className="text-lg md:text-2xl text-blue-500 text-center lg:text-left mb-6">
              <span className="pr-1">A tu empresa</span>
              <span ref={equisde} />
            </p>
            <div className="flex justify-center flex-wrap gap-6">
              <button
                type="button"
                className="bg-blue-400 text-white shadow-md rounded-lg px-7 py-3 font-bold transition duration-300 hover:bg-blue-500"
              >
                Hola
              </button>
              <button
                type="button"
                className="bg-gray-400 text-white shadow-md rounded-lg px-7 py-3 font-bold transition duration-300 hover:bg-gray-500"
              >
                Chau
              </button>
            </div>
          </div>
          {/* Image */}
          <div className="flex justify-center flex-1 mb-10 md:md-16 lg:mb-0 z-10">
            <img
              className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 rounded-lg border-4 border-slate-700"
              src="img/hero-bg.jpg"
              alt="Hero bg"
            />
          </div>
        </div>
        {/* Rounded Rectangle */}
        <div className="hidden md:block overflow-hidden bg-blue-500 rounded-l-full absolute h-2/4 w-2/4 top-52 right-0" />
      </section>

      {/* Features */}
      <section className="bg-gray-200 py-20 mt-20 lg:mt-60">
        <div className="container mx-auto p-4 mt-4 sm:mt-12">
          {/* Heading */}
          <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2 text-center">
            <h1 className="text-3xl"> Features </h1>
            <p className="text-gray-600">
              Nuestro objetivo es jugar a la play Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Voluptatibus aliquam qui temporibus
              facere? Expedita quae dolorum facere eos mollitia! Temporibus quas
              impedit repellat aut illo nobis natus, necessitatibus minus iste!
            </p>
          </div>
          {/* Feature 1 */}
          <div className="mt-20 lg:mt-24">
            <div className="container mx-auto p-4 flex flex-col lg:flex-row items-center justify-center gap-x24">
              {/* Image */}
              <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                <img
                  className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 rounded-lg border-4 border-slate-700 shadow-lg"
                  src="img/features1.jpg"
                  alt="features1"
                />
              </div>
              {/* Content */}
              <div className="flex flex-1 flex-col items-center lg:items-center">
                <h1 className="text-3xl text-blue-500">Hola en un click</h1>
                <p className="text-grey-500 my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Molestias laborum culpa dolore, eius accusantium cumque atque
                  mollitia recusandae et, quidem nesciunt minus obcaecati
                  veritatis voluptas! Provident sapiente quas nesciunt omnis.
                </p>
                <button
                  type="button"
                  className="bg-blue-400 text-white shadow-md rounded-lg px-7 py-3 font-bold transition duration-300 hover:bg-blue-500"
                >
                  Mas información
                </button>
              </div>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="mt-20 lg:mt-24">
            <div className="container mx-auto p-4 flex flex-col lg:flex-row-reverse items-center justify-center gap-x24">
              {/* Image */}
              <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                <img
                  className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 rounded-lg border-4 border-slate-700 shadow-lg"
                  src="img/features2.jpg"
                  alt="features1"
                />
              </div>
              {/* Content */}
              <div className="flex flex-1 flex-col items-center lg:items-center">
                <h1 className="text-3xl text-blue-500">Jaja</h1>
                <p className="text-grey-500 my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                  Me gustan los monos :)
                </p>
                <button
                  type="button"
                  className="bg-blue-400 text-white shadow-md rounded-lg px-7 py-3 font-bold transition duration-300 hover:bg-blue-500"
                >
                  Mas información
                </button>
              </div>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="mt-20 lg:mt-24">
            <div className="container mx-auto p-4 flex flex-col lg:flex-row items-center justify-center gap-x24">
              {/* Image */}
              <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                <img
                  className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 rounded-lg border-4 border-slate-700 shadow-lg"
                  src="img/features3.jpg"
                  alt="features1"
                />
              </div>
              {/* Content */}
              <div className="flex flex-1 flex-col items-center lg:items-center">
                <h1 className="text-3xl text-blue-500">
                  Daría mi vida por el Tiki
                </h1>
                <p className="text-grey-500 my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                  ⓘ 𝘌𝘭 𝘱𝘳𝘰𝘱𝘪𝘦𝘵𝘢𝘳𝘪𝘰 𝘥𝘦 𝘦𝘴𝘵𝘦 𝘤𝘰𝘮𝘦𝘯𝘵𝘢𝘳𝘪𝘰 𝘧𝘶𝘦 𝘴𝘢𝘯𝘤𝘪𝘰𝘯𝘢𝘥𝘰, censurado
                  e investigado 𝘱𝘰𝘳 𝘱𝘢𝘳𝘵𝘦 𝘥𝘦l 𝘚𝘪𝘴𝘵𝘦𝘮𝘢 𝘑𝘶𝘥𝘪𝘤𝘪𝘢𝘭 𝘥𝘦 𝘭𝘢 𝘍𝘦𝘥𝘦𝘳𝘢𝘤𝘪𝘰𝘯
                  𝘺 𝘓𝘢 𝘊𝘰𝘮𝘪𝘴𝘪𝘰𝘯 𝘕𝘢𝘤𝘪𝘰𝘯𝘢𝘭 𝘋𝘦 𝘓𝘰𝘴 𝘋𝘦𝘳𝘦𝘤𝘩𝘰𝘴 𝘏𝘶𝘮𝘢𝘯𝘰𝘴 𝘭𝘦 𝘳𝘦𝘵𝘪𝘳𝘢 𝘵𝘰𝘥𝘢
                  𝘭𝘪𝘣𝘦𝘳𝘵𝘢𝘥 𝘥𝘦 𝘦𝘹𝘱𝘳𝘦𝘴𝘪𝘰𝘯 𝘥𝘦𝘯𝘵𝘳𝘰 𝘥𝘦 Whatsapp®
                </p>
                <button
                  type="button"
                  className="bg-blue-400 text-white shadow-md rounded-lg px-7 py-3 font-bold transition duration-300 hover:bg-blue-500"
                >
                  Mas información
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact us */}
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto p-4 mt-4 sm:mt-12">
          <div className="sm:w-3/4 lg:w-2/4 mx-auto px-2 text-center">
            <h1 className="text-3xl"> Contactanos </h1>
            <p className="text-center mb-8"> No nos rompan los hiuevo </p>
            <div className="flex flex-col sm:flex-row gap-6 mt-8 justify-center">
              <button
                type="button"
                className="bg-green-500 text-white shadow-md rounded-lg px-7 py-3 font-bold transition duration-300 hover:bg-green-700"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-2xl pr-2 align-top"
                />
                Whatsapp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
            <img className="w-24 " src="img/logo.png" alt="footer-logo" />
            <ul className="flex uppercase gap-12 text-xs">
              <li className="cursor-pointer">Features</li>
              <li className="cursor-pointer">Pricing</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </div>
          <div className="flex gap-10 md:mt-0">

            <ul className="flex uppercase gap-12 text-xs">
              <li className="cursor-pointer"><FontAwesomeIcon icon={faTwitter} className="text-2xl" /></li>
              <li className="cursor-pointer"><FontAwesomeIcon icon={faInstagram} className="text-2xl" /></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
