import React, { FC, useMemo } from 'react';

import { Icon, BreadCrumbs, Crumb } from 'reusableComponents';

import camelCase from 'lodash/camelCase';
import { useRouter } from 'hooks';

import { observer } from 'mobx-react';

import $ from './headerBreadcrumbs.module.scss';
import { TIcons, TCrumb } from './types';

const icons: TIcons = {
  reporting: 'report',
  settings: 'settings',
  dialogues: 'dialogues',
  accountSettings: 'admin',
  adminSettings: 'tenant',
  automation: 'report',
  interactions: 'dialogues',
};

const HeaderBreadcrumbs: FC = () => {
  const router = useRouter();

  const [, sectionPath, ...pathArray] = router.pathname.split('/');

  const breadCrumb: TCrumb[] = useMemo(() => {
    const sectionDisplayName = camelCase(sectionPath);

    return pathArray.length
      ? pathArray.reduce((array, item, index) => {
          const displayName = camelCase(item);

          if (item.length && displayName) {
            return [
              ...array,
              {
                path: `/${sectionPath}/${pathArray.slice(0, index + 1).join('/')}`,
                displayName,
              },
            ];
          }

          return array;
        }, [] as TCrumb[])
      : sectionDisplayName
      ? [{ displayName: sectionDisplayName, path: `/${sectionPath}` }]
      : [];
  }, [pathArray, sectionPath]);

  const breadCrumbIcon = icons[camelCase(sectionPath)];

  return breadCrumb.length ? (
    <div className={$.breadCrumbCont}>
      <Icon className={$.breadCrumbIcon} type={breadCrumbIcon} />
      <BreadCrumbs>
        {breadCrumb.map((crumb, index) => (
          <Crumb key={index} href={crumb.path}>
            {crumb.displayName}
          </Crumb>
        ))}
      </BreadCrumbs>
    </div>
  ) : null;
};

export default observer(HeaderBreadcrumbs);