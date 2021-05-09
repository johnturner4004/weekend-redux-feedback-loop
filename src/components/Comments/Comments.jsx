import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Supported() {
  const history = useHistory();

  const dispatch = useDispatch();

  const [comment, setComment] = useState('');

  const handleClick = () => {
    dispatch({
      type: "ADD_FEEDBACK",
      payload: { property: "comments", value: comment },
    });
  };

  return (
    <>
      <h1>Any comments you want to leave?</h1>
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

export default Supported;
