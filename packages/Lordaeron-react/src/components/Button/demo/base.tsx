import { Button } from "lordaeron";
import React from "react";


const Base = () => {
  return (
    <>
      <Button type="primary" >
        primary button
      </Button>
      <Button type="default" >
        default button
      </Button>
      <Button type="danger" >
        danger button
      </Button>
      <Button type="link" >
        link button
      </Button>
    </>
  )
}

export default Base;