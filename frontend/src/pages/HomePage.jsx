import React from "react";
import { Container, Typography, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';

function HomePage() {

  const records = [
    {
      id: 1,
      modelName: 'Model A',
      promptDomain: 'Physics',
      promptType: 'Q&A',
      promptContent: 'What is quantum entanglement?',
      userRating: 5,
      llmResponse: 'Quantum entanglement is a physical phenomenon where two or more particles are linked in such a way that they can influence each other instantaneously, regardless of the distance between them.',
      recordDate: '2023-10-27',
    },
    {
      id: 2,
      modelName: 'Model B',
      promptDomain: 'Digital Art',
      promptType: 'Image Recognition',
      promptContent: 'Describe the objects in this image: [image of a cat on a mat]',
      userRating: 4,
      llmResponse: 'The image contains a cat sitting on a mat.',
      recordDate: '2023-10-28',
    },
    {
      id: 3,
      modelName: 'Model C',
      promptDomain: 'Literature',
      promptType: 'Text Generation',
      promptContent: 'Write a short poem about autumn.',
      userRating: 5,
      llmResponse: 'Golden leaves begin to fall,\nA crisp breeze whispers through the trees,\nNature\'s beauty, standing tall,\nA peaceful, gentle, autumn ease.',
      recordDate: '2023-10-29',
    },
    {
      id: 4,
      modelName: 'Model A',
      promptDomain: 'Tool Usage',
      promptType: 'Code Generation',
      promptContent: 'Write a Python function to calculate the factorial of a number.',
      userRating: 4,
      llmResponse: '```python\ndef factorial(n):\n  if n == 0:\n    return 1\n  else:\n    return n * factorial(n-1)\n```',
      recordDate: '2023-10-30',
    },
    {
      id: 5,
      modelName: 'Model B',
      promptDomain: 'Life Skills',
      promptType: 'Summarization',
      promptContent: 'Summarize this article about healthy eating habits: [article text]',
      userRating: 3,
      llmResponse: 'The article discusses the importance of a balanced diet, including fruits, vegetables, lean protein, and whole grains, for maintaining good health.',
      recordDate: '2023-10-31',
    },
    {
      id: 6,
      modelName: 'Model C',
      promptDomain: 'Physics',
      promptType: 'Translation',
      promptContent: 'Translate "Hello, world!" to Spanish.',
      userRating: 5,
      llmResponse: '¡Hola, mundo!',
      recordDate: '2023-11-01',
    },
    {
      id: 7,
      modelName: 'Model A',
      promptDomain: 'Digital Art',
      promptType: 'Q&A',
      promptContent: 'What are the primary colors in subtractive color mixing?',
      userRating: 5,
      llmResponse: 'The primary colors in subtractive color mixing are cyan, magenta, and yellow.',
      recordDate: '2023-11-02',
    },
    {
      id: 8,
      modelName: 'Model B',
      promptDomain: 'Literature',
      promptType: 'Image Recognition',
      promptContent: 'Identify the author of this quote: "To be or not to be, that is the question."',
      userRating: 4,
      llmResponse: 'William Shakespeare.',
      recordDate: '2023-11-03',
    },
    {
      id: 9,
      modelName: 'Model C',
      promptDomain: 'Tool Usage',
      promptType: 'Text Generation',
      promptContent: 'Write a short story about a talking dog.',
      userRating: 4,
      llmResponse: 'Barnaby was no ordinary golden retriever. He could speak, though he preferred to keep it a secret...',
      recordDate: '2023-11-04',
    },
    {
      id: 10,
      modelName: 'Model A',
      promptDomain: 'Life Skills',
      promptType: 'Code Generation',
      promptContent: 'Create an HTML structure for a simple blog post.',
      userRating: 5,
      llmResponse: '```html\n<article>\n  <h1>Blog Post Title</h1>\n  <p>By Author Name</p>\n  <div>\n    <p>Blog post content goes here...</p>\n  </div>\n</article>\n```',
      recordDate: '2023-11-05',
    },
    {
      id: 11,
      modelName: 'Model B',
      promptDomain: 'Physics',
      promptType: 'Summarization',
      promptContent: 'Summarize the concept of relativity in physics: [text about relativity]',
      userRating: 4,
      llmResponse: 'Relativity, developed by Albert Einstein, describes the relationship between space and time, and how they are affected by gravity and motion.',
      recordDate: '2023-11-06',
    },
    {
      id: 12,
      modelName: 'Model C',
      promptDomain: 'Digital Art',
      promptType: 'Translation',
      promptContent: 'Translate "Guten Tag" to English.',
      userRating: 5,
      llmResponse: 'Good day.',
      recordDate: '2023-11-07',
    },
    {
      id: 13,
      modelName: 'Model A',
      promptDomain: 'Literature',
      promptType: 'Q&A',
      promptContent: 'Who wrote "Pride and Prejudice"?',
      userRating: 5,
      llmResponse: 'Jane Austen.',
      recordDate: '2023-11-08',
    },
    {
      id: 14,
      modelName: 'Model B',
      promptDomain: 'Tool Usage',
      promptType: 'Image Recognition',
      promptContent: 'What is the main subject of this painting: [image of Mona Lisa]',
      userRating: 5,
      llmResponse: 'A portrait of a woman.',
      recordDate: '2023-11-09',
    },
    {
      id: 15,
      modelName: 'Model C',
      promptDomain: 'Life Skills',
      promptType: 'Text Generation',
      promptContent: 'Give me some tips for effective time management.',
      userRating: 4,
      llmResponse: 'Prioritize tasks, create a schedule, avoid multitasking, and take regular breaks.',
      recordDate: '2023-11-10',
    },
    {
      id: 16,
      modelName: 'Model A',
      promptDomain: 'Physics',
      promptType: 'Code Generation',
      promptContent: 'Write a simple JavaScript function to add two numbers.',
      userRating: 5,
      llmResponse: '```javascript\nfunction add(a, b) {\n  return a + b;\n}\n```',
      recordDate: '2023-11-11',
    },
  ];


  return (
    <Container sx={{ marginTop: 4, marginBottom: 4 }}>
      <Typography variant="h4" gutterBottom>
        LLM Prompt Records
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>LLM Model Name</TableCell>
              <TableCell>Prompt Domain</TableCell>
              <TableCell>Prompt Type</TableCell>
              <TableCell>Prompt Content</TableCell>
              <TableCell>User Rating</TableCell>
              <TableCell>LLM Response</TableCell>
              <TableCell>Record Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {records.map((record) => (
              <TableRow key={record.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">{record.modelName}</TableCell>
                <TableCell>{record.promptDomain}</TableCell>
                <TableCell>{record.promptType}</TableCell>
                <TableCell>{record.promptContent.substring(0, 30)}...</TableCell>
                <TableCell>{record.userRating}</TableCell>
                <TableCell>{record.llmResponse.substring(0, 50)}...</TableCell>
                <TableCell>{record.recordDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default HomePage;