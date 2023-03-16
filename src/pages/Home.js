import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Blogs from "components/blogs/Blogs";
import Flipcard from "components/flipcard/FlipCard";
import LandingPage from "components/landing/Landing";
import Partners from "components/partners/Partners";
// import Events from "components/events/EventSlider";
// import Footer from "components/footer/FooterGrid";
import Podcast from "components/podcast/Podcast";
import Loader from "components/loader/loader";
import AnimationRevealPage from "assets/helper/AnimationRevealPage";
import FilterCard from "components/teamtab/FilterCard";
import Who from "components/NewLanding/Who";
import { Header } from "components/navbar/Header";
import NewFooter from "components/footer/NewFooter";
import EventGrid from "components/eventgrid/EventGrid";
// import FAQ from "components/FAQs/faq";

export const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <AnimatePresence>
      {/* Comment loader to see left right slide animation */}

      {loading && (
        <motion.div
          key={"home_motion.div"}
          className='fixed z-50 w-screen h-screen bg-white dark:bg-gray-900'
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}>
          <Loader
            key='loading_loader'
            className='fixed z-50 w-screen h-screen bg-white dark:bg-darkmodebackground1'
          />
        </motion.div>
      )}

      <>
        <AnimationRevealPage key='Animation_group'>
          {/* <LandingPage /> */}
          <Header />
          <Who />
          {/* <Flipcard />
          <FilterCard /> */}
          {/* <Events /> */}
          <EventGrid />
          {/* <Blogs /> */}
          <Podcast />
          {/* <Partners /> */}
        </AnimationRevealPage>
        {/* <Footer /> */}
        <NewFooter />
      </>
    </AnimatePresence>
    //Commit this
  );
};

/* 
  TODO: @footer Community Guidelines
  TODO: @ALL Google Sans Font
*/
