// import React from 'react'
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import SearchIcon from '@mui/icons-material/Search';
// import HelpOutlineIcon from '@mui/icons-material/HelpOutline';


// const Navbar = () => {
//   return <>
//     <div className='flex bg-[#23374F] justify-between'>
//         <div className="flex w-1/3">
//             <img src="p1.png" alt="" className='m-auto'/>
//             <div className="flex bg-[#38516e] mx-16 my-2 rounded-xl px-3 text-white">
//                 <select className='my-3 text-xl bg-transparent'>
//                     <option className='text-black' value="a">All</option>
//                     <option className='text-black' value="b">op2</option>
//                     <option className='text-black' value="c">op3</option>
//                     <option className='text-black' value="d">op4</option>
//                 </select>
//                   <input type="text" className="my-3 px-2 text-xl border-none bg-transparent outline-none" placeholder="Search"/>
//                   <SearchIcon className='text-xl my-4'/>
//                 </div>
//         </div>

//         <div className="flex text-white">
//           <HelpOutlineIcon className='my-5 mx-2'/>
//           <NotificationsNoneIcon className='my-5 mx-2'/>
//           <img src="p2.png" className='m-auto'/>
//         </div>
//     </div>   
//   </>
// }

// export default Navbar


import React from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const Navbar = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row bg-[#23374F] justify-between p-4 lg:p-0'>
        <div className='flex w-full lg:w-1/3'>
          <img src='p1.png' alt='' className='m-auto' />
          <div className='flex flex-col lg:flex-row bg-[#38516e] mx-4 lg:mx-16 my-2 rounded-xl px-3 text-white'>
            <select className='my-3 lg:my-0 lg:mr-2 text-xl bg-transparent'>
              <option className='text-black' value='a'>
                All
              </option>
              <option className='text-black' value='b'>
                op2
              </option>
              <option className='text-black' value='c'>
                op3
              </option>
              <option className='text-black' value='d'>
                op4
              </option>
            </select>
            <input
              type='text'
              className='my-3 lg:my-0 lg:mr-2 px-2 text-xl border-none bg-transparent outline-none'
              placeholder='Search'
            />
            <SearchIcon className='text-xl my-4' />
          </div>
        </div>

        <div className='flex text-white'>
          <HelpOutlineIcon className='my-5 mx-2' />
          <NotificationsNoneIcon className='my-5 mx-2' />
          <img src='p2.png' className='m-auto' />
        </div>
      </div>
    </>
  );
};

export default Navbar;
