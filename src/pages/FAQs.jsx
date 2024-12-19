import React, { useState, useEffect } from "react";

const FAQs = () => {
  const [selectedCategory, setSelectedCategory] = useState("GENERAL");
  const [openQuestion, setOpenQuestion] = useState(null);

  const categories = ["GENERAL", "REGISTRATION", "STAY & TRAVEL", "EXPENSES"];
  const faqsData = {
    GENERAL: [
      {
        question: "What are the different phases of Hackathon?",
        answer: "Phase 1: Registration, Phase 2: Coding, Phase 3: Presentation.",
      },
      {
        question: "Who can participate in the Hackathon?",
        answer: "Anyone with a passion for coding and problem-solving.",
      },
    ],
    REGISTRATION: [
      {
        question: "How do I register for the Hackathon?",
        answer: "You can register on our official website under the registration section.",
      },
      {
        question: "What are the registration fees?",
        answer: "The registration is completely free of charge.",
      },
    ],
    "STAY & TRAVEL": [
      {
        question: "Is accommodation provided?",
        answer: "Yes, accommodation is provided for all participants.",
      },
      {
        question: "Will travel expenses be reimbursed?",
        answer: "Travel expenses are not covered in this event.",
      },
    ],
    EXPENSES: [
      {
        question: "Are meals provided during the event?",
        answer: "Yes, meals and refreshments will be provided.",
      },
      {
        question: "Do I need to pay for any tools or software?",
        answer: "No, all required tools and software will be provided for free.",
      },
    ],
  };

  useEffect(() => {
    setOpenQuestion(null);
  }, [selectedCategory]);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="w-screen h-auto text-white">
      <div className="text-center py-6">
        <h1 className="text-8xl bg-center md:text-5xl lg:text-8xl font-bold font-angrybirds 
          animate-fade-in transition-all duration-300">
          FAQs
        </h1>
        <p className="text-gray-400 mt-2 text-lg font-angrybirds">
          Quick answers to questions you may have
        </p>
      </div>

      <div className="flex flex-col md:flex-row h-full">
        <div className="w-full md:w-1/5 flex flex-col items-center gap-4 p-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`w-3/4 py-2 px-3 rounded-lg text-center font-semibold 
                transition-all duration-300 transform hover:scale-105
                ${
                  selectedCategory === category
                    ? "bg-pink-500 text-white shadow-lg"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="w-full md:w-3/5 mx-auto p-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center font-angrybirds">
            {selectedCategory} FAQs
          </h2>
          <div className="space-y-4">
            {faqsData[selectedCategory].map((faq, index) => (
              <div 
                key={index} 
                className="border-b border-gray-600 pb-4 transition-all duration-300 hover:border-pink-500"
              >
                <div
                  className="flex justify-between items-center cursor-pointer 
                    transition-all duration-300 hover:text-pink-500"
                  onClick={() => toggleQuestion(index)}
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  <span className={`text-2xl transform transition-transform duration-300 
                    ${openQuestion === index ? "rotate-180" : "rotate-0"}`}>
                    {openQuestion === index ? "−" : "+"}
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 transform
                    ${openQuestion === index 
                      ? "max-h-96 opacity-100 translate-y-0"
                      : "max-h-0 opacity-0 -translate-y-2"}`}
                >
                  <div className="mt-2 text-gray-300 transition-opacity duration-300">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;