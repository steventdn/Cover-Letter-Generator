import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function HomePage() {
  const theme = useTheme();
  const [inputText, setInputText] = useState('');
  const [chatResponse, setChatResponse] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendMessage = async () => {
    console.log('Sending message:', inputText);
    try {
      const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: inputText })
      });
      const data = await response.json();
      console.log('Response:', data);
      setChatResponse(data); // Update state with the response directly
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h1" color={theme.palette.primary.main}>
        Cover Letter Generator
      </Typography>
      <Typography variant="body1" color={theme.palette.text.primary}>
        Paste in the Job Description
      </Typography>
      <TextField
        type="text"
        label="Enter your message"
        variant="outlined"
        value={inputText}
        onChange={handleInputChange}
        sx={{ marginBottom: '20px', width: '300px' }}
      />


        {/* append these three to the chat api */}
      <Typography variant="body1" color={theme.palette.text.primary}>
        Paste your Resume
      </Typography>
      <TextField
        type="text"
        label="Enter your message"
        variant="outlined"
        value={inputText}
        onChange={handleInputChange}
        sx={{ marginBottom: '20px', width: '300px' }}
      />

      <Typography variant="body1" color={theme.palette.text.primary}>
        Tone
      </Typography>
      <TextField
        type="text"
        label="Enter your message"
        variant="outlined"
        value={inputText}
        onChange={handleInputChange}
        sx={{ marginBottom: '20px', width: '300px' }}
      />

      <Typography variant="body1" color={theme.palette.text.primary}>
        Word Count
      </Typography>
      <TextField
        type="text"
        label="Enter your message"
        variant="outlined"
        value={inputText}
        onChange={handleInputChange}
        sx={{ marginBottom: '20px', width: '300px' }}
      />

      <Button variant="contained" onClick={handleSendMessage}>
        Submit
      </Button>
      {chatResponse && (
        <Typography variant="body1" color={theme.palette.text.primary}>
          {chatResponse}
        </Typography>
      )}
    </Container>
  );
}

export default HomePage;
