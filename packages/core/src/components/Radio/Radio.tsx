/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/css';

import { shouldForwardProp } from '../../system';
import { Box, BoxProps, Flex, Label } from '../../components';

export type StyledRadioProps = React.ComponentPropsWithoutRef<'input'> &
  BoxProps & {
    label: string;
    disabled?: boolean;
    error?: boolean;
  };

const radioIconStyles = (props: any) => css`
  &:hover {
    color: ${props.error
      ? props.theme.colors.error
      : props.theme.colors.primary};
  }

  input:focus ~ & {
    color: ${props.error
      ? props.theme.colors.error
      : props.theme.colors.primary};
  }

  input:checked:disabled ~ &,
  input:disabled ~ & {
    color: ${props.theme.colors.muted};
  }

  input:checked ~ & {
    color: ${props.error
      ? props.theme.colors.error
      : props.theme.colors.primary};
  }
`;

const CheckedIcon = (props: any) => (
  <svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

const UncheckedIcon = (props: any) => (
  <svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
  </svg>
);

const Checked = styled(CheckedIcon)`
  display: none;

  input:checked ~ & {
    display: block;
  }

  ${radioIconStyles}
`;

const Unchecked = styled(UncheckedIcon)`
  display: block;

  input:checked ~ & {
    display: none;
  }

  ${radioIconStyles}
`;

const RadioIcon = (props: any) => (
  <React.Fragment>
    <Checked {...props} />
    <Unchecked {...props} />
  </React.Fragment>
);

export const StyledRadio = styled(Box, {
  shouldForwardProp,
})<StyledRadioProps>``;

export type RadioProps = StyledRadioProps;

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, disabled, error, ...rest }, ref) => (
    <Label sx={{ cursor: 'pointer' }}>
      <Flex>
        <StyledRadio
          as={'input'}
          type="radio"
          ref={ref as any}
          disabled={disabled}
          {...rest}
          position="absolute"
          opacity={0}
          zIndex={-1}
          width={1}
          height={1}
          overflow="hidden"
        />
        <Box
          as={RadioIcon}
          aria-hidden="true"
          disabled={disabled}
          error={error}
        />
        {label}
      </Flex>
    </Label>
  )
);