import { MessagesList } from "./MessagesList";
import { MessageForm } from "./MessageForm";

interface MessagesProps {
  userName: string;
}

export function Messages({ userName }: MessagesProps) {
  return (
    <div className="messages-section">
      <MessagesList userName={userName} />
      <MessageForm userName={userName} />
    </div>
  );
}
