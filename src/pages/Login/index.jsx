import { Wrapper, Box } from "./style"

function Login(){
    return (
        <Wrapper>
            <Box>
                <h1>Login</h1>
                <input type='email' placeholder="E-mail"/>
                <input type="password" placeholder="Senha"/>
                <button className="logar">Enviar</button>
                <button className="cadastrar">Cadastrar-se</button>
            </Box>
        </Wrapper>
    )e
}



