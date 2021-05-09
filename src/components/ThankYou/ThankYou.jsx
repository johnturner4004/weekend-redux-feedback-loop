import { useSelector, useDispatch } from "react-redux";
import "./ThankYou.css";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";
import axios from 'axios'

function ThankYou() {
  const history = useHistory();

  const dispatch = useDispatch();

  //retrieves data from feedbackReducer
  const feedback = useSelector((store) => store.feedbackReducer);

  // sends data to the database, clears store, and sends user back to beginning of form
  function handleClick() {
    console.log("click");
    axios.post('/feedback', feedback)
    .then(response => {
      console.log('Added feedback to database', response);
    })
    .catch(error => {
      console.log('Unable to add feedback to database', error);
      alert('unable to add feedback to server');
    });
    dispatch({type: 'CLEAR_FEEDBACK'});
    history.push('/');
  }

  return (
    <>
      <h1>Thank you for your feedback</h1>
      <h2>Please review your feedback and click submit</h2>
      <div className="flex">
        <div className="tableContainer">
          <table>
            <tbody>
              <tr>
                <td>Feeling: </td>
                <td>{feedback.feeling}</td>
                <td>
                  <Button
                    id="button"
                    onClick={() => history.push("/")}
                    variant="contained"
                    color="primary"
                  >
                    Edit
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Understanding: </td>
                <td>{feedback.understanding}</td>
                <td>
                  <Button
                    id="button"
                    onClick={() => history.push("/understanding")}
                    variant="contained"
                    color="primary"
                  >
                    Edit
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Support: </td>
                <td>{feedback.support}</td>
                <td>
                  <Button
                    id="button"
                    onClick={() => history.push("/support")}
                    variant="contained"
                    color="primary"
                  >
                    Edit
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Comments: </td>
                <td>{feedback.comments}</td>
                <td>
                  <Button
                    id="button"
                    onClick={() => history.push("/comments")}
                    variant="contained"
                    color="primary"
                  >
                    Edit
                  </Button>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>
                  <Button
                    id="button"
                    onClick={handleClick}
                    variant="contained"
                    color="primary"
                  >
                    Submit
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ThankYou;
