// CustomCard.jsx
const CustomCard = ({ image, title, description }) => {
  return (
    <div className="w-[280px] border border-gray-200 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <img src={image} alt={title} className="w-full h-[200px] object-cover" />
      <div className="p-4">
        <h5 className="m-0 text-lg font-medium text-center">{title}</h5>
        {description && (
          <p className="m-0 mt-2 text-sm text-gray-600">{description}</p>
        )}
      </div>
    </div>
  );
};

// DevelopmentsSection.jsx
const DevelopmentsSection = ({ formattedImages }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl mb-8">Developments</h2>
      <div className="flex flex-wrap gap-5 justify-center">
        {formattedImages.map((image, index) => (
          <CustomCard
            key={index}
            image={image.image}
            title={image.title}
            description={image.description}
          />
        ))}
      </div>
    </div>
  );
};

// PriceTable.jsx
const PriceTable = ({ data, openModal }) => {
  return (
    <div className="overflow-auto mx-auto">
      <h2 className="text-2xl font-bold mb-4">Price sheet:</h2>
      <table className="w-full border-collapse mt-5 border-2 border-[#DD9C37]">
        <thead>
          <tr className="bg-gray-50 border-2 border-[#DD9C37]">
            <th className="border-r-2 border-[#DD9C37] p-3 text-left">Type</th>
            <th className="border-r-2 border-[#DD9C37] p-3 text-left">Area</th>
            <th className="border-r-2 border-[#DD9C37] p-3 text-left">Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, key) => (
            <tr
              key={key}
              className={`border-b border-[#DD9C37] ${
                key % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`}
            >
              <td className="border-r-2 border-[#DD9C37] p-3">{val.name}</td>
              <td className="border-r-2 border-[#DD9C37] p-3">{val.age}</td>
              <td className="p-3">
                <button
                  onClick={openModal}
                  className="bg-[#DD9C37] text-white px-4 py-2 rounded hover:bg-[#c88b33] transition-colors duration-300"
                >
                  {val.gender}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// FAQ.jsx
const FAQ = ({ faqs, openAccordion, toggleAccordion }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">FAQ's</h2>
      <div className="flex flex-col gap-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition-colors duration-300"
            >
              <span className="text-left font-medium">{faq.question}</span>
              <i
                className={`fas fa-chevron-down transform transition-transform duration-300 ${
                  openAccordion[index] ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`transition-all duration-300 ${
                openAccordion[index] ? "max-h-96" : "max-h-0"
              } overflow-hidden`}
            >
              <div className="p-4 border-t border-gray-200 text-gray-600">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ProjectHighlights.jsx
const ProjectHighlight = ({ data }) => {
  return (
    <div className="py-8 text-center">
      <h3 className="text-2xl font-bold mb-8">Project Highlights</h3>
      <div className="flex flex-wrap justify-center gap-6">
        {data.map((item, index) => (
          <div key={index} className="w-[185px] p-4">
            <img
              src={item.image}
              alt={item.text}
              className="h-[100px] mx-auto mb-4"
            />
            <h5 className="m-0 text-center font-medium">{item.text}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

const RightImageLeftText = ({ data }) => {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <img 
              src={data.image} 
              alt="Feature" 
              className="w-full h-auto transition-shadow duration-300"
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <h3 className="text-2xl font-bold mb-4">{data?.heading}</h3>
            {data?.elivation && (
              <p className="text-gray-600 mb-4 italic">{data.elivation}</p>
            )}
            <p className="text-gray-700 text-justify leading-relaxed mb-6">
              {data?.description}
            </p>
            {data.lists && (
              <ul className="space-y-2">
                {data.lists.map((item, index) => (
                  <li 
                    key={index}
                    className="flex items-start space-x-2"
                  >
                    <span className="text-[#DD9C37] mt-1">•</span>
                    <span>{item.list}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  };

export { CustomCard, DevelopmentsSection, PriceTable, FAQ, ProjectHighlight, RightImageLeftText };
