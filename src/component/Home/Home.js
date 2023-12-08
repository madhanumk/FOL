
import "./Home.css"
import React, { useState, useEffect } from 'react';
import SideMenuTwo from "../SideMenuTwo";
import { Table, Button } from 'antd';
import axios from "axios";
import { CalendarFilled, CaretDownOutlined, CaretUpOutlined  } from '@ant-design/icons';
import { Modal } from 'antd';

function Home() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [productRate, setProductRate] = useState([])
    const [goldMaxMin, setGoldMaxMin]  = useState([])

    useEffect(() => {
        axios.get("https://chatbot.thechennaisilks.com:5575/API/login/GoldRate").then((res) => {
            setProductRate(res?.data?.results)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    console.log("productRate", productRate)


    useEffect(() => {
        axios.get("https://chatbot.thechennaisilks.com:5575/api/login/MinMaxGoldRate?MonthYear=06-2023")
            .then((res) => {
                setGoldMaxMin(res?.data?.results);
            })
            .catch((error) => {
                console.error("Axios Error:", error);
    
                if (error.response) {
                    // The request was made and the server responded with a status code
                    alert("Response Data:", error.response.data);
                    alert("Response Status:", error.response.status);
                    alert("Response Headers:", error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    alert("Request:", error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    alert("Error Message:", error.message);
                }
    
                // Modal.error({
                //     title: error?.AxiosError?.message || "Error",
                //     content: 'Server-side issue',
                // });
            });
    }, []);
    

    console.log("goldMaxMin", goldMaxMin)

    

    const dataSource = [
        {
            key: '1',
            sno: 1,
            scheme: "Gold Virksham",
            amount: 1000,
            shouldPay: true,
        },
        {
            key: '2',
            sno: 2,
            scheme: "Swarna Laksita",
            amount: 2000,
            shouldPay: false,
        },
        {
            key: '3',
            sno: 3,
            scheme: "Gold Virksham",
            amount: 1000,
            shouldPay: false,
        },
        {
            key: '4',
            sno: 4,
            scheme: "Gold Virksham Plus",
            amount: 3000,
            shouldPay: true,
        },
    ];

    const columns = [
        {
            title: 'S.No',
            dataIndex: 'sno',
            key: 'sno',
        },
        {
            title: 'Scheme',
            dataIndex: 'scheme',
            key: 'scheme',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: 'Due',
            key: 'due',
            render: (text, record) => {
                const amountContent = record.shouldPay ? record.amount : 'Nill';
                return (
                    <span>
                        {record.shouldPay ? (
                            <Button onClick={() => handlePay(record)}>{amountContent}</Button>
                        ) : (
                            <span>{amountContent}</span>
                        )}
                    </span>
                );
            },
        },
    ];


      // modal
      const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handlePay = (record) => {
        // Handle the payment for the selected record
        console.log('Pay', record);
    };

    return (
        <div className="elisc_tm_all_wrap" data-magic-cursor="show" data-enter="fadeInLeft" data-exit="true">
            <SideMenuTwo />
            <div className="elisc_tm_mainpart w-full min-h-[100vh] clear-both float-left pl-[370px]"  >
                
                <div className="home-container-fluid">
                <h3 className="chit-details-title">Hi Karthick,  Welcome To Thangam Jewellery</h3>
                    
                    <div className="home-container">
                        
                        <div className="home-left">
                            
                            <div className="priceDetails">
                            <CalendarFilled className="calendor" onClick={showModal} />
                                {
                                    productRate.map((value) => {
                                        console.log("value", value.RATE1)
                                        return (
                                            <marquee className="product-price">Gold Rate : ₹ {value.RATE1} per GRAM   |  Silver Rate : ₹ {value.RATE2} per GRAM    |  Platinum Rate : ₹ {value.RATE4} per GRAM  </marquee>
                                        
                                        //     <div className="scrolling-text">
                                        //     Gold Rate : ₹ {value.RATE1} per GRAM | Silver Rate : ₹ {value.RATE2} per GRAM | Platinum Rate : ₹ {value.RATE4} per GRAM
                                        //   </div>
                                            )
                                    })
                                }                            
                                </div>

                            <div className="home-payDue">
                                <div className="home-table-outer">
                                    <h4 className="home-subTitle">Pay Due</h4>
                                    <Table dataSource={dataSource} columns={columns} pagination={false} style={{ width: "100%" }} className="custom-table" />
                                </div>
                            </div>

                            <div className="discount-outer">
                                <h4 className="home-subTitle">Discount</h4>
                                <img src="assets/img/home-discount.avif" alt="Discound" />
                            </div>

                        </div>

                        <div className="home-right">
                            <img src="assets/img/bg-1.png" alt="side-modal" className="login-side-img" />

                        </div>
                    </div>
                </div>

                <Modal title="SEP-GOLD RATE" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={false}>
                   <div className="gold-stage">
                    <h6 className="gold-low">LOW <CaretDownOutlined /></h6>
                    <h6 className="gold-heigh">HIGH <CaretUpOutlined /></h6>
                    <h6 className="gold-gram">GRAM</h6>
                   </div>
                   <div className="gold-price">
                    {
                        goldMaxMin.map((value) =>  {
                            console.log("maxMin rate", value)
                            return(
                                <>
                                 <p  className="gold-minprice">Rs : {value.MINRATE}</p>
                                <p className="gold-maxprice">Rs : {value.MAXRATE}</p>
                                <p className="gold-gramprice">1 Gram</p>
                                </>                              
                            )
                        })
                    }
                                      
                   </div>
                </Modal>

            </div>

        </div>
    );
}

export default Home;
