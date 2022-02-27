import styled, { css } from "styled-components";

export const Navbar = styled.nav`
  img {
    object-fit: cover;
  }
  section {
    @media (min-width: 769px) and (max-width: 1024px) {
      gap: 1.5rem;
    }
    @media (max-width: 768px) {
      display: none;
      gap: 35px;
    }
      display: inline-flex;
      gap: 64px;
    }
    button{
    @media (min-width: 769px) {
      display:none;
    }
    position:absolute;
    right:0px;
    background:transparent;
    border:none;
    margin:5px;
  }
  background: #f0f1fb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0px;
  min-height: 80px;
  width: 100%;
  padding: 0rem 2rem;
  @media (max-width:768px) {
    flex-direction:column;
    align-items:flex-start;
    gap:24px;
    padding: 1rem 2rem;
  }
`;

export const HeaderDiv = styled.div`
  width: 100%;
  height: 100%;
  min-height: 700px;
  /* margin: 17.5px 0px; */
  /* background: red; */
  display: grid;
  place-items: center;
  section {
    max-width: 850px;
    width: 100%;
    p {
      max-width: 712px;
    }
    > p,
    > h1 {
      color: #f7f7f7;
    }
  }
  ${({ background }: { background: string }) =>
    background &&
    css
`      background: url(${background});
background-repeat: repeat-x;
background-position:center;
)    `}
`;
export const AboutUsDiv = styled.div`
  width: 100%;
  /* height: 100%; */
  padding: 35px 0px;
  /* margin: 17.5px 0px; */
  display: inline-flex;
  justify-content: center;
  /* white-space:nowrap; */
  gap: 35px;
  /* width:max-content; */
  section {
    max-width: 400px;
  }
  /* width: max-content; */
  @media (max-width: 768px) {
    /* gap: 48px; */
    /* overflow: hidden !important; */
    /* -webkit-overflow-scrolling: touch; */
    justify-content: flex-start;
    overflow-x: scroll;
    section {
      padding: 35px 2.5%;
      display: inline-block;
      min-width: 95%;
      /* min-width: 350px; */
      /* margin: 0% 5%; */
      &:after {
        margin: auto;
        width: -webkit-fit-content;
        width: -moz-fit-content;
        width: fit-content;
        content: " < swipe >";
        position: relative;
        display: grid;
        top: 30px;
      }
    }
    /* align-items:right; */
  }
`;
export const ServicesDiv = styled.div`
  width: 100%;
  height: 100%;
  /* margin: 17.5px 0px; */
  padding: 70px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #294c66;
  & > section {
    max-width: 1400px;
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    justify-content: center;
    p,
    h2,
    h4 {
      max-width: 575px;
      @media (max-width: 768px) {
        max-width: 90%;
      }
      color: #fff;
    }
    section {
      max-width: 400px;
    }
  }
`;
export const DividingLine = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.5);
  max-width: 1000px !important;
  width: 80% !important;
`;
export const PartnerDiv = styled.div`
  width: 100%;
  height: 100%;
  background: #f0f1fb;
  padding: 35px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  & > section {
    display: flex;
    gap: 24px;
    justify-content: center;
    padding: 35px 0px;
    @media (max-width: 1024px) {
      display: grid;
      max-width: 90%;
    }
    p {
      max-width: 770px;
    }
  }
  div:nth-of-type(2) {
    section {
      transform: rotate(180deg);
      div {
        img {
          transform: rotate(180deg);
        }
      }
    }
  }
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    max-width: 1400px;

    section {
      max-width: 630px;
      flex-wrap: wrap;
      display: flex;
      justify-content: center;
      gap: 24px;
      div {
        img {
          width: 220px;
          height: 100px;
        }
        width: fit-content;
        padding: 20px;
        display: flex;
        justify-content: center;

        background: #fff;
        border-radius: 32.66px;
      }
      @media (max-width: 1024px) {
        max-width: 300px;
        div {
          img {
            width: 100px;
            height: 50px;
          }
        }
      }
    }
  }
  h2 {
    @media (max-width: 1024px) {
      max-width: 300px;
    }
    max-width: 600px;
    text-align: center;
  }
`;
export const ContactDiv = styled.footer`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #294c66;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 43px 48px;
  align-items: center;
  @media (max-width: 768px) {
    padding: 43px 5% ;
    max-width: 100%;
}
  @media (max-width: 1024px) {
    gap: 48px;
    /* align-items:right; */
  }
  button {
    box-shadow: none;
  }
  p,
  h2 {
    color: #f7f7f7;
    width: 100%;
  }
  & > section,
  & > div {
    width: 100%;
    max-width: 1400px;
  }
  @media (min-width: 1025px) {
    & > div {
      justify-content: space-between;
    }
  }
  & > div {
    display: flex;
    gap: 50px;
    flex-wrap: wrap;
    form {
      width: auto;
    }
    form,
    div {
      min-width: 150px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
      /* max-width:max-content; */
      /* min-width:20%; */
      section {
        display: flex;
        gap: 5px;
        @media (max-width: 1024px) {
          gap: 24px;
          flex-wrap: wrap;
        }
      }
    }
    div{
      section{
        align-items:flex-start;
      }
    }
  }
`;
export const ContactInput = styled.input`
  background: white;
  max-width: 450px;
  width: 100%;
  height: 40px;
  background: #f7f7f7;
  border: 2px solid #919191;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  min-width: 200px;
`;
export const ContactTextarea = styled.textarea`
  background: white;
  max-width: 450px;
  width: 100%;
  /* height: 70px; */
  background: #f7f7f7;
  border: 2px solid #919191;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
`;
export const PartnerCard = styled.div`
  width: 289.04px;
  height: 150px;
  background: #fffefe;
  border-radius: 32.66px;
`;
export const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  section {
    display: flex;
    justify-content: center;
    gap: 35px;
  }
  ${({ gap }: { gap: string }) =>
    gap &&
    css
`      gap: ${gap};
)    `}
`;

export const TextHeader1 = styled.h1`
  font-size: 61px;
  margin: 0px;
  ${({ center }: { center?: boolean }) =>
    center &&
    css
`
      text-align: center;
    `}
  @media (max-width: 768px) {
    font-size: 47px;
  }
`;
export const TextHeader2 = styled.h2`
  font-size: 47px;
  margin: 0px;
  ${({ center }: { center?: boolean }) =>
    center &&
    css
`
      text-align: center;
    `}
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;
export const TextHeader3 = styled.h3`
  font-size: 36px;
  margin: 0px;
  ${({ center }: { center?: boolean }) =>
    center &&
    css
`
      text-align: center;
    `}
  @media (max-width: 768px) {
    font-size: 27px;
  }
`;
export const TextHeader4 = styled.h4`
  font-size: 27px;
  margin: 0px;
  ${({ center }: { center?: boolean }) =>
    center &&
    css
`
      text-align: center;
    `}
  @media (max-width: 768px) {
    font-size: 21px;
  }
`;
export const TextParagraphLarge = styled.p`
  font-size: 21px;
  margin: 0px;
  ${({ center }: { center?: boolean }) =>
    center &&
    css
`
      text-align: center;
    `}
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
export const TextParagraphSmall = styled.p`
  font-size: 16px;
  margin: 0px;
  ${({ center }: { center?: boolean }) =>
    center &&
    css
`
      text-align: center;
    `}
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Button = styled.button`
  padding: 15px 30px;
  box-shadow: 3.32203px 6.64407px 5.81356px rgba(255, 255, 255, 0.1);
  outline: #4784b0;
  border: 0px;
  border-radius: 5px;
  cursor: pointer;
  ${({ color, background }: { color?: string; background?: string }) =>
    color &&
    css
`
      color: ${color};
      background: ${background ?? "#4784b0"};
    `}
  @media (max-width: 768px) {
    padding: 12.5px 25px;
    /* font-size: 14px; */
  }
`;

export const Input = styled.input;
