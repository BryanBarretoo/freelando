import { Global, css } from "@emotion/react"

const estilos = css`
    * {
        font-family: 'Montserrat', sans-serif;
        font-family: 'Poppins', sans-serif;
    }
`

export const Estilos = () => {
    return (<Global styles={estilos} />)
}