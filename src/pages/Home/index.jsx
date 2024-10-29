import React, { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import ContactBanner from "../../assets/images/maheshwaram-plots-price .webp";
import LoadingSpinner from "../../components/LoadingSpinner/loadingSpinner";
// Lazy load components
const HomeSections = lazy(() =>
  import("../../components/HomeSection/HomeSection")
);
const HomeContact = lazy(() =>
  import("../../components/HomeContact/HomeContact")
);
const YoutubeTestimonial = lazy(() =>
  import("../../components/HomeSection/YoutubeTestimonial")
);

const youtubeData = [
  { id: 0, yid: "TL4owvgTlfU?si=zy4Ek_JjdEJIeZqj" },
  { id: 1, yid: "BHtTuPmENKs?si=xZXlA5ytfbA6sa93" },
  { id: 2, yid: "QHApRArUdyc?si=fL8976jkQkrz0082" },
  { id: 3, yid: "3vQY-oZ6-aA?si=y00Ad-AxxI6_EyrC" },
];

function Home() {
  return (
    <>
      <Helmet>
        <meta
          name="title"
          content="Ridge Homes - #1 Best Real Estate Company In Hyderabad"
        />
        <meta
          name="description"
          content="Ridge Homes : Your dream home awaits! Explore our real estate listings and find the perfect property in Hyderabad. With our dedicated team members, we'll help you make your homeownership dreams a reality."
        />
        <meta
          name="keywords"
          content="real estate in hyderabad, hyderabad real estate, real estate companies in hyderabad, real estate hyderabad, top real estate companies in hyderabad, top real estate company in hyderabad, best real estate companies in hyderabad, best real estate company in hyderabad, top 10 real estate companies in hyderabad, real estate company in hyderabad, Top 10 real estate companies in Telangana, Top residential builders in Hyderabad, ridge homes in hyderabad"
        />
        <meta
          property="og:title"
          content="Ridge Homes - #1 Best Real Estate Company In Hyderabad"
        />
        <meta
          property="og:description"
          content="Ridge Homes : Your dream home awaits! Explore our real estate listings and find the perfect property in Hyderabad. With our dedicated team members, we'll help you make your homeownership dreams a reality."
        />
        <meta
          property="og:image"
          content="https://ridgehomes.in/static/media/ridge%20blog1.0a065532c1d8e672e002.png"
        />
        <meta property="og:url" content="https://ridgehomes.in/" />
      </Helmet>

      <Suspense fallback={<LoadingSpinner />}>
        <HomeSections />
        <section className="py-12 px-4">
          <h3 className="text-3xl font-bold text-center mb-8">Testimonials</h3>

          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
              {youtubeData.map((ydata) => (
                <div
                  key={ydata.id}
                  className="w-full max-w-[300px] mx-auto transition-transform duration-300 hover:-translate-y-1"
                >
                  <YoutubeTestimonial videoId={ydata.yid} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <HomeContact
          page="Home"
          banner={ContactBanner}
          srd="664456705d8deffd47ff9b89"
        />
      </Suspense>
    </>
  );
}

export default React.memo(Home);
