import { Button } from "lordaeron";
import React from "react";

const Base = () => {
  return (
    <>
      <Button type="primary" disabled>
        primary button
      </Button>
      <Button type="default" disabled>
        default button
      </Button>
      <Button type="danger" disabled>
        danger button
      </Button>
      <Button type="link" disabled>
        link button
      </Button>
    </>
  )
}

export default Base;