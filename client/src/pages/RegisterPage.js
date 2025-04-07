import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import VideoBackground from '../components/VideoBackground';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    teamName: '',
    teamSize: '3',
    name: '',
    email: '',
    phone: '',
    institution: '',
    experience: 'beginner',
    projectIdea: '',
    heardFrom: '',
    agreeTerms: false
  });
  
  const [formStep, setFormStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const nextStep = () => {
    setFormStep(formStep + 1);
    window.scrollTo(0, 0);
  };
  
  const prevStep = () => {
    setFormStep(formStep - 1);
    window.scrollTo(0, 0);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to your backend here
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    window.scrollTo(0, 0);
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
            <PageTitle>Register for Hack-O-Holic 3.0</PageTitle>
            <PageSubtitle>Join us for an unforgettable hackathon experience</PageSubtitle>
          </motion.div>
        </HeroSection>
        
        <FormSection>
          {formSubmitted ? (
            <SuccessContainer
              as={motion.div}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <SuccessIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </SuccessIcon>
              <SuccessTitle>Registration Successful!</SuccessTitle>
              <SuccessMessage>
                Thank you for registering for Hack-O-Holic 3.0. We've sent a confirmation email to <strong>{formData.email}</strong> with all the details.
              </SuccessMessage>
              <SuccessInfo>
                <p>Your team <strong>{formData.teamName}</strong> is now officially part of Hack-O-Holic 3.0!</p>
                <p>Please check your email for further instructions and important dates.</p>
              </SuccessInfo>
              <NextSteps>
                <NextStepTitle>What's Next?</NextStepTitle>
                <NextStepList>
                  <NextStepItem>
                    <NextStepNumber>1</NextStepNumber>
                    <NextStepText>Check your email for confirmation and complete any pending steps</NextStepText>
                  </NextStepItem>
                  <NextStepItem>
                    <NextStepNumber>2</NextStepNumber>
                    <NextStepText>Join our Discord community to connect with other participants</NextStepText>
                  </NextStepItem>
                  <NextStepItem>
                    <NextStepNumber>3</NextStepNumber>
                    <NextStepText>Start preparing for the hackathon by exploring resources and forming your team</NextStepText>
                  </NextStepItem>
                </NextStepList>
              </NextSteps>
            </SuccessContainer>
          ) : (
            <FormContainer>
              <FormProgress>
                <ProgressStep active={formStep >= 1} completed={formStep > 1}>
                  <ProgressNumber>1</ProgressNumber>
                  <ProgressLabel>Team Info</ProgressLabel>
                </ProgressStep>
                <ProgressLine active={formStep > 1} />
                <ProgressStep active={formStep >= 2} completed={formStep > 2}>
                  <ProgressNumber>2</ProgressNumber>
                  <ProgressLabel>Personal Details</ProgressLabel>
                </ProgressStep>
                <ProgressLine active={formStep > 2} />
                <ProgressStep active={formStep >= 3} completed={formStep > 3}>
                  <ProgressNumber>3</ProgressNumber>
                  <ProgressLabel>Project & Submission</ProgressLabel>
                </ProgressStep>
              </FormProgress>
              
              <FormContent
                as={motion.div}
                key={formStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {formStep === 1 && (
                  <>
                    <FormTitle>Team Information</FormTitle>
                    <FormGroup>
                      <FormLabel htmlFor="teamName">Team Name *</FormLabel>
                      <FormInput
                        type="text"
                        id="teamName"
                        name="teamName"
                        value={formData.teamName}
                        onChange={handleChange}
                        placeholder="Enter your team name"
                        required
                      />
                    </FormGroup>
                    
                    <FormGroup>
                      <FormLabel htmlFor="teamSize">Team Size *</FormLabel>
                      <FormSelect
                        id="teamSize"
                        name="teamSize"
                        value={formData.teamSize}
                        onChange={handleChange}
                        required
                      >
                        <option value="2">2 Members</option>
                        <option value="3">3 Members</option>
                        <option value="4">4 Members</option>
                      </FormSelect>
                    </FormGroup>
                    
                    <FormNote>
                      <strong>Note:</strong> You're registering as the team leader. Team members will receive invitations to join your team after you complete registration.
                    </FormNote>
                    
                    <FormButtons>
                      <NextButton onClick={nextStep}>Continue</NextButton>
                    </FormButtons>
                  </>
                )}
                
                {formStep === 2 && (
                  <>
                    <FormTitle>Personal Details</FormTitle>
                    <FormGroup>
                      <FormLabel htmlFor="name">Full Name *</FormLabel>
                      <FormInput
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </FormGroup>
                    
                    <FormGroup>
                      <FormLabel htmlFor="email">Email Address *</FormLabel>
                      <FormInput
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        required
                      />
                    </FormGroup>
                    
                    <FormGroup>
                      <FormLabel htmlFor="phone">Phone Number *</FormLabel>
                      <FormInput
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        required
                      />
                    </FormGroup>
                    
                    <FormGroup>
                      <FormLabel htmlFor="institution">Institution/Organization *</FormLabel>
                      <FormInput
                        type="text"
                        id="institution"
                        name="institution"
                        value={formData.institution}
                        onChange={handleChange}
                        placeholder="Enter your institution or organization"
                        required
                      />
                    </FormGroup>
                    
                    <FormGroup>
                      <FormLabel htmlFor="experience">Hackathon Experience *</FormLabel>
                      <FormSelect
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                      >
                        <option value="beginner">Beginner (First-time)</option>
                        <option value="intermediate">Intermediate (1-2 hackathons)</option>
                        <option value="experienced">Experienced (3+ hackathons)</option>
                      </FormSelect>
                    </FormGroup>
                    
                    <FormButtons>
                      <BackButton onClick={prevStep}>Back</BackButton>
                      <NextButton onClick={nextStep}>Continue</NextButton>
                    </FormButtons>
                  </>
                )}
                
                {formStep === 3 && (
                  <>
                    <FormTitle>Project & Submission</FormTitle>
                    <FormGroup>
                      <FormLabel htmlFor="projectIdea">Project Idea (Brief Description) *</FormLabel>
                      <FormTextarea
                        id="projectIdea"
                        name="projectIdea"
                        value={formData.projectIdea}
                        onChange={handleChange}
                        placeholder="Briefly describe your project idea or area of interest"
                        rows="4"
                        required
                      />
                    </FormGroup>
                    
                    <FormGroup>
                      <FormLabel htmlFor="heardFrom">How did you hear about Hack-O-Holic 3.0?</FormLabel>
                      <FormInput
                        type="text"
                        id="heardFrom"
                        name="heardFrom"
                        value={formData.heardFrom}
                        onChange={handleChange}
                        placeholder="Social media, friends, university, etc."
                      />
                    </FormGroup>
                    
                    <FormCheckboxGroup>
                      <FormCheckbox
                        type="checkbox"
                        id="agreeTerms"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        required
                      />
                      <FormCheckboxLabel htmlFor="agreeTerms">
                        I agree to the <a href="/terms" target="_blank" rel="noopener noreferrer">Terms & Conditions</a> and <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> of Hack-O-Holic 3.0
                      </FormCheckboxLabel>
                    </FormCheckboxGroup>
                    
                    <FormButtons>
                      <BackButton onClick={prevStep}>Back</BackButton>
                      <SubmitButton onClick={handleSubmit} disabled={!formData.agreeTerms}>Register Now</SubmitButton>
                    </FormButtons>
                  </>
                )}
              </FormContent>
            </FormContainer>
          )}
        </FormSection>
        
        <InfoSection>
          <InfoContainer>
            <InfoCard>
              <InfoIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              </InfoIcon>
              <InfoTitle>Registration Process</InfoTitle>
              <InfoText>
                <p>Registration is a simple 3-step process. You'll need to provide team information, personal details, and a brief project idea.</p>
                <p>After submission, all team members will receive an email confirmation with further instructions.</p>
              </InfoText>
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
              <InfoTitle>Team Formation</InfoTitle>
              <InfoText>
                <p>Teams should consist of 2-4 members. If you don't have a team yet, register anyway and mention this in your project idea section.</p>
                <p>We'll help match you with other participants during the team formation session on Day 1.</p>
              </InfoText>
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
              <InfoTitle>Important Dates</InfoTitle>
              <InfoText>
                <p><strong>Registration Deadline:</strong> April 5, 2025</p>
                <p><strong>Confirmation Emails:</strong> Within 48 hours of registration</p>
                <p><strong>Hackathon Dates:</strong> April 15-17, 2025</p>
              </InfoText>
            </InfoCard>
          </InfoContainer>
        </InfoSection>
      </PageContainer>
    </>
  );
};

const PageContainer = styled.div`
  position: relative;
  z-index: 2;
`;

const HeroSection = styled.section`
  min-height: 40vh;
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

const FormSection = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px 80px;
`;

const FormContainer = styled.div`
  background-color: rgba(26, 26, 26, 0.8);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(110, 0, 255, 0.1);
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const FormProgress = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const ProgressStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
`;

const ProgressNumber = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#6e00ff' : 'rgba(255, 255, 255, 0.1)'};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-weight: 600;
  margin-bottom: 10px;
  transition: all 0.3s ease;
  border: 2px solid ${props => props.completed ? '#6e00ff' : 'transparent'};
`;

const ProgressLabel = styled.div`
  font-size: 0.9rem;
  color: ${props => props.active ? '#ffffff' : '#b0b0b0'};
  text-align: center;
  
  @media (max-width: 576px) {
    display: none;
  }
`;

const ProgressLine = styled.div`
  flex: 1;
  height: 2px;
  background-color: ${props => props.active ? '#6e00ff' : 'rgba(255, 255, 255, 0.1)'};
  margin: 0 10px;
  position: relative;
  top: -15px;
  z-index: 1;
`;

const FormContent = styled.div``;

const FormTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 30px;
  color: #ffffff;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #ffffff;
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #6e00ff;
    box-shadow: 0 0 0 2px rgba(110, 0, 255, 0.2);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 12px 15px;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 15px center;
  background-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #6e00ff;
    box-shadow: 0 0 0 2px rgba(110, 0, 255, 0.2);
  }
  
  option {
    background-color: #1a1a1a;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
  resize: vertical;
  min-height: 100px;
  
  &:focus {
    outline: none;
    border-color: #6e00ff;
    box-shadow: 0 0 0 2px rgba(110, 0, 255, 0.2);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

const FormCheckboxGroup = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 25px;
`;

const FormCheckbox = styled.input`
  margin-top: 5px;
  margin-right: 10px;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.05);
  cursor: pointer;
  position: relative;
  
  &:checked {
    background-color: #6e00ff;
    border-color: #6e00ff;
  }
  
  &:checked::after {
    content: '';
    position: absolute;
    left: 6px;
    top: 2px;
    width: 6px;
    height: 12px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(110, 0, 255, 0.2);
  }
`;

const FormCheckboxLabel = styled.label`
  color: #b0b0b0;
  font-size: 0.9rem;
  line-height: 1.6;
  
  a {
    color: #6e00ff;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const FormNote = styled.p`
  color: #b0b0b0;
  font-size: 0.9rem;
  margin-bottom: 25px;
  padding: 10px 15px;
  background-color: rgba(110, 0, 255, 0.1);
  border-radius: 8px;
  border-left: 3px solid #6e00ff;
`;

const FormButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 12px 30px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
  }
  
  @media (max-width: 576px) {
    width: 100%;
  }
`;

const NextButton = styled(Button)`
  background: linear-gradient(90deg, #6e00ff 0%, #ff00e6 100%);
  color: white;
  border: none;
  flex: 1;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 20px rgba(110, 0, 255, 0.4);
  }
`;

const BackButton = styled(Button)`
  background: transparent;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.3);
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

const SubmitButton = styled(Button)`
  background: linear-gradient(90deg, #6e00ff 0%, #ff00e6 100%);
  color: white;
  border: none;
  flex: 1;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 20px rgba(110, 0, 255, 0.4);
  }
  
  &:disabled {
    background: linear-gradient(90deg, #4b1a8e 0%, #8e1a7a 100%);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    opacity: 0.7;
  }
`;

const SuccessContainer = styled.div`
  background-color: rgba(26, 26, 26, 0.8);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(110, 0, 255, 0.1);
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const SuccessIcon = styled.div`
  color: #6e00ff;
  margin-bottom: 20px;
`;

const SuccessTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #ffffff;
`;

const SuccessMessage = styled.p`
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 30px;
  
  strong {
    color: #6e00ff;
  }
`;

const SuccessInfo = styled.div`
  margin-bottom: 40px;
  
  p {
    color: #b0b0b0;
    margin-bottom: 10px;
    
    strong {
      color: #ffffff;
    }
  }
`;

const NextSteps = styled.div`
  background-color: rgba(110, 0, 255, 0.1);
  border-radius: 15px;
  padding: 30px;
  text-align: left;
`;

const NextStepTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #ffffff;
`;

const NextStepList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const NextStepItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
`;

const NextStepNumber = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(90deg, #6e00ff 0%, #ff00e6 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-weight: 600;
`;

const NextStepText = styled.p`
  color: #b0b0b0;
  flex: 1;
`;

const InfoSection = styled.section`
  background-color: rgba(10, 10, 10, 0.8);
  padding: 80px 20px;
`;

const InfoContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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

const InfoText = styled.div`
  p {
    color: #b0b0b0;
    margin-bottom: 10px;
    line-height: 1.6;
    
    &:last-child {
      margin-bottom: 0;
    }
    
    strong {
      color: #ffffff;
    }
  }
`;

export default RegisterPage;
