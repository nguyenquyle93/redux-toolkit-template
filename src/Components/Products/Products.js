import React, { useState } from "react";
import { Form, Input, Button, Radio } from "antd";
import { Container } from "../Address/Address.style";
import { useSelector, useDispatch } from 'react-redux'
import { addProduct } from '../../features/app/productSlice'
import ListItem from "./ListItem";


const Products =React.memo(() =>{
  const [form] = Form.useForm();

  const dispatch = useDispatch()
  const products = useSelector((state) => state.product.products)

  const onFinish = (values) => {
    const action = addProduct(values);
    dispatch(action)
  };
  
  console.log('111111111 đã rerender product', products)

  return (
    <Container>
      <div className="title">Products</div>
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
        {products.length > 0 && <ListItem data={products}/>}
      </div>
    </Container>
  );
})

export default Products;
