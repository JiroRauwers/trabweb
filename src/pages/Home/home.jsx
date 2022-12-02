import {Page} from "../../components/BasePage";
import Card from "../../components/Card.jsx";
import {CardsWrapper, Highlight, MainTitle, SubTitle, Wrapper} from "./styles.jsx";


export const Home = () => {


    return (
        <Page>
            <Wrapper>
                <MainTitle>
                    Ever wanted to <br/> have <Highlight>A helth diet</Highlight> ?
                </MainTitle>
                <SubTitle>
                    We’ll make you a personaliezed diet <Highlight>based on your preferences</Highlight>.
                </SubTitle>
            </Wrapper>

            <Cards />



        </Page>
    )
}


const Cards = () => {
    const CardLorenBody = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies id cras felis aenean amet nunc, ultrices ultrices quis. Varius urna dui tortor neque, rhoncus. Mi sem cum at sagittis volutpat vitae proin ante. Praesent libero, vitae sed congue sapien facilisis libero, augue."

    return (<CardsWrapper>
        <Card.Wrapper>
            <Card.Title>
                Monday
            </Card.Title>
            <Card.Body>
                {CardLorenBody}
            </Card.Body>
            <Card.ReadMore/>
        </Card.Wrapper>
        <Card.Wrapper>
            <Card.Title>
                Wednesday
            </Card.Title>
            <Card.Body>
                {CardLorenBody}
            </Card.Body>
            <Card.ReadMore/>
        </Card.Wrapper>
        <Card.Wrapper>
            <Card.Title>
                Sunday
            </Card.Title>
            <Card.Body>
                {CardLorenBody}
            </Card.Body>
            <Card.ReadMore/>
        </Card.Wrapper>
    </CardsWrapper>)
}
