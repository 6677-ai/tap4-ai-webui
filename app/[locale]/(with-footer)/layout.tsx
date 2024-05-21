import Footer from '@/components/home/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className='mx-auto flex w-full flex-1'>{children}</main>
      <Footer />
    </>
  );
}
