import './App.css';
import Home from './page/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import AppMenu from './components/App_menu/AppMenu';
import Catalogs from './page/catalog/Catalogs';
import Podpisku from './components/podpisku/Podpisku';
import ProductPage from './components/ProductPage/ProductPage';
import Product from './page/Product/Product';
import ACompany from './page/ACompany/ACompany';
import Delivery from './page/Delivery/Delivery';
import Uslugi from './page/uslugi/Uslugi';
import Article from './page/Article/Article';
import Payment from './page/Payment/Payment';
import BrendPage from './page/BrendPage/BrendPage';
import Guarantes from './page/Guarantees/Guarantes';
import Basket from './page/Basket/Basket';
import Comparision from './page/Сравнение/Comparision';
import Login from './page/Login/Login';
import Likes from './page/Like/Like';
import Contact from './page/contact/Contact';
import Proizvoditel from './page/Proizvoditel/Proizvoditel';
import OfficePage from './page/OfficePage/OfficePage';
import Aksia from './page/Aksia/Aksia';
import Categorie from './page/Categorie/Categorie';
import Vakansia from './page/Vakansia/Vakansia';
import Otziv from './page/Otziv/Otziv';
import Certificat from './page/Certificat/Certificat';
import { useEffect, useRef, useState } from 'react';
import { IoMdClose } from 'react-icons/io';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

const App = () => {
  const { pathname } = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const popupRef = useRef();

  useEffect(() => {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    if (!email || !password || pathname === '/login') {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   let isValid = true;

  //   if (!validateEmail(email)) {
  //     setEmailError('Неверный формат email');
  //     isValid = false;
  //   } else {
  //     setEmailError('');
  //   }

  //   if (!validatePassword(password)) {
  //     setPasswordError('Пароль должен быть не менее 6 символов');
  //     isValid = false;
  //   } else {
  //     setPasswordError('');
  //   }

  //   if (isValid) {
  //     localStorage.setItem('email', email);
  //     localStorage.setItem('password', password);
  //     console.log('Form submitted');
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   let isValid = true;

  //   if (!validateEmail(email)) {
  //     setEmailError('Неверный формат email');
  //     isValid = false;
  //   } else {
  //     setEmailError('');
  //   }

  //   if (!validatePassword(password)) {
  //     setPasswordError('Пароль должен быть не менее 6 символов');
  //     isValid = false;
  //   } else {
  //     setPasswordError('');
  //   }

  //   if (isValid) {
  //     localStorage.setItem('email', email);
  //     localStorage.setItem('password', password);
  //     console.log('Form submitted');
  //     closePopup(); // Close the popup after successful submission
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    if (!validateEmail(email)) {
      setEmailError('Неверный формат email');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!validatePassword(password)) {
      setPasswordError('Пароль должен быть не менее 6 символов');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      console.log('Form submitted');
      closePopup(); // Close the popup after successful submission
    }
  };



  const closePopup = () => {
    setShowPopup(false);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      closePopup();
    }
  };

  useEffect(() => {
    if (showPopup) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPopup]);

  return (
    <div className='max-w-[100%] w-full mx-auto relative'>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalogs />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/products' element={<Product />} />
        <Route path='/acompany' element={<ACompany />} />
        <Route path='/delivery' element={<Delivery />} />
        <Route path='/uslugi' element={<Uslugi />} />
        <Route path='/articles' element={<Article />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/brendpage' element={<BrendPage />} />
        <Route path='/guarantes' element={<Guarantes />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='/comparision' element={<Comparision />} />
        <Route path='/login' element={<Login />} />
        <Route path='/like' element={<Likes />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/proizvoditel' element={<Proizvoditel />} />
        <Route path='/officePage' element={<OfficePage />} />
        <Route path='/aksia' element={<Aksia />} />
        <Route path='/categorie' element={<Categorie />} />
        <Route path='/vakansia' element={<Vakansia />} />
        <Route path='/otziv' element={<Otziv />} />
        <Route path='/certificat' element={<Certificat />} />
      </Routes>
      <Podpisku />
      <Footer />
      <div className='fixed z-50 bottom-0 w-full bg-white shadow md:relative md:shadow-none 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden block'>
        <AppMenu />
      </div>
      {showPopup && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50'>
          <div ref={popupRef} className='w-[500px] h-[370px] bg-white border rounded-[10px] relative'>
            <div className='absolute top-2 right-2'>
              <IoMdClose className='cursor-pointer' onClick={closePopup} />
            </div>
            <div className='w-[100%] h-[80%] flex items-center justify-center'>
              <div className='w-[90%] h-[90%]'>
                <div className='w-[100%] flex items-center justify-between'>
                  <h2 className='font-medium text-[20px]'>Регистрация</h2>
                </div>
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    className='w-[100%] h-[45px] border-b mt-2 pl-2 outline-none'
                    placeholder='Ваш email*'
                    value={email}
                    onChange={handleEmailChange}
                  />
                  {emailError && <p className='text-red-500 text-sm'>{emailError}</p>}
                  <input
                    type="password"
                    className='w-[100%] h-[45px] border-b mt-2 pl-2 outline-none'
                    placeholder='Пароль*'
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  {passwordError && <p className='text-red-500 text-sm'>{passwordError}</p>}
                  <button type="submit" className='w-[100%] h-[45px] rounded-[30px] bg-[#088269] text-white mt-6'>
                    Регистрация
                  </button>
                  <div className='flex gap-2 justify-between mt-5'>
                    <div className='w-[10%]'>
                      <input type="checkbox" className='h-[20px] w-[20px]' />
                    </div>
                    <div className='w-[90%]'>
                      <p className='text-[14px] w-[100%]'>
                        Я соглашаюсь c обработкой персональных данных на условиях <span className='text-[#088269] cursor-pointer'>Политики конфиденциальности.</span>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className='w-[100%] h-[20%] bg-[#E5E4ED] flex items-center justify-center'>
              <p>Вы уже зарегистрированы? <span className='text-[#088269] cursor-pointer'>Войти</span></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
