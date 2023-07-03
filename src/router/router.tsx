import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import CreatorPage from "../pages/CreatorPage/CreatorPage";
import PostingOpportunity from "../pages/PostingOpportunity/PostingOpportunity";

const Router: React.FC = () => {
  return (
    <Suspense
      fallback={
        <div>
          <h1 className="flex items-center justify-between text-3xl font-semibold text-blue-600">
            Casting Arabia
          </h1>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/creator" element={<CreatorPage />} />
        <Route
          path="/creator/opportunities/:id/edit/step-one"
          element={<PostingOpportunity />}
        />
        <Route
          path="/*"
          element={
            <div className="flex h-full w-full flex-col items-center justify-center">
              <img
                src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/06/how-to-fix-error-404-1.png"
                className="mt-[13rem] w-[60%]"
                alt="img"
              />
            </div>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default Router;
