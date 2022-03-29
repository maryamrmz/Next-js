import { FormEvent, useRef, VFC } from 'react';

import Button from '../ui/button';

interface EventSearchProps {
  onSearch: (
    selectedYear: string | undefined,
    selectedMonth: string | undefined
  ) => void;
}

const EventSearch: VFC<EventSearchProps> = ({ onSearch }) => {
  const yearInputRef = useRef<HTMLSelectElement>(null);
  const monthInputRef = useRef<HTMLSelectElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const selectedYear = yearInputRef?.current?.value;
    const selectedMonth = monthInputRef?.current?.value;

    onSearch(selectedYear, selectedMonth);
  };

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={submitHandler}
        className="mt-4 flex w-1/2 items-center justify-between rounded-md border-2 border-slate-400 p-2"
      >
        <div>
          <label htmlFor="year">Year</label>
          <select name="year" id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div>
          <label htmlFor="month">Month</label>
          <select name="month" id="month" ref={monthInputRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
        <Button>Find Events</Button>
      </form>
    </div>
  );
};

export default EventSearch;
