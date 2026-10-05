import re

with open("components/sections/IntroLoader.tsx", "r") as f:
    content = f.read()

left_old = """      {/* Left Curtain */}
      <div
        ref={leftCurtainRef}
        className="absolute top-0 left-0 w-1/2 h-full z-10"
        style={{
          background: "linear-gradient(135deg, #3A0A14 0%, #5A1224 40%, #7A2234 80%, #5A1224 100%)",
          boxShadow: "inset -30px 0 60px rgba(0,0,0,0.4)",
        }}
      >"""

left_new = """      {/* Left Curtain */}
      <div
        ref={leftCurtainRef}
        className="absolute top-0 left-0 w-1/2 h-full z-10 shadow-[20px_0_50px_rgba(0,0,0,0.5)] origin-top"
        style={{
          background: "linear-gradient(to right, #4a0d1d 0%, #7a2234 15%, #2a050f 25%, #6a1829 40%, #8a2a3f 55%, #3a0a14 70%, #7a2234 85%, #5a1224 100%)",
          backgroundSize: "100% 100%",
        }}
      >
        {/* Soft velvet texture overlay */}
        <div className="absolute inset-0 opacity-[0.15]" style={{
          backgroundImage: "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)",
        }} />"""

right_old = """      {/* Right Curtain */}
      <div
        ref={rightCurtainRef}
        className="absolute top-0 right-0 w-1/2 h-full z-10"
        style={{
          background: "linear-gradient(225deg, #3A0A14 0%, #5A1224 40%, #7A2234 80%, #5A1224 100%)",
          boxShadow: "inset 30px 0 60px rgba(0,0,0,0.4)",
        }}
      >"""

right_new = """      {/* Right Curtain */}
      <div
        ref={rightCurtainRef}
        className="absolute top-0 right-0 w-1/2 h-full z-10 shadow-[-20px_0_50px_rgba(0,0,0,0.5)] origin-top"
        style={{
          background: "linear-gradient(to left, #4a0d1d 0%, #7a2234 15%, #2a050f 25%, #6a1829 40%, #8a2a3f 55%, #3a0a14 70%, #7a2234 85%, #5a1224 100%)",
          backgroundSize: "100% 100%",
        }}
      >
        {/* Soft velvet texture overlay */}
        <div className="absolute inset-0 opacity-[0.15]" style={{
          backgroundImage: "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)",
        }} />"""

content = content.replace(left_old, left_new)
content = content.replace(right_old, right_new)

with open("components/sections/IntroLoader.tsx", "w") as f:
    f.write(content)

print("Done replacing.")
