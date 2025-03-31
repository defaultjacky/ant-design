import React from 'react';
import type { TableProps } from 'rc-table';

const useContainerWidth = (prefixCls: string) => {
  const getContainerWidth = React.useCallback<NonNullable<TableProps['getContainerWidth']>>(
    (ele, width) => {
      const container = ele.querySelector<HTMLElement>(`.${prefixCls}-container`);
      let returnWidth = width;
      if (container) {
        const style = getComputedStyle(container);
        const borderLeft = parseInt(style.borderLeftWidth, 10);
        const borderRight = parseInt(style.borderRightWidth, 10);
        returnWidth = width - borderLeft - borderRight;
      }
      return returnWidth;
    },
    [prefixCls],
  );
  return getContainerWidth;
};

export default useContainerWidth;
