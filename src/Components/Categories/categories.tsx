import { useState } from "react";

const texts = [
  "Own",
  "Rent",
  "EMI"
];

export default function Categories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? texts.length - 1 : prevIndex - 1));
  };

  const handleFocusedBubbleClick = (val: string) => {
    // page navigation as per the bubble
    alert(`You clicked on: ${val}`);
  };

  return (
    <div
      className="relative w-screen h-screen flex justify-center items-center bg-gray-900 text-white overflow-hidden"
      onClick={(e) => {
        if (e.clientX < window.innerWidth / 2) {
          prevSlide();
        } else {
          nextSlide();
        }
      }}
    >
      <div className="relative flex justify-center items-center w-full max-w-4xl h-80">
        {texts.map((text, index) => {
          const offset = (index - currentIndex + texts.length) % texts.length;
          const depth = ["z-10 opacity-50 scale-75", "z-40 scale-150", "z-10 opacity-50 scale-75"];
          const positions = ["translate-x-[-225px] translate-y-0", "translate-x-0 translate-y-0", "translate-x-[225px] translate-y-0"];

          return (
            <div
              key={index}
              className={`absolute text-center text-lg font-semibold bg-gray-700 px-6 py-4 rounded-full shadow-lg w-48 h-48 flex justify-center items-center transition-all duration-500 ${depth[offset]} ${positions[offset]}`}
              onClick={(e: any) => {
                e.stopPropagation();
                if (offset === 1) {
                  handleFocusedBubbleClick(e.target.textContent);
                } else if (e.clientX < window.innerWidth / 2) {
                  prevSlide();
                } else {
                  nextSlide();
                }
              }}
            >
              {text}
            </div>
          );
        })}
      </div>
    </div>
  );
}
