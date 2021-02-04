import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const NewRestaurantForm = ({createRestaurant}) => {
  const [name, setName] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    createRestaurant(name);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        data-testid="new-restaurant-submit-button"
      >
        Add
      </Button>
      <TextField
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Add Restaurant"
        fullWidth
        variant="filled"
      />
    </form>
  );
};

export default NewRestaurantForm;
