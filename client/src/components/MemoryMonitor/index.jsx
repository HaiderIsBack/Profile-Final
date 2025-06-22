import { useEffect, useState } from "react";

const MemoryMonitor = () => {
  const [usedJSHeap, setUsedJSHeap] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (performance.memory) {
        const used = performance.memory.usedJSHeapSize / 1048576; // Convert to MB
        setUsedJSHeap(used.toFixed(2));
      }
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      position: "fixed",
      bottom: "10px",
      right: "10px",
      background: "rgba(0,0,0,0.7)",
      color: "#fff",
      padding: "8px 12px",
      borderRadius: "8px",
      fontSize: "14px",
      zIndex: 9999
    }}>
      🧠 Used JS Heap: {usedJSHeap} MB
    </div>
  );
};

export default MemoryMonitor;
