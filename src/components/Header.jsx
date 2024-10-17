import { Link } from "react-router-dom"



export const Header = ()=>{
    return(
        
    <>
    
    <header  className="header">
    <Link to="/">
        <h1 className="titulo-logo">Kodigo Music</h1>
        </Link>
        <section className="botones">
        <Link to="/Page2">
        <button class="register-button">Register</button>
        </Link>
        <Link to='/Page3'>
        <button class="login-button">Login</button>
        </Link>
        </section>
    </header>
    </>
    )
    }
    
    