import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
const FrameOne = React.lazy(() => import("pages/FrameOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<FrameOne />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
