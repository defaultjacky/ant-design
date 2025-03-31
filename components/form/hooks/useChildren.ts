import React from 'react';
import toArray from 'rc-util/lib/Children/toArray';

import type { FormItemProps } from '../FormItem';

const useChildren = (children?: FormItemProps['children']) => {
  return React.useMemo<FormItemProps['children']>(() => {
    if (typeof children === 'function') {
      return children;
    }
    const childList = toArray(children);
    return childList.length <= 1 ? childList[0] : childList;
  }, [children]);
};

export default useChildren;
