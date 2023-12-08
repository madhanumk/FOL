import React from 'react'
import { Form, Input, Button,  Select, Upload, } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import "./PayDue.css"
import SideMenuTwo from '../SideMenuTwo';

const PayDue = () => {


  const dataSource = [
    {
      key: '1',
      sNo: 1,
      group: 500,
      name: "Adams",
      currentDue: 1000,
      amount: 15000,
    },
    {
      key: '2',
      sNo: 2,
      group: 1000,
      name: "Raj",
      currentDue: 1000,
      amount: 15000,
    },
    {
      key: '3',
      sNo: 3,
      group: 1000,
      name: "Bala",
      currentDue: 1000,
      amount: 15000,
    },
  ];

  const columns = [
    {
      title: 'S No',
      dataIndex: 'sNo',
      key: 'sNo',
    },
    {
      title: 'Group',
      dataIndex: 'group',
      key: 'group',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Current Due',
      dataIndex: 'currentDue',
      key: 'currentDue',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
  ];

  const [form] = Form.useForm(); // Use Form.useForm() instead of importing useForm


  const onFinish = (values) => {
    console.log("Received values:", values);
    form.resetFields();
  };

  // Custom validation rule for mobile number
  const validateMobileNumber = (rule, value) => {
    const mobileNumberRegex = /^[0-9]{10}$/;
    if (!mobileNumberRegex.test(value)) {
      return Promise.reject("Please enter a 10-digit mobile number.");
    }
    return Promise.resolve();
  };

  const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const normFile2 = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };


  return (
    <div className="elisc_tm_all_wrap" data-magic-cursor="show" data-enter="fadeInLeft" data-exit="true">
      <SideMenuTwo />
      <div className="elisc_tm_mainpart w-full min-h-[100vh] clear-both float-left pl-[370px] " >
        <div className='payDue-container'>
          <div className='payDue-main'>
          <div >
            <div className='payDue-title-outer'>
              <h2 className="joinNow">My Profile</h2>
            </div>
            <Form
              form={form}
              name="signup-form"
              initialValues={{
                remember: true
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              layout="vertical"

            >
              <div className="form-main">
                <div className="left-input">
                  <Form.Item
                    name="fname"
                    label="First Name"
                    rules={[
                      {
                        message: "Please enter your First Name!"
                      }
                    ]}
                    className="chit-form-input"
                  >
                    <Input />
                  </Form.Item>
                </div>
                <div>


                  <Form.Item
                    name="lname"
                    label="Last Name"
                    rules={[
                      {
                        message: "Please enter your Last Name!"
                      }
                    ]}
                    className="chit-form-input"


                  >
                    <Input />
                  </Form.Item>

                </div>
              </div>


              <div className="form-main">
                <div className="left-input">
                  <Form.Item
                    name="email"
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
                    className="chit-form-input"

                  >
                    <Input />
                  </Form.Item>
                </div>

                <div>
                  <Form.Item
                    name="mobNumber"
                    label="Mobile Number"
                    rules={[
                      {
                        message: "Please enter your mobile number!"
                      },
                      {
                        validator: validateMobileNumber
                      }
                    ]}
                    className="chit-form-input"


                  >
                    <Input type="tel" />
                  </Form.Item>
                </div>
              </div>



              <div className="form-main">
                <div className="left-input">
                  <Form.Item label="Amount (Monthly Installment)" name="amount"
                    className="chit-form-input"

                  >
                    <Select>
                      <Select.Option value="1000">1000</Select.Option>
                      <Select.Option value="2000">2000</Select.Option>
                      <Select.Option value="3000">3000</Select.Option>
                    </Select>
                  </Form.Item>
                </div>
                <div>
                  <Form.Item label="Saving Category" name="saving"
                    className="chit-form-input"

                  >
                    <Select>
                      <Select.Option value="demo 1">Demo 1</Select.Option>
                      <Select.Option value="demo 2">Demo 2</Select.Option>
                      <Select.Option value="demo 3">Demo 3</Select.Option>
                    </Select>
                  </Form.Item>


                </div>
              </div>


              <div className="form-main">
                <div className="left-input">
                  <Form.Item
                    name="address"
                    label="Street Address"
                    rules={[
                      {
                        message: "Please enter your Street Address!"
                      }
                    ]}
                    className="chit-form-input"

                  >
                    <Input />
                  </Form.Item>

                </div>
                <div>
                  <Form.Item
                    name="city"
                    label="City"
                    rules={[
                      {
                        message: "Please enter your city!"
                      }
                    ]}
                    className="chit-form-input"


                  >
                    <Input />
                  </Form.Item>
                </div>
              </div>

              <div className="form-main">
                <div className="left-input">
                  <Form.Item label="State/Province" name="state"
                    className="chit-form-input"

                  >
                    <Select>
                      <Select.Option value="state 1">state 1</Select.Option>
                      <Select.Option value="state 2">state 2</Select.Option>
                      <Select.Option value="state 3">state 3</Select.Option>
                    </Select>
                  </Form.Item>
                </div>
                <div>
                  <Form.Item
                    name="zip"
                    label="Zip/Postal code"
                    rules={[
                      {
                        message: "Please enter your zip code!"
                      }
                    ]}
                    className="chit-form-input"

                  >
                    <Input />
                  </Form.Item>
                </div>
              </div>


              <div className="form-main">
                <div className="left-input">
                  <Form.Item label="Country" name="country"
                    className="chit-form-input"

                  >
                    <Select>
                      <Select.Option value="country 1">country 1</Select.Option>
                      <Select.Option value="country 2">country 2</Select.Option>
                      <Select.Option value="country 3">country 3</Select.Option>
                    </Select>
                  </Form.Item>
                </div>
                <div>
                  <Form.Item
                    name="photo"
                    label="Photo Proof"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    className="chit-form-input"

                  >
                    <Upload name="logo" action="/upload.do" listType="picture">
                      <Button icon={<UploadOutlined />} className='photo-upload'>Photo Proof</Button>
                    </Upload>
                  </Form.Item>
                </div>
              </div>

              <div>
                <Form.Item
                  name="proof"
                  label="Address Proof"
                  valuePropName="fileList"
                  getValueFromEvent={normFile2}
                  className="chit-form-input"

                >
                  <Upload name="logo" action="/upload.do" listType="picture">
                    <Button icon={<UploadOutlined />} className='address-upload'>Address Proof</Button>
                  </Upload>
                </Form.Item>
              </div>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ background: "#9a2526" }}
                  size="large"
                >
                  Update
                </Button>
              </Form.Item>


            </Form>
          </div>
          </div>
     
        


        </div>

      </div>
    </div>

  )
}

export default PayDue