// // import { Card } from '@/app/components/molecules/card';
// import RevenueChart from '@/app/components/molecules/revenue-chart';
// import LatestInvoices from '@/app/components/molecules/latest-invoices';
// import { lusitana } from '@/app/components/atoms/fonts';
// import { fetchCardData } from '@/model/query';
// import { CardWrapper } from './components/molecules/card';

// export default async function Page() {
//   const {
//     numberOfInvoices,
//     numberOfCustomers,
//     totalPaidInvoices,
//     totalPendingInvoices,
//   } = await fetchCardData();

//   return (
//     <main>
//       <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
//         Dashboard
//       </h1>
//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//         <CardWrapper
//           numberOfInvoices={numberOfInvoices}
//           numberOfCustomers={numberOfCustomers}
//           totalPaidInvoices={totalPaidInvoices}
//           totalPendingInvoices={totalPendingInvoices}
//         />
//       </div>
//       <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
//         <RevenueChart />
//         <LatestInvoices />
//       </div>
//     </main>
//     // <main>
//     //   <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
//     //     Dashboard
//     //   </h1>
//     //   <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//     //     <Card title="Collected" value={totalPaidInvoices} type="collected" />
//     //     <Card title="Pending" value={totalPendingInvoices} type="pending" />
//     //     <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
//     //     <Card
//     //       title="Total Customers"
//     //       value={numberOfCustomers}
//     //       type="customers"
//     //     />
//     //   </div>
//     //   <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
//     //     <RevenueChart />
//     //     <LatestInvoices />
//     //   </div>
//     // </main>
//   );
// }

import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            alt="Screenshots of the dashboard project showing desktop version"
            className="hidden md:block"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            alt="Screenshot of the dashboard project showing mobile version"
            className="block md:hidden"
          />
        </div>
      </div>
    </main>
  );
}