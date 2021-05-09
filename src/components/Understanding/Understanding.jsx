import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Understanding() {

  const history = useHistory();

  const dispatch = useDispatch();

  const feedback = useSelector(store => store.feedbackReducer);
  
  // checks for existing feedback and defaults to 'none' if there isn't any
  const defaultState = (feedback.feeling && feedback.understanding && feedback.support && feedback.comments) ? feedback.understanding : 5;

    // hook to store rating until user clicks next
  const [rating, setRating] = useState(defaultState);

    // uses feedback variable to determine if page was navigated to from the next
  // button of ThankYou.jsx. On ThankYou.jsx, all info will be present. Then
  // navigated to the proper page when button is clicked
  const path = (feedback.feeling && feedback.understanding && feedback.support && feedback.comments) ? '/thank-you' : '/support';

    // dispatches date and pushes to the next page
  const handleClick = () => {
    if (rating >= 1 && rating <= 5 && Number.isInteger(rating)) {
      dispatch({type: 'ADD_FEEDBACK', payload: {property: 'understanding', value: rating}});
      history.push(path);
    } else {
      alert("Ratings must be between 1 and 5");
    }
  };

  return (
    <>
      <h1>How well are you understanding the content?</h1>
      {(feedback.feeling && feedback.understanding && feedback.support && feedback.comments) ? <div /> :
      <Button
        id="button"
        onClick={() => history.push('/')}
        variant="contained"
        color="primary"
      >
        Back
      </Button>}
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
      {/* uses presence or absence of data values to determine if Return of Next button is necessary.  */}
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

export default Understanding;
