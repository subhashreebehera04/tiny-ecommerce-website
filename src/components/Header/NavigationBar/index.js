import { Link } from 'react-router-dom';
import React, { useState, useRef } from 'react';
import Button from '@mui/material/Button';

const NavigationBar = () => {
  const [isSareesOpen, setIsSareesOpen] = useState(false);
  const [isKurtisOpen, setIsKurtisOpen] = useState(false);
  const [isKurtiSetsOpen, setIsKurtiSetsOpen] = useState(false);

  const sareesTimeoutRef = useRef(null);
  const kurtisTimeoutRef = useRef(null);
  const kurtiSetsTimeoutRef = useRef(null);

  const handleMouseEnter = (setDropdown, timeoutRef) => {
    clearTimeout(timeoutRef.current);
    setDropdown(true);
  };

  const handleMouseLeave = (setDropdown, timeoutRef) => {
    timeoutRef.current = setTimeout(() => {
      setDropdown(false);
    }, 200);
  };

  return (
    <nav>
      <div className='container'>
        <div className='row'>
          <div className='categories col-sm-12 d-flex align-items-center justify-content-center'>

            {/* Sarees Dropdown */}
            <div
              className="dropdown-wrapper list-inline-items position-relative ml-5 mr-5"
              onMouseEnter={() => handleMouseEnter(setIsSareesOpen, sareesTimeoutRef)}
              onMouseLeave={() => handleMouseLeave(setIsSareesOpen, sareesTimeoutRef)}
            >
              <button className='main-btn sarees'>sarees</button>
              {isSareesOpen && (
                <div className='dropdown_menu'>
                  <ul>
                    <li><Button><Link to="/cotton">cotton</Link></Button></li>
                    <li><Button><Link to="/georgette">georgette</Link></Button></li>
                    <li><Button><Link to="/linen">linen</Link></Button></li>
                    <li><Button><Link to="/silk">silk</Link></Button></li>
                    <li><Button><Link to="/organza">organza</Link></Button></li>
                  </ul>
                </div>
              )}
            </div>

            {/* Kurtis Dropdown */}
            <div
              className="dropdown-wrapper list-inline-items position-relative ml-5 mr-5"
              onMouseEnter={() => handleMouseEnter(setIsKurtisOpen, kurtisTimeoutRef)}
              onMouseLeave={() => handleMouseLeave(setIsKurtisOpen, kurtisTimeoutRef)}
            >
              <button className='main-btn kurtis'>kurtis</button>
              {isKurtisOpen && (
                <div className='dropdown_menu'>
                  <ul>
                    <li><Button><Link to="/cotton">cotton</Link></Button></li>
                    <li><Button><Link to="/lucknow">lucknow stitch</Link></Button></li>
                    <li><Button><Link to="/shortkurtis">short kurtis</Link></Button></li>
                    <li><Button><Link to="/mombatik">mom batik print</Link></Button></li>
                    <li><Button><Link to="/rayon">rayon</Link></Button></li>
                  </ul>
                </div>
              )}
            </div>

            {/* Kurti Sets Dropdown */}
            <div
              className="dropdown-wrapper list-inline-items position-relative ml-5 mr-5"
              onMouseEnter={() => handleMouseEnter(setIsKurtiSetsOpen, kurtiSetsTimeoutRef)}
              onMouseLeave={() => handleMouseLeave(setIsKurtiSetsOpen, kurtiSetsTimeoutRef)}
            >
              <button className='main-btn kurtiSets'>kurti sets</button>
              {isKurtiSetsOpen && (
                <div className='dropdown_menu'>
                  <ul>
                    <li><Button><Link to="/cambric-cotton">cambric cotton</Link></Button></li>
                    <li><Button><Link to="/mulmul-cotton">mulmul cotton</Link></Button></li>
                    <li><Button><Link to="/polyester">polyester</Link></Button></li>
                  </ul>
                </div>
              )}
            </div>

            {/* Static Buttons */}
            <li className="list-inline-items">
              <button className='main-btn lehenga ml-5 mr-5'>lehenga</button>
            </li>
            <li className="list-inline-items">
              <button className='main-btn sharara ml-5 mr-5'>sharara</button>
            </li>

          </div>
        </div>
      </div>
      <hr />
    </nav>
  );
};

export default NavigationBar;
