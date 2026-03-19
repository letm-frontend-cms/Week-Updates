/// <reference types="@rsbuild/core/types" />

declare namespace NodeJS {
  interface ProcessEnv {
    PUBLIC_REMOTE_HOME_PAGE_URL?: string;
    PUBLIC_REMOTE_ABOUT_US_URL?: string;
  }
}

declare module 'home_page/HomePage' {
  import type { FC } from 'react';
  const HomePage: FC;
  export default HomePage;
}

declare module 'about_us/AboutUs' {
  import type { FC } from 'react';
  const AboutUs: FC;
  export default AboutUs;
}
