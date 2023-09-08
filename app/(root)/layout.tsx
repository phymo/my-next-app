// It’s the main entry point of the application. The root. The parent. The
// layout. Whatever you prefer to call it.

// next.js 13 upgrade => use app/ instead of pages/

import '../globals.css'; // import global styles
import Topbar from '@/components/shared/Topbar';
import Bottombar from '@/components/shared/Bottombar';
import LeftSideBar from '@/components/shared/LeftSideBar';
import RightSideBar from '@/components/shared/RightSideBar';
import { ClerkProvider } from '@clerk/nextjs';

export const metadata = {
  title: 'Threads',
  description: 'Meta Threads duplicate',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Topbar />
          <main className='flex flex-row'>
            <LeftSideBar />
            <section className='main-container'>
              <div className="w-full max-w-4xl">{children}</div>
            </section>
            <RightSideBar />
          </main>
          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
}
