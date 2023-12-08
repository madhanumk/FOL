import React, { useState } from 'react'
import { Table, } from 'antd';
import "./Payment.css"
import { Select } from 'antd';
import SideMenuTwo from '../SideMenuTwo';


const { Option } = Select;

const Payment = () => {

    const [selectedOption, setSelectedOption] = useState(null);
    const [selectionType, setSelectionType] = useState('checkbox');


    const handleChange = (name, value) => {
        setSelectedOption(value);

    };

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


    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record) => ({
          disabled: record.name === 'Disabled User',
          // Column configuration not to be checked
          name: record.name,
        }),
      };

    return (
        <div className="elisc_tm_all_wrap" data-magic-cursor="show" data-enter="fadeInLeft" data-exit="true">
            <SideMenuTwo />
            <div className="elisc_tm_mainpart w-full min-h-[100vh] clear-both float-left pl-[370px]" >

                <div className='closedDue-container'>
                    <div className='closedDue-title-outer'>
                        <h2 className="closed-due-title">Current Chit Details</h2>
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
                        <Table dataSource={dataSource} columns={columns} pagination={false}  style={{width:"100%"}}  rowSelection={{
                            type: selectionType,
                            ...rowSelection,
                        }} />
                    </div>
                    <div className='closedDue-pay-outer'>
                        <button size='large' className='closedDue-pay'>PAY</button>
                    </div>
                </div>

                <div className='closedDue-containerfluid'>
                    <div className='closed-container'>
                        <div className='completed-title-outer'>
                            <h2 className="completed-due-title">Completed Chit Details</h2>
                        </div>
                        <div className='select-option-outer' >
                            <p style={{ paddingRight: "20px" }}>Select branch and view Completed Chit</p>
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

export default Payment