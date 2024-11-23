function App() {
  return (
    <>
      <nav className='bg-white shadow'>
        <div className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
          <div className='text-xl font-bold'>Social Chat</div>
          <div>
            <a href='#' className='text-gray-600 hover:text-blue-500 px-4'>
              Home
            </a>
            <a href='#' className='text-gray-600 hover:text-blue-500 px-4'>
              Profile
            </a>
            <a href='#' className='text-gray-600 hover:text-blue-500 px-4'>
              Message
            </a>
            <a href='#' className='text-gray-600 hover:text-blue-500 px-4'>
              Logout
            </a>
          </div>
        </div>
      </nav>

      <main className='max-w-7xl mx-auto px-4 py-8'>
        <div className='bg-white shadow rounded-lg p-6 mb-6'>
          <h2 className='text-lg font-semibold mb-4'>Create a Post</h2>
          <textarea
            className='w-full border border-gray-300 rounded-lg p-2'
            rows={3}
            placeholder="What's on your mind?"
          ></textarea>
          <button className='mt-2 bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600'>
            Post
          </button>
        </div>

        <div>
          <div className='bg-white shadow rounded-lg p-6 mb-6'>
            <h3 className='font-semibold'>User Name</h3>
            <p className='text-gray-700 mt-2'>
              This is an example of a post content. It can be anything you want
              to share!
            </p>
            <div className='mt-4 flex justify-between items-center'>
              <button className='text-blue-500 hover:underline'>Like</button>
              <span className='text-gray-500 text-sm'>10 likes</span>
            </div>

            <div className='mt-4 border-t pt-4'>
              <h4 className='font-semibold'>Comments:</h4>
              <textarea
                className='w-full border border-gray-300 rounded-lg p-2 mt-2'
                rows={2}
                placeholder='Add a comment...'
              ></textarea>
              <button className='mt-2 bg-blue-500 text-white rounded-lg px-4 py-1 hover:bg-blue-600'>
                Comment
              </button>

              <div className='mt-2 text-gray-700'>
                <strong>User Commenter:</strong> This is a comment!
              </div>
            </div>
          </div>

          <div className='bg-white shadow rounded-lg p-6 mb-6'>
            <h3 className='font-semibold'>Another User</h3>
            <p className='text-gray-700 mt-2'>
              Here's another post to see how it looks!
            </p>
            <div className='mt-4 flex justify-between items-center'>
              <button className='text-blue-500 hover:underline'>Like</button>
              <span className='text-gray-500 text-sm'>5 likes</span>
            </div>

            <div className='mt-4 border-t pt-4'>
              <h4 className='font-semibold'>Comments:</h4>
              <textarea
                className='w-full border border-gray-300 rounded-lg p-2 mt-2'
                rows={2}
                placeholder='Add a comment...'
              ></textarea>
              <button className='mt-2 bg-blue-500 text-white rounded-lg px-4 py-1 hover:bg-blue-600'>
                Comment
              </button>

              <div className='mt-2 text-gray-700'>
                <strong>Another Commenter:</strong> Great post!
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
