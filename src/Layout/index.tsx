import React, { useState, useRef } from "react";
import logo from "../assets/logo.svg";
import {
  Container,
  Feed,
  Content,
  Header,
  ImageLogo,
  User,
  ImageUser,
  Info,
  IconUser,
  IconBook,
  IconBuildings,
  IconLocation,
  Footer,
  Customize,
  DownloadIcon,
  BackgroundIcon,
  LoginIcon
} from "./styles";

const Layout: React.FC = () => {
  const [name, setName] = useState("Nome");
  const [avatarUrl, setAvatarUrl] = useState("avatar")
  const [location, setLocation] = useState("location")
  const [followers, setFollowers] = useState("followers")
  const [following, setFollowing] = useState("following")
  const [company, setCompany] = useState("company")
  const [publicRepos, setPublicRepos] = useState("public_repos")
  var documento

  var xhr = new XMLHttpRequest();
  xhr.responseType = "json";

  xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200){
      documento = xhr.response
      setName(documento.name)
      setAvatarUrl(documento.avatar_url)
      setLocation(documento.location)
      setFollowers(documento.followers)
      setFollowing(documento.following)
      setCompany(documento.company)
      setPublicRepos(documento.public_repos)
    }
  };

  xhr.open("GET", 'https://api.github.com/users/mahflima')
  xhr.send()

  const h1Ref = useRef<HTMLHeadingElement>(null);

  function isActive(){
    h1Ref.current?.classList.toggle('active')
  }

  function Copy(){
    
  }

  return (
    <Container>
      <Feed ref={h1Ref} className="teste">
        <Content>
          <Header>
            <ImageLogo>
              <img src={logo}/>
            </ImageLogo>
            <p>{name}</p>
          </Header>
          <User>
            <ImageUser src={avatarUrl} />
            <Info>
              <span>
                <IconUser />
                {followers} Seguidores
              </span>
              <span>
                <IconUser />
                {following} Seguindo
              </span>
              <span>
                <IconBook />
                {publicRepos} Repositórios
              </span>
              <span>
                <IconBuildings />
                @{company}
              </span>
              <span>
                <IconLocation />
                {location}
              </span>
            </Info>
          </User>
          <Footer>
            <LoginIcon/>
            <BackgroundIcon title="Customizar Rocketcard" onClick={isActive}/>
            <DownloadIcon title="Download"/>
            <img src={logo} />
            <p>ROCKETCARD</p>
          </Footer>
        </Content>
      </Feed>
      <Customize className="test">
        <p>Customizar Rocketcard</p>
        <button onClick={isActive}>Gerar background</button>
      </Customize>
    </Container>
  );
};

export default Layout;
