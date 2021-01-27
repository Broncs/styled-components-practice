import styled, { css, keyframes } from "styled-components";
import { Wrapper, FadeIn } from "./styled";

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.lighter};
  color: ${(props) => props.theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.p};
  margin: ${({ margin }) => margin || "2rem"};
  padding: 0.5rem 1rem;
  margin-top: ${({ theme }) => theme.spacers.large};
  border: 1px solid palevioletred;
  border-radius: 3px;
  animation: 2s ${FadeIn} ease-in;

  ${({ primary }) =>
    primary &&
    css`
      background-color: palevioletred;
      color: white;
      box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
    `}

  &:hover {
    color: white;
    background-color: palevioletred;
  }
  .someClass {
    color: blue;
  }

  @media ${(props) => props.theme.mediaQueries["bellow-768"]} {
    font-size: 0.8rem;
  } ;
`;

const OutterWrapper = styled.div`
  width: 100%;
  background-color: blueviolet;
  margin-top: 2rem;

  /* Workds if ''styledButton ''  has been decleared above */
  &:hover ${StyledButton} {
    color: red;
  }
`;

const SuperButtom = styled(StyledButton)`
  font-size: 2.5rem;
`;

const Button = ({ primary, margin, children }) => {
  return (
    <>
      {/* <Wrapper> */}
      <OutterWrapper>
        <StyledButton margin={margin} primary={primary}>
          {children}
          <p className='someClass'>img p with class</p>
        </StyledButton>
      </OutterWrapper>
      {/* <SuperButtom>{children}</SuperButtom> */}
      {/* </Wrapper> */}
    </>
  );
};

export default Button;
