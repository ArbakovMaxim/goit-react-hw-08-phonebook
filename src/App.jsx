// import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { authOperations } from 'redux/auth';
import PublicRoute from 'hooks/Route/PublicRoute';
import PrivateRoute from 'hooks/Route/PrivateRoute';

const Layout = lazy(() => import('./layout/Layout'));
const Home = lazy(() => import('./pages/Home'));
const Contacts = lazy(() => import('./pages/Contacts/Contacts'));
const Register = lazy(() => import('./pages/Register/Register'));
const Login = lazy(() => import('./pages/Login/Login'));
const PageNotFound = lazy(() => import('./pages/PageNotFound/PageNotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <h1>Refreshing user...</h1>
  ) : (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PublicRoute component={<Home />} />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute
                restricted
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute
                restricted
                redirectTo="/contacts"
                component={<Login />}
              />
            }
          />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};
