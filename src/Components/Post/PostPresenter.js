import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FatText from '../FatText';
import TextareaAutosize from 'react-autosize-textarea';
import ProfilePicture from '../ProfilePicture';
import {
  HeartFullIcon,
  HeartEmptyIcon,
  CommentIcon,
  MessageIcon,
} from '../../Resources/Icons/Icons';

const Post = styled.div`
  ${(props) => props.theme.whiteBox};
  width: 100%;
  max-width: 650px;
  user-select: none;
  margin-bottom: 25px;
  a {
    color: inherit;
  }
`;

const Header = styled.header`
  padding: 15px;
  display: flex;
  align-items: center;
`;

const UserColumn = styled.div`
  margin-left: 10px;
`;

const PictureCount = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 7px;
`;

const Files = styled.div`
  position: relative;
  padding-bottom: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-shrink: 0;
`;

const File = styled.div`
  max-width: 100%;
  width: 100%;
  height: 650px;
  position: absolute;
  top: 0;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  opacity: ${(props) => (props.showing ? 1 : 0)};
  transition: opacity 0.5s linear;
`;

const Meta = styled.div`
  padding: 15px;
`;

const Button = styled.span`
  cursor: pointer;
`;

const Buttons = styled.div`
  ${Button} {
    margin-right: 10px;
  }
  margin-bottom: 10px;
`;

const Timestamp = styled.span`
  font-weight: 400;
  text-transform: uppercase;
  opacity: 0.5;
  display: block;
  font-size: 12px;
  margin: 10px 0px;
  padding-bottom: 10px;
  border-bottom: ${(props) => props.theme.lightGreyColor} 1px solid;
`;

const Textarea = styled(TextareaAutosize)`
  border: none;
  width: 100%;
  resize: none;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;

const Comments = styled.ul`
  margin-top: 10px;
`;

const Comment = styled.li`
  margin-bottom: 7px;
  span {
    margin-right: 5px;
  }
`;

const Caption = styled.div`
  margin: 10px 0px;
`;

export default ({
  user: { username, profile },
  caption,
  files,
  currentItem,
  isLiked,
  likeCount,
  toggleLike,
  comments,
  newComment,
  selfComments,
  onKeyPress,
  createdAt,
}) => (
  <Post>
    <Header>
      <ProfilePicture size='small' url={profile} />
      <UserColumn>
        <Link to={`/${username}`}>
          <FatText text={username} />
        </Link>
        <PictureCount>
          {files.length === 1 ? '1 picture' : `${files.length} pictures`}
        </PictureCount>
      </UserColumn>
    </Header>
    <Files>
      {files &&
        files.map((file, index) => (
          <File key={file.id} src={file.url} showing={index === currentItem} />
        ))}
    </Files>
    <Meta>
      <Buttons>
        <Button onClick={toggleLike}>
          {isLiked ? <HeartFullIcon /> : <HeartEmptyIcon />}
        </Button>
        <Button>
          <CommentIcon />
        </Button>
        <Button>
          <MessageIcon />
        </Button>
      </Buttons>
      <FatText text={likeCount === 1 ? '1 like' : `${likeCount} likes`} />
      <Caption>
        <FatText text={username} /> {caption}
      </Caption>
      {comments && (
        <Comments>
          {comments.map((comment) => (
            <Comment key={comment.id}>
              <FatText text={comment.user.username} />
              {comment.text}
            </Comment>
          ))}
          {selfComments.map((comment) => (
            <Comment key={comment.id}>
              <FatText text={comment.user.username} />
              {comment.text}
            </Comment>
          ))}
        </Comments>
      )}
      <Timestamp>{`${createdAt.split('T')[0]} ${
        createdAt.split('T')[1].split('.')[0]
      }`}</Timestamp>
      <Textarea
        onKeyPress={onKeyPress}
        placeholder={'댓글 달기...'}
        value={newComment.value}
        onChange={newComment.onChange}
      />
    </Meta>
  </Post>
);

// tODO: CAPTION 길이 넘치면 줄넘김 안됨, 이름도 캡
// 댓글이 많으면 접는데 캡션은 안접도록
// todo : 한끌 폰트,
// 코멘트 버튼으로 아에 댓글을 열고닫기. 열면 일정크기의 스크롤 ㅐ널
// 라이크 => 멤버 외 몇명이 좋아합니다. 클릭하면 팝업
// 대댓글?
// 댓글은 기본 두줄인데 버튼 누르면 패널 더 크게 보여주기(누를때만 스크롤?)
