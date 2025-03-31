import React from 'react';
import type { CSSMotionProps } from 'rc-motion';
import type { AnimatedConfig } from 'rc-tabs/lib/interface';

import type { TabsProps } from '..';
import { getTransitionName } from '../../_util/motion';

const motion: CSSMotionProps = {
  motionAppear: false,
  motionEnter: true,
  motionLeave: true,
};

const defaultAnimated: TabsProps['animated'] = {
  inkBar: true,
  tabPane: false,
};

const useAnimateConfig = (prefixCls: string, animated: TabsProps['animated'] = defaultAnimated) => {
  return React.useMemo<AnimatedConfig>(() => {
    let mergedAnimated: AnimatedConfig;
    if (animated === false) {
      mergedAnimated = {
        inkBar: false,
        tabPane: false,
      };
    } else if (animated === true) {
      mergedAnimated = {
        inkBar: true,
        tabPane: true,
      };
    } else {
      mergedAnimated = {
        inkBar: true,
        ...(typeof animated === 'object' ? animated : {}),
      };
    }
    if (mergedAnimated.tabPane) {
      mergedAnimated.tabPaneMotion = {
        ...motion,
        motionName: getTransitionName(prefixCls, 'switch'),
      };
    }
    return mergedAnimated;
  }, [prefixCls, animated]);
};

export default useAnimateConfig;
