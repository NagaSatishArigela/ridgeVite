import React, { useEffect, Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import LoadingSpinner from "./components/LoadingSpinner/loadingSpinner";
import PageNotFound from "./components/ErrorBoundary/pageNotFound";
import { ROUTE_PATHS } from "./constants/routes";
import { useFetchCategories, useFetchPosts } from "./hooks/dataFetching";
import ErrorBoundary from "./components/ErrorBoundary/errorBoundary";
import WhatsAppLink from "./components/WhatsApp/WhatsApp";

// Lazy load components
const Home = lazy(() => import("./pages/Home/index"));
// const ComingSoon = lazy(() => import("./pages/ComingSoon"));
// const Kshetra = lazy(() => import("./pages/Kshetra"));
const Tranquil = lazy(() => import("./pages/Projects/TranquilValley"));
const ContactUs = lazy(() => import("./pages/ContactUs/ContactUs"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
// const SunRise = lazy(() => import("./pages/Sunrise"));
const SpringCity = lazy(() => import("./pages/Projects/SpringCity"));
// const Blog3 = lazy(() => import("./pages/Blog3"));
// const CompletedProjects = lazy(() => import("./pages/CompletedProjects"));
// const OnGoingProjects = lazy(() => import("./pages/OngoingProjects"));
const AllProjects = lazy(() => import("./pages/Projects/Projects"));
// const KshetraLanding = lazy(() => import("./pages/KshetraLanding"));
// const TranquilLanding = lazy(() => import("./pages/TranquilLanding"));
// const SunRiseLanding = lazy(() => import("./pages/SunriseLanding"));
// const SiteMaintenance = lazy(() => import("./utils/SiteMaintenance.js"));
const Blogs = lazy(() => import("./pages/Blogs/Blogs"));
const BlogContent = lazy(() => import("./pages/BlogContent/BlogContent"));
const CareersPage = lazy(() => import("./pages/Careers/Careers"));
const CategoryBlogs = lazy(() => import("./pages/Blogs/CategoryBlogs"));
const ISOCertified = lazy(() => import("./pages/ISO/IsoCertified"));
// const TermsAndConditions = lazy(() => import("./pages/PrivacyPolicy/index.js"));

const App = () => {
  const [pageState, setPageState] = React.useState(false);
  const {
    categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useFetchCategories();
  const { posts, loading: postsLoading, error: postsError } = useFetchPosts();

  if (categoriesLoading || postsLoading) {
    return <LoadingSpinner />;
  }

  if (categoriesError || postsError) {
    return <div>Error loading data. Please try again later.</div>;
  }

  return (
    <ErrorBoundary>
      <header style={pageState ? { top: "0px" } : {}}>
        <Header />
      </header>
      <Helmet>
        <title>Ridge Homes - #1 Best Real Estate Company In Hyderabad</title>
        <meta
          name="description"
          content="Ridge Homes: Hyderabad's leading real estate company offering top-notch services & wide range of properties. Trust us to help you find your dream home in the city"
        />
        <meta
          name="keywords"
          content="real estate in hyderabad, hyderabad real estate, real estate companies in hyderabad, real estate hyderabad, top real estate companies in hyderabad, top real estate company in hyderabad, best real estate companies in hyderabad, best real estate company in hyderabad, top 10 real estate companies in hyderabad, real estate company in hyderabad, Top 10 real estate companies in Telangana, Top residential builders in Hyderabad, ridge homes in hyderabad"
        />
      </Helmet>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
        <Route path={ROUTE_PATHS.HOME} element={<Home />} />
          {/* <Route path={ROUTE_PATHS.HOME} element={<Home />} /> */}
          {/* <Route path={ROUTE_PATHS.ABOUT_US} element={<AboutUs />} />
          <Route path={ROUTE_PATHS.VISION} element={<ComingSoon />} />
          <Route path={ROUTE_PATHS.CONTACT_US} element={<ContactUs />} />
          <Route
            path={ROUTE_PATHS.KSHETRA}
            element={<Navigate to={ROUTE_PATHS.KSHETRA_LANDING} />}
          />
          <Route path={ROUTE_PATHS.KSHETRA_LANDING} element={<Kshetra />} />
          <Route path={ROUTE_PATHS.PLOTS_SHANKARPALLY} element={<KshetraLanding />} />
          <Route path={ROUTE_PATHS.PLOTS_MAHESHWARAM} element={<TranquilLanding />} />
          <Route path={ROUTE_PATHS.PLOTS_SULTANPUR} element={<SunRiseLanding />} />
          <Route
            path={ROUTE_PATHS.TRANQUIL_VALLEY}
            element={<Navigate to={ROUTE_PATHS.TRANQUIL_VALLEY_LANDING} />}
          />
          <Route path={ROUTE_PATHS.TRANQUIL_VALLEY_LANDING} element={<Tranquil />} />
          <Route
            path={ROUTE_PATHS.SUNRISE_CITY}
            element={<Navigate to={ROUTE_PATHS.SUNRISE_CITY_LANDING} />}
          />
          <Route path={ROUTE_PATHS.SUNRISE_CITY_LANDING} element={<SunRise />} />
          <Route
            path={ROUTE_PATHS.SPRING_CITY}
            element={<Navigate to={ROUTE_PATHS.SPRING_CITY_PROJECT} />}
          />
          <Route path={ROUTE_PATHS.SPRING_CITY_PROJECT} element={<SpringCity />} />
          <Route path={ROUTE_PATHS.PROJECTS} element={<AllProjects />} />
          <Route path={ROUTE_PATHS.COMPLETED_PROJECTS} element={<CompletedProjects />} />
          <Route path={ROUTE_PATHS.ONGOING_PROJECTS} element={<OnGoingProjects />} />
          <Route path={ROUTE_PATHS.BLOGS} element={<Blogs Blogs={posts} />} />
          <Route
            path={ROUTE_PATHS.BLOG_CONTENT}
            element={<BlogContent blogs={posts} categories={categories} />}
          />
          <Route
            path={ROUTE_PATHS.BLOG_CATEGORY}
            element={<CategoryBlogs posts={posts} categories={categories} />}
          />
          <Route path={ROUTE_PATHS.CAREERS} element={<CareersPage />} />
          <Route path={ROUTE_PATHS.ISO_CERTIFIED} element={<ISOCertified />} />
          <Route path={ROUTE_PATHS.PRIVACY_POLICY} element={<TermsAndConditions />} /> */}
          <Route path={ROUTE_PATHS.ABOUT_US} element={<AboutUs />} />
          <Route path={ROUTE_PATHS.ISO_CERTIFIED} element={<ISOCertified />} />
          <Route path={ROUTE_PATHS.CONTACT_US} element={<ContactUs />} />
          <Route path={ROUTE_PATHS.PROJECTS} element={<AllProjects />} />
          <Route
            path={ROUTE_PATHS.TRANQUIL_VALLEY}
            element={<Navigate to={ROUTE_PATHS.TRANQUIL_VALLEY_LANDING} />}
          />
          <Route path={ROUTE_PATHS.TRANQUIL_VALLEY_LANDING} element={<Tranquil />} />
          {/* <Route
            path={ROUTE_PATHS.SPRING_CITY}
            element={<Navigate to={ROUTE_PATHS.SPRING_CITY_PROJECT} />}
          /> */}
          <Route path={ROUTE_PATHS.SPRING_CITY_PROJECT} element={<SpringCity />} />
          <Route path={ROUTE_PATHS.BLOGS} element={<Blogs Blogs={posts} />} />
          <Route
            path={ROUTE_PATHS.BLOG_CONTENT}
            element={<BlogContent blogs={posts} categories={categories} />}
          />
          <Route
            path={ROUTE_PATHS.BLOG_CATEGORY}
            element={<CategoryBlogs posts={posts} categories={categories} />}
          />
          <Route path={ROUTE_PATHS.CAREERS} element={<CareersPage />} />
          <Route
            path="*"
            element={<PageNotFound setPageState={setPageState} />}
          />
        </Routes>
      </Suspense>
      <WhatsAppLink />
      <Footer />
    </ErrorBoundary>
  );
};

export default React.memo(App);
