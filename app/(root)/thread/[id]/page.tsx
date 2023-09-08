import ThreadCard from '@/components/cards/ThreadCard';

export default function Page({ params } : {
  params: {
    id: string,
  },
}) {
  return (
  <section>
    <ThreadCard content={'test content'} />
  </section>)
}
