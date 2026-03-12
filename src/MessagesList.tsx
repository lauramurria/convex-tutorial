import { useEffect } from "react";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

interface MessagesListProps {
  userName: string;
}

export function MessagesList({ userName }: MessagesListProps) {
  const messages = useQuery(api.chat.getMessages) || [];

  useEffect(() => {
    // Make sure scrollTo works on button click in Chrome
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }, 0);
  }, [messages]);

  return (
    <div className="messages-list-container">
      <div className="messages-header">
        <h2>Messages</h2>
      </div>
      <div className="messages-container">
        {messages?.map((message) => (
          <article
            key={message._id}
            className={message.user === userName ? "message-mine" : "message-not-mine"}
          >
            <div>{message.user}</div>

            <p>{message.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
