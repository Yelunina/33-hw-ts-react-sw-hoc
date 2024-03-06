import { useParams } from "react-router-dom";
import { characters, defaultHero } from "../utils/constants";
import { useContext, useEffect } from "react";
import ErrorPage from "../components/ErrorPage";
import { SWContext } from "../utils/context";

export const withErrorPage = (Component: React.FC<any>) => (props: any) => {
    const { heroId = defaultHero } = useParams();
    const { changeHero } = useContext(SWContext);

    useEffect(() => {
        if (characters[heroId]) {
            changeHero(heroId);
        } else {
            changeHero(undefined);
        }
    }, [heroId])

    return characters[heroId] ? <Component heroId={heroId} {...props} /> : <ErrorPage />;
}