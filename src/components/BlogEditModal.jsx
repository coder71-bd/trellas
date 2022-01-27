import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const BlogEditModal = ({ id, openEditModal, setOpenEditModal }) => {
  return (
    <section>
      {/* <!-- Main modal --> */}
      <div
        id="defaultModal"
        aria-hidden="true"
        className={`${
          !openEditModal && 'hidden'
        } overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-40 h-modal md:h-full md:inset-0 flex justify-center itmes-center`}
      >
        <div className="relative px-4 w-full max-w-2xl h-full md:h-auto flex justify-center items-center">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow">
            {/* <!-- Modal header --> */}
            <div className="flex justify-between items-start p-5 rounded-t border-b">
              <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl">
                Edit the blog
              </h3>
              <FontAwesomeIcon
                icon={faTimes}
                color="#fff"
                className="p-1 text-4xl text-info hover:text-info/50 cursor-pointer transition-all duration-500"
                onClick={() => setOpenEditModal(false)}
              />
            </div>

            {/* <!-- Modal body --> */}
            <div className="p-6 space-y-6"></div>

            {/* <!-- Modal footer --> */}
            <div className="flex items-center p-6 space-x-2 rounded-b ">
              <button
                data-modal-toggle="defaultModal"
                type="button"
                className="btn bg-success hover:bg-success/50"
              >
                Done
              </button>
              <button
                data-modal-toggle="defaultModal"
                type="button"
                className="btn bg-error"
                onClick={() => setOpenEditModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogEditModal;
