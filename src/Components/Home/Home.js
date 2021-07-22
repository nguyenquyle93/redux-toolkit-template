import React, { useState } from "react";
import { Form, Input, Button, Radio } from "antd";
import { Container } from "./Home.style";
import { useSelector } from 'react-redux'
import ListItem from "./ListItem";

function Home() {
  const [form] = Form.useForm();

  const address = useSelector((state) => state.app.address)

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <Container>
      <div className="title">Home</div>
      <div className="content">
      {address.length > 0 && <ListItem data={address}/>}
      </div>
    </Container>
  );
}

export default Home;
