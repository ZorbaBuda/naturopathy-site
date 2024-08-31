// import Link from 'next/link';
// import { IoMdArrowForward } from 'react-icons/io';

// export default function NotFound() {
//   return (
//     <>
//       <main className='flex flex-col items-center justify-center min-h-screen text-center'>
//         <h2 className='text-3xl mb-2 h2'>No trobat</h2>
//         <p className='font-light mb-2'>
//           La pàgina no existeix
//         </p>
//         <p className='font-light flex items-center'>
//           Tornar enrera
//           <Link href='/' className='underline text-gray-600 ml-2'>
//             <button
//               className='flex items-center btn btn-lg btn-link font-normal'
//               aria-label='Back to Home'
//             >
//               {<IoMdArrowForward />} Home
//             </button>
//           </Link>
//         </p>
//       </main>
//     </>
//   );
// }


'use client';

export const dynamic = 'force-dynamic'
import Error from 'next/error';

// Render the default Next.js 404 page when a route
// is requested that doesn't match the middleware and
// therefore doesn't have a locale associated with it.

export default function NotFound() {
  return (
    <html lang="es">
      <body>
        <Error statusCode={404} />
      </body>
    </html>
  );
}

