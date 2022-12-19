import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

export type RuleNames = 'lordaeron-button' | 'btn' | 'btn-large' | 'btn-small' | 'btn-primary' | 'btn-danger' | 'btn-default' | 'btn-link' | 'disabled';

export interface BaseButtonProps {
  /**
   * @description 类名
   * @default ''
   */
  className?: string;
  /**
   * @description 是否禁用
   * @default "false"
   */
  disabled?: boolean;
  /**
   * @description 大小
   * @default "default"
   */
  size?: 'large' | 'small' | 'middle';
  /**
   * @description 类型
   * @default "default"
   */
  type?: 'primary' | 'default' | 'danger' | 'link';
  /**
   * @description children
   * @default 'null''
   */
  children?: React.ReactNode,
  /**
   * @description href
   * @default '#'
   */
  href?: string
}


type OverrideProperty<T, K extends keyof T, U> = Omit<T, K> & { [P in keyof Pick<T, K>]: U };
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
type ButtonPropsOrigin = Partial<NativeButtonProps & AnchorButtonProps>
export type ButtonProps = OverrideProperty<ButtonPropsOrigin, 'type', 'primary' | 'default' | 'danger' | 'link'>