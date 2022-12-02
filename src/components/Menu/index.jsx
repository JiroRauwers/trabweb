import MenuStyle from "./Style.jsx";

export const Menu = () => {

    return (
        <MenuStyle.Wrapper>
            <MenuStyle.LogoBox  href={"/"}>
                Healthier
            </MenuStyle.LogoBox>
            <MenuStyle.ItemsBox>
                <MenuStyle.Btn href={"/home"}>
                    Home
                </MenuStyle.Btn>
                <MenuStyle.Btn  href={"/diets"}>
                    Diets
                </MenuStyle.Btn>
                <MenuStyle.Btn  href={"/about"}>
                    About
                </MenuStyle.Btn>
            </MenuStyle.ItemsBox>
            <MenuStyle.ProfileBox href={"/login"}>
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path  d="M38.8233 22.1518C38.8233 27.0468 34.8985 30.9718 30 30.9718C25.1032 30.9718 21.1767 27.0468 21.1767 22.1518C21.1767 17.2567 25.1032 13.3333 30 13.3333C34.8985 13.3333 38.8233 17.2567 38.8233 22.1518ZM30 46.6667C22.7706 46.6667 16.6667 45.4917 16.6667 40.9583C16.6667 36.4232 22.809 35.2899 30 35.2899C37.231 35.2899 43.3333 36.4649 43.3333 40.9983C43.3333 45.5333 37.191 46.6667 30 46.6667Z" fill="#131313"/>
                </svg>
            </MenuStyle.ProfileBox>
        </MenuStyle.Wrapper>
    )
}