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
    <section id="ask" className="bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">
          💬 Ask me anything
        </h2>

        <div className="h-[400px] overflow-y-auto bg-gray-100 p-4 rounded shadow">
          {history.map((msg, idx) => (
            <div
              key={idx}
              className={`mb-3 ${
                msg.role === "user" ? "text-right" : "text-left"
              }`}
            >
              <p
                className={`inline-block p-2 rounded whitespace-pre-wrap ${
                  msg.role === "user" ? "bg-blue-200" : "bg-gray-200"
                }`}
              >
                {msg.content}
              </p>
            </div>
          ))}
          {loading && (
            <div className="text-gray-400 text-sm italic">답변 생성 중...</div>
          )}
          <div ref={bottomRef}></div>
        </div>

        <div className="mt-4 flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="질문을 입력하세요..."
            className="flex-1 border px-4 py-2 rounded"
            disabled={loading}
          />
          <button
            onClick={sendMessage}
            disabled={loading}
            className="bg-indigo-600 text-white px-4 py-2 rounded"
          >
            {loading ? "응답 중..." : "보내기"}
          </button>
        </div>
      </div>
    </section>
  );
}
