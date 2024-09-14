// data.js
import { IoSettingsOutline } from 'react-icons/io5';
import { FaFilePen } from 'react-icons/fa6';
import { TbReport } from 'react-icons/tb';
import { LuBookMinus } from 'react-icons/lu';

const menuItems = [
    { icon: <IoSettingsOutline />, label: 'Настройки' },
    { icon: <FaFilePen />, label: 'Внесение данных' },
    { icon: <TbReport />, label: 'Отчеты' },
    { icon: <LuBookMinus />, label: 'База знаний' }
];

const supportInfo = [
    { title: 'Номер поддержки:', text: '8 (999) 999 99 99' },
    { title: 'Почта поддержки:', text: 'pf1@werthesest.ru' },
    { title: 'Часы работы:', text: 'Пн - Пт с 9:00 до 19:00 мск' }
];

const legalLinks = [
    { text: 'Пользовательское соглашение', href: '#' },
    { text: 'Политика конфиденциальности', href: '#' },
    { text: 'Юридическая информация', href: '#' },
    { text: 'Публичная оферта', href: '#' }
];
const data = {
    menuItems,
    supportInfo,
    legalLinks
};

export default data;
