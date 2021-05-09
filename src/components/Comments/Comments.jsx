import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Supported() {

  const history = useHistory();

  const dispatch = useDispatch();

  const feedback = useSelector(store => store.feedbackReducer);

  const defaultState = (feedback.feeling && feedback.understanding && feedback.support && feedback.comments) ? feedback.comments : 'none';

  const [comment, setComment] = useState(defaultState);

  const handleClick = () => {
    dispatch({
      type: "ADD_FEEDBACK",
      payload: { property: "comments", value: comment }
    });
    history.push('/thank-you');
  };

  return (
    <>
      <h1>Any comments you want to leave?</h1>
      {(feedback.feeling && feedback.understanding && feedback.support && feedback.comments) ? <div /> :
      <Button
        id="button"
        onClick={() => history.push('/understanding')}
        variant="contained"
        color="primary"
      >
        Back
      </Button>}
      <TextField
        id="standard-basic"
        label="Comments?"
        type="text"
        value={comment}
        onChange={() => setComment(event.target.value)}
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

export default Supported;
