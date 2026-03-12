import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";

interface MessageFormProps {
  userName: string;
}

export function MessageForm({ userName }: MessageFormProps) {
  const sendMessage = useMutation(api.chat.sendMessage);
  const [newMessageText, setNewMessageText] = useState("");

  return (
    <form
      className="message-form"
      onSubmit={async (e) => {
        e.preventDefault();
        sendMessage({ user: userName, body: newMessageText });
        setNewMessageText("");
      }}
    >
      <input
        value={newMessageText}
        onChange={(e) => {
          setNewMessageText(e.target.value);
        }}
        placeholder="Write a message…"
        autoFocus
      />
      <button type="submit" disabled={!newMessageText}>
        Send
      </button>
    </form>
  );
}
