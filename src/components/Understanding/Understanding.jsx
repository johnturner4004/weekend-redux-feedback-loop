import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Understanding() {

  const history = useHistory();

  const dispatch = useDispatch();

  const [rating, setRating] = useState(5);

  const handleClick = () => {
    if (rating >= 1 && rating <= 5 && Number.isInteger(rating)) {
      dispatch({type: 'ADD_FEEDBACK', payload: {property: 'understanding', value: rating}});
      history.push('/supported');
    } else {
      alert("Ratings must be between 1 and 5");
    }
  };

  return (
    <>
      <h1>How well are you understanding the content?</h1>
      <TextField
        id="standard-number"
        label="Understanding?"
        type="number"
        value={rating}
        onChange={() => setRating(Number(event.target.value))}
        InputProps={{ inputProps: { min: 1, max: 5 } }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button
        id="button"
        onClick={handleClick}
        variant="contained"
        color="primary"
      >
        Next
      </Button>
    </>
  );
}

export default Understanding;
