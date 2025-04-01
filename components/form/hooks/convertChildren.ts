import toArray from 'rc-util/lib/Children/toArray';

import type { FormItemProps } from '../FormItem';

export default function convertChildren(
  children?: FormItemProps['children'],
): FormItemProps['children'] {
  if (typeof children === 'function') {
    return children;
  }
  const childList = toArray(children);
  return childList.length <= 1 ? childList[0] : childList;
}
