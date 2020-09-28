import React from 'react';
import styled from 'styled-components';
import ReactTextareaAutocomplete from '@webscopeio/react-textarea-autocomplete';
import '@webscopeio/react-textarea-autocomplete/style.css';
import TextareaAutosize from 'react-autosize-textarea';
import { Hashtags } from '../../Resources/Datas/Hashtags';
import Button from '../Button/Button';

const UploadPanel = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: 900;
  margin-left: 5px;
  color: #8e8e8e;
`;

const UploadWrapper = styled.div`
  width: 60px;
  align-self: flex-end;
`;

const Label = styled.label`
  font-size: 11px;
  margin-left: 5px;
`;

const RadioWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
`;

const RadioTitle = styled.label`
  font-size: 12px;
  margin-left: 5px;
  margin-right: 60px;
`;

const Textarea = styled(TextareaAutosize)`
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  width: 100%;
  resize: none;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;

const UploadImageWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const UploadImage = styled.img`
  src: url(${(props) => props.src});
  width: 75px;
  height: 75px;
  border: 1px solid #dbdbdb;
`;

const Item = ({ entity: { name, char } }) => <div>{`#${name}`}</div>;
const Loading = ({ data }) => <div>Loading</div>;

const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export default ({ isLogin, addHashtag }) => {
  return (
    <UploadPanel>
      <TitleWrapper>
        <Title>새 게시물</Title>
        <UploadWrapper>
          <Button text={'업로드'}></Button>
        </UploadWrapper>
      </TitleWrapper>
      <div>
        <ReactTextareaAutocomplete
          loadingComponent={Loading}
          textAreaComponent={{ component: Textarea, ref: 'innerRef' }}
          style={{
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
            fontSize: '12px',
          }}
          containerStyle={{
            width: '248px',
            height: '100px',
            marginTop: '5px',
            marginLeft: '5px',
            marginBottom: '10px',
            resize: 'none',
          }}
          itemStyle={{
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
            fontSize: '12px',
            border: 'none',
          }}
          onItemSelected={addHashtag}
          minChar={0}
          trigger={{
            '#': {
              dataProvider: (token) => {
                return shuffle(Hashtags);
              },
              component: Item,
              output: (item, trigger) => item.char,
            },
          }}
        />
      </div>
      <RadioWrapper>
        <RadioTitle>사진 배치</RadioTitle>
        <input type='radio' value='option3' disabled={true} />
        <Label>격자형</Label>
        <input type='radio' value='option3' disabled={true} />
        <Label>슬라이드</Label>
      </RadioWrapper>
      <UploadImageWrapper>
        <UploadImage src={''} />
        <UploadImage src={''} />
        <UploadImage src={''} />
      </UploadImageWrapper>
    </UploadPanel>
  );
};

// TODO : 해쉬태그 추가시 아래에 파란색으로 추가하도록(state에도 저장해서 업로드할수있도록 하자)
// TODO : RIGHT PANAL은 스크롤 안되도록
// todo : 비로그인시 업로드버튼 비활성화
// 사진추가버튼
