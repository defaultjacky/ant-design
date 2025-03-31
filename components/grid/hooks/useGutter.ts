import React from 'react';

import type { ScreenMap } from '../../_util/responsiveObserver';
import { responsiveArray } from '../../_util/responsiveObserver';
import type { RowProps } from '../row';

type Gap = number | undefined;

const useGutter = (gutter: RowProps['gutter'], screens: ScreenMap | null) => {
  return React.useMemo<[Gap, Gap]>(() => {
    const results: [number | undefined, number | undefined] = [undefined, undefined];
    const normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, undefined];
    // By default use as `xs`
    const mergedScreens = screens || {
      xs: true,
      sm: true,
      md: true,
      lg: true,
      xl: true,
      xxl: true,
    };
    normalizedGutter.forEach((g, index) => {
      if (typeof g === 'object' && g !== null) {
        for (let i = 0; i < responsiveArray.length; i++) {
          const breakpoint = responsiveArray[i];
          if (mergedScreens[breakpoint] && g[breakpoint] !== undefined) {
            results[index] = g[breakpoint];
            break;
          }
        }
      } else {
        results[index] = g;
      }
    });
    return results;
  }, [gutter, screens]);
};

export default useGutter;
