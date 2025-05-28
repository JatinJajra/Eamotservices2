import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: number;
  text: string;
  time: string;
  isUser: boolean;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! How can we help you today?",
      time: formatTime(new Date()),
      isUser: false
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    const newMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      time: formatTime(new Date()),
      isUser: true
    };

    setMessages([...messages, newMessage]);
    setInputMessage("");

    // Simulate reply after a short delay
    setTimeout(() => {
      const replyMessage: Message = {
        id: Date.now() + 1,
        text: "Thank you for your message. We'll get back to you shortly.",
        time: formatTime(new Date()),
        isUser: false
      };
      setMessages(prev => [...prev, replyMessage]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  function formatTime(date: Date) {
    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = date.getHours() >= 12 ? "PM" : "AM";
    return `${hours}:${minutes} ${ampm}`;
  }

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="bg-white rounded-lg shadow-xl overflow-hidden max-w-sm w-72 mb-4"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-primary text-white px-4 py-3 flex justify-between items-center">
              <h3 className="font-montserrat font-semibold">Chat with us</h3>
              <button onClick={toggleChat} className="text-white focus:outline-none">
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="bg-gray-100 p-3 h-80 overflow-y-auto">
              {messages.map((message) => (
                <div key={message.id} className={`flex mb-3 ${message.isUser ? 'justify-end' : ''}`}>
                  <div className={`rounded-lg p-3 max-w-xs ${
                    message.isUser 
                      ? 'bg-primary text-white' 
                      : 'bg-primary-100 text-gray-800'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                    <span className={`text-xs ${
                      message.isUser ? 'text-primary-200' : 'text-gray-500'
                    } mt-1 block`}>
                      {message.time}
                    </span>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            <div className="bg-white border-t p-3">
              <div className="flex">
                <Input
                  type="text"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Type your message..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <Button
                  className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-r-md transition duration-300"
                  onClick={handleSendMessage}
                >
                  <i className="fas fa-paper-plane"></i>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        className="bg-primary hover:bg-primary/90 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition duration-300"
        onClick={toggleChat}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-comments'} text-2xl`}></i>
      </motion.button>
    </div>
  );
}
