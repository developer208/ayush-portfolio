/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Logo } from "assets/images/NavbarImages/Logo.svg";
// import { ReactComponent as ThemeBtn } from "assets/images/NavbarImages/themeBtn.svg";
import { ReactComponent as DarkLogo } from "assets/images/NavbarImages/darknavlogo.svg";
// import { ReactComponent as Day } from "assets/images/NavbarImages/Day.svg";
import { ReactComponent as Menu } from "assets/images/NavbarImages/Menu.svg";
import { ReactComponent as Close } from "assets/images/NavbarImages/Close.svg";
// import { ReactComponent as GDSC } from "assets/images/NavbarImages/Logo.svg";
import { motion } from "framer-motion";
import { demoAction } from "../../redux/actions/index";
import useDarkMode from "../../Hooks/useDarkMode";
import useAnimatedNavToggler from "assets/helper/NavToggler";

const Container = tw.header`fixed top-0 left-0 z-10 bg-white justify-between items-center w-full mx-auto dark:bg-darkmodecardbackground`;
const NavLink = tw.a``;
// const NavLinks = tw.div`inline-block h-full`;
const NavLinkCon = tw.span`text-lg my-2 lg:text-sm lg:mx-6 lg:my-0  font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent text-gray-faint hover:border-blue-core hocus:text-blue-core cursor-pointer dark:text-white`;
const ThemeBtnCon = styled.button`
  ${tw`h-5`}
  svg {
    ${tw`h-full`}
  }
`;
const DesktopNavLinks = tw.nav`hidden lg:flex flex-1 justify-around items-center h-16 shadow `;
const LogoCon = styled.a`
  svg {
    ${tw`h-8`},
    ${tw`w-2/4`}
  }
  @media (min-width: 1024px) {
    svg {
      width: 100%;
      max-width: 16rem;
    }
  }
`;
const SideCon = tw.div` flex justify-center items-center h-full `;

const MobileNavLinksContainer = tw.nav`lg:hidden flex  px-6 sm:px-8 h-16 flex-1 items-center justify-between mr-3`;

const NavToggle = tw.button`
  lg:hidden z-50  focus:outline-none hover:text-blue-core transition duration-300 dark:text-white   
`;
const MobileNavLinks = motion(styled.div`
  ${tw`fixed inset-x-0 z-40 hidden p-8 mx-4 my-6 text-center bg-white rounded-lg shadow-2xl -top-3 text-gray-faint dark:text-white dark:bg-darkmodecardbackground`}
  span {
    ${tw`flex flex-col items-center`}
  }
`);

export const Header = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const dispatch = useDispatch();
  const [modeVariable, setmodeVariable] = useState("");
  const currentMode = useSelector((state) => state.mode);

  const setModeVariable = () => {
    const getMode = window.localStorage.getItem("Mode");
    getMode === "light"
      ? window.localStorage.setItem("Mode", "dark")
      : window.localStorage.setItem("Mode", "light");
  };

  useEffect(() => {
    setTheme(window.localStorage.getItem("Mode"));
  }, [setTheme]);

  useEffect(() => {
    dispatch(demoAction(modeVariable));
  }, [dispatch, modeVariable]);

  const LeftLinks = [
    <>
      {/* <NavLinkCon>
        <NavLink className="text-white">|||||</NavLink>
      </NavLinkCon> */}
      <NavLinkCon>
        <NavLink href='#home'>Home</NavLink>
      </NavLinkCon>
      {/* <NavLinkCon>
        <NavLink href='#ideas'>Our Ideas</NavLink>
      </NavLinkCon> */}
      {/* <NavLinkCon>
        <NavLink href='#ourTeam'>Our Team</NavLink>
      </NavLinkCon> */}
      <NavLinkCon>
        <NavLink href='#events'>Projects</NavLink>
      </NavLinkCon>
      {/* <NavLinkCon>
        <NavLink href='#blogs'>Blogs</NavLink>
      </NavLinkCon> */}
      <NavLinkCon>
        <NavLink href='#podcasts'>YouTube</NavLink>
      </NavLinkCon>
      {/* <NavLinkCon>
        <NavLink href="#opportunities">Resources</NavLink>
      </NavLinkCon> */}
      {/* <NavLinkCon>
        <NavLink href="#partners">Partner With Us</NavLink>
      </NavLinkCon> */}
    </>,
  ];

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();

  const collapseBreakpointCss = collapseBreakPointCssMap["lg"];

  return (
    <Container>
      <DesktopNavLinks
        key='DesktopNavLinks'
        css={collapseBreakpointCss.desktopNavLinks}>
        <LogoCon href='#home'>
          {/* {currentMode === "dark" ? <DarkLogo /> : <Logo />} */}
          <h1 className="text-2xl text-black dark:text-white">Ayush</h1>
        </LogoCon>
        <SideCon>
          {LeftLinks}
          <NavLinkCon>
            <ThemeBtnCon onClick={() => setTheme(colorTheme)} tw='z-0'>
              {colorTheme === "dark" ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-10 h-10 text-gray-600'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-10 h-10 text-yellow-core'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path
                    fillRule='evenodd'
                    d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
                    clipRule='evenodd'
                  />
                </svg>
              )}
            </ThemeBtnCon>
          </NavLinkCon>
        </SideCon>
      </DesktopNavLinks>

      <MobileNavLinksContainer
        key='MobileNavLinksContainer'
        css={`
          ${collapseBreakpointCss.mobileNavLinksContainer}
        `}>
        <MobileNavLinks
          initial={{ x: "150%", display: "none" }}
          animate={animation}
          css={collapseBreakpointCss.mobileNavLinks}>
          <span>{LeftLinks}</span>
        </MobileNavLinks>
        {/* 
        {currentMode === "light" ? (
          <Logo className='w-2/4 md:w-1/3' />
        ) : (
          <DarkLogo className='w-2/4 md:w-1/3' />
        )} */}
        <h1>Ayush</h1>

        <div className='flex items-center justify-between w-16'>
          <ThemeBtnCon onClick={() => setTheme(colorTheme)} tw='z-0'>
            {colorTheme === "dark" ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-8 h-8 pb-1 text-gray-600 '
                viewBox='0 0 20 20'
                fill='currentColor'>
                <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-7 w-7 text-yellow-core'
                viewBox='0 0 20 20'
                fill='currentColor'>
                <path
                  fillRule='evenodd'
                  d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
                  clipRule='evenodd'
                />
              </svg>
            )}
          </ThemeBtnCon>
          <NavToggle
            onClick={toggleNavbar}
            className={showNavLinks ? "open" : "closed"}>
            {showNavLinks ? <Close tw='w-6 h-6' /> : <Menu tw='w-6 h-6' />}
          </NavToggle>
        </div>
      </MobileNavLinksContainer>
    </Container>
  );
};
const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`,
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`,
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
};
