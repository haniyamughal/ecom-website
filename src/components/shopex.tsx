import React from 'react';

const Shopex = () => {
  const services = [
    {
      icon: "van.png",
      title: "Free Shipping",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
    },
    {
      icon: "support.png",
      title: "24/7 Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
    },
    {
      icon: "support2.png",
      title: "Best Quality",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
    },
    {
      icon: "support3.png",
      title: "Fast Service",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
    }
  ];

  return (
    <section className="text-center py-16 bg-white">
      <h2 className="text-3xl font-bold text-purple-700 mb-10">
        What Shopex Offer!
      </h2>
      <div className="flex justify-center items-stretch gap-4 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 rounded-md w-64 text-center flex flex-col"
          >
            <div className="mb-4 flex justify-center items-center">
              <div className="w-20 h-20  rounded-full flex justify-center items-center">
                <img 
                  src={service.icon} 
                  alt="" 
                  className="w-12 h-12 object-contain" 
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-500 text-sm flex-grow">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shopex;
