import { Avatar, Button } from 'antd';
import { IoPerson } from 'react-icons/io5';
import { FaCalendarDays } from 'react-icons/fa6';
import { FaLongArrowAltRight } from 'react-icons/fa';

import './Account.css';

const Account = () => {
    return (
        <div className='account-container'>
            <div className='account-info'>
                <div className='account-user'>
                    <Avatar size={40} icon={<IoPerson />} className='account-avatar' />
                    <span className='account-info-name'>Иванов И.И</span>
                </div>
                <div className='account-tarif'>
                    <FaCalendarDays />
                    <span>Тариф до 15.05.2024</span>
                </div>
            </div>

            <div className='account-buttons'>
                <Button type='default' className='account-button'>
                    Выйти
                </Button>
                <Button className='account-button about' type='primary'>
                    <div>О нас</div>
                    <div>
                        <FaLongArrowAltRight className='about-arrow' />
                    </div>
                </Button>
            </div>
        </div>
    );
};

export default Account;
