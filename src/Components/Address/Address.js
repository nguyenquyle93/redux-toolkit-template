import React, { useState } from "react";
import { Form, Input, Button, Radio } from "antd";
import { Container } from "./Address.style";
import { useSelector, useDispatch } from 'react-redux'
import { addAddress } from '../../features/app/appSlice'
import ListItem from "./ListItem";
import Category from "../Category/Category"
import Products from "../Products/Products"

function Address() {
  const [form] = Form.useForm();
  const dispatch = useDispatch()
  const {address,category} = useSelector((state) => state.app)
  const {products} = useSelector((state) => state.product)

  const onFinish = (values) => {
    const action = addAddress(values);
    console.log('111111111', action)
    dispatch(action)
  };

  console.log('111111111 đã rerender Adress', address,category, products)
  
  return (
    <>
    <Container>
      <div className="title">Adress</div>
      <div className="content">
        <Form form={form} onFinish={onFinish}>
          <Form.Item label="Phường" name="phuong">
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item label="Quận" name="quan">
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        {address.length > 0 && <ListItem data={address}/>}
      </div>
    </Container>
    <Category />
    <Products />
    </>
  );
}

export default Address;
