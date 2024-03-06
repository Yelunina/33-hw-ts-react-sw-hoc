import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { SWContext } from "../utils/context"
import { Item } from "../utils/types"
import { defaultHero } from "../utils/constants"


const NavItem = ({ item }: { item: Item }) => {
    const navigate = useNavigate();
    const { hero = defaultHero } = useContext(SWContext);
    return (
        <li
            onClick={() => navigate(`/${item.route}/${hero}`)}
            className="nav-item btn btn-danger mx-1"
        >
            {item.title}
        </li>
    )
}

export default NavItem