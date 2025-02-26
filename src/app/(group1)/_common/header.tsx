export const Header = () => {
  return (
    <header className="bg-green-400 fixed top-0 left-0 w-full h-16 ml-64 flex items-center px-6 shadow-md">
      <h1 className="text-white font-bold text-lg">My App</h1>
      <nav>
        <ul className="flex gap-4">
          <li>
            <a href="#" className="text-white hover:underline">
              홈
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:underline">
              소개
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:underline">
              연락처
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
