import { FaStar } from 'react-icons/fa';

const FeedbackStars = ({ quantity }) => {
  const stars = [];
  for (let i = 0; i < quantity; i += 1) {
    stars.push(
      <li key={i}>
        <FaStar size={15} />
      </li>
    );
  }
  return stars;
};

export default FeedbackStars;
