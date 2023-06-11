import Anecdote from './Anecdote';

const PopularAnecdote = ({ anecdotes, index, votes }) => {
  const highestVote = Math.max(...votes);

  if (highestVote === 0) {
    return <p>No items have currently been voted for.</p>;
  }

  const highestVoteIndex = votes.indexOf(highestVote);

  return (
    <div>
      <Anecdote anecdotes={anecdotes} index={highestVoteIndex} />
      <p>Has {highestVote} votes</p>
    </div>
  );
};

export default PopularAnecdote;
