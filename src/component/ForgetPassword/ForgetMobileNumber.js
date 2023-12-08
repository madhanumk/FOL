import React from 'react'
import SideMenu from "../SideMenu";
import "./ForgetPassword.css"
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button,  Modal } from 'antd';
import axios from "axios"

const ForgetPassword = ({ setStep, setMobileNumber }) => {

    const navigate = useNavigate();
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Form values:', values);
        form.resetFields();
        setStep(2);
      
        axios.post("http://mtjchitapp.thechennaisilks.com/api/Login/forgetOtp", values)
            .then((res) => {
                console.log('Response:', res);
            })
            .catch((error) => {              
                    console.log('Error:', error);
                })
    };
    

    const validateMobileNumber = (rule, value) => {
        const mobileNumberRegex = /^[0-9]{10}$/;
        if (!mobileNumberRegex.test(value)) {
            return Promise.reject('Please enter a 10-digit mobile number.');
        }
        return Promise.resolve();
    };


    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };


    return (
        <div className="elisc_tm_all_wrap" data-magic-cursor="show" data-enter="fadeInLeft" data-exit="true">
            <SideMenu />
            <div className="elisc_tm_mainpart w-full min-h-[100vh] clear-both float-left pl-[370px] lo" >
                <div className='container-forget'>
                        <div className="forget-left">
                            <h1 className="forget-title">WELCOME</h1>
                            <p className="forget-subTitle">Forget Password</p>
                            <div style={{ marginTop: "30px" }}>
                                <Form
                                    name="forget-form"
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    layout="vertical"
                                    form={form}
                                    className="login-form"
                                >
                                    <Form.Item
                                        name="mobileNumber"
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
                                        <div className="forget-input-warrper" >
                                            <Input
                                                type="tel" className="forget-input-style" maxLength={10}
                                            />
                                        </div>
                                    </Form.Item>                   

                                    <Form.Item style={{textAlign:"end"}}>
                                        <Button type="primary" htmlType="submit" size="large" style={{ background: "#9a2526" }}>
                                            Generate OTP
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>

                        <div className="forget-outer">
                            <img src="assets/img/bg-1.png" alt='background-image' className="forget-side-img" />
                        </div>                   

                </div>
            </div>
        </div>
    )
}

export default ForgetPassword

