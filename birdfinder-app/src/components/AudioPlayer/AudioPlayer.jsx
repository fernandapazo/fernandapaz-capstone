import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function AudioPlayer() {
  const [recordings, setRecordings] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://nuthatch.lastelm.software/birds/${id}`, {
        headers: {
          "API-Key": "623eb1a1-a5c4-420f-b85b-23df5c497190",
        },
      })
      .then((response) => {
        setRecordings(response.data.recordings);
        console.log(response.data.recordings);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {recordings.map((recording, index) => (
        <div key={index}>
          <audio controls>
            <source src={recording.file} type="audio/mpeg" />
          </audio>
          <p>
            Recording {index + 1}: {recording.type} - {recording.date},
            Location: {recording.loc}
          </p>
        </div>
      ))}
    </div>
  );
}

export default AudioPlayer;
