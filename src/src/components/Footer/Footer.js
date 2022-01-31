import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href='mailto:carroll.andrew.r@gmail.com'>carroll.andrew.r@gmail.com</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href='tel:404-668-3073'>404-668-3073</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Let's get to coding!
          </Slogan>
        </CompanyContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
