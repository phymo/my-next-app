import { SIDEBAR_LINKS } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';

const LeftSideBar = () => {
  return (
    <section className="leftsidebar custom-scrollbar">
      <div className='flex w-full flex-1 flex-col gap-6 px-6'>
        {SIDEBAR_LINKS.map((link) => {
          return (
            <Link href={link.route} key={link.label} className='leftsidebar_link'>
              <Image src={link.imgURL} alt={link.label} width={24} height={24} />
              <p className='text-light-1 max-lg:hidden'>{link.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default LeftSideBar;
