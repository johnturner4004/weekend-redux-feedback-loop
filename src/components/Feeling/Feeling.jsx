import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router';

function Feeling() {
  
    const history = useHistory();

  const dispatch = useDispatch();

  const feedback = useSelector(store => store.feedbackReducer);

  const defaultState = (feedback.feeling && feedback.understanding && feedback.support && feedback.comments) ? feedback.feeling : 5;

  const [rating, setRating] = useState(defaultState);

  const path = (feedback.feeling && feedback.understanding && feedback.support && feedback.comments) ? '/thank-you' : '/understanding';

  const handleClick = () => {
    if (rating >= 1 && rating <= 5 && Number.isInteger(rating)) {
      dispatch({type: 'ADD_FEEDBACK', payload: {property: 'feeling', value: rating}})
      history.push(path);
    } else {
      alert("Ratings must be between 1 and 5");
    }
  };

  return (
    <>
      <h1>How are you feeling today?</h1>
      <TextField
        id="standard-number"
        label="Feeling?"
        type="number"
        value={rating}
        onChange={() => setRating(Number(event.target.value))}
        InputProps={{ inputProps: { min: 1, max: 5 } }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      {(feedback.feeling && feedback.understanding && feedback.support && feedback.comments) ? <Button
        id="button"
        onClick={handleClick}
        variant="contained"
        color="primary"
      >
        Return
      </Button> :
      <Button
        id="button"
        onClick={handleClick}
        variant="contained"
        color="primary"
      >
        Next
      </Button> }
    </>
  );
}

export default Feeling;
