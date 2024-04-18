import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Login } from "./components/Login";
import { Owners } from "./components/Owner/Owners";
import { Posts } from "./components/Posts/Posts";
import { AuthGuard } from "./guards/AuthGuard";
import { NotFoundPage } from "./pages/NotFoundPage";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path="login" element={<Login />} />
          <Route path="posts" element={<Posts />} />

          <Route>
            <Route path="/" element={<Navigate to="/posts" />} />
          </Route>

          <Route element={<AuthGuard />}>
            <Route path="/owners" element={<Owners />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
