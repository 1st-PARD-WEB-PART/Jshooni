import Navbar from "../components/NavBar";
import Game from "../components/Game"
import styled from 'styled-components';

function GamePage(){
    const GamePageComponent = styled.div`
        
    `;
    return (
        <GamePageComponent>
            <Navbar/>
            <Game/>
        </GamePageComponent>
    );
}

export default GamePage;