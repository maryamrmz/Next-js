import React from 'react';

const CommentList = () => {
  return (
    <ul className="my-4">
      <li className="flex justify-between border-b py-2">
        <p>My comment is amazing!</p>
        <div className="mt-4">
          By <address className="inline">Maryam</address>
        </div>
      </li>
      <li className="flex justify-between border-b py-2">
        <p>My comment is amazing!</p>
        <div className="mt-4">
          By <address className="inline">Maryam</address>
        </div>
      </li>
    </ul>
  );
};

export default CommentList;
