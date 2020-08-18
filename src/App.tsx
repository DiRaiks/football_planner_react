import { hot } from 'react-hot-loader/root';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useObserver } from 'mobx-react';

import { ROUTE_REGISTRATION } from 'constantsVars';
import { UserStore } from 'store';
import { CenterLoader } from 'reusableComponents';
import Login from 'components/Login';
import Registration from 'components/Registration';

import './App.scss';

export const App: React.FC = () => {
  const isLoading = useObserver(() => UserStore.isInitialUserPending);
  const isAuthenticated = useObserver(() => UserStore.isAuthenticated);

  if (isLoading) return <CenterLoader size="l" />;

  return (
    <Router>
      {isAuthenticated ? (
        <>
          <Suspense
            fallback={
              <div>
                <h2>Loading...</h2>
              </div>
            }
          ></Suspense>
        </>
      ) : (
        <Switch>
          <Route path={ROUTE_REGISTRATION} component={Registration} />
          <Route path="*" component={Login} />
        </Switch>
      )}
    </Router>
  );
};

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
