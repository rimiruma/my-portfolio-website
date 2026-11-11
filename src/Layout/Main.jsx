import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import { useEffect, useState } from "react";

const Main = () => {
  const [isDark, setIsDark] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setIsDark(false);
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  // Welcome screen animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  // Toggle theme
  const handleThemeToggle = () => {
    setIsDark((prev) => {
      const newTheme = !prev ? "dark" : "light";

      localStorage.setItem("theme", newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);

      return !prev;
    });
  };

  return (
    <div>
      {/* Welcome Screen */}
      {showWelcome && (
        <div className="welcome-screen">
          <div className="welcome-content">
            <div className="welcome-icon">✦</div>

            <p className="welcome-small">HELLO, WELCOME TO</p>

            <h1>
              My <span>Portfolio</span>
            </h1>

            <p className="welcome-name">Rimi Ruma</p>
          </div>
        </div>
      )}

      <style>{`
                .welcome-screen {
                    position: fixed;
                    inset: 0;
                    z-index: 99999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(
                        135deg,
                        #09090f,
                        #17152b,
                        #09090f
                    );
                    color: white;
                    animation: welcomeExit 0.7s ease 2.1s forwards;
                }

                .welcome-content {
                    text-align: center;
                    padding: 20px;
                    animation: welcomeEnter 1s ease both;
                }

                .welcome-icon {
                font-size: 65px; /* আগে 45px ছিল */color: #facc15;
                animation: rotateIcon 3s linear infinite;
                }

                .welcome-small {
                    margin-top: 15px;
                    font-size: 18px;
                    letter-spacing: 6px;
                    color: #c4b5fd;
                }

                .welcome-content h1 {
                    font-size: clamp(35px, 7vw, 65px);
                    font-weight: 800;
                    margin-top: 15px;
                    letter-spacing: -2px;
                }

                .welcome-content h1 span {
                    color: #a78bfa;
                }

                .welcome-name {
                    margin-top: 12px;
                    font-size: 20px;
                    letter-spacing: 4px;
                    color: #e9d5ff;
                }

                .welcome-line {
                    width: 0;
                    height: 3px;
                    margin: 25px auto;
                    background: #a78bfa;
                    animation: lineExpand 1s ease 0.5s forwards;
                }

                .welcome-loading {
                    font-size: 12px;
                    letter-spacing: 3px;
                    color: #9ca3af;
                    animation: pulseText 1s ease infinite;
                }

                @keyframes welcomeEnter {
                    from {
                        opacity: 0;
                        transform: translateY(35px) scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                @keyframes welcomeExit {
                    to {
                        opacity: 0;
                        visibility: hidden;
                        pointer-events: none;
                    }
                }

                @keyframes rotateIcon {
                    to {
                        transform: rotate(360deg);
                    }
                }

                @keyframes lineExpand {
                    to {
                        width: 160px;
                    }
                }

                @keyframes pulseText {
                    50% {
                        opacity: 0.4;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .welcome-screen,
                    .welcome-content,
                    .welcome-icon,
                    .welcome-line,
                    .welcome-loading {
                        animation-duration: 0.01ms !important;
                    }
                }
            `}</style>

      <Navbar handleThemeToggle={handleThemeToggle} isDark={isDark} />

      <div className="min-h-[calc(100vh-404px)]">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Main;
