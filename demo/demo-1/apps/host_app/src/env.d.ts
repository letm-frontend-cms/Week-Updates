/// <reference types="@rsbuild/core/types" />

declare namespace NodeJS {
  interface ProcessEnv {
    PUBLIC_REMOTE_HOME_PAGE_URL?: string;
  }
}

declare module 'home_page/HomePage' {
  import type { FC } from 'react';
  const HomePage: FC;
  export default HomePage;
}
