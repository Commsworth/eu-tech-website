import styled, { css } from "styled-components";

export const Navbar = styled.nav`
  img {
    object-fit: cover;
  }
  section {
    display: inline-flex;
    gap: 64px;
  }
  background: #f0f1fb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0px;
  height: 80px;
  width: 100%;
  padding: 0rem 2rem;
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
    width: 850px;
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
  height: 100%;
  padding: 35px 0px;
  /* margin: 17.5px 0px; */
  display: flex;
  justify-content: center;
  gap: 35px;
  section {
    max-width: 400px;
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
  gap: 30px;
  
  & > section {
    display: flex;
    gap: 24px;
    justify-content: center;
    padding: 35px 0px;
    p {
      max-width: 770px;
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
      gap: 34px;
      div {
        width: 280px;
        height: 160px;
        padding:30px;
        display: flex;
        justify-content: center;
        
        background: #fff;
        border-radius: 32.66px;
      }
    }
  }
  h1 {
    max-width: 800px;
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
  button{
    box-shadow:none;
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
  & > div {
    display: flex;
    gap: 90px;
    div {
      display: flex;
      flex-direction: column;
      min-width: 310px;
      align-items: flex-start;
      gap: 24px;
      section {
        display: flex;
        gap: 5px;
      }
    }
  }
`;
export const ContactInput = styled.input`
  background: white;
  max-width: 600px;
  width: 100%;
  height: 40px;
  background: #f7f7f7;
  border: 2px solid #919191;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
`;
export const ContactTextarea = styled.textarea`
  background: white;
  max-width: 600px;
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
`;

export const Button = styled.button`
  padding: 15px 30px;
  box-shadow: 3.32203px 6.64407px 5.81356px rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  cursor: pointer;
  ${({ color, background }: { color?: string; background?: string }) =>
    color &&
    css
`
      color: ${color};
      background: ${background ?? "#4784b0"};
    `}
`;

export const Input = styled.input;