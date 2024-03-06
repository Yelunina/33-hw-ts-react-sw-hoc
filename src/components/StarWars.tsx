import style from '../css_modules/farGalaxy.module.css';
import { withErrorPage } from '../hoc/withErrorPage';
import { starWarsInfo } from '../utils/constants';

const StarWars = () => {

  return (
    <div className={style.farGalaxy}>{starWarsInfo}</div>
  )
}

export default withErrorPage(StarWars)