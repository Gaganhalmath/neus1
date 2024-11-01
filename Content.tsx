import React from 'react';

const Content: React.FC = () => {
  return (
    <section className="text-gray-400 body-font bg-gray-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Welcome to Nexus!</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Welcome to our Freelancer Community Forum! This is your go-to space for connecting with fellow freelancers, sharing insights, and seeking advice.</p>
          <h2 className="text-xs text-indigo-400 tracking-widest font-medium title-font mb-1">Join us to elevate your freelance career and make meaningful connections!</h2>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 lg:w-1/2 md:w-full p-4">
            <div className="border hover:bg-gray-700 rounded text-base">
              <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">AI-Powered Community 
              Suggestions</h2>
              <p className="leading-relaxed text-base mb-4">Our advanced algorithm 
analyzes freelancers' skills, 
experience,<br /> and preferences 
to match them with the<br /> most 
suitable community forums, 
optimizing the search process.</p>
              <a className="text-blue-500 inline-flex items-center">
                Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full p-4">
            <div className="border hover:bg-gray-700 rounded text-base">
              <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">Inclusive Talent Pool</h2>
              <p className="leading-relaxed text-base mb-4">We actively promote diversity 
and inclusion, ensuring that 
talented freelancers <br />from all 
backgrounds have <br />equal access 
to diverse opportunities.</p>
              <a className="text-indigo-400 inline-flex items-center">
                Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full p-4">
            <div className="border hover:bg-gray-700 rounded text-base">
              <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">Customizable Profiles</h2>
              <p className="leading-relaxed text-base mb-4">Freelancers can create 
comprehensive, multimedia <br />rich profiles to showcase 
their expertise, portfolio, 
and unique <br />value proposition 
to other freelancers</p>
              <a className="text-indigo-400 inline-flex items-center">
                Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full p-4">
            <div className="border hover:bg-gray-700 rounded text-base">
              <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">Trusted Ecosystem</h2>
              <p className="leading-relaxed text-base mb-4">We vet and curate a network 
of reputable users, <br />ensuring 
freelancers can engage with 
forums that <br />value their skills 
and provide helpful insights.</p>
              <a className="text-indigo-400 inline-flex items-center">
                Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <p>
        <button className="flex mx-auto mt-16 text-white bg-indigo-600 border-5 py-2 px-8 focus:outline-1 hover:bg-gray-700 rounded text-base">Lets Get Started!</button>
      </p></div>
    </section>
  );
}

export default Content;
