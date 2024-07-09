import React, { useState, useRef, useEffect, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { FaOdnoklassniki } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { MdOutlinePhotoCamera } from 'react-icons/md';
import { PiPencilSimpleLineLight } from 'react-icons/pi';
import { Instagram, Facebook, Twitter, YouTube } from '@mui/icons-material';
import getCroppedImg from './cropImage'; // Surotni kesish uchun yordamchi funksiya

const Register = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [isPopupImg, setPopupImg] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const popupRef = useRef(null);
    const modalRef = useRef(null);
    const fileInputRef = useRef(null);
    const overlayRef = useRef(null);

    const [isEditingPersonalInfo, setIsEditingPersonalInfo] = useState(false);

    const handleEditPersonalInfoClick = () => {
        setIsEditingPersonalInfo(!isEditingPersonalInfo);
    };

    const handleOutsideClick = (event) => {
        const modal = document.getElementById('personalInfoModal');
        if (modal && !modal.contains(event.target)) {
            setIsEditingPersonalInfo(false);
        }
    };

    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        const storedName = localStorage.getItem('name');
        const storedSurname = localStorage.getItem('surname');
        if (storedEmail) setEmail(storedEmail);
        if (storedName) setName(storedName);
        if (storedSurname) setSurname(storedSurname);

        const handleStorageChange = (event) => {
            if (event.key === 'email') setEmail(event.newValue);
            if (event.key === 'name') setName(event.newValue);
            if (event.key === 'surname') setSurname(event.newValue);
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const handleIconClick = () => {
        setPopupVisible(!isPopupVisible);
    };

    const handleImgClick = () => {
        setPopupImg(!isPopupImg);
        if (!isPopupImg) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            setPopupVisible(false);
        }
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setPopupImg(false);
            document.body.style.overflow = 'auto';
        }
        if (overlayRef.current && !overlayRef.current.contains(event.target)) {
            setBackgroundVisible(false);
        }
    };

    const closePopupImg = () => {
        setPopupImg(false);
        document.body.style.overflow = 'auto';
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const showCroppedImage = useCallback(async () => {
        try {
            const croppedImage = await getCroppedImg(selectedImage, croppedAreaPixels);
            setCroppedImage(croppedImage);
            setSelectedImage(null);
            closePopupImg();
        } catch (e) {
            console.error(e);
        }
    }, [croppedAreaPixels]);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    const [isBackgroundVisible, setBackgroundVisible] = useState(false);
    const [newName, setNewName] = useState('');
    const [newSurname, setNewSurname] = useState('');
    const [instagram, setInstagram] = useState('');
    const [facebook, setFacebook] = useState('');

    const handleButtonClick = () => {
        setBackgroundVisible(!isBackgroundVisible);
    };

    const handleAddButtonClick = () => {
        localStorage.setItem('newName', newName);
        localStorage.setItem('newSurname', newSurname);
        localStorage.setItem('instagram', instagram);
        localStorage.setItem('facebook', facebook);

        setName(newName);
        setSurname(newSurname);
        // Boshqa social mediyalar uchun ham hozirlovchilarni yangilang

        setBackgroundVisible(false);
    };

    return (
        <div className='w-[1440px] h-[500px] mx-auto'>
            <div className='w-[100%] flex'>
                <div className='w-[30%] h-[450px] flex items-center justify-start'>
                    <div className='w-[55%] h-[55%] rounded-[50%] bg-[rgb(8,130,105,0.2)] relative flex justify-center'>
                        <img src={croppedImage} alt="" className="rounded-full" />
                        <div className='w-[50px] h-[50px] rounded-[50%] absolute top-[78%] bg-[#088269] flex items-center justify-center cursor-pointer' onClick={handleIconClick}>
                            <PiPencilSimpleLineLight className='text-white text-[28px]' />
                        </div>
                        {isPopupVisible && (
                            <div ref={popupRef} className='absolute top-[99%] bg-white w-[170px] h-[80px] flex items-center justify-center shadow-lg'>
                                <ul>
                                    <li className='cursor-pointer' onClick={handleImgClick}>Таҳрир қилиш</li>
                                    <li className='cursor-pointer text-red-500'>Расмни ўчириш</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                {isPopupImg && (
                    <div className='fixed inset-0 shadow-lg bg-black bg-opacity-50 flex items-center justify-center z-50'>
                        <div ref={modalRef} className='w-[500px] h-[450px] rounded-[15px] bg-white flex items-center justify-center'>
                            <div className='w-[90%] h-[90%]'>
                                <div className='w-[100%] h-[15%] flex justify-between'>
                                    <h2 className='text-[18px]'>{selectedImage ? 'Редактирование фотографии профиля' : 'Выбор изображения профиля'}</h2>
                                    <IoMdClose className='text-[18px]' onClick={closePopupImg} />
                                </div>
                                <div className='w-[100%] h-[65%] flex flex-col justify-center items-center gap-3'>
                                    <p>Перетащите фотографию сюда, или</p>
                                    <label htmlFor='fileInput' className='cursor-pointer text-[#088269] text-[18px] flex items-center justify-center gap-2'>
                                        <MdOutlinePhotoCamera className='text-[18px] text-[#088269]' />
                                        Выберите файл
                                    </label>
                                    {selectedImage ? (
                                        <div className='w-full h-full relative'>
                                            <Cropper
                                                image={selectedImage}
                                                crop={crop}
                                                zoom={zoom}
                                                aspect={1}
                                                onCropChange={setCrop}
                                                onZoomChange={setZoom}
                                                onCropComplete={onCropComplete}
                                            />
                                        </div>
                                    ) : (
                                        <input
                                            type='file'
                                            id='fileInput'
                                            ref={fileInputRef}
                                            className='hidden'
                                            onChange={handleFileUpload}
                                        />
                                    )}
                                </div>
                                <div className='w-[100%] h-[20%] flex items-center justify-center gap-3'>
                                    {selectedImage ? (
                                        <>
                                            <button className='bg-[#088269] text-white w-[150px] h-[40px] rounded-[20px]' onClick={closePopupImg}>
                                                Отменить
                                            </button>
                                            <button className='border border-[#D5D1E1] text-[#088269] w-[150px] h-[40px] rounded-[20px]' onClick={showCroppedImage}>
                                                Применить
                                            </button>
                                        </>
                                    ) : (
                                        <button className='bg-[#088269] text-white w-[150px] h-[40px] rounded-[20px]' onClick={closePopupImg}>
                                            Отменить
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className='w-[70%] h-[450px] flex items-center justify-center'>
                    <div className='w-[90%] h-[60%] '>
                        <div className='flex justify-between items-center text-[26px] w-[70%]'>
                            <h2 className='flex items-center gap-2'>Имя: {name} <PiPencilSimpleLineLight className='cursor-pointer text-[22px]' onClick={handleEditPersonalInfoClick} /></h2>
                            <h2 className='flex items-center gap-2'>Фамилия: {surname} <PiPencilSimpleLineLight className='cursor-pointer text-[22px]' onClick={handleEditPersonalInfoClick} /></h2>
                            {isEditingPersonalInfo && (
                                <div id='personalInfoModal' onClick={handleOutsideClick}>
                                    <form className='mt-3'>
                                        <input
                                            type="text"
                                            className='border-b h-[50px] w-[100%] outline-none'
                                            placeholder='Имя*'
                                            value={newName}
                                            onChange={(e) => setNewName(e.target.value)}
                                        />
                                        <input
                                            type="text"
                                            className='border-b h-[50px] w-[100%] outline-none'
                                            placeholder='Фамилия*'
                                            value={newSurname}
                                            onChange={(e) => setNewSurname(e.target.value)}
                                        />
                                    </form>
                                    <div className='mt-5'>
                                        <h2 className='text-[18px] font-medium'>Социальные сети</h2>
                                        <form>
                                            <input
                                                type="text"
                                                className='border-b h-[50px] w-[100%] outline-none'
                                                placeholder='Instagram'
                                                value={instagram}
                                                onChange={(e) => setInstagram(e.target.value)}
                                            />
                                            <input
                                                type="text"
                                                className='border-b h-[50px] w-[100%] outline-none'
                                                placeholder='Facebook'
                                                value={facebook}
                                                onChange={(e) => setFacebook(e.target.value)}
                                            />
                                            {/* Boshqa social mediyalar uchun ham shu xil qilib qo'shing */}
                                        </form>
                                        <div className='flex justify-between mt-5'>
                                            <button className='w-[100px] h-[45px] rounded-[30px] bg-[#088269] text-white font-medium' onClick={handleAddButtonClick}>
                                                Добавить
                                            </button>
                                            <div className='w-[70%]'>
                                                <p className='text-[12px] w-[100%]'>Нажимая «Добавить», я соглашаюсь c обработкой персональных данных на условиях <span className='text-[#088269]'>Политики конфиденциальности.</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className='w-[100%] h-auto mt-5 mb-5'>
                            <div className='flex gap-5 text-[30px]'>
                                <Instagram className=' cursor-pointer' />
                                <Facebook className=' cursor-pointer' />
                                <Twitter className=' cursor-pointer' />
                                <YouTube className=' cursor-pointer' />
                                <FaOdnoklassniki className=' text-[24px] cursor-pointer' />
                            </div>
                        </div>
                        <button className='border rounded-[30px] w-[380px] h-[45px] border-[#D5D1E1] font-medium mt-4 mb-10' onClick={handleButtonClick}>Изменить персональную информацию</button>
                        {isBackgroundVisible && (
                            <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center'>
                                <div ref={overlayRef} className='w-[550px] h-[600px] bg-white opacity-100 rounded-lg p-8 flex items-center justify-center'>
                                    <div className='w-[100%] h-[100%]'>
                                        <div className='flex justify-between items-center'>
                                            <h2 className='text-[18px] font-medium'>Персональные данные</h2>
                                            <IoMdClose className='cursor-pointer' onClick={handleButtonClick} />
                                        </div>
                                        <form className='mt-5'>
                                            <input type="text" className='border-b h-[50px] w-[100%] outline-none' placeholder='Имя*' />
                                            <input type="text" className='border-b h-[50px] w-[100%] outline-none' placeholder='Фамилия*' />
                                        </form>
                                        <div className='mt-5'>
                                            <h2 className='text-[18px] font-medium'>Социальные сети</h2>
                                            <form>
                                                <input type="text" className='border-b h-[50px] w-[100%] outline-none' placeholder='Instagram' />
                                                <input type="text" className='border-b h-[50px] w-[100%] outline-none' placeholder='Facebook' />
                                                <input type="text" className='border-b h-[50px] w-[100%] outline-none' placeholder='Youtube' />
                                                <input type="text" className='border-b h-[50px] w-[100%] outline-none' placeholder='Твиттер' />
                                                <input type="text" className='border-b h-[50px] w-[100%] outline-none' placeholder='Одноклассники' />
                                            </form>
                                            <div className='flex justify-between mt-5'>
                                                <button className='w-[100px] h-[45px] rounded-[30px] bg-[#088269] text-white font-medium' onClick={handleAddButtonClick}>
                                                    Добавить
                                                </button>
                                                <div className='w-[70%]'>
                                                    <p className='text-[12px] w-[100%]'>Нажимая «Добавить», я соглашаюсь c обработкой персональных данных на условиях <span className='text-[#088269]'>Политики конфиденциальности.</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className='flex gap-5 justify-between w-[60%] mt-[70px]'>
                            <div>
                                <span className='flex gap-2 items-center'>+7 911 564–86–86 <PiPencilSimpleLineLight className='cursor-pointer text-[22px] text-[#07745E]' /></span>
                                <p className='text-[gray]'>Телефон</p>
                            </div>
                            <div>
                                <span className='flex gap-2 items-center'>{email}<PiPencilSimpleLineLight className='cursor-pointer text-[22px] text-[#07745E]' /></span>
                                <p className='text-[gray]'>Email</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
