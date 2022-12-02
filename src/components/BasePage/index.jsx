import {Menu} from "../Menu";
import {Container} from "./styles";


export const Page = ({children}) => {

    return (
        <>
            <Container>
                <Menu />
                {children}
            </Container>
        </>
    )

}


