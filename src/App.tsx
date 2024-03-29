import { hot } from 'react-hot-loader/root';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useObserver } from 'mobx-react';

import { ROUTE_REGISTRATION, ROUTE_EVENTS, ROUTE_ACCOUNT } from 'constantsVars';
import { UserStore } from 'store';
import { CenterLoader, Tooltip } from 'reusableComponents';
import Login from 'components/Login';
import Registration from 'components/Registration';
import Main from 'components/Main';
import Events from 'components/Events';
import Account from 'components/Account';

import './App.scss';

export const App: React.FC = () => {
  const isLoading = useObserver(() => UserStore.isInitialUserPending);
  const isAuthenticated = useObserver(() => UserStore.isAuthenticated);

  if (isLoading) return <CenterLoader size="l" />;

  return (
    <Router>
      {isAuthenticated ? (
        <>
          <Suspense fallback={<h2>Loading...</h2>}>
            <Main>
              <Switch>
                <Route path={`${ROUTE_EVENTS}`} component={Events} />
                <Route path={`${ROUTE_ACCOUNT}`} component={Account} />
                <Redirect to={ROUTE_EVENTS} />
              </Switch>
            </Main>
          </Suspense>
        </>
      ) : (
        <Switch>
          <Route path={ROUTE_REGISTRATION} component={Registration} />
          <Route path="*" component={Login} />
        </Switch>
      )}
      <Tooltip />
    </Router>
  );
};

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
