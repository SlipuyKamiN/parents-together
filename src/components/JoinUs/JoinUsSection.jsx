import { SectionTitle } from 'components/AboutUs/AboutUsSection.styled';
import { SectionDescription } from 'components/WhyWe/WhyWeSection.styled';
import {
  ErrMessage,
  Form,
  FormWrapper,
  InputWrapper,
  Section,
  SectionText,
} from './JoinUsSection.styled';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Container } from 'components/Global/Container.styled';
import MainButton from 'components/Global/MainButton';

const JoinUsSection = () => {
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .matches(
        "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
        'Name may contain only letters, apostrophe, dash and spaces.'
      )
      .required(),
    number: yup
      .string()
      .matches(
        '^[+]?[(]?[0-9]{1,4}[)]?[-s.]?[0-9]{1,4}[-s.]?[0-9]{1,6}$',
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      )
      .required(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleFormSubmit = ({ name, number }) => {
    console.table({ name, number });
    reset({ name: '', number: '' });
  };
  return (
    <Section>
      <Container>
        <SectionText>
          <SectionTitle>Приєднуйтесь до "Батьки разом" сьогодні!</SectionTitle>
          <SectionDescription>
            Запрошуємо вас стати частиною нашої колаборативної мережі та
            підготувати вашу дитину до початкової школи разом з нами.
            Приєднуйтесь сьогодні та робіть перші кроки до спільного успіху!
          </SectionDescription>
        </SectionText>
        <FormWrapper>
          <Form autoComplete="off" onSubmit={handleSubmit(handleFormSubmit)}>
            <InputWrapper>
              <label htmlFor="name">Ім`я</label>
              <input
                id="name"
                type="text"
                placeholder="Валерія"
                {...register('name')}
              />
              {errors.name && <ErrMessage>{errors.name.message}</ErrMessage>}
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="number">Номер телефону</label>
              <input
                id="number"
                type="text"
                placeholder="380 00 00 00 000"
                {...register('number')}
              />
              {errors.number && (
                <ErrMessage>{errors.number.message}</ErrMessage>
              )}
            </InputWrapper>
            <MainButton innerText={'Приєднатись зараз'} />
          </Form>
        </FormWrapper>
      </Container>
    </Section>
  );
};

export default JoinUsSection;
