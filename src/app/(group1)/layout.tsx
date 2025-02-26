import { Header } from './_common/header';
import { SideBar } from './_common/sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <SideBar />
      <div className="">
        <Header />
        <div className="pt-16 pl-64">
          Group1 레이아웃 입니다.
          {children}
        </div>
      </div>
    </div>
  );
}
