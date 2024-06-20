export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='mx-auto w-full max-w-pc bg-gray-100 text-gray-900'>{children}</div>;
}
