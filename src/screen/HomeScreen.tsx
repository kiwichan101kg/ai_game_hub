import GameCard from "@/components/GameCard";
import React from "react";

export const HomeScreen: React.FC = () => {
  const games = [
    {
      id: 1,
      name: "Tetris",
      description: "Challenge our AI in a game of Tetris!",
      image: "/images/tetris.png",
      href: "https://claude.site/artifacts/ddd2502e-baa4-46dd-bd8f-34c89936be71",
    },
    {
      id: 2,
      name: "AI Puzzle Solver",
      description: "Watch AI solve complex puzzles in real-time!",
      image: "",
      href: "",
    },
    {
      id: 3,
      name: "AI Story Generator",
      description: "Create unique stories with our AI storyteller!",
      image: "",
      href: "",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#4CA9DF] to-[#A1FFB3] font-sans">
      <nav className="bg-white bg-opacity-20 backdrop-blur-lg fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="text-white text-2xl font-bold">
                AI Game Hub
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  Games
                </a>
                <a
                  href="#about"
                  className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Welcome to AI Game Hub
        </h1>
        <p className="text-xl text-white text-center mb-12">
          Experience the future of gaming with our AI-powered games!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
          {games.map((game) => (
            <GameCard key={game.id} {...game} />
          ))}
        </div>

        <section
          id="about"
          className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-lg mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">About</h2>
          <p className="text-white">
            AI Game Hub is dedicated to providing innovative and exciting
            AI-powered games. Our mission is to push the boundaries of gaming
            through the use of artificial intelligence, offering unique and
            engaging experiences for players of all ages. Join us on this
            journey to explore the future of gaming!
          </p>
        </section>

        <section
          id="contact"
          className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-lg"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Contact</h2>
          <p className="text-white">
            Feel free to reach out to us with any questions or feedback. We
            would love to hear from you!
          </p>
        </section>
      </main>

      <footer className="mt-auto bg-white bg-opacity-20 backdrop-blur-lg py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p>&copy; 2023 AI Game Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomeScreen;
