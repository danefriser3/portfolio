import Logo from "./Logo";
import TopNav from "./TopNav";

const Header = () => {
  return (
    <div className="top-0 fixed h-[60px] border-b-2 w-full items-center align-middle flex flex-row bg-slate-200 shadow-[0_3px_3px_rgba(0,0,0,0.3)] z-50">
      <Logo />
      <TopNav />
    </div>
  );
};

export default Header;
