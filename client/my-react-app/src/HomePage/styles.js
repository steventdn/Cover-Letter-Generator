import styled from 'styled-components';
import { Container as MuiContainer, Typography as MuiTypography, Button as MuiButton, TextField as MuiTextField } from '@mui/material';

export const Container = styled(MuiContainer)`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Title = styled(MuiTypography)`
  color: ${(props) => props.theme.colors.primary};
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const Paragraph = styled(MuiTypography)`
  color: ${(props) => props.theme.colors.text};
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

export const Input = styled(MuiTextField)`
  margin-bottom: 20px;
  & input {
    padding: 10px;
    border: 2px solid ${(props) => props.theme.colors.secondary};
    border-radius: 25px;
    font-size: 1.2rem;
    width: 300px;
  }
`;

export const Button = styled(MuiButton)`
  padding: 12px 24px;
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 25px;
  font-size: 1.2rem;
  cursor: pointer;
  width: 300px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;
