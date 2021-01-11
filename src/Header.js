import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
           

           <img
           className='header__logo'
           src="https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"
           alt='amazon logo' />


           <div className="header__search">
                <input
                type='text'
                className='header__searchInput' />   
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Hello Guest
                    </span>
                    <span className="header__optionLineTwo">
                        Sign in
                    </span>
                </div>

                <div className="header__option">
                <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                       & Orders
                    </span>
                </div>

                <div className="header__option">
                
                <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header