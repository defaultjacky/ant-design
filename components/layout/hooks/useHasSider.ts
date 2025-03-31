import React from 'react';
import toArray from 'rc-util/lib/Children/toArray';

import Sider from '../Sider';

const useHasSider = (siders: string[], children?: React.ReactNode, hasSider?: boolean) => {
  return React.useMemo<boolean>(() => {
    if (typeof hasSider === 'boolean') {
      return hasSider;
    }
    if (siders.length) {
      return true;
    }
    const childNodes = toArray(children);
    return childNodes.some((node) => node.type === Sider);
  }, [siders.length, children, hasSider]);
};

export default useHasSider;
