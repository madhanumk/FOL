import "./Signup.css"
import React, { useState } from 'react';
import { Form, Input, Button, Checkbox,} from 'antd';
import { Link } from 'react-router-dom/dist';
import { EyeOutlined, EyeInvisibleOutlined, UserOutlined, UnlockOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons'
import SideMenu from "../SideMenu";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Signup() {

    const navigate = useNavigate();
    const [form] = Form.useForm();

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const initialValues = {
        IMEINUM: 1,
        APPCODE: 1,
        APPVERSION: 1,
        FCMID: 1,
      };

    const onFinish = (values) => {
        console.log('Form values:', values);

        axios.post(
            "http://tjchitwebuad.thechennaisilks.com:5775/API/LOGIN/USERREGISTRATION",
            values,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                params: initialValues, // Use initialValues directly
            }
        )
            .then((res) => {
                console.log(res);

                if (res?.data?.Success === 1) {
                    navigate('/');
                } else {
                    // Handle unsuccessful response
                    error();
                }
            })
            .catch((error) => {
                console.error(error);

                if (axios.isAxiosError(error)) {
                    // Axios error, handle specific cases
                    if (error.response) {
                        // The request was made and the server responded with a status code
                        console.error("Server responded with status:", error.response.status);
                        // Handle specific status codes if needed
                    } else if (error.request) {
                        // The request was made but no response was received
                        console.error("No response received from the server");
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.error("Error setting up the request:", error.message);
                    }
                } else if (error.code === 'ECONNABORTED') {
                    // Handle timeout error
                    console.error("Request timed out");
                } else {
                    // Handle other errors
                    console.error("An error occurred:", error.message);
                }

                // Display a user-friendly message for network errors
                showNetworkError();
            });
    };

    const showNetworkError = () => {
        // Display a user-friendly message for network errors
        console.error("Network error. Please check your internet connection.");
    };

    const error = () => {
        // Handle specific errors or display a generic error message
        console.error("An error occurred during the API request.");
    };


    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className="elisc_tm_all_wrap" data-magic-cursor="show" data-enter="fadeInLeft" data-exit="true">
            <SideMenu />
            <div className="elisc_tm_mainpart w-full min-h-[100vh] clear-both float-left pl-[370px]">

                <div className='container-signup'>
                    <div className="signup-left">
                        <h1 className="signup-title">WELCOME</h1>
                        <p className="login-subTitle">User Signup</p>
                        <div style={{ marginTop: "20px" }}>
                            <Form
                                form={form}
                                name="signup-form"
                                initialValues={initialValues}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                layout="vertical"
                                className="login-form"
                            >
                                <Form.Item
                                    name="NAME"
                                    label="Name"
                                    rules={[
                                        {
                                            whitespace: true,
                                            message: "Please enter your name!",
                                        },
                                    ]}
                                >
                                    <div className="login-input-warrper">
                                        < UserOutlined className="login-input-icon" />
                                        <Input className="login-input-style" />
                                    </div>
                                </Form.Item>

                                <Form.Item
                                    name="MAILID"
                                    label="Email"
                                    rules={[
                                        {
                                            type: "email",
                                            message: "The input is not a valid email!"
                                        },
                                        {
                                            message: "Please enter your email!"
                                        }
                                    ]}
                                >
                                    <div className="login-input-warrper">
                                        <MailOutlined className="login-input-icon" />
                                        <Input className="login-input-style" />
                                    </div>
                                </Form.Item>

                                <Form.Item
                                    name="USERNAME"
                                    label="Mobile Number"
                                    style={{ fontSize: "18px !important" }}
                                    rules={[
                                        {
                                            required: false,
                                            message: 'Please enter your mobile number!',
                                        },
                                        {
                                            pattern: /^[0-9]{10}$/,
                                            message: 'Mobile number must be a 10-digit number!',
                                        },
                                    ]}
                                >
                                    <div className="login-input-warrper">
                                        <PhoneOutlined className="login-input-icon" />
                                        <Input
                                            type="tel"
                                            className="login-input-style"
                                            maxLength={10}
                                        />
                                    </div>
                                </Form.Item>

                                <Form.Item
                                    name="PASSWORD"
                                    label="Password"
                                    style={{ fontSize: "18px !important" }}
                                    rules={[
                                        {
                                            message: 'Please enter your password!',
                                        },
                                    ]}
                                >
                                    <div className="login-input-wrapper">
                                        <UnlockOutlined className="login-input-icon" />
                                        <Input
                                            type={passwordVisible ? 'text' : 'password'}
                                            className="login-input-style"
                                        />
                                        {passwordVisible ? (
                                            <EyeOutlined onClick={togglePasswordVisibility} className="eyeIcon" />
                                        ) : (
                                            <EyeInvisibleOutlined onClick={togglePasswordVisibility} className="eyeIcon" />
                                        )}
                                    </div>
                                </Form.Item>

                                <Form.Item name="IMEINUM" initialValue={initialValues.IMEINUM} hidden>
                                    <Input />
                                </Form.Item>

                                <Form.Item name="APPCODE" initialValue={initialValues.APCODE}  hidden>
                                    <Input />
                                </Form.Item>

                                <Form.Item name="APPVERSION"  initialValue={initialValues.APPVERSION} hidden>
                                    <Input />
                                </Form.Item>

                                <Form.Item name="FCMID" initialValue={initialValues.FCMID} hidden>
                                    <Input />
                                </Form.Item>
                                {/* <Form.Item
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    dependencies={['password-signup']}
                                    rules={[
                                        {
                                            message: "Please confirm your password!"
                                        },
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                              if (!value || getFieldValue('password-signup') === value) {
                                                return Promise.resolve();
                                              }
                                              return Promise.reject(new Error('The two passwords do not match!'));
                                            },
                                          }),
                                    ]}
                                >
                                    <Input className="login-input-style"/>
                                </Form.Item> */}

                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <Form.Item name="remember" valuePropName="checked">
                                        <Checkbox>Remember me</Checkbox>
                                    </Form.Item>
                                    {/* <p style={{textDecoration:'underline'}}>Forgot Password</p> */}
                                </div>

                                <Form.Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        style={{ background: "#9a2526" }}
                                        size="large"
                                    >
                                        Sign Up
                                    </Button>
                                </Form.Item>
                            </Form>
                            <p>Already user ? <Link to="/login" style={{ textDecoration: 'underline' }}>Login</Link></p>
                        </div>
                    </div>

                    <div className="signup-outer">
                        <img src="assets/img/bg-1.png" alt="side-modal"  className="login-side-img" />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Signup;
