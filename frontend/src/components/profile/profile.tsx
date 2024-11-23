export function Profile() {
  return (
    <div className='user-profile text-center'>
      <div className='w-32 h-32 rounded-full m-auto mt-16 border-2 border-white bg-white shadow-lg'>
        <img
          src='../resources/profile-image.png'
          alt='user'
          className='block'
        />
      </div>
      <div className='text-gray-800 mt-8'>
        Omer Mohamed Ali
        <span className='inline-block align-text-bottom'>
          <svg
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            viewBox='0 0 24 24'
            className='w-4 h-4'
          >
            <path d='M19 9l-7 7-7-7'></path>
          </svg>
        </span>
      </div>
    </div>
  );
}
