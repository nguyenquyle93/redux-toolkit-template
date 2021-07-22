import React, { useState,useMemo } from "react";
import { Form, Input, Button, Radio } from "antd";
import { Container } from "../Address/Address.style";
import { useSelector, useDispatch } from 'react-redux'
import { addCategory } from '../../features/app/appSlice'
import ListItem from "./ListItem";

const Category = React.memo(() => {
  const [form] = Form.useForm();
  const dispatch = useDispatch()
  const category = useSelector((state) => state.app.category)

  const onFinish = (values) => {
    const action = addCategory(values);
    dispatch(action)
  };
  
  console.log('111111111 đã rerender Category', category)

  return (
    <Container>
      <div className="title">Category</div>
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
        {category.length > 0 && <ListItem data={category}/>}
      </div>
    </Container>
  );
})

export default Category;
