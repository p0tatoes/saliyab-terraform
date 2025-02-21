import logo from "./logo.svg";

function App() {
  return (
    <div className="text-center">
      <header className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]">
        <img
          src={logo}
          className="h-[40vmin] pointer-events-none animate-[spin_20s_linear_infinite]"
          alt="logo"
        />
        <p className="text-[#7B42BC] font-bold animate-spin">Sourdough Starter 🎉</p>
        <p className="text-[#7B42BC] font-bold animate-pulse">Sourdough Starter 🎉</p>
        <p className="text-[#7B42BC] font-bold animate-spin">Sourdough Starter 🎉</p>
        <p className="text-[#7B42BC] font-bold animate-pulse">Sourdough Starter 🎉</p>
        <p className="text-[#7B42BC] font-bold animate-spin">Sourdough Starter 🎉</p>
        <p className="text-[#7B42BC] font-bold animate-pulse">Sourdough Starter 🎉</p>
      </header>
    </div>
  );
}

export default App;
