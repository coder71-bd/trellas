import React from 'react';

const Alert = ({ message, openAlert, setOpenAlert }) => {
  return (
    <section>
      {/* <!-- Main modal --> */}
      <div
        id="defaultModal"
        aria-hidden="true"
        className={`${
          !openAlert && 'hidden'
        } overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-40 h-modal md:h-full md:inset-0 flex justify-center itmes-center`}
      >
        <div className="relative px-4 w-full max-w-2xl h-full md:h-auto flex justify-center items-center">
          {/* <!-- Modal content --> */}
          <div className="relative bg-error text-white rounded-lg shadow space-y-3 py-6">
            {/* <!-- Modal body --> */}
            <div className="p-4 text-2xl">{message}</div>
            <button
              data-modal-toggle="defaultModal"
              type="button"
              className="btn block mx-auto bg-success hover:bg-success/50"
              onClick={() => setOpenAlert(false)}
            >
              Okay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Alert;
