import toArray from 'rc-util/lib/Children/toArray';

import type { FormItemProps } from '../FormItem';

const convertChildren = (children?: FormItemProps['children']): FormItemProps['children'] => {
  if (typeof children === 'function') {
    return children;
  }
  const childList = toArray(children);
  return childList.length <= 1 ? childList[0] : childList;
};

export default convertChildren;
