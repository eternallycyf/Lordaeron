import { Button, ConfigProvider } from "lordaeron";
import React from "react";
const Base = () => {
  return (
    <>
      <ConfigProvider
        prefixCls='xxx-'
        customTheme={{
          Button: {
            '& $btn': { background: 'lavender', color: 'black' }
          }
        }}
      >
        <Button type="primary" >
          primary button
        </Button>
        <Button type="default" >
          primary button
        </Button>
      </ConfigProvider>
      <ConfigProvider
        prefixCls='custim-'
        customTheme={{ '& $btn': { background: '#00b96b', color: '#fff' } }}
      >
        <Button type="link" >
          primary button
        </Button>
      </ConfigProvider>
    </>
  )
}

export default Base;

