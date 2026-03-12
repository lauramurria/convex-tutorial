import { useState } from "react";

interface HeaderProps {
  userName: string;
}

export function Header({ userName }: HeaderProps) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => setShowDetails((v) => !v);

  return (
    <header className="app-header">
      <div className="branding">
        <span className="logo">🐧</span>
        <h1>Puffin Chat</h1>
      </div>
      <button
        className="profile-button"
        onClick={toggleDetails}
        aria-label="User profile"
      >
        {userName.charAt(0).toUpperCase()}
      </button>
      {showDetails && (
        <div className="profile-details">
          <p>
            Connected as <strong>{userName}</strong>
          </p>
        </div>
      )}
    </header>
  );
}
