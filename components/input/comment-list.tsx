import { VFC } from 'react';

import { commentType } from '../shared/commentType';

interface CommentListProps {
  items: commentType[];
}

const CommentList: VFC<CommentListProps> = ({ items }) => {
  return (
    <ul className="my-4">
      {items.map((item) => (
        <li key={item._id} className="flex justify-between border-b py-2">
          <p>{item.text}</p>
          <div className="mt-4">
            By <address className="inline">{item.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
