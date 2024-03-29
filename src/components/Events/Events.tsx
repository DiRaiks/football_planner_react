import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { NoMatch } from 'components/NoMatch';
import { ROUTE_EVENTS } from 'constantsVars';

import EventsList from './EventsList';
import EventPlayers from './EventPlayers';

const Events: FC = () => (
  <>
    <Switch>
      <Route path={ROUTE_EVENTS} exact component={EventsList} />
      <Route path={`${ROUTE_EVENTS}/:eventId`} component={EventPlayers} />
      <Route component={NoMatch} />
    </Switch>
  </>
);

export default Events;
