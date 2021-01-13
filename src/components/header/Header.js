import './Header.css';
import { useOnClickOutside } from '../../hooks';
import React, { useState , useRef } from 'react';
import Burger from '../burger/Burger';
import Menu from '../menu/Menu';

export default function Header() {
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));
    return (
        <div className="header">
            <div className="menuContainer">
                <Burger className="burgerIcon" open={open} setOpen={setOpen}/>
                <Menu open={open} setOpen={setOpen}/>
            </div>
        </div>
    );
}