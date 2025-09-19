import React, { useEffect } from "react";
import "./App.css";

const App = () => {
  useEffect(() => {
    // Load GSAP library
    const script1 = document.createElement('script');
    script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://unpkg.com/babel-standalone@6/babel.min.js';
    document.head.appendChild(script2);

    // Wait for GSAP to load then run animations
    script1.onload = () => {
      setTimeout(() => {
        animationTimeline();
      }, 1000);
    };

    // Fetch customization data
    fetchData();
  }, []);

  // Animation Timeline
  const animationTimeline = () => {
    if (!window.TweenMax || !window.TimelineMax) {
      setTimeout(animationTimeline, 500);
      return;
    }

    // Spit chars that needs to be animated individually
    const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
    const hbd = document.getElementsByClassName("wish-hbd")[0];

    if (textBoxChars) {
      textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
        .split("")
        .join("</span><span>")}</span`;
    }

    if (hbd) {
      hbd.innerHTML = `<span>${hbd.innerHTML
        .split("")
        .join("</span><span>")}</span`;
    }

    const ideaTextTrans = {
      opacity: 0,
      y: -20,
      rotationX: 5,
      skewX: "15deg",
    };

    const ideaTextTransLeave = {
      opacity: 0,
      y: 20,
      rotationY: 5,
      skewX: "-15deg",
    };

    const tl = new window.TimelineMax();

    tl.to(".container", 0.1, {
      visibility: "visible",
    })
      .from(".one", 0.7, {
        opacity: 0,
        y: 10,
      })
      .from(".two", 0.4, {
        opacity: 0,
        y: 10,
      })
      .to(
        ".one",
        0.7,
        {
          opacity: 0,
          y: 10,
        },
        "+=2.5"
      )
      .to(
        ".two",
        0.7,
        {
          opacity: 0,
          y: 10,
        },
        "-=1"
      )
      .from(".three", 0.7, {
        opacity: 0,
        y: 10,
      })
      .to(
        ".three",
        0.7,
        {
          opacity: 0,
          y: 10,
        },
        "+=2"
      )
      .from(".four", 0.7, {
        scale: 0.2,
        opacity: 0,
      })
      .from(".fake-btn", 0.3, {
        scale: 0.2,
        opacity: 0,
      })
      .staggerTo(
        ".hbd-chatbox span",
        0.5,
        {
          visibility: "visible",
        },
        0.05
      )
      .to(".fake-btn", 0.1, {
        backgroundColor: "rgb(127, 206, 248)",
      })
      .to(
        ".four",
        0.5,
        {
          scale: 0.2,
          opacity: 0,
          y: -150,
        },
        "+=0.7"
      )
      .from(".idea-1", 0.7, ideaTextTrans)
      .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
      .from(".idea-2", 0.7, ideaTextTrans)
      .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
      .from(".idea-3", 0.7, ideaTextTrans)
      .to(".idea-3 strong", 0.5, {
        scale: 1.2,
        x: 10,
        backgroundColor: "rgb(21, 161, 237)",
        color: "#fff",
      })
      .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
      .from(".idea-4", 0.7, ideaTextTrans)
      .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
      .from(
        ".idea-5",
        0.7,
        {
          rotationX: 15,
          rotationZ: -10,
          skewY: "-5deg",
          y: 50,
          z: 10,
          opacity: 0,
        },
        "+=0.5"
      )
      .to(
        ".idea-5 span",
        0.7,
        {
          rotation: 90,
          x: 8,
        },
        "+=0.4"
      )
      .to(
        ".idea-5",
        0.7,
        {
          scale: 0.2,
          opacity: 0,
        },
        "+=2"
      )
      .staggerFrom(
        ".idea-6 span",
        0.8,
        {
          scale: 3,
          opacity: 0,
          rotation: 15,
          ease: window.Expo?.easeOut,
        },
        0.2
      )
      .staggerTo(
        ".idea-6 span",
        0.8,
        {
          scale: 3,
          opacity: 0,
          rotation: -15,
          ease: window.Expo?.easeOut,
        },
        0.2,
        "+=1"
      )
      .staggerFromTo(
        ".baloons img",
        2.5,
        {
          opacity: 0.9,
          y: 1400,
        },
        {
          opacity: 1,
          y: -1000,
        },
        0.2
      )
      .from(
        ".girl-dp",
        0.5,
        {
          scale: 3.5,
          opacity: 0,
          x: 25,
          y: -25,
          rotationZ: -45,
        },
        "-=2"
      )
      .from(".hat", 0.5, {
        x: -100,
        y: 350,
        rotation: -180,
        opacity: 0,
      })
      .staggerFrom(
        ".wish-hbd span",
        0.7,
        {
          opacity: 0,
          y: -50,
          rotation: 150,
          skewX: "30deg",
          ease: window.Elastic?.easeOut.config(1, 0.5),
        },
        0.1
      )
      .staggerFromTo(
        ".wish-hbd span",
        0.7,
        {
          scale: 1.4,
          rotationY: 150,
        },
        {
          scale: 1,
          rotationY: 0,
          color: "#ff69b4",
          ease: window.Expo?.easeOut,
        },
        0.1,
        "party"
      )
      .from(
        ".wish h5",
        0.5,
        {
          opacity: 0,
          y: 10,
          skewX: "-15deg",
        },
        "party"
      )
      .staggerTo(
        ".eight svg",
        1.5,
        {
          visibility: "visible",
          opacity: 0,
          scale: 80,
          repeat: 3,
          repeatDelay: 1.4,
        },
        0.3
      )
      .to(".six", 0.5, {
        opacity: 0,
        y: 30,
        zIndex: "-1",
      })
      .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
      .to(
        ".last-smile",
        0.5,
        {
          rotation: 90,
        },
        "+=1"
      );

    // Restart Animation on click
    const replyBtn = document.getElementById("replay");
    if (replyBtn) {
      replyBtn.addEventListener("click", () => {
        tl.restart();
      });
    }
  };

  // Import the data to customize and insert them into page
  const fetchData = () => {
    const data = {
      "name": "Maria",
      "greetingText": "me gusta decirte Maria!",
      "imagePath": "vector.jpg"
    };

    Object.keys(data).map((customData) => {
      if (data[customData] !== "") {
        const element = document.getElementById(customData);
        if (element) {
          if (customData === "imagePath") {
            element.setAttribute("src", data[customData]);
          } else {
            element.innerText = data[customData];
          }
        }
      }
      return null;
    });
  };

  return (
    <div className="valentine-app">
      <div className="container">
        <div className="one">
          <h1 className="one">
            Holaaa
            <span id="name">Maria</span>
          </h1>
          <p className="two" id="greetingText">me gusta decirte Maria!</p>
        </div>
        <div className="three">
          <p>es Valentain Colombiano jj!!! :D</p>
        </div>
        <div className="four">
          <div className="text-box">
            <p className="hbd-chatbox">
              Feliz Valentine's Day!! Yeee! lofiuu y blabla..
            </p>
            <p className="fake-btn">Enviar</p>
          </div>
        </div>
        <div className="five">
          <p className="idea-1">Eso es lo que iba a hacer.</p>
          <p className="idea-2">Pero luego me detuve.</p>
          <p className="idea-3">
            Me di cuenta de que quería hacer algo<strong>Especial</strong>.
          </p>
          <p className="idea-4">Porque,</p>
          <p className="idea-5">
            Eres especial
            <span>:)</span>
          </p>
          <p className="idea-6">
            <span>S</span>
            <span>O</span>
          </p>
        </div>
        <div className="six">
          <img src="vector.jpg" alt="" className="girl-dp" id="imagePath" />
          <div className="wish">
            <h3 className="wish-hbd">Feliz día de San Valentín preciosaa</h3>
            <h5 id="wishText">mua muak</h5>
          </div>
        </div>
        <div className="seven">
          <div className="baloons">
            <img src="flower.svg" alt="" />
            <img src="flower.svg" />
            <img src="flower.svg" />
            <img src="flower.svg" alt="" />
            <img src="flower.svg" />
            <img src="flower.svg" alt="" />
            <img src="flower.svg" alt="" />
            <img src="flower.svg" />
            <img src="flower.svg" />
            <img src="flower.svg" alt="" />
            <img src="flower.svg" />
            <img src="flower.svg" />
            <img src="flower.svg" alt="" />
            <img src="flower.svg" />
            <img src="flower.svg" />
            <img src="flower.svg" alt="" />
            <img src="flower.svg" />
            <img src="flower.svg" alt="" />
            <img src="flower.svg" alt="" />
            <img src="flower.svg" />
            <img src="flower.svg" />
            <img src="flower.svg" />
          </div>
        </div>
        <div className="eight">
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
        </div>
        <div className="nine">
          <p>dime si te gustó.</p>
          <p id="replay">haz clic en si quieres volver a verlo.</p>
          <p className="last-smile">:)</p>
        </div>
      </div>
    </div>
  );
};

export default App;