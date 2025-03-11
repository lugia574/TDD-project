import { localizeDate } from '@/libs/sub-string';
import { layoutStyles } from '@/styles/layout-styles';
import { middleDot } from '@/utils/string';
import clsx from 'clsx';
import Link from 'next/link';

interface Props {
  className?: string;
}

export const ContentDetailMain = (props: Props) => {
  return <main className={clsx(layoutStyles.px ,props.className)}>
    <header>
        <h1 className='text-4xl font-bold leading-normal'>{`TEST title`}</h1>
        <div>
            <span>{`lugia`}</span>
            <span>{` ${middleDot} `}</span>
            <span>{localizeDate(new Date('2025-02-21T12:00:00'))}</span>
        </div>
        {true && (
            <div className='flex justify-end '>
                <Link href={`/contents/${'id'}/edit`} className='mr-4'>수정</Link>
                <button>삭제</button>
            </div>
            )}
    </header>
    <div>
        {'body'}
    </div>
  </main>;
};
