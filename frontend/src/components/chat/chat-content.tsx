import { useEffect, useState } from 'react';
import { fetchChats } from '../../services/chat.service';
import { ChatMessage } from './chat-message';

export function ChatContent() {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    console.log('Rendered chat-content');
    fetchChats().then((data) => {
      setChats(data);
      console.log(data);
    });
  }, []);

  return (
    <div className='chat-area flex-1 flex flex-col'>
      <div className='flex-3'>
        <h2 className='text-xl py-1 mb-8 border-b-2 border-gray-200'>
          Chatting with <b>Mercedes Yemelyan</b>
        </h2>
      </div>
      <div className='messages flex-1 overflow-auto'>
        {chats.map(({ text, createdAt }) => (
          <ChatMessage date={createdAt}>{text}</ChatMessage>
        ))}

        <div className='message mb-4 flex'>
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
            <div className='inline-block bg-gray-300 rounded-full p-2 px-6 text-gray-700'>
              <span>
                Hey there. We would like to invite you over to our office for a
                visit. How about it?
              </span>
            </div>
            <div className='pl-4'>
              <small className='text-gray-500'>15 April</small>
            </div>
          </div>
        </div>
        <div className='message mb-4 flex'>
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
            <div className='inline-block bg-gray-300 rounded-full p-2 px-6 text-gray-700'>
              <span>All travel expenses are covered by us of course :D</span>
            </div>
            <div className='pl-4'>
              <small className='text-gray-500'>15 April</small>
            </div>
          </div>
        </div>
        <div className='message me mb-4 flex text-right'>
          <div className='flex-1 px-2'>
            <div className='inline-block bg-blue-600 rounded-full p-2 px-6 text-white'>
              <span>It's like a dream come true</span>
            </div>
            <div className='pr-4'>
              <small className='text-gray-500'>15 April</small>
            </div>
          </div>
        </div>
        <div className='message me mb-4 flex text-right'>
          <div className='flex-1 px-2'>
            <div className='inline-block bg-blue-600 rounded-full p-2 px-6 text-white'>
              <span>I accept. Thank you very much.</span>
            </div>
            <div className='pr-4'>
              <small className='text-gray-500'>15 April</small>
            </div>
          </div>
        </div>
        <div className='message mb-4 flex'>
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
            <div className='inline-block bg-gray-300 rounded-full p-2 px-6 text-gray-700'>
              <span>You are welome. We will stay in touch.</span>
            </div>
            <div className='pl-4'>
              <small className='text-gray-500'>15 April</small>
            </div>
          </div>
        </div>
      </div>
      <div className='flex-2 pt-4 pb-10'>
        <div className='write bg-white shadow flex rounded-lg'>
          <div className='flex-3 flex content-center items-center text-center p-4 pr-0'>
            <span className='block text-center text-gray-400 hover:text-gray-800'>
              <svg
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                stroke='currentColor'
                viewBox='0 0 24 24'
                className='h-6 w-6'
              >
                <path d='M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'></path>
              </svg>
            </span>
          </div>
          <div className='flex-1'>
            <textarea
              name='message'
              className='w-full block outline-none py-4 px-4 bg-transparent'
              rows={1}
              placeholder='Type a message...'
              autoFocus
            ></textarea>
          </div>
          <div className='flex-2 w-32 p-2 flex content-center items-center'>
            <div className='flex-1 text-center'>
              <span className='text-gray-400 hover:text-gray-800'>
                <span className='inline-block align-text-bottom'>
                  <svg
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    className='w-6 h-6'
                  >
                    <path d='M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13'></path>
                  </svg>
                </span>
              </span>
            </div>
            <div className='flex-1'>
              <button className='bg-blue-400 w-10 h-10 rounded-full inline-block'>
                <span className='inline-block align-text-bottom'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    className='w-4 h-4 text-white'
                  >
                    <path d='M5 13l4 4L19 7'></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
