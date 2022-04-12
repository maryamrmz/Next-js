import { useState, VFC } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';

interface CommentsProps {
  eventId: string;
}

const Comments: VFC<CommentsProps> = ({ eventId }) => {
  const [showComments, setShowComments] = useState(false);

  const toggleCommentsHandler = () => {
    setShowComments((prevStatus) => !prevStatus);
  };

  const addCommentHandler = (commentData: any) => {
    // send data to API
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
      {showComments && <CommentList />}
    </section>
  );
};

export default Comments;
