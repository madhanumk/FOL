import React, { useState } from 'react'
import "./ClosedDue.css"
import { Table, } from 'antd';
import { Select } from 'antd';
import SideMenuTwo from '../SideMenuTwo';


const { Option } = Select;

const ClosedDue = () => {

    const [selectedOption, setSelectedOption] = useState(null);


    const handleChange = (name, value) => {
        setSelectedOption(value);

    };

    const dataSource = [
        {
            key: '1',
            sno: 1,
            group: 500,
            name: "Adams",
            amount: 15000,
        },
        {
            key: '2',
            sno: 2,
            group: 1000,
            name: "Raj",
            amount: 15000,
        },
        {
            key: '3',
            sno: 3,
            group: 1000,
            name: "Bala",
            amount: 15000,
        },
    ];

    const columns = [
        {
            title: 'S No',
            dataIndex: 'sno',
            key: 'sno',
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
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
        },
    ];


    return (
        <div className="elisc_tm_all_wrap" data-magic-cursor="show" data-enter="fadeInLeft" data-exit="true">
            <SideMenuTwo />
            <div className="elisc_tm_mainpart w-full min-h-[100vh] clear-both float-left pl-[370px]"  >
                <div className='closedDue-containerfluid'>
                    <div className='closed-container'>
                        <div className='closedDue-title-outer'>
                            <h2 className="closed-due-title">Closed Due</h2>
                        </div>
                        <div className='select-option-outer' >
                            <p style={{ paddingRight: "20px" }}>Select Branch and Chit to Pay</p>
                            <Select
                                defaultValue={selectedOption}
                                style={{ width: 200 }}
                                onChange={(value) => handleChange('branch', value)}
                                className='closedDue-Select'
                            >
                                <Option value="madurai">madurai</Option>
                                <Option value="thirupur">thirupur</Option>
                                <Option value="dindugal">dindugal</Option>
                            </Select>
                        </div>

                        <div style={{ paddingTop: "20px" }}>
                            <Table dataSource={dataSource} columns={columns} pagination={false} style={{ width: "100%" }} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ClosedDue