import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./AudioPlayer.scss";

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

  const formatDate = (dateString) => {
    const dateParts = dateString.split("-");
    const year = dateParts[0];
    const month = dateParts[1];
    const day = dateParts[2];

    const date = new Date(year, month - 1, day);

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthName = monthNames[date.getMonth()];

    return `${monthName} ${day}, ${year}`;
  };

  return (
    <div className="recordings">
      {recordings.map((recording, index) => (
        <div className="recording" key={index}>
          <audio className="recording-audio" controls>
            <source src={recording.file} type="audio/mpeg" />
          </audio>
          <div className="recording-info">
            <span className="recording-info-date">
              Recording {index + 1}: {formatDate(recording.date)}
            </span>
            <span className="recording-info-loc">
              Location: {recording.loc}{" "}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AudioPlayer;
// {recording.type} -
// Recording {index + 1}: {recording.date}{" "}
