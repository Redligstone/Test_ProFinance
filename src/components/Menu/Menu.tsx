import { FaCaretDown } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { AiFillMessage } from 'react-icons/ai';
import './Menu.css';
import MenuData from './MenuData';

const Menu = () => {
    return (
        <div className='menu'>
            <div className='menu-options'>
                <div className='menu-header'>
                    <div className='menu-logo'>
                        <span className='menu-logo-highlight'>ФИН</span> Контроль
                    </div>
                    <div className='menu-button'>
                        Меню <IoClose />
                    </div>
                </div>

                <ul className='menu-list'>
                    {MenuData.menuItems.map((item, index) => (
                        <li key={index} className='menu-item'>
                            <div className='menu-item-icon'>
                                {item.icon}
                                {item.label}
                            </div>
                            <FaCaretDown />
                        </li>
                    ))}
                </ul>
            </div>

            <div className='menu-footer'>
                <div className='support-section'>
                    {MenuData.supportInfo.map((info, index) => (
                        <div key={index} className='support-info'>
                            <p className='support-title'>{info.title}</p>
                            <span className='support-text'>{info.text}</span>
                        </div>
                    ))}
                </div>
                <div className='legal-links'>
                    {MenuData.legalLinks.map((link, index) => (
                        <a key={index} href={link.href}>
                            {link.text}
                        </a>
                    ))}
                </div>
            </div>

            <a className='contact-button'>
                <AiFillMessage /> Связаться с нами
            </a>
        </div>
    );
};

export default Menu;
