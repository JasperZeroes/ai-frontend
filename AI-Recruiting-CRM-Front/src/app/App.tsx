import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { I18nProvider } from "../_metronic/i18n/i18nProvider";
import { LayoutProvider, LayoutSplashScreen } from "../_metronic/layout/core";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MasterInit } from "../_metronic/layout/MasterInit";
// import {AuthInit} from './modules/auth'
import { ThemeModeProvider } from "../_metronic/partials";

const App = () => {
  return (
    <Suspense>
      <I18nProvider>
        <LayoutProvider>
          <ThemeModeProvider>
            <Outlet />
            <ToastContainer />
            <MasterInit />
          </ThemeModeProvider>
        </LayoutProvider>
      </I18nProvider>
    </Suspense>
  );
};

export { App };
