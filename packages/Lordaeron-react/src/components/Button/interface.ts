import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

export type RuleNames = 'btn' | 'btn-lg' | 'btn-sm' | 'btn-primary' | 'btn-danger' | 'btn-default' | 'btn-link' | 'disabled';

export interface CustomTheme { }

export interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: 'lg' | 'sm';
  type?: 'primary' | 'default' | 'danger' | 'link';
  children?: React.ReactNode,
  href?: string
}

type OverrideProperty<T, K extends keyof T, U> = Omit<T, K> & { [P in keyof Pick<T, K>]: U };
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
type ButtonPropsOrigin = Partial<NativeButtonProps & AnchorButtonProps>
export type ButtonProps = OverrideProperty<ButtonPropsOrigin, 'type', 'primary' | 'default' | 'danger' | 'link'>