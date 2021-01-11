import React from 'react'

function Header() {
    return (
        <div className="app__header">
            <div className="header__wrapper">
                <div className="header__logo">
                    <p>Logo</p>

                </div>
                <div className="header__button homepage">
                    <p>homepage</p>
                </div>
                <div className="header__button following">
                    <p>following</p>
                </div>
                <div className="header__search">
                    <div className="header__searchContainer">
                        <p>searchIcon</p>
                        <form>
                            <input type="text" />
                            <button> Submit</button>
                        </form>
                    </div>
                </div>
                <div className="header__menuItem">
                    <p>icon</p>
                    <p>icon</p>
                    <p>icon</p>
                    <p>icon</p>


                </div>
            </div>

        </div>
    )
}

export default Header

