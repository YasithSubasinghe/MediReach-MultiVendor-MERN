import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaRobot } from "react-icons/fa"; // Robot icon from Font Awesome
import styles from "../../../styles/styles";

const Hero = () => {
  const [chatbotLoaded, setChatbotLoaded] = useState(false);
  const [chatbotVisible, setChatbotVisible] = useState(false); // Track visibility
  const location = useLocation(); // Detect route changes

  const handleChatbotClick = () => {
    if (!chatbotLoaded) {
      // Dynamically load Botpress scripts only once
      const injectScript = document.createElement("script");
      injectScript.src =  "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
      injectScript.async = true;
      document.body.appendChild(injectScript);

      const configScript = document.createElement("script");
      configScript.src = "https://files.bpcontent.cloud/2024/11/17/11/20241117111202-AO9N7CMQ.js";
      configScript.async = true;
      document.body.appendChild(configScript);

      setChatbotLoaded(true);
    }

    // Toggle chatbot visibility
    if (window.botpressWebChat) {
      const eventType = chatbotVisible ? "hide" : "show";
      window.botpressWebChat.sendEvent({ type: eventType });
      setChatbotVisible(!chatbotVisible); // Toggle visibility state
    }
  };

  useEffect(() => {
    // Hide chatbot on route change
    if (window.botpressWebChat) {
      window.botpressWebChat.sendEvent({ type: "hide" });
      setChatbotVisible(false); // Reset visibility state
    }
  }, [location]); // Runs on every route change

  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full ${styles.noramlFlex}`}
      style={{
        backgroundColor: "rgba(79, 116, 65, 0.25)",
      }}
    >
      <div
        className={`${styles.section} w-[90%] 800px:w-[60%] flex flex-col text-center`}
      >
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Discover the Essence of <br /> Holistic Wellness
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
          Embrace a healthier lifestyle with our curated selection of Ayurvedic
          remedies, herbal supplements, and natural skincare products. Rooted in
          ancient traditions, our offerings promote <br /> balance and
          well-being through the power of nature. Enhance your daily routine
          with essential oils, teas, and more, crafted to nurture mind, body,
          and spirit.
        </p>

        <Link to="/products" className="inline-block">
          <div className={`${styles.sellerbutton} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>

      {/* Chatbot Robot Icon */}
      <div
        className="fixed bottom-5 right-5 bg-[#4F7441] p-4 rounded-full shadow-lg cursor-pointer"
        onClick={handleChatbotClick}
      >
        <FaRobot size={30} color="#fff" />
      </div>
    </div>
  );
};

export default Hero;
