import styled from '@emotion/styled';
import joinUsBgImagePath from 'images/join-us-background.png';
import formBgImagePath from 'images/form-background.png';
import { colors } from 'styles/common/vars';

export const Section = styled.section`
  padding: 82px 0 100px;
  position: relative;
`;

export const SectionText = styled.div`
  max-width: 654px;

  @media screen and (min-width: 1280px) {
    position: absolute;
    top: -30px;
  }

  & > p {
    margin: 0;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  padding: 209px 0 25px;

  background-image: url(${joinUsBgImagePath}), url(${formBgImagePath});
  background-size: cover, 40%;
  background-position: top, top right;
  background-repeat: no-repeat;

  @media screen and (min-width: 1280px) {
    padding: 209px 70px 70px;
    background-size: contain, 633px;
  }
`;

export const Form = styled.form`
  max-width: 100%;
`;

export const InputWrapper = styled.div`
  position: relative;

  max-width: 402px;
  width: 100%;
  margin-bottom: 28px;

  @media screen and (min-width: 480px) {
    width: 402px;
  }

  label {
    display: block;
    margin-bottom: 8px;
  }

  input {
    width: 100%;

    padding: 25px;
    border-radius: 50px;
    border: none;
    background-color: ${colors.inputBg};

    &:focus {
      background-color: ${colors.inputFocusedBg};
    }
  }
`;

export const ErrMessage = styled.span`
  display: block;
  margin-top: 10px;

  max-width: 150%;
  font-size: 14px;
  line-height: 00.8;
  color: red;
`;
