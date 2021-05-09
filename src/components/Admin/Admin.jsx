import axios from 'axios';
import {useState} from 'react';
import DeleteSweepRoundedIcon from '@material-ui/icons/DeleteSweepRounded';


function Admin() {

  const [feedback, setFeedback] = useState([]);

  const getFeedback = () => {
  axios.get('/feedback')
    .then(response => {
      console.log('Got feedback from server', response);
      setFeedback(response.data);
    })
    .catch(error => {
      console.log('Unable to get data from server', error);
      alert('Unable to get feedback from server');
    })
  }

  return(
    <>
    <h1>Feedback results!</h1>
    <table>
      <tbody>
        {feedback.map(result =>
          <tr key={result.id}>
            <td>{result.feeling}</td>
            <td>{result.understanding}</td>
            <td>{result.support}</td>
            <td>{result.comments}</td>
            <td><DeleteSweepRoundedIcon /></td>
          </tr>
        )}
      </tbody>
    </table>
    </>
  )
}

export default Admin