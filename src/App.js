import React, { Suspense, lazy, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from './redux/auth';
import Container from './Components/Container';
import AppBar from './Components/AppBar';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "HomeView" */),
);
const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "RegisterView" */),
);
const LoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "LoginView" */),
);
const ContactsView = lazy(() =>
  import('./views/ContactsView' /* webpackChunkName: "ContactsView" */),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <AppBar />

      <Container>
        <Suspense fallback={<p>...loading</p>}>
          <Switch>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>

            <PublicRoute path="/register" restricted>
              <RegisterView />
            </PublicRoute>

            <PublicRoute path="/login" restricted>
              <LoginView />
            </PublicRoute>

            <PrivateRoute path="/contacts">
              <ContactsView />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </Container>
    </div>
  );
}
