import {Page} from "../../components/BasePage";
import {Button, ButtonWrapper, Container, Highlight, Separator, SubTitle, TextWrapper, Title} from "./styles.jsx";

export const Diets = () => {
return (
    <Page>
        <Container>

            <TextWrapper>
                <Title>Is this <Highlight>actualy</Highlight> a<br/> good <Highlight>question</Highlight> ?</Title>
                <SubTitle>
                    <Highlight>Maybe</Highlight> here would be some cool explanation about the <Highlight>question</Highlight> or<br/>
                    something like that. but <Highlight>remember</Highlight> to not make iit too fucking biog
                </SubTitle>
                <ButtonWrapper>
                    <Button>
                        Maybe yes
                    </Button>

                    <Separator/>

                    <Button>
                        Or maybe not
                    </Button>
                </ButtonWrapper>
            </TextWrapper>

        </Container>
    </Page>
)
}
