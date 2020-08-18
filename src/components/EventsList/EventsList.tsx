import React from 'react';
import { ContainerContent } from 'reusableComponents';

import { usePageEntitiesUpdate, useEntitiesPagination } from 'hooks';
import { EventsStore } from 'store';

import ActiveEvents from './ActiveEvents';
import OldEvents from './OldEvents';
import styles from './eventsList.module.scss';

export const EventsList: React.FC = () => {
  const search = usePageEntitiesUpdate(EventsStore, 'all');
  const pagination = useEntitiesPagination(EventsStore);

  console.log('search, pagination', search, pagination);

  return (
    <ContainerContent>
      <div className={styles.wrapper}>
        <div className={styles.leftColumn}>
          <ActiveEvents />
          <OldEvents />
        </div>
        <div className={styles.rightColumn}>
          <ActiveEvents />
          <OldEvents />
        </div>
      </div>
    </ContainerContent>
  );
};

export default EventsList;
