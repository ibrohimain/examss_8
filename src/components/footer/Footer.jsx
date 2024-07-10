import React, { useState } from 'react'
import { CgArrowTopRight } from 'react-icons/cg'
import logo from '../../assets/whitelogo.svg'
import telegram from './footer_icon/telegram.svg'
import whatsap from './footer_icon/whatsap.png'
import wk from './footer_icon/wk.svg'
import mastercard from './footer_icon/Vector (1).svg'
import visa from './footer_icon/Vector (2).svg'
import mip from './footer_icon/Vector.svg'
import { FaMinus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {

  const [isOpen, setIsOpen] = useState({
    buyers: false,
    catalog: false,
    contacts: false
  });

  const toggleSection = (section) => {
    setIsOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };



  return (
    <div className='2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] 2xl:h-[800px] xl:h-[900px] lg:h-[850px] md:h-[750px] sm:h-[730px] bg-[#088269]'>
      <div className='w-[100%] h-[100%] 2xl:w-[1440px] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] mx-auto'>
        <div className='w-[100%] md:w-[100%] 2xl:w-[100%] lg:w-[100%] xl:w-[100%] sm:w-[100%] mx-auto 2xl:flex xl:flex lg:flex md:flex sm:flex 2xl:justify-between md:gap-10 sm:justify-between'>
          <div className='2xl:w-[250px] xl:w-[250px] lg:w-[230px] md:w-[200px] sm:w-[120px] mt-[60px] '>
            <h2 className='text-white flex items-center gap-2 2xl:text-[18px] xl:text-[18px] lg:text-[16px] md:text-[16px] sm:text-[16px] w-[98%] mx-auto pt-3 2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-0 sm:pt-0'>Покупателям <FaMinus className={`text-[18px] mt-[5px] font-extralight 2xl:hidden xl:hidden sm:hidden lg:hidden md:hidden block transition-transform transform ${isOpen.buyers ? ' rotate-180' : ''}`} onClick={() => toggleSection('buyers')} /></h2>
            <hr className='w-[100%] mt-[10px]' />
            <div className={`2xl:flex xl:flex lg:flex gap-[80px] 2xl:justify-between xl:justify-between lg:justify-between md:justify-between sm:justify-between mt-[20px] 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-full w-[98%] mx-auto overflow-hidden transition-all duration-500 ${isOpen.buyers ? 'max-h-[500px]' : 'max-h-0'} 2xl:overflow-visible xl:overflow-visible lg:overflow-visible md:overflow-visible sm:overflow-visible`}>
              <ul className='w-[50%]'>
                <li className='text-white cursor-pointer font-light 2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[12px] sm:text-[12px]'><Link to='/acompany'>О компании</Link></li>
                <li className='text-white cursor-pointer font-light mt-[3px] 2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[12px] sm:text-[10px]'><Link to='/certificat'>Сертификаты</Link></li>
                <li className='text-white cursor-pointer font-light mt-[3px] 2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[12px] sm:text-[10px]'><Link to='/vakansia'>Вакансии</Link></li>
                <li className='text-white cursor-pointer font-light mt-[3px] 2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[12px] sm:text-[10px]'><Link to='/guarantes'>Гарантии</Link></li>
                <li className='text-white cursor-pointer font-light mt-[3px] 2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[12px] sm:text-[10px]'><Link to='/uslugi'>Услуги</Link></li>
                <li className='text-white cursor-pointer font-light mt-[3px] 2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[12px] sm:text-[10px]'><Link to='/aksia'>Акции</Link></li>
                <li className='text-white cursor-pointer font-light mt-[3px] 2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[12px] sm:text-[10px]'><Link to='/delivery'>Доставка</Link></li>
              </ul>
              <ul className='w-[50%]'>
                <li className='text-white cursor-pointer font-light  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[12px] sm:text-[10px] '><Link to='/payment'>Оплата</Link></li>
                <li className='text-white cursor-pointer font-light  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[12px] sm:text-[10px] mt-[3px]'>Возврат</li>
                <li className='text-white cursor-pointer font-light  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[12px] sm:text-[10px] mt-[3px]'>FAQ</li>
                <li className='text-white cursor-pointer font-light  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[12px] sm:text-[10px] mt-[3px]'>Лизинг</li>
                <li className='text-white cursor-pointer font-light  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[12px] sm:text-[10px] mt-[3px]'>Отзывы</li>
                <li className='text-white cursor-pointer font-light  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[12px] sm:text-[10px] mt-[3px]'><Link to=''>Блог</Link></li>
              </ul>
            </div>
          </div>
          <div className='2xl:w-[770px] xl:w-[770px] lg:w-[650px] md:w-[460px] sm:w-[320px] mt-[50px]'>
            <h2 className='text-white  flex items-center gap-2 2xl:text-[18px] xl:text-[18px] lg:text-[16px] md:text-[16px] sm:text-[16px] w-[98%] mx-auto'>Каталог <FaMinus
              className={`text-[18px] mt-[5px] font-extralight 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden block cursor-pointer transition-transform transform ${isOpen.catalog ? 'rotate-180' : ''}`}
              onClick={() => toggleSection('catalog')}
            /></h2>
            <hr className='w-[100%] mt-[20px]' />
            <div className={` overflow-hidden 2xl:flex xl:flex lg:flex md:flex sm:flex justify-between mt-[20px]  2xl:w-full xl:w-full lg:w-full md:w-full sm:w-full  w-[98%] mx-auto transition-all duration-500 ${isOpen.catalog ? 'max-h-[500px] ' : 'max-h-0 '} 2xl:overflow-visible xl:overflow-visible lg:overflow-visible md:overflow-visible sm:overflow-visible`}>
              <ul>
                <li className='text-white cursor-pointer font-light  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[12px] sm:text-[10px]'>Реанимация</li>
                <li className='text-white cursor-pointer font-light  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[12px] sm:text-[10px] mt-[3px]'><Link to='/catalog'>Хирургия</Link></li>
                <li className='text-white cursor-pointer font-light  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[12px] sm:text-[10px] mt-[3px]'><Link to='/catalog' >Офтальмология</Link></li>
                <li className='text-white cursor-pointer font-light  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[12px] sm:text-[10px] mt-[3px]'><Link to='/catalog' >Лабораторная диагностика</Link></li>
                <li className='text-white cursor-pointer font-light  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[12px] sm:text-[10px] mt-[3px]'><Link to='/catalog' >Акушерство и Гинекология</Link></li>
                <li className='text-white cursor-pointer font-light  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[12px] sm:text-[10px] mt-[3px]'><Link to='/catalog' >Гистология</Link></li>
                <li className='text-white cursor-pointer font-light  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[12px] sm:text-[10px] mt-[3px]'><Link to='/catalog' >Косметология</Link></li>
              </ul>
              <ul>
                <li className='text-white cursor-pointer font-l ight  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[12px] sm:text-[10px]'>Орториноларингология</li>
                <li className='text-white cursor-pointer font-light  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[12px] sm:text-[10px] mt-[3px]'><Link to='/catalog'>Рентгенология и томография</Link></li>
                <li className='text-white cursor-pointer font-light  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[12px] sm:text-[10px] mt-[3px]'><Link to='/catalog'>Стрерилизация</Link></li>
                <li className='text-white cursor-pointer font-light  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[12px] sm:text-[10px] mt-[3px]'><Link to='/catalog'>Физиотерапия и реабилитация</Link></li>
                <li className='text-white cursor-pointer font-light  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[12px] sm:text-[10px] mt-[3px]'><Link to='/catalog'>Функциональная диагностика</Link></li>
                <li className='text-white cursor-pointer font-light  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[12px] sm:text-[10px] mt-[3px]'><Link to='/catalog'>Эндоскопия</Link></li>
              </ul>
              <ul>
                <li className='text-white cursor-pointer font-light  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[12px] sm:text-[10px] '>Новинки</li>
                <li className='text-white cursor-pointer font-light  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[12px] sm:text-[10px] mt-[3px]'>Распродажи</li>
                <li className='text-white cursor-pointer font-light  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[12px] sm:text-[10px] mt-[3px]'>Кабинеты под ключ</li>
                <li className='text-white cursor-pointer font-light  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[12px] sm:text-[10px] mt-[3px]'>Скачать каталог</li>
              </ul>
            </div>
          </div>
          <div className='2xl:w-[320px] xl:w-[320px] lg:w-[300px] md:w-[250px] sm:w-[150px] mt-[50px] w-[98%] mx-auto'>
            <h2 className='text-white text-[20px] flex items-center gap-2 2xl:text-[18px] xl:text-[18px] lg:text-[16px] md:text-[16px] sm:text-[16px]'>Контакты <FaMinus
              className={`text-[18px] mt-[5px] font-extralight 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden block cursor-pointer transition-transform transform ${isOpen.contacts ? 'rotate-180' : ''}`}
              onClick={() => toggleSection('contacts')}
            /></h2>
            <hr className='w-[100%] mt-[20px]' />
            <div>
              <h2 className='text-white text-[17px] mt-[16px] '>Адрес:</h2>
              <p className='text-white cursor-pointer font-light  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[12px] sm:text-[10px] md:w-[150px] 2xl:w-[240px] xl:w-[220px]'>г. Москва, ул. Московская, д. 35 </p>
              <h2 className='text-white text-[16px] flex items-center gap-2 mt-[20px] md:w-[120px] 2xl:w-[220px]'>Карта проезда <CgArrowTopRight className='text-[20px]' /></h2>
              <p className='text-white cursor-pointer w-[148px] mt-[20px] font-light  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[12px] sm:text-[10px]'>График работы:
                Пн-Пт с 09:00-19:00,
                Сб-Вс - выходной</p>

              <p className='text-white cursor-pointer font-light  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[12px] sm:text-[10px] md:w-[120px] 2xl:w-[150px] mt-[15px]'>+7 000-000-00-00</p>
              <p className='text-white cursor-pointer font-light  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[12px] sm:text-[10px] md:w-[120px] 2xl:w-[150px]'>+7 495-000-00-00</p>
              <p className='text-white cursor-pointer font-light  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[12px] sm:text-[10px] md:w-[120px] 2xl:w-[150px]'>info@mail.ru</p>
              <p className='text-white cursor-pointer font-light  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[12px] sm:text-[10px] md:w-[120px] 2xl:w-[150px]'>8 800-000-00-00</p>
            </div>
          </div>
        </div>
        <hr className='w-[100%] mt-[60px] ' />
        <div>
          <div className='2xl:flex xl:flex lg:flex md:flex sm:flex justify-between 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-full  w-[98%] mx-auto '>
            <div className='mt-[20px] 2xl:block xl:block lg:block md:block sm:block hidden'><img src={logo} alt="" className='cursor-pointer md:w-[80px] sm:w-[70px] ' /><p className='text-white font-light mt-[10px] cursor-pointer 2xl:text-[16px] 2xl:w-[200px] md:text-[12px] md:w-[200px] sm:text-[10px] sm:w-[100px]'>ООО «ГЛОБАЛ МЕДИКАЛ ТРЕЙД»</p></div>
            <div className='mt-[20px]'>
              <p className='text-white 2xl:text-[16px] md:text-[14px] sm:text-[12px]'>Мы в соцсетях</p>
              <div className='flex gap-3 mt-[5px]'>
                <div><img src={wk} alt="" className='cursor-pointer md:w-[20px] md:h-[20px] sm:w-[15px]' /></div>
                <div><img src={telegram} alt="" className='cursor-pointer md:w-[20px] md:h-[20px] sm:w-[15px]' /></div>
                <div><img src={whatsap} alt="" className='cursor-pointer md:w-[20px] md:h-[20px] sm:w-[15px]' /></div>
              </div>
            </div>
            <ul className='mt-[20px]'>
              <li className='text-white font-light cursor-pointer  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[13px] sm:text-[10px]'>Партнерская программа</li>
              <li className='text-white font-light cursor-pointer  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[13px] sm:text-[10px]'>Оптовые продажи</li>
              <li className='text-white font-light cursor-pointer  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[13px] sm:text-[10px]'>Реквизиты</li>
            </ul>
            <div className='mt-[20px]'>
              <ul>
                <li className='text-white font-light cursor-pointer  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[13px] sm:text-[10px]'>Политика конфиденциальности</li>
                <li className='text-white font-light cursor-pointer  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[13px] sm:text-[10px]'>Условия соглашения</li>
                <li className='text-white font-light cursor-pointer  2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[13px] sm:text-[10px]'>Карта сайта</li>
              </ul>
            </div>
            <div className='mt-[20px]'>
              <p className='text-white 2xl:text-[16px] xl:text-[16px] lg:text-[15px] md:text-[13px] sm:text-[10px]'>Способы оплаты</p>
              <div className='flex gap-3 mt-[7px]'>
                <img className='cursor-pointer md:w-[35px] 2xl:w-[50px] h-[35px] sm:w-[30px] w-[40px]' src={mip} alt="" />
                <img className='cursor-pointer md:w-[35px] 2xl:w-[50px] h-[35px] sm:w-[30px] w-[40px]' src={mastercard} alt="" />
                <img className='cursor-pointer md:w-[35px] 2xl:w-[50px] h-[35px] sm:w-[30px] w-[40px]' src={visa} alt="" />
              </div>
            </div>
          </div>
          <div className='2xl:flex xl:flex lg:flex md:flex sm:flex justify-between items-center mt-[80px] 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-full  w-[98%] mx-auto'>
            <p className='w-[160px] text-white font-light cursor-pointer 2xl:text-[15px] xl:text-[15px] 2xl:w-[200px] xl:w-[200px] md:text-[12px] md:w-[240px] lg:text-[15px] lg:w-[200px] sm:text-[12px] sm:w-[280px] '>© 2022 Медоборудование Все права защищены</p>
            <p className='text-[rgb(255,255,255,0.7)] font-extralight cursor-pointer text-[14px] 2xl:text-[15px] 2xl:w-[1100px] xl:text-[14px] xl:w-[1060px] 2xl:text-end md:text-[12px] md:w-[950px] sm:text-[10px] w-[95%] mt-5 pb-5'>Информация на данном сайте носит справочный характер и не является публичной офертой, определяемой положениями Статьи 437 Гражданского кодекса Российской Федерации</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
