import React from 'react';

const BlogDeleteModal = ({
  id,
  openDeleteModal,
  setOpenDeleteModal,
  handleDeleteBlog,
}) => {
  return (
    <section>
      {/* <!-- Main modal --> */}
      <div
        id="defaultModal"
        aria-hidden="true"
        className={`${
          !openDeleteModal && 'hidden'
        } overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-40 h-modal md:h-full md:inset-0 flex justify-center itmes-center`}
      >
        <div className="relative px-4 w-full max-w-2xl h-full md:h-auto flex justify-center items-center">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow">
            {/* <!-- Modal body --> */}
            <div className="p-4 text-2xl">
              Do you really want to delete this blog
            </div>

            {/* <!-- Modal footer --> */}
            <div className="flex items-center p-6 space-x-2">
              <button
                data-modal-toggle="defaultModal"
                type="button"
                className="btn bg-error"
                onClick={() => handleDeleteBlog(id)}
              >
                Delete
              </button>
              <button
                data-modal-toggle="defaultModal"
                type="button"
                className="btn bg-success hover:bg-success/50"
                onClick={() => setOpenDeleteModal(false)}
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

export default BlogDeleteModal;
