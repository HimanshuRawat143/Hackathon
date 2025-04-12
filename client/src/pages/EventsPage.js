import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import VideoBackground from '../components/VideoBackground';

const EventsPage = () => {
  const events = [
    {
      id: 1,
      title: 'Kickoff Ceremony',
      date: 'April 26, 2025',
      time: '10:00 AM',
      description: 'Join us for the grand opening of Hack-O-Holic 3.0 where we will introduce the themes, sponsors, and rules.',
      image: '/event1.jpg',
    },
    {
      id: 2,
      title: 'Workshop: AI in Modern Applications',
      date: 'April 26, 2025',
      time: '2:00 PM',
      description: 'Learn how to integrate AI into your hackathon projects with practical examples and hands-on guidance.',
      image: '/event2.jpg',
    },
    {
      id: 3,
      title: 'Networking Mixer',
      date: 'April 26, 2025',
      time: '6:00 PM',
      description: 'Connect with fellow participants, mentors, and industry professionals in a casual setting.',
      image: '/event3.jpg',
    },
    {
      id: 4,
      title: 'Mid-Hackathon Check-in',
      date: 'April 26, 2025',
      time: '12:00 PM',
      description: 'Present your progress to mentors and receive valuable feedback to improve your project.',
      image: '/event4.jpg',
    },
    {
      id: 5,
      title: 'Workshop: Pitching Your Project',
      date: 'April 27, 2025',
      time: '4:00 PM',
      description: 'Learn effective presentation techniques to showcase your project to judges and potential investors.',
      image: '/event5.jpg',
    },
    {
      id: 6,
      title: 'Final Presentations',
      date: 'April 27, 2025',
      time: '10:00 AM',
      description: 'Teams present their completed projects to a panel of judges from the tech industry.',
      image: '/event6.jpg',
    },
    {
      id: 7,
      title: 'Award Ceremony',
      date: 'April 27, 2025',
      time: '4:00 PM',
      description: 'Celebrate the achievements of all participants and find out which teams will take home the prizes.',
      image: '/event7.jpg',
    },
    {
      id: 8,
      title: 'Closing Party',
      date: 'April 27, 2025',
      time: '7:00 PM',
      description: 'Unwind and celebrate the end of an amazing hackathon with food, music, and networking.',
      image: '/event8.jpg',
    }
  ];

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
            <PageTitle>Events</PageTitle>
            <PageSubtitle>Join our exciting events throughout the hackathon</PageSubtitle>
          </motion.div>
        </HeroSection>
        
        <EventsSection>
          <EventsGrid>
            {events.map((event, index) => (
              <EventCard 
                key={event.id}
                as={motion.div}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <EventImageContainer>
                  <EventImage src={event.image} alt={event.title} />
                  <EventDate>
                    <span>{event.date}</span>
                    <span>{event.time}</span>
                  </EventDate>
                </EventImageContainer>
                <EventContent>
                  <EventTitle>{event.title}</EventTitle>
                  <EventDescription>{event.description}</EventDescription>
                  <EventButton>Learn More</EventButton>
                </EventContent>
              </EventCard>
            ))}
          </EventsGrid>
        </EventsSection>
      </PageContainer>
    </>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  padding: 120px 20px 60px;
  text-align: center;
  position: relative;
  z-index: 2;
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
    font-size: 3rem;
  }
`;

const PageSubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  color: #ffffff;
`;

const EventsSection = styled.section`
  padding: 40px 20px 120px;
  position: relative;
  z-index: 2;
`;

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
  max-width: 1280px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const EventCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(110, 0, 255, 0.2);
  }
`;

const EventImageContainer = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
`;

const EventImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${EventCard}:hover & {
    transform: scale(1.1);
  }
`;

const EventDate = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background: linear-gradient(90deg, #6e00ff 0%, #ff00e6 100%);
  color: white;
  padding: 10px 15px;
  border-top-right-radius: 10px;
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  font-weight: 600;
`;

const EventContent = styled.div`
  padding: 20px;
`;

const EventTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 15px;
  font-weight: 700;
  color: white;
`;

const EventDescription = styled.p`
  color: #b0b0b0;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const EventButton = styled.button`
  background: transparent;
  color: white;
  border: 2px solid #6e00ff;
  padding: 8px 20px;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  font-weight: 600;
  
  &:hover {
    background: rgba(110, 0, 255, 0.2);
  }
`;

export default EventsPage; 