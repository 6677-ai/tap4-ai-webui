import Markdown from 'react-markdown';

export default function MarkdownProse({ markdown, className }: { markdown: string; className?: string }) {
  return (
    <article className={`prose mx-auto max-w-pc ${className}`}>
      <Markdown>{markdown}</Markdown>
    </article>
  );
}
