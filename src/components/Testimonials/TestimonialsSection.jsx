import { SectionTitle } from 'components/AboutUs/AboutUsSection.styled';
import { Section } from './TestimonialsSection.styled';
import { SectionDescription } from 'components/WhyWe/WhyWeSection.styled';
import authorAvatar1 from 'images/author-1.png';
import authorAvatar2 from 'images/author-2.png';
import authorAvatar3 from 'images/author-3.png';
import { FaStar } from 'react-icons/fa';

const feedbackData = [
  {
    avatarPath: authorAvatar1,
    author: 'Анна Бойко',
    assessment: 5,
    comment:
      '            "Спільнота "Батьки разом" - це дійсно щось особливе. Тут ми знайшли підтримку та натхнення, щоб зробити перший рік у школі нашої дитини незабутнім.',
  },
  {
    avatarPath: authorAvatar2,
    author: 'Катерина Лапенко',
    assessment: 3,
    comment:
      '"Це неймовірна ідея! Ми отримали багато цінних порад від інших батьків, які нам дуже допомогли у підготовці нашої доньки до школи."',
  },
  {
    avatarPath: authorAvatar3,
    author: 'Максим Кирилов',
    assessment: 4,
    comment:
      'Дякуємо, "Батьки разом"! Ви допомогли нам не лише заощадити кошти на закупівлях для школи, а й знайти чудових друзів для нашої дитини!',
  },
];

const Testimonials = () => {
  return (
    <Section>
      <div>
        <SectionTitle>Слова наших користувачів</SectionTitle>
        <SectionDescription>
          Деякі з наших користувачів поділились своїм досвідом перебуваючи у
          нашому комюніті:
        </SectionDescription>
      </div>
      <ul>
        {feedbackData.map(({ avatarPath, author, assessment, comment }) => (
          <li key={author}>
            <img src={avatarPath} alt="" />
            <h3>{author}</h3>
            <ul>
              {/* {(() => {
                const arr = [];
                arr.length = assessment;

                console.log(arr.length);
                return arr;
              })().map(() => (
                <li>
                  <FaStar size={10} />
                </li>
              ))} */}
            </ul>
            <p>{comment}</p>
          </li>
        ))}
      </ul>
      <ul>
        <li>
          <button type="button">{'<='}</button>
        </li>
        <li>
          <button type="button">{'=>'}</button>
        </li>
      </ul>
    </Section>
  );
};

export default Testimonials;
