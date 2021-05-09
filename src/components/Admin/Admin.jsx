import axios from "axios";
import { useState, useEffect } from "react";

function Admin() {
  const [feedback, setFeedback] = useState([]);

  const getFeedback = () => {
    axios
      .get("/feedback")
      .then((response) => {
        console.log("Got feedback from server", response);
        setFeedback(response.data);
      })
      .catch((error) => {
        console.log("Unable to get data from server", error);
        alert("Unable to get feedback from server");
      });
  };

  useEffect(() => {
    getFeedback();
  }, []);

  return (
    <>
      <h1>Feedback results!</h1>
      <div className="flex">
        <table>
          <thead>
            <tr>
              <th>Feeling</th>
              <th>Understanding</th>
              <th>Support</th>
              <th>Comments</th>
              <th>Delete Row</th>
            </tr>
          </thead>
          <tbody>
            {feedback.map((result) => (
              <tr key={result.id}>
                <td>{result.feeling}</td>
                <td>{result.understanding}</td>
                <td>{result.support}</td>
                <td>{result.comments}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Admin;
