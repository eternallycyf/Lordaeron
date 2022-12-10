import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

export type RuleNames = 'btn' | 'btn-lg' | 'btn-sm' | 'btn-primary' | 'btn-danger' | 'btn-default' | 'btn-link' | 'disabled';

export interface CustomTheme { }

export interface BaseIconProps {
  /**
   * @description 类名
   * @default ''
   */
  className?: string;
}


type OverrideProperty<T, K extends keyof T, U> = Omit<T, K> & { [P in keyof Pick<T, K>]: U };
export type IconProps = BaseIconProps;