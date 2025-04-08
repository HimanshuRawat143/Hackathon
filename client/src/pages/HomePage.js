import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import VideoBackground from '../components/VideoBackground';
import HackathonTimeline from '../components/HackathonTimeline';

const HomePage = () => {
  return (
    <>
      <VideoBackground />
      <HeroSection>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroSubtitle>Welcome to</HeroSubtitle>
            <HeroTitle>Hack-O-Holic <span>3.0</span></HeroTitle>
            <HeroDescription>
              Join the ultimate coding adventure where innovation meets technology.
              Build, collaborate, and transform your ideas into reality.
            </HeroDescription>
            <HeroButtons>
              <PrimaryButton to="/register">Register Now</PrimaryButton>
              <SecondaryButton to="/about">Learn More</SecondaryButton>
            </HeroButtons>
            <EventDetails>
              <EventDetail>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span>April 15-17, 2025</span>
              </EventDetail>
              <EventDetail>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Graphic Era Hill University, Dehradun</span>
              </EventDetail>
            </EventDetails>
          </motion.div>
        </HeroContent>
        <ScrollIndicator>
          <span>Scroll Down</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </ScrollIndicator>
      </HeroSection>
      
      <AboutSection>
        <SectionTitle>About Hack-O-Holic 3.0</SectionTitle>
        <AboutContent>
          <AboutText>
            <p>
              Hack-O-Holic 3.0 is more than just a hackathon; it's a celebration of innovation, 
              creativity, and technological prowess. We bring together the brightest minds to 
              collaborate, compete, and create solutions that address real-world challenges.
            </p>
            <p>
              Whether you're a seasoned developer, a creative designer, or a visionary entrepreneur, 
              Hack-O-Holic 3.0 offers you the platform to showcase your skills, learn from industry 
              experts, and potentially turn your ideas into reality.
            </p>
            <AboutStats>
              <StatItem>
                <StatNumber>500+</StatNumber>
                <StatLabel>Participants</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>24</StatNumber>
                <StatLabel>Hours</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>25K+</StatNumber>
                <StatLabel>In Prizes</StatLabel>
              </StatItem>
            </AboutStats>
          </AboutText>
          <AboutImage src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2012/08/hackathon.jpg?fit=1024%2C683&quality=50&strip=all&ssl=1" alt="Hackathon participants" />
        </AboutContent>
      </AboutSection>
      
      <TimelineSection>
        <HackathonTimeline />
      </TimelineSection>
      
      {/* <SponsorsSection>
        <SectionTitle>Our Sponsors</SectionTitle>
        <SponsorDescription>
          Hack-O-Holic 3.0 is proudly supported by industry leaders who believe in nurturing innovation and talent.
        </SponsorDescription>
        <SponsorsGrid>
          <SponsorLogo>
            <img src="/images/sponsor1.png" alt="Sponsor 1" />
          </SponsorLogo>
          <SponsorLogo>
            <img src="/images/sponsor2.png" alt="Sponsor 2" />
          </SponsorLogo>
          <SponsorLogo>
            <img src="/images/sponsor3.png" alt="Sponsor 3" />
          </SponsorLogo>
          <SponsorLogo>
            <img src="/images/sponsor4.png" alt="Sponsor 4" />
          </SponsorLogo>
          <SponsorLogo>
            <img src="/images/sponsor5.png" alt="Sponsor 5" />
          </SponsorLogo>
          <SponsorLogo>
            <img src="/images/sponsor6.png" alt="Sponsor 6" />
          </SponsorLogo>
        </SponsorsGrid>
        <SponsorCTA>
          <p>Interested in sponsoring Hack-O-Holic 3.0?</p>
          <PrimaryButton to="/contact">Become a Sponsor</PrimaryButton>
        </SponsorCTA>
      </SponsorsSection> */}
      
      <RegistrationSection>
        <RegistrationContent>
          <RegistrationText>
            <SectionTitle>Ready to Join?</SectionTitle>
            <p>
              Don't miss this opportunity to be part of Hack-O-Holic 3.0. 
              Register now and secure your spot in the most anticipated hackathon of the year.
            </p>
            <RegistrationFeatures>
              <FeatureItem>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span>Registration with nominal charges</span>
              </FeatureItem>
              <FeatureItem>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span>Networking Opportunities</span>
              </FeatureItem>
              <FeatureItem>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span>Mentorship from Experts</span>
              </FeatureItem>
              <FeatureItem>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span>Exciting Cash Prizes</span>
              </FeatureItem>
            </RegistrationFeatures>
            <PrimaryButton to="/register">Register Now</PrimaryButton>
          </RegistrationText>
          <RegistrationImage src="/registeration.png" alt="Register for Hackathon" />
        </RegistrationContent>
      </RegistrationSection>
    </>
  );
};

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 20px;
`;

const HeroContent = styled.div`
  max-width: 900px;
  text-align: center;
  z-index: 2;
`;

const HeroSubtitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 10px;
  color: #b0b0b0;
`;

const HeroTitle = styled.h1`
  font-size: 5rem;
  font-weight: 800;
  margin-bottom: 20px;
  
  span {
    background: linear-gradient(90deg, #6e00ff 0%, #ff00e6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 30px;
  color: #ffffff;
  line-height: 1.6;
`;

const HeroButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-block;
  padding: 14px 32px;
  background: linear-gradient(90deg, #6e00ff 0%, #ff00e6 100%);
  color: white;
  border: none;
  border-radius: 30px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(110, 0, 255, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 20px rgba(110, 0, 255, 0.4);
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-block;
  padding: 14px 32px;
  background: transparent;
  color: white;
  border: 2px solid #6e00ff;
  border-radius: 30px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    background: rgba(110, 0, 255, 0.1);
    transform: translateY(-3px);
  }
`;

const EventDetails = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const EventDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #ffffff;
  
  svg {
    color: #6e00ff;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: #ffffff;
  animation: bounce 2s infinite;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

const AboutSection = styled.section`
  padding: 100px 20px;
  background-color: rgba(10, 10, 10, 0.8);
  position: relative;
  z-index: 2;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 50px;
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

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 50px;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const AboutText = styled.div`
  flex: 1;
  
  p {
    color: #b0b0b0;
    margin-bottom: 20px;
    line-height: 1.6;
  }
`;

const AboutStats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #6e00ff;
  margin-bottom: 5px;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: #ffffff;
`;

const AboutImage = styled.img`
  flex: 1;
  max-width: 500px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 992px) {
    width: 100%;
  }
`;

const TimelineSection = styled.section`
  padding: 100px 0;
  background-color: rgba(10, 10, 10, 0.9);
  position: relative;
  z-index: 2;
`;

const SponsorsSection = styled.section`
  padding: 100px 20px;
  background-color: rgba(10, 10, 10, 0.8);
  position: relative;
  z-index: 2;
  text-align: center;
`;

const SponsorDescription = styled.p`
  max-width: 700px;
  margin: 0 auto 50px;
  color: #b0b0b0;
  line-height: 1.6;
`;

const SponsorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto 50px;
`;

const SponsorLogo = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  
  img {
    max-width: 100%;
    max-height: 80px;
    filter: grayscale(100%) brightness(1.2);
    transition: all 0.3s ease;
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-5px);
    
    img {
      filter: grayscale(0%);
    }
  }
`;

const SponsorCTA = styled.div`
  margin-top: 40px;
  
  p {
    color: #ffffff;
    margin-bottom: 20px;
    font-size: 1.2rem;
  }
`;

const RegistrationSection = styled.section`
  padding: 100px 20px;
  background-color: rgba(10, 10, 10, 0.9);
  position: relative;
  z-index: 2;
`;

const RegistrationContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 50px;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const RegistrationText = styled.div`
  flex: 1;
  
  p {
    color: #b0b0b0;
    margin-bottom: 30px;
    line-height: 1.6;
  }
`;

const RegistrationFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  
  svg {
    color: #6e00ff;
  }
  
  span {
    color: #ffffff;
    font-size: 1.1rem;
  }
`;

const RegistrationImage = styled.img`
  flex: 1;
  max-width: 500px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export default HomePage;
