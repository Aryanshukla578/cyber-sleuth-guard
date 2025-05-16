
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

type MessageType = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

const initialMessages: MessageType[] = [
  {
    id: 1,
    text: "Hi there! I'm the CyberSleuth AI assistant. How can I help secure your applications today?",
    sender: 'bot',
    timestamp: new Date()
  }
];

const securityResponses = [
  "I can help you scan your website for XSS vulnerabilities. Just provide your URL and I'll get started.",
  "Content Security Policies are crucial for preventing XSS attacks. I recommend implementing a policy that restricts inline scripts and only allows resources from trusted domains.",
  "To fix this SQL injection vulnerability, you should use parameterized queries instead of concatenating user input directly into your SQL statements.",
  "Your headers need improvement. I recommend adding X-Content-Type-Options: nosniff and X-Frame-Options: DENY to protect against MIME type confusion attacks and clickjacking.",
  "I detected an exposed API key in your frontend code. You should move this to a server-side environment variable to prevent unauthorized access.",
  "Your application appears to be leaking sensitive information in error messages. I recommend implementing custom error handlers that don't expose stack traces or system details."
];

const ChatBot = ({ onClose }: { onClose: () => void }) => {
  const [messages, setMessages] = useState<MessageType[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMessage: MessageType = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      const randomResponse = securityResponses[Math.floor(Math.random() * securityResponses.length)];
      
      const botMessage: MessageType = {
        id: messages.length + 2,
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-24 right-6 w-80 sm:w-96 bg-slate-900 rounded-lg border border-slate-700 shadow-xl z-50">
      <div className="flex items-center justify-between p-4 border-b border-slate-700">
        <div className="flex items-center">
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-cyan-500/20 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m14.5 9-5 5"/><path d="m9.5 9 5 5"/></svg>
          </div>
          <div>
            <h3 className="text-sm font-medium text-white">CyberSleuth Assistant</h3>
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-green-400 mr-1"></div>
              <span className="text-xs text-green-400">Online</span>
            </div>
          </div>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
      
      <ScrollArea className="h-80 p-4">
        <div className="space-y-4">
          {messages.map(message => (
            <div 
              key={message.id} 
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  message.sender === 'user' 
                    ? 'bg-cyan-500 text-white' 
                    : 'bg-slate-800 text-gray-200'
                }`}
              >
                {message.text}
                <div className={`text-xs mt-1 ${message.sender === 'user' ? 'text-cyan-100' : 'text-gray-400'}`}>
                  {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-slate-800 rounded-lg px-4 py-2 flex items-center space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '200ms'}}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '400ms'}}></div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
      
      <div className="p-4 border-t border-slate-700">
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex space-x-2"
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about security issues..."
            className="flex-1 bg-slate-800 border-slate-700 text-white"
          />
          <Button 
            type="submit"
            size="icon" 
            className="bg-cyan-500 hover:bg-cyan-600"
            disabled={!input.trim() || isTyping}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;
