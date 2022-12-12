import { Button, ConfigProvider } from "lordaeron";
import React from "react";
const Base = () => {
  return (
    <ConfigProvider
      prefixCls='xxx-'
      customTheme={{ '& $btn': { background: 'red' } }}
    >
      <Button type="primary" >
        primary button
      </Button>
    </ConfigProvider>
  )
}

export default Base;

