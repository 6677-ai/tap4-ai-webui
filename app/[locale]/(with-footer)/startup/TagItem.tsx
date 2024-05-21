export default function TagItem({ title }: { title: string }) {
  return (
    <div className='w-fit rounded-[4px] border border-[#686B84] px-1 text-center text-[10px] text-[#686B84]'>
      {title}
    </div>
  );
}
