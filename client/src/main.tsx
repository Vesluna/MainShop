import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add custom styles for the shop theme
const style = document.createElement('style');
style.textContent = `
  :root {
    --primary: 124 58 237;
    --secondary: 16 185 129;
    --accent: 245 158 11;
    --dark: 31 41 55;
    --light: 249 250 251;
    --error: 239 68 68;
    --success: 16 185 129;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
  }
  
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  
  @keyframes fadeOut {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }
  
  @keyframes slideUp {
    0% { transform: translateY(20px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }
`;

document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
