import * as React from 'react';
import toArray from 'rc-util/lib/Children/toArray';

import type { TimelineItemProps } from './TimelineItem';

const useItems = (items?: TimelineItemProps[], children?: React.ReactNode): TimelineItemProps[] => {
  return React.useMemo(
    () =>
      Array.isArray(items)
        ? items
        : toArray(children).map((ele: React.ReactElement<any>) => ({
            children: ele?.props?.children ?? '',
            ...ele.props,
          })),
    [items, children],
  );
};

export default useItems;
