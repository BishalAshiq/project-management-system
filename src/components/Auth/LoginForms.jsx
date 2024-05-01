"use client"
import React from 'react';
import { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
// import 'antd/dist/antd.css';
import styles from '../Auth/Login.module.css';
const LoginForms = () => {
    const [loading, setLoading] = useState(false);

    const onFinish = (values) => {
        setLoading(true);
        // Mock backend authentication
        setTimeout(() => {
          setLoading(false);
          if (values.username === 'admin' && values.password === 'password') {
            // Mock successful login
            message.success('Login successful!');
            // Redirect to dashboard
            window.location.href = '/dashboard';
          } else {
            // Mock unsuccessful login
            message.error('Invalid username or password');
          }
        }, 1000); // Simulate a delay for authentication
      };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
    return (
        <div>
             <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <Form
        name="loginForm"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} className={styles.button}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
        </div>
    );
};

export default LoginForms;