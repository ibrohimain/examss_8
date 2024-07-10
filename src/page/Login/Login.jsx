import React, { useState, useRef, useEffect, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { FaOdnoklassniki } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { MdOutlinePhotoCamera } from 'react-icons/md';
import { PiPencilSimpleLineLight } from 'react-icons/pi';
import { Instagram, Facebook, Twitter, YouTube } from '@mui/icons-material';
import getCroppedImg from './cropImage';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import ShowLogin from './ShowLogin';

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
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [instagram, setInstagram] = useState('');
    const [facebook, setFacebook] = useState('');
    const [youtube, setYoutube] = useState('');
    const [twitter, setTwitter] = useState('');
    const [odnoklassniki, setOdnoklassniki] = useState('');
    const [isEditingPersonalInfo, setIsEditingPersonalInfo] = useState(false);
    const [isBackgroundVisible, setBackgroundVisible] = useState(false);

    const popupRef = useRef(null);
    const modalRef = useRef(null);
    const fileInputRef = useRef(null);
    const overlayRef = useRef(null);

    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        const storedName = localStorage.getItem('name');
        const storedSurname = localStorage.getItem('surname');
        const storedFirstName = localStorage.getItem('firstName');
        const storedLastName = localStorage.getItem('lastName');
        const storedInstagram = localStorage.getItem('instagram');
        const storedFacebook = localStorage.getItem('facebook');
        const storedYoutube = localStorage.getItem('youtube');
        const storedTwitter = localStorage.getItem('twitter');
        const storedOdnoklassniki = localStorage.getItem('odnoklassniki');

        if (storedEmail) setEmail(storedEmail);
        if (storedName) setName(storedName);
        if (storedSurname) setSurname(storedSurname);
        if (storedFirstName) setFirstName(storedFirstName);
        if (storedLastName) setLastName(storedLastName);
        if (storedInstagram) setInstagram(storedInstagram);
        if (storedFacebook) setFacebook(storedFacebook);
        if (storedYoutube) setYoutube(storedYoutube);
        if (storedTwitter) setTwitter(storedTwitter);
        if (storedOdnoklassniki) setOdnoklassniki(storedOdnoklassniki);

        const handleStorageChange = (event) => {
            if (event.key === 'email') setEmail(event.newValue);
            if (event.key === 'name') setName(event.newValue);
            if (event.key === 'surname') setSurname(event.newValue);
            if (event.key === 'firstName') setFirstName(event.newValue);
            if (event.key === 'lastName') setLastName(event.newValue);
            if (event.key === 'instagram') setInstagram(event.newValue);
            if (event.key === 'facebook') setFacebook(event.newValue);
            if (event.key === 'youtube') setYoutube(event.newValue);
            if (event.key === 'twitter') setTwitter(event.newValue);
            if (event.key === 'odnoklassniki') setOdnoklassniki(event.newValue);
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const handleEditPersonalInfoClick = () => {
        setIsEditingPersonalInfo(!isEditingPersonalInfo);
    };

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

    const handleButtonClick = () => {
        setBackgroundVisible(!isBackgroundVisible);
    };

    const handleSave = () => {
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('instagram', instagram);
        localStorage.setItem('facebook', facebook);
        localStorage.setItem('youtube', youtube);
        localStorage.setItem('twitter', twitter);
        localStorage.setItem('odnoklassniki', odnoklassniki);
        setBackgroundVisible(false);
        setName(firstName);
        setSurname(lastName);
    };

    return (
        <>
            <div className='2xl:w-[1440px] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] w-[95%] 2xl:h-[500px] xl:h-[500px] lg:h-[500px] md:h-[500px] sm:h-[700px] h-[700px] mx-auto'>
                <div className='w-[100%] 2xl:flex xl:flex lg:flex md:flex'>
                    <div className='2xl:w-[30%] xl:w-[30%] lg:w-[30%] md:w-[30%] sm:w-[100%] w-[100%] 2xl:h-[450px] xl:h-[450px] lg:h-[450px] md:h-[450px] sm:h-[200px] h-[200px] flex items-center 2xl:justify-start xl:justify-start md:justify-start lg:justify-start sm:justify-center justify-center'>
                        <div className='2xl:w-[55%] xl:w-[55%] lg:w-[65%] md:w-[80%] sm:w-[30%] w-[30%] h-[55%] rounded-[50%] bg-[rgb(8,130,105,0.2)] relative flex justify-center'>
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
                    <div className='2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[70%] sm:w-[100%] 2xl:h-[450px] xl:h-[450px] lg:h-[450px] md:h-[450px] sm:h-[500px] flex items-center justify-center '>
                        <div className='w-[90%] h-[60%]'>
                            <div className='flex justify-between gap-2 items-center text-[26px] w-[50%]'>
                                <h2 className='flex items-center gap-2'>{firstName || name} </h2>
                                <h2 className='flex items-center gap-2'>{lastName || surname} </h2>{isEditingPersonalInfo && (
                                    <div id='personalInfoModal'>

                                    </div>
                                )}
                            </div>
                            <div className='w-[100%] h-[45px] mt-5 mb-5'>
                                <div className='w-[100%] h-[100%] flex items-center gap-5 text-[30px]'>
                                    <a href={`https://www.instagram.com/${instagram}/`} target='_blank' rel='noopener noreferrer'><Instagram className='cursor-pointer' /></a>
                                    <a href={facebook} target='_blank' rel='noopener noreferrer'><Facebook className='cursor-pointer' /></a>
                                    <a href={twitter} target='_blank' rel='noopener noreferrer'><Twitter className='cursor-pointer' /></a>
                                    <a href={youtube} target='_blank' rel='noopener noreferrer'><YouTube className='cursor-pointer' /></a>
                                    <a href={odnoklassniki} target='_blank' rel='noopener noreferrer'><FaOdnoklassniki className='text-[24px] cursor-pointer' /></a>
                                </div>
                            </div>
                            <button className='2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[11px] border rounded-[30px] 2xl:w-[380px] xl:w-[340px] lg:w-[300px] md:w-[260px] sm:w-[220px] w-[220px] h-[45px] border-[#D5D1E1] font-medium mt-4 mb-10' onClick={handleButtonClick}>Изменить персональную информацию</button>
                            {isBackgroundVisible && (
                                <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center'>
                                    <div ref={overlayRef} className='w-[550px] h-[600px] bg-white opacity-100 rounded-lg p-8 flex items-center justify-center'>
                                        <div className='w-[100%] h-[100%]'>
                                            <div className='flex justify-between items-center '>
                                                <h2 className='text-[18px] font-medium'>Персональные данные</h2>
                                                <IoMdClose onClick={() => setBackgroundVisible(false)} />
                                            </div>
                                            <form action="" className='mt-5'>
                                                <input
                                                    type="text"
                                                    className='border-b h-[50px] w-[100%] outline-none'
                                                    placeholder='Имя*'
                                                    value={firstName}
                                                    onChange={(e) => setFirstName(e.target.value)}
                                                />
                                                <input
                                                    type="text"
                                                    className='border-b h-[50px] w-[100%] outline-none'
                                                    placeholder='Фамилия*'
                                                    value={lastName}
                                                    onChange={(e) => setLastName(e.target.value)}
                                                />
                                            </form>
                                            <div>
                                                <h2 className='text-[18px] font-medium mt-[30px]'>Социальные сети</h2>
                                            </div>
                                            <form action="">
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
                                                <input
                                                    type="text"
                                                    className='border-b h-[50px] w-[100%] outline-none'
                                                    placeholder='Youtube'
                                                    value={youtube}
                                                    onChange={(e) => setYoutube(e.target.value)}
                                                />
                                                <input
                                                    type="text"
                                                    className='border-b h-[50px] w-[100%] outline-none'
                                                    placeholder='Твиттер'
                                                    value={twitter}
                                                    onChange={(e) => setTwitter(e.target.value)}
                                                />
                                                <input
                                                    type="text"
                                                    className='border-b h-[50px] w-[100%] outline-none'
                                                    placeholder='Одноклассники'
                                                    value={odnoklassniki}
                                                    onChange={(e) => setOdnoklassniki(e.target.value)}
                                                />
                                            </form>
                                            <div className='flex justify-between mt-[40px]'>
                                                <button
                                                    className='w-[100px] h-[45px] rounded-[30px] bg-[#088269] text-white font-medium'
                                                    onClick={handleSave}
                                                >
                                                    Добавить
                                                </button>
                                                <div className='w-[70%]'>
                                                    <p className='text-[12px] w-[100%]'>Нажимая «Добавить», я соглашаюсь c обработкой персональных данных на условиях
                                                        <span className='text-[#088269]'>Политики конфиденциальности.</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className='2xl:flex xl:flex lg:flex md:flex sm:flex gap-5 justify-between 2xl:w-[80%] xl:w-[70%] lg:w-[80%] md:w-[100%] mt-[70px]'>
                                <div>
                                    <span className='flex gap-2 items-center 2xl:text-[16px] xl:text-[15px] lg:text-[14px] sm:text-[14px] text-[14px]'>+7 911 564–86–86 <PiPencilSimpleLineLight className='cursor-pointer text-[22px] text-[#07745E]' /></span>
                                    <p className='text-[gray]'>Телефон</p>
                                </div>
                                <div>
                                    <span className='mt-2 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0 flex gap-2 items-center 2xl:text-[16px] xl:text-[15px] lg:text-[14px] sm:text-[14px] text-[14px]'>{email}<PiPencilSimpleLineLight className='cursor-pointer text-[22px] text-[#07745E]' /></span>
                                    <p className='text-[gray]'>Email</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ShowLogin />
        </>
    );
};

export default Register;
