import styled from 'styled-components'


const Btn = styled.button`
width: ${(props) => (props.width? props.width + 'px' : "200px")};
height: ${(props) => (props.height? props.height + 'px' : "40px")};
color: ${(props) => (props.color? props.color : "#FFF")};
background: ${(props) => (props.bg? props.bg : "black")};
border-radius: ${(props) => (props.br? props.br + 'px' : "3px")};
margin-left: ${(props) => (props.ml? props.ml + 'px' : "0px")};
margin-top: ${(props) => (props.mt? props.mt + 'px' : "0px")};
margin-right: ${(props) => (props.mr? props.mr + 'px' : "0px")};
margin-bottom: ${(props) => (props.mb? props.mb + 'px' : "0px")};

padding-left: ${(props) => (props.pl? props.pl + 'px' : "2px")};
padding-top: ${(props) => (props.pt? props.pt + 'px' : "5px")};
padding-right: ${(props) => (props.pr? props.pr + 'px' : "2px")};
padding-bottom: ${(props) => (props.pb? props.pb + 'px' : "5px")};






border: none;
outline: none;
margin: 10px;

:hover{
    transform: scale (0.97);
}
:active{
    opacity: 0.8;
}
`

export default Btn