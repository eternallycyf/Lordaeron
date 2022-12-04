import { Button } from "lordaeron";
import React from "react";

const Demo = () => {
  return (
    <>
      <Button type="primary" disabled={false}>
        primary button
      </Button>
      <Button type="default" disabled={false}>
        default button
      </Button>
      <Button type="danger" disabled={false}>
        danger button
      </Button>
      <Button type="link" disabled={false}>
        link button
      </Button>
    </>
  )
}

export default Demo;