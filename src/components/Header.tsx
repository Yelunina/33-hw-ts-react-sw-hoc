import { useContext } from 'react'
import Navigation from './Navigation'
import { SWContext } from '../utils/context'
import { characters } from '../utils/constants';

const Header = () => {
    const {hero} = useContext(SWContext);
    const title = characters[hero!] ? characters[hero!].name : "Error";

    return (
        <header>
            <Navigation />
            <h1 className="text-center py-4">{title}</h1>
        </header>
    )
}

export default Header