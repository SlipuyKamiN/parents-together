import SwiperButton from './SwiperButton';
import FeedbackCard from './FeedbackCard';
import { useState } from 'react';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';
import { feedbackData } from 'data/feedbackData';
import { FeedbackList, SwiperButtonsList } from './FeedbackSwiper.styled';

const FeedbackSwiper = () => {
  const [page, setPage] = useState(1);
  const isLastPage = Math.ceil(feedbackData.length / 3 === page);

  const handleSwipe = (next = true) => {
    setPage(prev => (next ? prev + 1 : prev - 1));
  };

  const firstFeedBack = page === 1 ? page - 1 : (page - 1) * 3;

  const feedbackToRender = feedbackData.slice(firstFeedBack, firstFeedBack + 3);

  return (
    <>
      <FeedbackList>
        {feedbackToRender.map(item => (
          <FeedbackCard key={item.author} item={item} />
        ))}
      </FeedbackList>
      <SwiperButtonsList>
        <li>
          <SwiperButton
            disabled={page === 1}
            onClick={() => {
              handleSwipe(false);
            }}
          >
            <HiOutlineArrowLeft size={25} />
          </SwiperButton>
        </li>
        <li>
          <SwiperButton
            disabled={isLastPage}
            onClick={() => {
              handleSwipe();
            }}
          >
            <HiOutlineArrowRight size={25} />
          </SwiperButton>
        </li>
      </SwiperButtonsList>
    </>
  );
};

export default FeedbackSwiper;
