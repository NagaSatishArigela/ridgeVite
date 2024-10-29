import React, { useState, useRef, lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import { PhotoProvider, PhotoView } from "react-photo-view";
import {
  DevelopmentsSection,
  PriceTable,
  FAQ,
  ProjectHighlight,
  RightImageLeftText,
} from "../../components/Projects/CustomCard";
import Banner from "../../assets/projects/Tranquil/plots in shankarpally.webp";
import ContactBanner from "../../assets/images/maheshwaram-plots-price .webp";
import T1 from "../../assets/projects/Tranquil/hmda-approved-layouts-in-maheshwaram .webp";
import T2 from "../../assets/projects/Tranquil/plots-for-sale-in-shankarpally_1.webp";
import T3 from "../../assets/projects/Tranquil/plots for sale in shankarpally_1.webp";
import T4 from "../../assets/projects/Tranquil/hmda approved plots for sale.webp";
import T5 from "../../assets/projects/Tranquil/hmda open plots.webp";
import T6 from "../../assets/projects/Tranquil/hmda villa plots.webp";
import Tranquil2 from "../../assets/projects/Tranquil/tranquil2.782f59c13849f19123ee.jpeg";
import TranquilPDF from "../../assets/projects/Tranquil/Tranquil Valley_FinalFirst-9.pdf";

// Lazy load components that are not immediately visible
// const UnlockModal = lazy(() => import("../../components/unlockModal"));
// const DialogForm = lazy(() => import("../../components/DialogForm"));
const HomeContact = lazy(() =>
  import("../../components/HomeContact/HomeContact")
);

// Import images
import {
  faqs,
  formattedImages,
  highlightPoints,
  pricTable,
  projectHightlights,
  rightImage,
} from "../../utilities/Constants";
import UnlockModal from "../../components/UnlockModal/unlockModal";
import DialogForm from "../../components/DialogForm/DialogForm";
import LoadingSpinner from "../../components/LoadingSpinner/loadingSpinner";

const tranquilContact = {
  phone: "8886033333",
  email: "tranquil@ridgehomes.in",
};
const Tranquil = () => {
  // State management
  const [isPDF, setIsPDF] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(
    Array(faqs.length).fill(false)
  );
  const inTouchRef = useRef(null);

  // Handlers
  const handlePDFClick = () => setIsPDF(true);
  const handleModalOpen = () => setShowForm(true);
  const handleModalClose = () => setShowForm(false);
  const toggleAccordion = (index) => {
    setOpenAccordion((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <>
      <Helmet>
        <title>#1 HMDA Open Plots in Maheshwaram || Tranquil Valley</title>
        <meta
          name="description"
          content="Escape to peace at Ridge Homes' Tranquill Valley in Maheshwaram with HMDA approved open plots. Experience the perfect blend of comfort and serenity. Book now!"
        />
        <meta
          name="keywords"
          content="plots for sale in maheshwaram, open plots in maheshwaram, hmda plots in maheshwaram"
        />
      </Helmet>

      {/* Main Banner */}
      <div className="w-full pt-[135px] relative">
        <img
          src={Banner}
          alt="plots in shankarpally"
          className="w-full h-auto"
          loading="lazy"
        />
      </div>

      {/* Main Content Section */}
      <main className="container mx-auto px-4">
        {/* Right Image Left Text Section */}
        <RightImageLeftText data={rightImage} />

        {/* Image Gallery Section */}
        <section className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <PhotoProvider>
              {[T1, T2, T3, T4, T5, T6].map((image, index) => (
                <PhotoView key={index} src={image}>
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-[235px] object-cover rounded-lg cursor-pointer"
                    loading="lazy"
                  />
                </PhotoView>
              ))}
            </PhotoProvider>
          </div>
        </section>

        {/* Brochure Download Button */}
        <button
          onClick={handlePDFClick}
          className="fixed right-0 bottom-32 bg-[#DD9C37] text-white px-5 py-2 rounded-l-lg shadow-lg hover:bg-[#c88b33] transition-colors duration-300 z-50"
        >
          <i className="fa fa-download mr-2"></i>
          Brochure
        </button>

        {/* Project Highlights */}
        <ProjectHighlight data={projectHightlights} />

        {/* Price Table */}
        <PriceTable data={pricTable} openModal={handleModalOpen} />

        {/* Location Highlights */}
        <section className="flex flex-col md:flex-row justify-between items-start py-12">
          <div className="md:w-1/2 px-4">
            <h3 className="text-2xl font-bold mb-6">Location Highlights</h3>
            <ul className="space-y-3">
              {highlightPoints.map((point, index) => (
                <li key={index} className="flex items-center">
                  <i className="fas fa-check-circle text-[#DD9C37] mr-3"></i>
                  <span>{point.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src={Tranquil2}
              alt="Location Highlights"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </section>

        {/* Development Images */}
        <DevelopmentsSection formattedImages={formattedImages} />

        {/* FAQ Section */}
        <FAQ
          faqs={faqs}
          openAccordion={openAccordion}
          toggleAccordion={toggleAccordion}
        />

        {/* Map Section */}
        <section className="w-full py-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3813.0922620911792!2d78.4061244!3d17.1169983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbb10e1babfbe1%3A0xf5ccd2c4c46ce7b3!2sTranquil%20Valley!5e0!3m2!1sen!2sin!4v1668533503942!5m2!1sen!2sin"
            className="w-full h-[450px] border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </main>

      {/* Contact Section */}
      <div ref={inTouchRef} id="getInTouchSection">
        <HomeContact
          id="getInTouch"
          page="Tranquil"
          noContact={true}
          contactDetails={tranquilContact}
          banner={ContactBanner}
          srd="66448b2d5d8def3216097f69"
        />
      </div>

      {/* Modals */}
      <Suspense fallback={<LoadingSpinner />}>
        {isPDF && (
          <DialogForm
            page="Tranquil"
            setIsPDF={setIsPDF}
            pdfUrl={TranquilPDF}
            srd="66470be4735dafb67e848e32"
          />
        )}
        {showForm && (
          <UnlockModal
            isOpen={showForm}
            onClose={handleModalClose}
            page="Tranquil"
            srd="66470be4735dafb67e848e32"
          />
        )}
      </Suspense>
    </>
  );
};

export default Tranquil;
