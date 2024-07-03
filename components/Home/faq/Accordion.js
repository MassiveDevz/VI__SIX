"use client";
import { useState, useRef } from "react";

export default function Accordion({ title, content, image }) {
  const [isActive, setIsActive] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>

      <div
        ref={contentRef}
        className={`accordion-content ${isActive ? "active" : ""}`}
        style={{
          maxHeight: isActive ? `${contentRef.current.scrollHeight}px` : "0px",
        }}
      >
        <div className="accordion-content-inner flexBetween">
          <img src={image} />
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

//
//
// "use client";
// import { useState } from "react";
// import Image from "next/image";

// export default function Accordion({ title, content, image }) {
//   const [isActive, setIsActive] = useState(false);

//   return (
//     <div className="accordion-item">
//       <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
//         <div>{title}</div>
//         <div>{isActive ? "-" : "+"}</div>
//       </div>

//       {isActive && (
//         <div className="accordion-content flexCenter">
//           <img src={image} />
//           {/* <Image src={image} width={100} height={100} /> */}
//           <p>{content}</p>
//         </div>
//       )}
//     </div>
//   );
// }
