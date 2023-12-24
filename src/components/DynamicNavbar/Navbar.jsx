
import React, { useState, useEffect, useCallback } from 'react';
import './Navbar.css'
import search from '../../images/search.jpg'
import logo from '../../images/logo.png'
import select from "../../images/selectedarrow.jpg"
import unselect from "../../images/nonselectedarrow.jpg"
const Navbar = () => {
    const [menuItems, setMenuItems] = useState([
        'HOME',
        'ELECTRONICS',
        'BOOKS',
        'MUSIC',
        'MOVIES',
        'CLOTHING',
        'GAMES',
        'FURNITURE',
        'SHOES',
        'TRAVEL',
        'BOTANICAL',
        'CATEGORY NAME',
    ]);

    const [visibleItems, setVisibleItems] = useState([]);
    const [hiddenItems, setHiddenItems] = useState([]);
    const [menuOpen, setMenuOpen] = useState(false);



    


    const updateItems = useCallback(() => {
        const screenWidth = window.innerWidth;
        const itemWidth = 160;

        let visible, hidden;
        if (screenWidth > 500) {
            const maxItems = Math.floor(screenWidth / itemWidth);
            visible = menuItems.slice(0, maxItems - 3);
            hidden = menuItems.slice(maxItems - 3);
            setVisibleItems(visible);
            setHiddenItems(hidden);
        } else {
            setVisibleItems([]);
            setHiddenItems(menuItems);
        }
    }, [menuItems]);
    useEffect(() => {
        updateItems();
        window.addEventListener('resize', updateItems);

        return () => {
            window.removeEventListener('resize', updateItems);
        };
    }, [menuItems, updateItems]);

    

    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="Logo" className="logo_image" />
            </div>
            <div className="menu">
                {visibleItems.map((item, index) => (
                    <div
                        className="visible"
                        key={index}
                    >
                        {item}
                    </div>
                ))}
                {hiddenItems.length > 0 && (
                    <div className="more" onClick={() => setMenuOpen(!menuOpen)}>
                        <div>More  {
                            menuOpen
                                ? <img src={select} alt="Logo" />
                                :
                                <img src={unselect} alt="Logo" />
                        }</div>
                        {menuOpen && (
                            <div className="hidden">
                                {hiddenItems.map((item, index) => (
                                    <div
                                        className='hidden-div'
                                        key={index}
                                    >
                                        {item}
                                    </div>
                                ))}

                            </div>
                        )}
                    </div>
                )}
            </div>
            <div className="search-bar">
                <img src={search} alt="img" className="searchImage" />
                <input className="search-box" type="text" placeholder="Search something" />
            </div>
        </div>
    )
}

export default Navbar