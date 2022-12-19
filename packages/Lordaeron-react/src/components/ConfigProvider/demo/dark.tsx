import { Button, ConfigProvider } from "lordaeron";
import React from "react";
const Dark = () => {
  return (
    <>
      <ConfigProvider
        prefixCls='xxx-'
        dark
        defaultThemeConfig={{ size: 'small' }}
      >
        <Button type="primary" >
          primary button
        </Button>
        <Button type="default" >
          primary button
        </Button>
      </ConfigProvider>
    </>
  )
}

export default Dark;

