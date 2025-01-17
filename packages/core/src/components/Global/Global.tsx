import React from 'react';
import { Global as BaseGlobal } from '@emotion/core';

import { Theme } from '../ThemeProvider';

export const Global: React.FC<Theme> = () => {
  return (
    <BaseGlobal
      styles={(theme: any) => ({
        '*': {
          boxSizing: 'border-box',
          color: theme.colors.text,
        },
      })}
    />
  );
};
