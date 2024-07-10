import React, { useState, useEffect } from 'react';
import { servicesCartData } from './uslugiDatas/servicesCart';
import { Button, Checkbox, Form, Input } from 'antd';

const ServicesCart = () => {
    const [position, setPosition] = useState('end');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);
    const [loading, setLoading] = useState(false);

    const openModal = (item) => {
        setCurrentItem(item);
        setIsModalOpen(true);
    };

    const closeModal = (e) => {
        if (e.target.id === 'modalOverlay') {
            setIsModalOpen(false);
            setCurrentItem(null);
        }
    };

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isModalOpen]);

    const onFinish = (values) => {
        console.log('Success:', values);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setIsModalOpen(false);
        }, 2000);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='2xl:w-[1440px] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] w-[95%] mx-auto mt-[20px] mb-[80px]'>
            <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-2'>
                {servicesCartData.map((item, index) => (
                    <div key={index} className=' w-[99%] xl:h-[400px] 2xl:h-[400px] lg:h-[350px] md:h-[460px] sm:h-[400px] h-[420px] 2xl:flex xl:flex lg:flex items-center bg-[white] rounded-[20px]'>
                        <div className='2xl:w-[35%] xl:w-[35%] lg:w-[45%] md:w-[100%] sm:w-[100%] 2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[50%] sm:h-[50%] h-[50%] '>
                            <img src={item.img} alt="" className='w-[100%] h-[100%] 2xl:rounded-tl-[20px] 2xl:rounded-bl-[20px] xl:rounded-tl-[20px] xl:rounded-bl-[20px] lg:rounded-tl-[20px] lg:rounded-bl-[20px] md:rounded-tl-[20px] md:rounded-tr-[20px] sm:rounded-tl-[20px] sm:rounded-tr-[20px] rounded-tl-[20px] rounded-tr-[20px]' />
                        </div>
                        <div className='2xl:w-[65%] xl:w-[65%] lg:w-[55%] md:w-[100%] sm:w-[100%] 2xl:h-[90%] xl:h-[90%] lg:h-[90%] md:h-[50%] sm:h-[50%]'>
                            <div className='w-[90%] mx-auto'>
                                <h2 className='mt-2 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-2 sm:mt-2 text-[18px] font-semibold'>{item.title_name}</h2>
                                <span className=' text-[gray] text-[12px]'>{item.opicany}</span>
                                <p className=' w-[95%] 2xl:text-[16px] xl:text-[16px] lg:text-[12px] md:text-[12px] sm:text-[11px] text-[10px] text-[gray] font-medium'>{item.common_name}</p>
                                <button
                                    className='2xl:mt-[110px] xl:mt-[100px] lg:mt-[90px] md:mt-[30px] mt-[30px] 2xl:w-[120px] xl:w-[110px] lg:w-[100px] md:w-[90px] sm:w-[90px] w-[90px] 2xl:h-[40px] xl:h-[38px] lg:h-[37px] md:h-[36px] sm:h-[35px] h-[35px] border border-[#088269] rounded-[20px] text-[#088269] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px]'
                                    onClick={() => openModal(item)}
                                >
                                    {item.btn_name}
                                </button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            {isModalOpen && currentItem && (
                <div
                    id="modalOverlay"
                    className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'
                    onClick={closeModal}
                >
                    <div className='bg-white 2xl:w-[800px] xl:w-[800px] lg:w-[800px] md:w-[750px] sm:w-[500px] w-[300px] 2xl:h-[600px] xl:h-[600px] lg:h-[600px] md:h-[500px] sm:h-[500px] h-[500px] rounded-[20px] p-[20px] 2xl:flex xl:flex lg:flex md:flex sm:flex'>
                        <div className='2xl:w-[60%] xl:w-[60%] lg:w-[60%] md:w-[60%] sm:w-[50%] w-[100%] 2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[100%] sm:h-[100%] h-[20%]'>
                            <img src={currentItem.img} alt="" className='w-[100%]  rounded-tr-[20px] rounded-br-[20px] 2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[100% h-[100%]' />
                        </div>
                        <div className='2xl:w-[40%] xl:w-[40%] lg:w-[40%] md:w-[40%] sm:w-[50%] w-[100%] 2xl:h-[100%] xl:h-[100%] lg:h-[100%] md:h-[100%] sm:h-[100%] h-[60%]'>
                            <div className='w-[95%] mx-auto'>
                                <h2 className='mt-[10px] 2xl:mt-0 xl:mt-0 lg:mt-0 sm:mt-0 md:mt-0 text-[18px] font-semibold'>{currentItem.title_name}</h2>
                                <span className=' text-[gray] text-[12px]'>{currentItem.opicany}</span>
                                <p className=' w-[100%] 2xl:text-[14px] xl:text-[13px] lg:text-[12px] md:text-[11px] sm:text-[10px] text-[8px]  text-[gray] font-medium'>{currentItem.common_name}</p>
                                <Form
                                    name="basic"
                                    layout="vertical"
                                    initialValues={{ remember: true }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                    style={{ width: "100%", margin: "0 auto", marginTop: "10px" }}
                                >
                                    <Form.Item
                                        label="Username"
                                        name="username"
                                        rules={[{ required: true, message: 'Please input your username!' }]}
                                    >
                                        <Input placeholder='enter your username' />
                                    </Form.Item>

                                    <Form.Item
                                        label="Password"
                                        name="password"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                    >
                                        <Input.Password placeholder='enter your password' />
                                    </Form.Item>

                                    <Form.Item
                                        name="remember"
                                        valuePropName="checked"
                                    >
                                        <Checkbox>Remember me</Checkbox>
                                    </Form.Item>

                                    <Form.Item>
                                        <Button type="primary" loading={loading} htmlType="submit" className=''>
                                            Submit
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServicesCart;
