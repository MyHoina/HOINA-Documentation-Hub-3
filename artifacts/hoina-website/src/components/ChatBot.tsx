import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, MoreHorizontal, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  id: string;
  type: "user" | "bot";
  content: string;
};

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      content: "Hello! I'm the HOINA Support Assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickReplies = [
    "How do I apply for legal support?",
    "What programs do you run?",
    "How can I donate?",
  ];

  const getBotResponse = (query: string) => {
    const q = query.toLowerCase();
    if (q.includes("legal")) {
      return "HOINA provides free legal representation for vulnerable families facing child abuse, protection issues, and GBV. You can apply through the 'Get Support' form on our website or visit our Jimeta office at A.U. Usman & Associate, Block 4.";
    }
    if (q.includes("program") || q.includes("what do you do")) {
      return "We operate in 6 core areas: Child Rights & Protection, GBV Prevention, Peacebuilding, Humanitarian Response, Environmental Hygiene, and Education & Legal Aid. Our primary focus is ensuring children stay in school and families have access to justice.";
    }
    if (q.includes("donate") || q.includes("give") || q.includes("support")) {
      return "You can donate cash via Bank Transfer (Zenith Bank: 1019283746), or provide in-kind materials like books, uniforms, and writing materials. 100% of public donations directly fund instructional materials and court filing fees.";
    }
    if (q.includes("contact") || q.includes("address") || q.includes("where")) {
      return "Our office is located at A.U. Usman & Associate, Block 4, Opp. Bekaji Central Mosque, Jimeta, Adamawa State. You can also reach us via WhatsApp at 09136989232.";
    }
    return "Thank you for reaching out. For specific inquiries, I recommend using our 'Get Support' form or contacting our team directly via WhatsApp at 09136989232 so a human representative can assist you.";
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const newMsgId = Date.now().toString();
    setMessages((prev) => [...prev, { id: newMsgId, type: "user", content: text }]);
    setInput("");
    setIsTyping(true);

    // Simulate network delay and add bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), type: "bot", content: getBotResponse(text) },
      ]);
      setIsTyping(false);
    }, 1200);
  };

  // Auto-scroll to bottom
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-[350px] max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl border border-border overflow-hidden z-50 flex flex-col h-[500px] max-h-[70vh]"
          >
            {/* Header */}
            <div className="bg-primary text-white p-4 flex items-center justify-between shadow-sm z-10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Sparkles size={16} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-sm leading-tight">HOINA Support Assistant</h4>
                  <p className="text-xs text-white/70">Powered by AI</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div 
                    className={`max-w-[85%] rounded-2xl p-3 text-sm ${
                      msg.type === "user" 
                        ? "bg-primary text-white rounded-br-sm" 
                        : "bg-white border border-border text-foreground shadow-sm rounded-bl-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-border shadow-sm rounded-2xl rounded-bl-sm p-4 flex items-center gap-1">
                    <motion.div className="w-1.5 h-1.5 bg-primary/40 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
                    <motion.div className="w-1.5 h-1.5 bg-primary/60 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
                    <motion.div className="w-1.5 h-1.5 bg-primary/80 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length < 3 && !isTyping && (
              <div className="px-4 py-2 bg-slate-50 flex gap-2 overflow-x-auto whitespace-nowrap hide-scrollbar">
                {quickReplies.map((reply, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(reply)}
                    className="text-xs bg-white border border-primary/20 text-primary px-3 py-1.5 rounded-full hover:bg-primary/5 transition-colors shrink-0"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-border">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1 bg-secondary/50 border-none rounded-full px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <Button 
                  type="submit" 
                  size="icon" 
                  disabled={!input.trim() || isTyping}
                  className="rounded-full bg-primary hover:bg-primary/90 shrink-0"
                >
                  <Send size={16} />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-40 w-14 h-14 bg-primary text-white rounded-full shadow-xl flex items-center justify-center hover:scale-105 hover:bg-primary/90 transition-all focus:outline-none focus:ring-4 focus:ring-primary/30"
        aria-label="Toggle Chat"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </>
  );
}
