import Navbar from '@/components/Navbar';
import CollectionList from '@/components/CollectionList';

export default function SareesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <CollectionList />
      {children}
    </>
  );
}
