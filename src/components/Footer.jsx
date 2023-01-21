import React from "react";

export default function Footer() {
  return (
    <footer>
      {/* ATTRIBUTION */}
      {/* <div className="absolute bottom-0 left-0 w-full text-center md:text-lg h-[50px]"> */}
      <div className="w-full text-center md:text-lg h-[50px]">
        Challenge by{" "}
        <a href="https://twitter.com/AltSchoolAfrica" className="font-bold">
          {" "}
          AltSchool
        </a>
        . Coded by{" "}
        <a href="https://twitter.com/Chibuike035" className="font-bold">
          {" "}
          CodexJay
        </a>
        .
      </div>
    </footer>
  );
}
