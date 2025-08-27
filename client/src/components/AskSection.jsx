import { useState, useEffect, useRef } from "react";

export default function AskSection() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const assistantContentRef = useRef(""); // 클로저 문제 방지용

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    const newHistory = [...history, userMessage];
    setHistory(newHistory);
    setInput("");
    setLoading(true);
    assistantContentRef.current = "";

    try {
      const res = await fetch(
        "http://mintai.gonetis.com:8888/llm-api/chat/stream",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: newHistory }),
        }
      );

      if (!res.ok || !res.body) throw new Error("스트리밍 실패");

      const reader = res.body.getReader();
      const decoder = new TextDecoder("utf-8");

      setHistory((prev) => [...prev, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        assistantContentRef.current += chunk;

        setHistory((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "assistant",
            content: assistantContentRef.current,
          };
          return updated;
        });
      }
    } catch (err) {
      console.error("🔥 스트리밍 오류:", err);
      setHistory((prev) => [
        ...prev,
        { role: "assistant", content: `❌ 오류 발생: ${err.message}` },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const last = history[history.length - 1];
    if (last?.role === "assistant") {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  return (
    <section id="ask" className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-24 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-indigo-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-pink-200/20 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            💬 Ask Me Anything
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about my research, AI projects, or career journey? I'm here to help!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
          <div className="h-[500px] overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-indigo-200 scrollbar-track-transparent">
            {history.length === 0 && (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
                  🤖
                </div>
                <p className="text-gray-500 text-lg font-medium">Start a conversation!</p>
                <p className="text-gray-400 text-sm mt-2">Ask me about my research, projects, or anything else.</p>
              </div>
            )}
            
            {history.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div className={`flex items-start gap-3 max-w-[80%] ${
                  msg.role === "user" ? "flex-row-reverse" : "flex-row"
                }`}>
                  {/* Avatar */}
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white ${
                    msg.role === "user" 
                      ? "bg-gradient-to-br from-blue-500 to-indigo-600" 
                      : "bg-gradient-to-br from-purple-500 to-pink-600"
                  }`}>
                    {msg.role === "user" ? "👤" : "🤖"}
                  </div>
                  
                  {/* Message bubble */}
                  <div className={`p-4 rounded-2xl shadow-lg ${
                    msg.role === "user" 
                      ? "bg-gradient-to-br from-blue-500 to-indigo-600 text-white" 
                      : "bg-white border border-gray-200 text-gray-800"
                  }`}>
                    <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {loading && (
              <div className="flex justify-start">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white">
                    🤖
                  </div>
                  <div className="bg-white border border-gray-200 p-4 rounded-2xl shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-75"></div>
                        <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce delay-150"></div>
                      </div>
                      <span className="text-gray-500 text-sm font-medium">답변 생성 중...</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef}></div>
          </div>
        </div>

        <div className="mt-6 bg-white/70 backdrop-blur-sm rounded-2xl p-3 sm:p-4 border border-white/50 shadow-lg">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !loading && sendMessage()}
              placeholder="질문을 입력하세요..."
              className="flex-1 bg-transparent border-none outline-none text-gray-800 placeholder-gray-500 text-base sm:text-lg px-3 sm:px-4 py-3 min-w-0"
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className={`px-4 sm:px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform whitespace-nowrap ${
                loading || !input.trim()
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              }`}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span className="hidden sm:inline">생성 중</span>
                  <span className="sm:hidden">...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <span>🚀</span>
                  <span>보내기</span>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
