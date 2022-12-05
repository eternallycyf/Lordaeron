import { Button } from "lordaeron";
import React from "react";

const Base = () => {
  return (
    <>
      <Button type="primary" size='sm'>
        primary button
      </Button>
      <Button type="default" size='sm'>
        default button
      </Button>
      <Button type="danger" size='sm' >
        danger button
      </Button>
      <Button type="link" size='sm'>
        link button
      </Button>
      <Button type="primary" size='lg'>
        primary button
      </Button>
      <Button type="default" size='lg'>
        default button
      </Button>
      <Button type="danger" size='lg' >
        danger button
      </Button>
      <Button type="link" size='lg'>
        link button
      </Button>
    </>
  )
}

export default Base;