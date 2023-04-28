import Login from "../components/Login";
import styled from 'styled-components';
import Footer from "../components/Footer";

function LoginPage(){
    const LoginPageComponent = styled.div`
        
    `;
    return (
        <LoginPageComponent>
            <Login/>
            <Footer/>
        </LoginPageComponent>
    );
}

export default LoginPage;