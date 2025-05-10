import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ScoresTable = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/scores')
      .then(res => setScores(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Player</th>
          <th>Score</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {scores.map(score => (
          <tr key={score.id}>
            <td>{score.player}</td>
            <td>{score.value}</td>
            <td>{new Date(score.created_at).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ScoresTable;