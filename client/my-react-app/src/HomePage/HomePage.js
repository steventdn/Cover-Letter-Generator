import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

function HomePage() {
  const [resumeText, setResumeText] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [chatResponse, setChatResponse] = useState('');

  const handleResumeChange = (event) => {
    setResumeText(event.target.value);
  };

  const handleJobDescriptionChange = (event) => {
    setJobDescription(event.target.value);
  };

  const generateCoverLetter = async () => {
    console.log('Sending resume:', resumeText);
    console.log('Sending job description:', jobDescription);
    try {
      const response = await fetch('http://localhost:5000/generate-cover-letter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ resume: resumeText, jobDescription: jobDescription })
      });
      const data = await response.json();
      console.log('Response:', data);
      // Update state with the generated cover letter
      setChatResponse(data.coverLetter);
    } catch (error) {
      console.error('Error generating cover letter:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" color="primary">Cover Letter Generator</Typography>
      <Typography variant="body1" color="textPrimary">Paste in Resume</Typography>
      <TextField
        variant="outlined"
        placeholder="Enter your resume"
        value={resumeText}
        onChange={handleResumeChange}
      />
      <Typography variant="body1" color="textPrimary">Job Description</Typography>
      <TextField
        variant="outlined"
        placeholder="Enter job description"
        value={jobDescription}
        onChange={handleJobDescriptionChange}
      />
      <Button variant="contained" color="primary" onClick={generateCoverLetter}>Generate Cover Letter</Button>
      {chatResponse && (
        <Typography variant="body1" color="textPrimary" style={{ whiteSpace: 'pre-wrap' }}>
          {chatResponse}
        </Typography>
      )}
    </Container>
  );
}

export default HomePage;
