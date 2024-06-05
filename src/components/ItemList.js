import React from 'react';
import { List, ListItem, Paper, Card, CardContent, Typography } from '@mui/material';

const ItemList = ({ items }) => {
  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      {items.length === 0 ? (
        <Typography variant="h6" align="center" sx={{ margin: 2 }}>
          No such item found
        </Typography>
      ) : (
        <List>
          {items.map(item => (
            <ListItem key={item.id} sx={{ marginBottom: 2 }}>
              <Card sx={{ width: '100%' }}>
                <CardContent>
                  <Typography variant="h6">
                    {item.title}
                  </Typography>
                  <Typography variant="body2">
                    {item.body}
                  </Typography>
                </CardContent>
              </Card>
            </ListItem>
          ))}
        </List>
      )}
    </Paper>
  );
};

export default ItemList;
