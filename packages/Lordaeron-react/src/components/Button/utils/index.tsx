import { IDefaultThemeConfig } from "../../ConfigProvider/interface";

export const getDefaultProps = (props: any, defaultThemeConfig: IDefaultThemeConfig) => {
  // TODO: 设置其他默认配置

  // globalColor ?: IGlobalColor;
  // renderEmpty ?: RenderEmptyHandler;
  // size ?: SizeType;
  // disabled ?: boolean;
  return {
    ...props,
    ...defaultThemeConfig
  }
}

