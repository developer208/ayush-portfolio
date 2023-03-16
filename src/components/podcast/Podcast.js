import React from "react";
import OrientationL from "../../assets/images/Podcast/Orientation Light Mode.svg";
import OrientationD from "../../assets/images/Podcast/Orientation Dark Mode.svg";
import { useSelector } from "react-redux";
import "./podcast.css"

const Podcast = () => {
  const currentMode = useSelector((state) => state.mode);
  return (
    <div
      className='pt-16 pb-16 w-full bg-white dark:bg-darkmodebackground1'
      id='podcasts'>
      <div className='container'>
        <div className='flex flex-col lg:flex-row'>
          <div className='w-full lg:w-2/4'>
            <div className='w-full mb-12 lg:mt-20'>
              <div className='flex w-full justify-center'>
                {/* {currentMode === "dark" ? (
                  <img
                    src={OrientationD}
                    alt='Orientation Dark'
                    className='w-full md:w-4/5'
                  />
                ) : (
                  <img
                    src={OrientationL}
                    alt='Orientation Light'
                    className='w-full md:w-4/5'
                  />
                )} */}
                {/* <h1 className="text-5xl text-black dark:text-white">Watch my YT video</h1> */}
                <p className='block xl:text-exl lg:text-exsl sm:text-md md:text-xl xs:text-mfont text-lfont'>
                  <span className='title-word title-word-1'>Watch</span>
                  <span className='ml-1 title-word title-word-2'>my</span>
                  <span className='ml-1 title-word title-word-3'>YouTube</span>
                  <span className='ml-1 title-word title-word-4'>
                    Video!
                  </span>
                </p>
              </div>

              {/* <div className='w-full text-center font-bold text-lg  mt-2 dark:text-white'>
                to imagine or visualize a future possibility.
              </div> */}
            </div>
          </div>

          {/* Youtube iframe */}
          <div className='w-full lg:w-2/4'>
            <div className='w-full '>
              <iframe
                src='https://www.youtube.com/embed/PfqK-B_i3gI'
                title='podcast'
                className=' w-full  rounded-xl cursor-pointer'
                height='400px'
                allowFullScreen></iframe>
            </div>
          </div>
          {/* Youtube iframe end */}
        </div>
      </div>
    </div>
  );
};

export default Podcast;
