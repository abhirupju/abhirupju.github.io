import React, { useState } from 'react';
import { MessageSquare, Send, X, Bot } from 'lucide-react';
import { askResearchAssistant } from '../services/openrouter';
import { ThemeType } from '../src/types';

interface Props {
  theme: ThemeType;
}

export const ResearchChat: React.FC<Props> = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: "Hi! I'm an AI assistant trained on Abhirup's papers. Ask me anything about his research!" }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    const answer = await askResearchAssistant(userMsg);

    // Sanitize model output: remove any wrapper markers like '<s> [OUT]' or '[/OUT] <s>' at start/end
    const sanitize = (t: string) => {
      if (!t) return t;
      return t
        .replace(/^\s*<s>\s*\[OUT\]\s*/i, '')
        .replace(/\s*<s>\s*\[OUT\]\s*$/i, '')
        .replace(/\s*\[\/OUT\]\s*<s>\s*$/i, '')
        .replace(/^\s*\[\/OUT\]\s*<s>\s*/i, '')
        .trim();
    };

    const clean = sanitize(answer);

    setMessages(prev => [...prev, { role: 'ai', text: clean }]);
    setIsLoading(false);
  };

  // Styles based on theme
  const getStyles = () => {
    switch (theme) {
      case ThemeType.CYBER:
        return {
          button: "bg-emerald-600 hover:bg-emerald-500 text-white",
          window: "bg-slate-900 border-emerald-500/30 text-emerald-50",
          input: "bg-slate-800 border-slate-700 text-emerald-50 focus:border-emerald-500",
          userMsg: "bg-emerald-900/50 text-emerald-100",
          aiMsg: "bg-slate-800 text-emerald-200"
        };
      case ThemeType.MODERN:
        return {
          button: "bg-blue-600 hover:bg-blue-500 text-white",
          window: "bg-white border-gray-200 shadow-2xl text-gray-800",
          input: "bg-gray-50 border-gray-200 focus:border-blue-500 text-gray-900",
          userMsg: "bg-blue-600 text-white",
          aiMsg: "bg-gray-100 text-gray-800"
        };
      case ThemeType.MINIMALIST:
      default:
        return {
          button: "bg-gray-900 hover:bg-gray-700 text-white",
          window: "bg-white border-gray-200 shadow-xl text-gray-900",
          input: "bg-white border-gray-300 focus:border-gray-900 text-gray-900",
          userMsg: "bg-gray-900 text-white",
          aiMsg: "bg-gray-100 text-gray-800"
        };
    }
  };

  const styles = getStyles();

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={`fixed bottom-6 right-32 z-40 shadow-lg flex items-center gap-2 px-4 py-3 rounded-full transition-all transform hover:scale-105 ${styles.button}`}
        >
          <MessageSquare size={20} />
          <span className="font-medium">Ask AI about Research</span>
        </button>
      )}

      {isOpen && (
        <div className={`fixed bottom-24 right-6 w-80 md:w-96 h-96 z-50 rounded-xl flex flex-col shadow-2xl border overflow-hidden ${styles.window}`}>
          {/* Header */}
          <div className="p-4 border-b flex justify-between items-center bg-opacity-50 backdrop-blur-sm">
            <div className="flex items-center gap-2 font-semibold">
              <Bot size={18} />
              <span>Research Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="opacity-60 hover:opacity-100">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg text-sm ${msg.role === 'user' ? styles.userMsg : styles.aiMsg}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className={`text-xs opacity-70 animate-pulse ${styles.aiMsg} p-2 rounded`}>Thinking...</div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about LLMs, security..."
                className={`flex-1 px-3 py-2 rounded-md border text-sm focus:outline-none ${styles.input}`}
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className={`p-2 rounded-md transition-colors ${styles.button} ${isLoading ? 'opacity-50' : ''}`}
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
