import React from "react";
import Image from "next/image";
const Chatbot = () => {
  return (
    <div>
      <div>
        <a href="/">
          <Image
            className="fixed bottom-4 right-4 z-50"
            title="WhatsApp us"
            src="/chat-bot2.png"
            width="80"
            height="80"
            alt="Chat with Us"
          />
        </a>
      </div>
    </div>
  );
};

export default Chatbot;
