import { useEffect, useState, VFC } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import { commentType } from '../shared/commentType';

interface CommentsProps {
  eventId: string;
}

const Comments: VFC<CommentsProps> = ({ eventId }) => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (!showComments) return;

    fetch('/api/comments/' + eventId)
      .then((response) => response.json())
      .then((data) => setComments(data.comments));
  }, [showComments]);

  const toggleCommentsHandler = () => {
    setShowComments((prevStatus) => !prevStatus);
  };

  const addCommentHandler = (commentData: commentType) => {
    fetch('/api/comments/' + eventId, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <section className="m-auto my-4 w-2/5">
      <button
        onClick={toggleCommentsHandler}
        className="m-auto mb-4 flex rounded-sm border border-emerald-500 p-2 text-emerald-500"
      >
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList items={comments} />}
    </section>
  );
};

export default Comments;
