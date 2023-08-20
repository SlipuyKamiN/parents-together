import {
  AuthorDataWrapper,
  FeedbackComment,
  FeedbackItem,
  FeedbackStarsList,
} from './FeedbackCard.styled';
import FeedbackStars from './FeedbackStars';

const FeedbackCard = ({
  item: { avatarPath, author, assessment, comment },
}) => {
  return (
    <FeedbackItem>
      <div>
        <AuthorDataWrapper>
          <img src={avatarPath} alt={author} width={63} height={63} />
          <div>
            <h3>{author}</h3>
            <FeedbackStarsList>
              <FeedbackStars quantity={assessment} />
            </FeedbackStarsList>
          </div>
        </AuthorDataWrapper>
        <FeedbackComment>"{comment}"</FeedbackComment>
      </div>
    </FeedbackItem>
  );
};

export default FeedbackCard;
