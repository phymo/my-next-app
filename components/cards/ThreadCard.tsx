
interface Props {
  content: string;
}
export default function ThreadCard(
  { content }: Props,
) {
  return (
  <article>
    <div className="text-light-2">{ content }</div>
  </article>);
}
