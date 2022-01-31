import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { Img } from '../Projects/ProjectsStyles';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        My Professional Portfolio
      </SectionTitle>
      <SectionText>
        A Software Engineer looking to expand his knowledge on web developing. Looking for a company that has my best interest at heart where I can continue to grow and flourish. 
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;