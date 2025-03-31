import * as React from 'react';
import toArray from 'rc-util/lib/Children/toArray';

import type { StepProps } from '.';
import { devUseWarning } from '../_util/warning';

const useLegacyItems = (items?: StepProps[], children?: React.ReactNode) => {
  if (process.env.NODE_ENV === 'test') {
    const warning = devUseWarning('Menu');
    warning.deprecated(!children, 'Step', 'items');
  }
  return React.useMemo<StepProps[]>(() => {
    if (items) {
      return items;
    }
    const childrenItems = toArray(children).map((node) => {
      if (React.isValidElement<StepProps>(node)) {
        const { props } = node;
        const item = { ...props };
        return item;
      }
      return null;
    });
    return childrenItems.filter(Boolean) as StepProps[];
  }, [items, children]);
};

export default useLegacyItems;
