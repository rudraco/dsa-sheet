import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Topics = ({ token }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      const response = await axios.get('http://localhost:5000/api/topics', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTopics(response.data);
    };
    fetchTopics();
  }, [token]);

  const handleCompletion = async (problemId) => {
    await axios.post('http://localhost:5000/api/topics/complete', { problemId, userId: 'USER_ID' }); // Replace 'USER_ID' with actual user ID
    // Update local state or refetch topics
  };

  return (
    <div>
      {topics.map((topic) => (
        <div key={topic._id}>
          <h2>{topic.title}</h2>
          {topic.chapters.map((chapter) => (
            <div key={chapter._id}>
              <h3>{chapter.title}</h3>
              {chapter.problems.map((problem) => (
                <div key={problem._id}>
                  <span>{problem.title}</span>
                  <button onClick={() => handleCompletion(problem._id)}>Complete</button>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Topics;