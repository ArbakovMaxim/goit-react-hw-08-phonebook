// import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'components/hooks';
import { authOperations } from 'redux/auth';
import PublicRoute from 'components/Route/PublicRoute';
import PrivateRoute from 'components/Route/PrivateRoute';

const Layout = lazy(() => import('./lkjbkj/Layout'));
const Home = lazy(() => import('./Pages/Home/Home'));
const Contacts = lazy(() => import('./Pages/Contacts/Contacts'));
const Register = lazy(() => import('./components/Register/Register'));
const Login = lazy(() => import('./components/Login/Login'));
const PageNotFound = lazy(() => import('./Pages/PageNotFound/PageNotFound'));

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
