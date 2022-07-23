import { render } from '@testing-library/react';
import { Navbar, NavbarBrand } from 'reactstrap';
import NucampLogo from '../app/assets/img/logo.png';

const Header = () => {
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand hfref='/'>
                <img src={NucampLogo} alt='nucamp logo' />
            </NavbarBrand>
        </Navbar>
    );
}

export default Header;