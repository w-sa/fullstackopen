import { useState } from 'react';
import Anecdote from './components/Anecdote';
import Button from './components/Button';
import PopularAnecdote from './components/PopularAnecdote';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const generateRandomInt = () => {
    return Math.floor(Math.random() * anecdotes.length);
  };

  const handleNextAnecdoteClick = () => {
    setSelected(generateRandomInt());
  };

  const handleVoteClick = () => {
    setVotes((prevState) => {
      let votes = [...prevState];
      votes[selected] += 1;
      return votes;
    });
  };

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <Anecdote anecdotes={anecdotes} index={selected} />
      <Button onClick={handleVoteClick} text="vote" />
      <Button onClick={handleNextAnecdoteClick} text="next anecdote" />
      <h2>Anecdote with the most votes</h2>
      <PopularAnecdote anecdotes={anecdotes} votes={votes} />
    </div>
  );
};

export default App;
