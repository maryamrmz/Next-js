import { VFC, useRef, useState, FormEvent } from 'react';
import { commentType } from '../shared/commentType';

interface NewCommentProps {
  onAddComment: (commentData: commentType) => void;
}

const NewComment: VFC<NewCommentProps> = ({ onAddComment }) => {
  const [isInvalid, setIsInvalid] = useState(false);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const commentInputRef = useRef<HTMLTextAreaElement>(null);

  const sendCommentHandler = (event: FormEvent) => {
    event.preventDefault();

    const enteredEmail = emailInputRef?.current?.value;
    const enteredName = nameInputRef?.current?.value;
    const enteredComment = commentInputRef?.current?.value;

    if (
      !enteredEmail ||
      enteredEmail.trim() === '' ||
      !enteredEmail.includes('@') ||
      !enteredName ||
      enteredName.trim() === '' ||
      !enteredComment ||
      enteredComment.trim() === ''
    ) {
      setIsInvalid(true);
      return;
    }

    onAddComment({
      email: enteredEmail,
      name: enteredName,
      text: enteredComment,
    });
  };

  return (
    <form className="bg-emerald-500 p-4" onSubmit={sendCommentHandler}>
      <div className="flex w-full flex-wrap justify-between gap-4 align-middle">
        <div className="min-w-[10rem] flex-1">
          <label htmlFor="email" className="mb-2 block text-white">
            Your email
          </label>
          <input
            type="email"
            id="email"
            ref={emailInputRef}
            className="w-full rounded-sm bg-emerald-50 p-1"
          />
        </div>
        <div className="min-w-[10rem] flex-1">
          <label htmlFor="name" className="mb-2 block text-white">
            Your name
          </label>
          <input
            type="text"
            id="name"
            ref={nameInputRef}
            className="w-full rounded-sm bg-emerald-50 p-1"
          />
        </div>
      </div>
      <div>
        <label htmlFor="comment" className="my-2 block text-white">
          Your comment
        </label>
        <textarea
          id="comment"
          rows={5}
          ref={commentInputRef}
          className="w-full rounded-sm bg-emerald-50 p-1"
        ></textarea>
      </div>
      {isInvalid && <p>Please enter a valid email address and comment!</p>}
      <button className="m-auto mt-2 flex justify-center rounded-sm bg-white py-1 px-2 text-emerald-500">
        Submit
      </button>
    </form>
  );
};

export default NewComment;
