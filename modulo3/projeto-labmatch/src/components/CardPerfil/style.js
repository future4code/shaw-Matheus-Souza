import styled from 'styled-components'


export const MainContainer = styled.div`
	display: flex;
    flex-direction: column;
    justify-content: center;
	align-items: center;
	position: relative;
	height: 430px;
    width: 350px;
    box-shadow: 5px 5px 10px black;
	border-radius: 15px;
	overflow: hidden;
	transition: 0.5s;
    animation-name: ${(props) => props.animacao};
    animation-duration: 0.5s;
    @keyframes caiEsquerda {
        from{
        opacity:1;
        transform: translate(0) rotate(0);
        }
        to{
        opacity: 0;
        transform: translate(-200px) rotate(-20deg);
        }   
    }
    @keyframes caiDireita {
        from{
        opacity:1;
        transform: translate(0) rotate(0);
        }
        to{
        opacity: 0;
        transform: translate(200px) rotate(20deg);
        }   
    }
    img{
        width: 100%;
        display: block;
        z-index: 1;
    }
    .dadosPerfil{
        height: 30%;
        width: 100%;
	    position: absolute;
        bottom: 0;
        background-image: linear-gradient(to top, rgba(0,0,0,0.5), transparent);
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        text-align: start;
        padding: 15px;
        z-index: 2;
        p{
            margin: 5px 20px;
        }
    }
    .NomeIdade{
        display: flex;
        flex-direction: row;
        text-align: start;
        align-items: baseline;
        margin: 0px 20px;
        h2{
            margin-bottom: 0;
            font-size: 21px;
        }
        p{
            margin-left: 10px;
            margin-bottom: 0;
        }
    }
`
export const Background = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    box-sizing: border-box;
    background: url(${(props) => props.src});
    filter: blur(30px);
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
`
