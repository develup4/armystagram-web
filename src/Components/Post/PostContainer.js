import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useInput } from '../Input';
import { useMutation } from 'react-apollo-hooks';
import { TOGGLE_LIKE, ADD_COMMENT } from './PostQueries';
import { toast } from 'react-toastify';
import PostPresenter from './PostPresenter';

const PostContainer = ({
  isLogin,
  id,
  user,
  caption,
  files,
  likeCount,
  isLiked,
  comments,
  createdAt,
}) => {
  // Image slide => tODO : NEED TO CHANGE
  const [currentItem, setCurrentItem] = useState(0);
  const slide = () => {
    const totalFiles = files.length;
    if (currentItem === totalFiles - 1) {
      setTimeout(() => setCurrentItem(0), 3000);
    } else {
      setTimeout(() => setCurrentItem(currentItem + 1), 3000);
    }
  };

  useEffect(() => {
    slide();
  }, [currentItem]);

  // Like
  const [isLikedState, setIsLiked] = useState(isLiked);
  const [likeCountState, setLikeCount] = useState(likeCount);

  const toggleLikeMutation = useMutation(TOGGLE_LIKE, {
    variables: { postId: id },
  });

  const toggleLike = () => {
    toggleLikeMutation();

    // My 'like' is managed locally
    if (isLikedState === true) {
      setIsLiked(false);
      setLikeCount(likeCountState - 1);
    } else {
      setIsLiked(true);
      setLikeCount(likeCountState + 1);
    }
  };

  const informLoginNeeded = () => {
    toast.error('로그인이 필요해요');
  };

  // Comment
  const comment = useInput('');
  const [selfComments, setSelfComments] = useState([]);

  const addCommentMutation = useMutation(ADD_COMMENT, {
    variables: { postId: id, text: comment.value },
  });

  const onKeyPress = async (event) => {
    const EnterKey = 13;
    const { which } = event;

    if (which === EnterKey) {
      if (!isLogin) {
        toast.error('로그인이 필요해요');
        comment.setValue('');
        return;
      }

      event.preventDefault();
      try {
        const {
          data: { addComment },
        } = await addCommentMutation();

        // Comment display is updated locally
        setSelfComments([...selfComments, addComment]);
        comment.setValue('');
      } catch {
        toast.error('일시적인 오류가 발생했어요 ㅠ');
      }
    }
  };

  return (
    <PostPresenter
      user={user}
      caption={caption}
      files={files}
      currentItem={currentItem}
      isLiked={isLikedState}
      likeCount={likeCountState}
      toggleLike={isLogin ? toggleLike : informLoginNeeded}
      comments={comments}
      newComment={comment}
      selfComments={selfComments}
      onKeyPress={onKeyPress}
      createdAt={createdAt}
    />
  );
};

PostContainer.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    profile: PropTypes.string,
    username: PropTypes.string.isRequired,
  }).isRequired,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  likeCount: PropTypes.number.isRequired,
  isLiked: PropTypes.bool.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
  caption: PropTypes.string.isRequired,
  location: PropTypes.string,
  createdAt: PropTypes.string.isRequired,
};

export default PostContainer;
