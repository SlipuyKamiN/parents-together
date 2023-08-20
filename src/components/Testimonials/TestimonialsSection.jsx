import { SectionTitle } from 'components/AboutUs/AboutUsSection.styled';
import {
  AuthorDataWrapper,
  FeedbackComment,
  FeedbackItem,
  FeedbackList,
  FeedbackStarsList,
  Section,
  SectionTextWrapper,
  SwiperButtonsList,
} from './TestimonialsSection.styled';
import { SectionDescription } from 'components/WhyWe/WhyWeSection.styled';
import authorAvatar1 from 'images/author-1.png';
import authorAvatar2 from 'images/author-2.png';
import authorAvatar3 from 'images/author-3.png';
import authorAvatar4 from 'images/author-4.png';
import authorAvatar5 from 'images/author-5.png';
import authorAvatar6 from 'images/author-6.png';
import FeedbackStars from './FeedbackStars';
import { Container } from 'components/Global/Container.styled';
import SwiperButton from './SwiperButton';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';

const feedbackData = [
  {
    avatarPath: authorAvatar1,
    author: 'Анна Бойко',
    assessment: 5,
    comment:
      'Спільнота "Батьки разом" - це дійсно щось особливе. Тут ми знайшли підтримку та натхнення, щоб зробити перший рік у школі нашої дитини незабутнім.',
  },
  {
    avatarPath: authorAvatar2,
    author: 'Катерина Лапенко',
    assessment: 3,
    comment:
      'Це неймовірна ідея! Ми отримали багато цінних порад від інших батьків, які нам дуже допомогли у підготовці нашої доньки до школи.',
  },
  {
    avatarPath: authorAvatar3,
    author: 'Максим Кирилов',
    assessment: 4,
    comment:
      'Дякуємо, "Батьки разом"! Ви допомогли нам не лише заощадити кошти на закупівлях для школи, а й знайти чудових друзів для нашої дитини!',
  },
  {
    avatarPath: authorAvatar4,
    author: 'Юрій Древніцький',
    assessment: 5,
    comment:
      'Це неймовірна ідея! Ми отримали багато цінних порад від інших батьків, які нам дуже допомогли у підготовці нашої доньки до школи.',
  },
  {
    avatarPath: authorAvatar5,
    author: "Анастасія Сем'янчук",
    assessment: 4,
    comment:
      'Дякуємо, "Батьки разом"! Ви допомогли нам не лише заощадити кошти на закупівлях для школи, а й знайти чудових друзів для нашої дитини!',
  },
  {
    avatarPath: authorAvatar6,
    author: 'Вікторія Мельник',
    assessment: 5,
    comment:
      'Спільнота "Батьки разом" - це дійсно щось особливе. Тут ми знайшли підтримку та натхнення, щоб зробити перший рік у школі нашої дитини незабутнім.',
  },
];

const Testimonials = () => {
  const [page, setPage] = useState(1);
  const isLastPage = Math.ceil(feedbackData.length / 3 === page);

  const handleSwipe = (next = true) => {
    setPage(prev => (next ? prev + 1 : prev - 1));
  };

  const firstFeedBack = page === 1 ? page - 1 : (page - 1) * 3;

  const feedbackToRender = feedbackData.slice(firstFeedBack, firstFeedBack + 3);

  return (
    <Section id="testimonials">
      <Container>
        <SectionTextWrapper>
          <SectionTitle>Слова наших користувачів</SectionTitle>
          <SectionDescription>
            Деякі з наших користувачів поділились своїм досвідом перебуваючи у
            нашому комюніті:
          </SectionDescription>
        </SectionTextWrapper>
        <FeedbackList>
          {feedbackToRender.map(
            ({ avatarPath, author, assessment, comment }) => (
              <FeedbackItem key={author}>
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
              </FeedbackItem>
            )
          )}
        </FeedbackList>
        <SwiperButtonsList>
          <li>
            <SwiperButton
              disabled={page === 1}
              onClick={() => {
                handleSwipe(false);
              }}
            >
              <FaArrowLeft size={25} />
            </SwiperButton>
          </li>
          <li>
            <SwiperButton
              disabled={isLastPage}
              onClick={() => {
                handleSwipe();
              }}
            >
              <FaArrowRight size={25} />
            </SwiperButton>
          </li>
        </SwiperButtonsList>
      </Container>
    </Section>
  );
};

export default Testimonials;
