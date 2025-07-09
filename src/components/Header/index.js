import Logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import SearchBox from './searchBox'
import { FaUserCircle } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import NavigationBar from './NavigationBar';
const Header =() =>{
    return(
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-top">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">Curated Ethnic Wear for Every Occasion</p>
                    </div>
                </div>
                <header className="header">
                    <div className="container">
                        <div className='row'>
                            <div className="logoWrapper d-flex align-items-center col-sm-2">
                            <Link to={'/'}><img src={Logo} alt='logo' /></Link>
                            </div>
                            <div className='col-sm-10 d-flex align-items-center part2'>
                                <SearchBox/>
                                <div className='part3  d-flex align-items-center'>
                                    <button className='usericon mr-3'><FaUserCircle/></button>
                                    <div className='ml-auto cartTab d-flex align-items-center'>
                                        <span className='price'>₹45.00</span>
                                        <div className='position-relative ml-2'>
                                            <button className='usericon'><BsCart4/></button>
                                            <span className='count d-flex align-items-center justify-content-center'>1</span>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                    </div>

                </header>
               
                <NavigationBar/>

            </div>
        </>
    )
}

export default Header;