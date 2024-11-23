export function ChatItem(props: { active?: boolean }) {
  const activeClass = props?.active ? 'border-l-4 border-red-500' : '';

  return (
    <div
      className={`entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex ${activeClass}`}
    >
      <div className='flex-2'>
        <div className='w-12 h-12 relative'>
          <img
            className='w-12 h-12 rounded-full mx-auto'
            src='../resources/profile-image.png'
            alt='chat-user'
          />
          <span className='absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white'></span>
        </div>
      </div>
      <div className='flex-1 px-2'>
        <div className='truncate w-32'>
          <span className='text-gray-800'>Rina Samuel</span>
        </div>
        <div>
          <small className='text-gray-600'>Yea, Sure!</small>
        </div>
      </div>
      <div className='flex-2 text-right'>
        <div>
          <small className='text-gray-500'>15 April</small>
        </div>
      </div>
    </div>
  );
}
