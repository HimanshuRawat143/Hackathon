import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import VideoBackground from '../components/VideoBackground';

const AboutPage = () => {
  return (
    <>
      <VideoBackground />
      <PageContainer>
        <HeroSection>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <PageTitle>About Hack-O-Holic 3.0</PageTitle>
            <PageSubtitle>The Ultimate Hackathon Experience</PageSubtitle>
          </motion.div>
        </HeroSection>
        
        <ContentSection>
          <SectionContainer>
            <SectionTitle>Our Mission</SectionTitle>
            <SectionContent>
              <p>
                Hack-O-Holic 3.0 is dedicated to fostering innovation, collaboration, and technological advancement 
                through an immersive hackathon experience. Our mission is to provide a platform where talented 
                individuals can come together, share ideas, and create solutions that address real-world challenges.
              </p>
              <p>
                We believe in the power of technology to transform lives and communities. By bringing together 
                diverse perspectives and skill sets, we aim to catalyze the development of innovative solutions 
                that have the potential to make a meaningful impact on society.
              </p>
            </SectionContent>
          </SectionContainer>
          
          <SectionContainer>
            <SectionTitle>What Makes Us Different</SectionTitle>
            <FeatureGrid>
              <FeatureCard
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <FeatureIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </svg>
                </FeatureIcon>
                <FeatureTitle>Inclusive Environment</FeatureTitle>
                <FeatureDescription>
                  We welcome participants of all backgrounds and skill levels, creating a diverse and inclusive 
                  environment where everyone can learn, contribute, and grow.
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <FeatureIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </FeatureIcon>
                <FeatureTitle>Expert Mentorship</FeatureTitle>
                <FeatureDescription>
                  Participants have access to mentors from leading tech companies who provide guidance, 
                  feedback, and support throughout the hackathon.
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <FeatureIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </FeatureIcon>
                <FeatureTitle>Real-World Impact</FeatureTitle>
                <FeatureDescription>
                  We focus on challenges that have real-world applications, encouraging participants to 
                  develop solutions that can make a tangible difference.
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <FeatureIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                </FeatureIcon>
                <FeatureTitle>Valuable Prizes</FeatureTitle>
                <FeatureDescription>
                  Beyond cash prizes, winners receive opportunities for incubation, mentorship, and 
                  potential investment to turn their projects into startups.
                </FeatureDescription>
              </FeatureCard>
            </FeatureGrid>
          </SectionContainer>
          
          <SectionContainer>
            <SectionTitle>Our Story</SectionTitle>
            <SectionContent>
              <StoryGrid>
                <StoryImage src="/winnner.jpg" alt="Hack-O-Holic History" />
                <StoryText>
                  <p>
                    Hack-O-Holic began in 2023 as a small, campus-based event with just 50 participants. 
                    The enthusiasm and innovation demonstrated during that first event inspired us to 
                    expand our vision and reach.
                  </p>
                  <p>
                    In 2024, Hack-O-Holic 2.0 grew to include 200 participants from across the country, 
                    with projects that caught the attention of industry leaders and investors. Several 
                    projects from that event have since evolved into successful startups.
                  </p>
                  <p>
                    Now, Hack-O-Holic 3.0 is set to be our biggest and most impactful event yet, with 
                    over 500 expected participants from around the world, a diverse range of challenges, 
                    and unprecedented opportunities for networking and growth.
                  </p>
                </StoryText>
              </StoryGrid>
            </SectionContent>
          </SectionContainer>
          
          <SectionContainer>
            <SectionTitle>The Team Behind Hack-O-Holic</SectionTitle>
            <TeamGrid>
              <TeamMember
                as={motion.div}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <TeamMemberImage src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Team Member 1" />
                <TeamMemberInfo>
                  <TeamMemberName>Anubhav</TeamMemberName>
                  <TeamMemberRole>Backend Developer</TeamMemberRole>
                  <TeamMemberBio>
                    A passionate backend developer with a strong background in building scalable and secure applications.
                  </TeamMemberBio>
                </TeamMemberInfo>
              </TeamMember>
              
              <TeamMember
                as={motion.div}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <TeamMemberImage src="https://c.pxhere.com/photos/dd/a6/business_man_businessman_corporate_suit_executive_successful_entrepreneur-675843.jpg!d" alt="Team Member 1" />
                <TeamMemberInfo>
                  <TeamMemberName>Aryan Pal</TeamMemberName>
                  <TeamMemberRole>Backend Developer</TeamMemberRole>
                  <TeamMemberBio>
                    A passionate backend developer with a strong background in building scalable and secure applications.
                  </TeamMemberBio>
                </TeamMemberInfo>
              </TeamMember>
              
              <TeamMember
                as={motion.div}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <TeamMemberImage src="https://th.bing.com/th/id/OIP.a_C9v1H7RBbVyFjU4udThgHaKX?rs=1&pid=ImgDetMain" alt="Team Member 1" />
                <TeamMemberInfo>
                  <TeamMemberName>Shivang</TeamMemberName>
                  <TeamMemberRole>Backend Developer</TeamMemberRole>
                  <TeamMemberBio>
                    A passionate backend developer with a strong background in building scalable and secure applications.
                  </TeamMemberBio>
                </TeamMemberInfo>
              </TeamMember>
              
              <TeamMember
                as={motion.div}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <TeamMemberImage src="https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?rs=1&pid=ImgDetMain" alt="Team Member 1" />
                <TeamMemberInfo>
                  <TeamMemberName>Himanshu Rawat</TeamMemberName>
                  <TeamMemberRole>Backend Developer</TeamMemberRole>
                  <TeamMemberBio>
                    A passionate backend developer with a strong background in building scalable and secure applications.
                  </TeamMemberBio>
                </TeamMemberInfo>
              </TeamMember>
            </TeamGrid>
          </SectionContainer>
        </ContentSection>
      </PageContainer>
    </>
  );
};

const PageContainer = styled.div`
  position: relative;
  z-index: 2;
`;

const HeroSection = styled.section`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 100px 20px 50px;
`;

const PageTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #6e00ff 0%, #ff00e6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PageSubtitle = styled.p`
  font-size: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
  color: #ffffff;
`;

const ContentSection = styled.section`
  padding: 0 20px 100px;
`;

const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto 80px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;
  background: linear-gradient(90deg, #6e00ff 0%, #ff00e6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }
`;

const SectionContent = styled.div`
  p {
    color: #b0b0b0;
    margin-bottom: 20px;
    line-height: 1.8;
    font-size: 1.1rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
`;

const FeatureCard = styled.div`
  background-color: rgba(26, 26, 26, 0.7);
  border-radius: 15px;
  padding: 30px;
  transition: all 0.3s ease;
  border: 1px solid rgba(110, 0, 255, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(110, 0, 255, 0.1);
    border-color: rgba(110, 0, 255, 0.3);
  }
`;

const FeatureIcon = styled.div`
  color: #6e00ff;
  margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #ffffff;
`;

const FeatureDescription = styled.p`
  color: #b0b0b0;
  line-height: 1.6;
`;

const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const StoryImage = styled.img`
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

const StoryText = styled.div`
  p {
    color: #b0b0b0;
    margin-bottom: 20px;
    line-height: 1.8;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
`;

const TeamMember = styled.div`
  background-color: rgba(26, 26, 26, 0.7);
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(110, 0, 255, 0.1);
  }
`;

const TeamMemberImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const TeamMemberInfo = styled.div`
  padding: 20px;
`;

const TeamMemberName = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 5px;
  color: #ffffff;
`;

const TeamMemberRole = styled.p`
  color: #6e00ff;
  font-weight: 600;
  margin-bottom: 10px;
`;

const TeamMemberBio = styled.p`
  color: #b0b0b0;
  line-height: 1.6;
`;

export default AboutPage;
