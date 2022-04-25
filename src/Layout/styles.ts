import styled, { css } from "styled-components";
import {
  Users,
  BookBookmark,
  Buildings,
  LocationPin,
  Download,
  ColorBackground,
  LogIn,
} from "../style/Icons";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  animation: go-back 2s;

  .active {
    background: var(--img-profile);
  }

  @keyframes go-back {
    from {
      transform: translateX(100px);
    }
    to {
      transform: translateX(0);
    }
  }
`;

export const Feed = styled.div`
  border-radius: 50px;
  width: min(400px, 100%);
  height: min(673px, 100%);
  color: white;
  background: var(--bg);
  padding: 1.5rem;
`;

export const Content = styled.div`
  background: var(--bg-card);
  width: 100%;
  height: 100%;
  border-radius: 40px;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  animation: go 2s;

  > p {
    font-size: 24px;
    font-weight: 400;
  }
`;

export const ImageLogo = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid white;
  border-radius: 50%;
  padding: 0.5rem;

  > img {
    width: 100%;
    height: 100%;
  }
`;

export const User = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 2rem 0;
`;
export const ImageUser = styled.img`
  width: min(300px, 100%);
  height: min(300px, 100%);
  border-radius: 50%;
  right: 0;
  border: 13px solid var(--img-profile);
`;
export const Info = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  padding: 20px;
  border-radius: 30px;
  background: linear-gradient(
    180deg,
    #000000 3.65%,
    rgba(70, 69, 69, 0.72) 53.65%,
    rgba(62, 56, 56, 0.42) 100%
  );
  display: flex;
  flex-direction: column;
  gap: 5px;
  animation: go 2s;

  @keyframes go {
    from {
      transform: translateX(50px);
    }
    to {
      transform: translateX(0);
    }
  }

  span {
    background: transparent;
    display: flex;
    gap: 9px;
    align-items: center;
    font-size: 1rem;
    font-weight: 400;
  }
`;

export const IconCSS = css`
  background: transparent;
  fill: white;
  width: 20px;
  height: 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
export const IconUser = styled(Users)`
  ${IconCSS}
`;
export const IconBook = styled(BookBookmark)`
  ${IconCSS}
`;
export const IconBuildings = styled(Buildings)`
  ${IconCSS}
`;
export const IconLocation = styled(LocationPin)`
  ${IconCSS}
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  justify-content: flex-end;
  padding-top: 1rem;

  > p {
    font-size: 20px;
    font-weight: 400;
    font-style: normal;
  }
  > img {
    width: 27px;
    height: 30px;
  }
`;

export const Customize = styled.div`
  display: none;

  @media (min-width: 790px) {
    display: flex;
    flex-direction: column;
    padding: 5rem;
    gap: 33px;
  }

  p {
    font-family: "Prompt";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
  }

  button {
    width: 229px;
    border: none;
    background: black;
    color: white;
    padding: 18px 47px;
    border-radius: 15px;

    font-family: "Prompt";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  .active {
    background-color: red;
  }
`;

export const DownloadIcon = styled(Download)`
  ${IconCSS}
`;
export const BackgroundIcon = styled(ColorBackground)`
  ${IconCSS}
  @media (min-width: 790px) {
    display: none;
  }
`;
export const LoginIcon = styled(LogIn)`
  ${IconCSS}
`;
