/* eslint-disable react-hooks-extra/no-unnecessary-use-prefix */
import * as React from 'react';

const fullClone = {
  ...React,
};

const { useId } = fullClone;

const useEmptyId = () => '';

const useThemeKey = typeof useId === 'undefined' ? useEmptyId : useId;

export default useThemeKey;
