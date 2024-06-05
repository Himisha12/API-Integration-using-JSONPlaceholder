import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Box } from '@mui/material';
import ItemList from './components/ItemList';
import SearchBar from './components/SearchBar';
import CustomAppBar from './components/AppBar';

const App = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setItems(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <CustomAppBar />
      <Container>
        <Box my={4}>
          <Typography variant="h4" gutterBottom>
            Item List
          </Typography>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <ItemList items={filteredItems} />
        </Box>
      </Container>
    </div>
  );
};

export default App;
