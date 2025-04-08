import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import VideoBackground from '../components/VideoBackground';

const SchedulePage = () => {
  const [activeDay, setActiveDay] = useState(1);

  const scheduleData = {
    1: [
      { time: '08:00 AM - 09:00 AM', event: 'Registration & Breakfast', description: 'Check-in, get your welcome kit, and enjoy breakfast with fellow participants.' },
      { time: '09:00 AM - 10:00 AM', event: 'Opening Ceremony', description: 'Welcome address, introduction to the hackathon, rules explanation, and keynote speech.' },
      { time: '10:00 AM - 11:00 AM', event: 'Team Formation', description: 'Find team members, discuss ideas, and register your team officially.' },
      { time: '11:00 AM - 12:30 PM', event: 'Ideation Workshop', description: 'Guided workshop to help teams refine their ideas and prepare for the first round.' },
      { time: '12:30 PM - 01:30 PM', event: 'Lunch Break', description: 'Networking lunch with sponsors and mentors.' },
      { time: '01:30 PM - 04:30 PM', event: 'Round 1: Ideation & Presentation', description: 'Teams work on their ideas and prepare initial presentations.' },
      { time: '04:30 PM - 06:30 PM', event: 'Round 1 Presentations', description: 'Each team presents their idea to the judges in a 3-minute pitch.' },
      { time: '06:30 PM - 07:30 PM', event: 'Dinner', description: 'Dinner and networking.' },
      { time: '07:30 PM - 08:30 PM', event: 'Round 1 Results & Feedback', description: 'Announcement of teams advancing to Round 2 and feedback session.' },
      { time: '08:30 PM - 09:30 PM', event: 'Tech Talk: Emerging Technologies', description: 'Special session on the latest tech trends by industry experts.' },
    ],
    2: [
      { time: '08:00 AM - 09:00 AM', event: 'Breakfast', description: 'Start your day with a nutritious breakfast.' },
      { time: '09:00 AM - 10:00 AM', event: 'Round 2 Kickoff', description: 'Guidelines for the development round and mentor assignments.' },
      { time: '10:00 AM - 01:00 PM', event: 'Development Session 1', description: 'Teams start working on their prototypes with mentor support.' },
      { time: '01:00 PM - 02:00 PM', event: 'Lunch Break', description: 'Refuel with lunch and quick networking.' },
      { time: '02:00 PM - 06:00 PM', event: 'Development Session 2', description: 'Continued development with technical workshops available.' },
      { time: '06:00 PM - 07:00 PM', event: 'Dinner', description: 'Dinner break with entertainment.' },
      { time: '07:00 PM - 10:00 PM', event: 'Development Session 3', description: 'Evening coding session with mentor check-ins.' },
      { time: '10:00 PM - 11:00 PM', event: 'Progress Check & Feedback', description: 'Teams share their progress and receive feedback from mentors.' },
      { time: '11:00 PM - 08:00 AM', event: 'Overnight Hackathon', description: 'Continuous development through the night with midnight snacks and support.' },
    ],
    3: [
      { time: '08:00 AM - 09:00 AM', event: 'Breakfast', description: 'Final day breakfast to energize teams.' },
      { time: '09:00 AM - 12:00 PM', event: 'Final Development Sprint', description: 'Last chance to complete prototypes and prepare for presentations.' },
      { time: '12:00 PM - 01:00 PM', event: 'Lunch Break', description: 'Quick lunch before the final presentations.' },
      { time: '01:00 PM - 02:00 PM', event: 'Submission Deadline', description: 'All projects must be submitted by this time.' },
      { time: '02:00 PM - 05:00 PM', event: 'Round 3: Final Presentations', description: 'Top 10 teams present their completed projects to judges and audience.' },
      { time: '05:00 PM - 06:00 PM', event: 'Judges Deliberation & Expo', description: 'Showcase your project to attendees while judges make their decisions.' },
      { time: '06:00 PM - 07:30 PM', event: 'Closing Ceremony & Awards', description: 'Announcement of winners, prize distribution, and closing remarks.' },
      { time: '07:30 PM - 09:30 PM', event: 'Celebration Dinner', description: 'Celebrate the successful completion of Hack-O-Holic 3.0 with all participants.' },
    ]
  };

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
            <PageTitle>Event Schedule</PageTitle>
            <PageSubtitle>Your roadmap to Hack-O-Holic 3.0</PageSubtitle>
          </motion.div>
        </HeroSection>
        
        <ScheduleSection>
          <DayTabs>
            <DayTab 
              active={activeDay === 1} 
              onClick={() => setActiveDay(1)}
            >
              Day 1
              <TabDate>April 15, 2025</TabDate>
              <TabDescription>Ideation Round</TabDescription>
            </DayTab>
            <DayTab 
              active={activeDay === 2} 
              onClick={() => setActiveDay(2)}
            >
              Day 2
              <TabDate>April 16, 2025</TabDate>
              <TabDescription>Development Round</TabDescription>
            </DayTab>
            <DayTab 
              active={activeDay === 3} 
              onClick={() => setActiveDay(3)}
            >
              Day 3
              <TabDate>April 17, 2025</TabDate>
              <TabDescription>Final Round</TabDescription>
            </DayTab>
          </DayTabs>
          
          <ScheduleTimeline>
            {scheduleData[activeDay].map((item, index) => (
              <TimelineItem
                key={index}
                as={motion.div}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TimeSlot>{item.time}</TimeSlot>
                <EventContent>
                  <EventTitle>{item.event}</EventTitle>
                  <EventDescription>{item.description}</EventDescription>
                </EventContent>
              </TimelineItem>
            ))}
          </ScheduleTimeline>
        </ScheduleSection>
        
        <InfoSection>
          <InfoContainer>
            <SectionTitle>Important Information</SectionTitle>
            <InfoGrid>
              <InfoCard>
                <InfoIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </InfoIcon>
                <InfoTitle>Venue</InfoTitle>
                <InfoContent>
                  <p>Graphic Era Hill University, Dehradun</p>
                  <p>Main Auditorium & Labs</p>
                </InfoContent>
              </InfoCard>
              
              <InfoCard>
                <InfoIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </InfoIcon>
                <InfoTitle>Dates</InfoTitle>
                <InfoContent>
                  <p>April 15-17, 2025</p>
                  <p>Registration opens: March 1, 2025</p>
                  <p>Registration closes: April 5, 2025</p>
                </InfoContent>
              </InfoCard>
              
              <InfoCard>
                <InfoIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </InfoIcon>
                <InfoTitle>Participation</InfoTitle>
                <InfoContent>
                  <p>Team Size: 2-4 members</p>
                  <p>Open to: Students, professionals, and enthusiasts</p>
                  <p>Experience Level: All levels welcome</p>
                </InfoContent>
              </InfoCard>
              
              <InfoCard>
                <InfoIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="M6 8h.01"></path>
                    <path d="M10 8h.01"></path>
                    <path d="M14 8h.01"></path>
                    <path d="M18 8h.01"></path>
                    <path d="M6 12h.01"></path>
                    <path d="M10 12h.01"></path>
                    <path d="M14 12h.01"></path>
                    <path d="M18 12h.01"></path>
                    <path d="M6 16h.01"></path>
                    <path d="M10 16h.01"></path>
                    <path d="M14 16h.01"></path>
                    <path d="M18 16h.01"></path>
                  </svg>
                </InfoIcon>
                <InfoTitle>What to Bring</InfoTitle>
                <InfoContent>
                  <p>Laptop and charger</p>
                  <p>ID proof for registration</p>
                  <p>Personal items for overnight stay</p>
                </InfoContent>
              </InfoCard>
            </InfoGrid>
          </InfoContainer>
        </InfoSection>
        
        <FAQSection>
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          <FAQContainer>
            <FAQ>
              <FAQQuestion>What is the registration fee?</FAQQuestion>
              <FAQAnswer>
              Hack-O-Holic 3.0 brings you an upgraded experience at just ₹350! This small fee ensures quality resources, mentorship, and exciting rewards for all participants. Let's innovate together! 🚀
              </FAQAnswer>
            </FAQ>
            
            <FAQ>
              <FAQQuestion>Do I need to be a programmer to participate?</FAQQuestion>
              <FAQAnswer>
                No, Hack-O-Holic 3.0 welcomes participants with diverse skills. Teams benefit from having members with different backgrounds, including design, business, and domain expertise.
              </FAQAnswer>
            </FAQ>
            
            <FAQ>
              <FAQQuestion>Will accommodation be provided?</FAQQuestion>
              <FAQAnswer>
              No, Hack-O-Holic 3.0 is a thrilling 24-hour hackathon where sleep takes a backseat! With exciting games and non-stop activities, you'll be energized throughout the event! 💻
              </FAQAnswer>
            </FAQ>
            
            <FAQ>
              <FAQQuestion>What happens if I don't have a team?</FAQQuestion>
              <FAQAnswer>
              No worries at all! Even without a formal team formation session, many participants connect on the spot and build amazing teams during the event. Great ideas come from spontaneous collaboration! 🤝
              </FAQAnswer>
            </FAQ>
          </FAQContainer>
        </FAQSection>
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

const ScheduleSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 80px;
`;

const DayTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const DayTab = styled.div`
  background-color: ${props => props.active ? 'rgba(110, 0, 255, 0.2)' : 'rgba(26, 26, 26, 0.7)'};
  border: 1px solid ${props => props.active ? 'rgba(110, 0, 255, 0.5)' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 15px;
  padding: 20px;
  min-width: 200px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${props => props.active ? '#ffffff' : '#b0b0b0'};
  font-weight: ${props => props.active ? '600' : '400'};
  box-shadow: ${props => props.active ? '0 5px 15px rgba(110, 0, 255, 0.2)' : 'none'};
  
  &:hover {
    background-color: rgba(110, 0, 255, 0.1);
    transform: translateY(-3px);
  }
`;

const TabDate = styled.div`
  font-size: 0.9rem;
  margin-top: 5px;
  color: #6e00ff;
`;

const TabDescription = styled.div`
  font-size: 0.8rem;
  margin-top: 5px;
  color: #b0b0b0;
`;

const ScheduleTimeline = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    width: 2px;
    background-color: rgba(110, 0, 255, 0.3);
    top: 0;
    bottom: 0;
    left: 120px;
    
    @media (max-width: 768px) {
      left: 80px;
    }
    
    @media (max-width: 576px) {
      left: 60px;
    }
  }
`;

const TimelineItem = styled.div`
  display: flex;
  margin-bottom: 30px;
  position: relative;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #6e00ff;
    left: 113px;
    top: 15px;
    z-index: 1;
    
    @media (max-width: 768px) {
      left: 73px;
    }
    
    @media (max-width: 576px) {
      left: 53px;
    }
  }
`;

const TimeSlot = styled.div`
  min-width: 100px;
  padding-right: 40px;
  text-align: right;
  font-weight: 600;
  color: #ffffff;
  
  @media (max-width: 768px) {
    min-width: 60px;
    padding-right: 30px;
    font-size: 0.9rem;
  }
  
  @media (max-width: 576px) {
    min-width: 40px;
    padding-right: 30px;
    font-size: 0.8rem;
  }
`;

const EventContent = styled.div`
  background-color: rgba(26, 26, 26, 0.7);
  border-radius: 10px;
  padding: 20px;
  margin-left: 30px;
  flex: 1;
  border: 1px solid rgba(110, 0, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(26, 26, 26, 0.9);
    border-color: rgba(110, 0, 255, 0.3);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const EventTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #ffffff;
`;

const EventDescription = styled.p`
  color: #b0b0b0;
  line-height: 1.6;
`;

const InfoSection = styled.section`
  background-color: rgba(10, 10, 10, 0.8);
  padding: 80px 20px;
`;

const InfoContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
`;

const InfoCard = styled.div`
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

const InfoIcon = styled.div`
  color: #6e00ff;
  margin-bottom: 20px;
`;

const InfoTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #ffffff;
`;

const InfoContent = styled.div`
  p {
    color: #b0b0b0;
    margin-bottom: 10px;
    line-height: 1.6;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const FAQSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
`;

const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FAQ = styled.div`
  background-color: rgba(26, 26, 26, 0.7);
  border-radius: 15px;
  padding: 30px;
  border: 1px solid rgba(110, 0, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(110, 0, 255, 0.3);
    background-color: rgba(26, 26, 26, 0.9);
  }
`;

const FAQQuestion = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #ffffff;
  position: relative;
  padding-left: 30px;
  
  &::before {
    content: 'Q:';
    position: absolute;
    left: 0;
    top: 0;
    color: #6e00ff;
    font-weight: 700;
  }
`;

const FAQAnswer = styled.p`
  color: #b0b0b0;
  line-height: 1.6;
  position: relative;
  padding-left: 30px;
  
  &::before {
    content: 'A:';
    position: absolute;
    left: 0;
    top: 0;
    color: #ff00e6;
    font-weight: 700;
  }
`;

export default SchedulePage;
