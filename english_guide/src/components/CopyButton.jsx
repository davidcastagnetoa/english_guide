import React, { useContext, useState } from "react";
import { IoMdCopy } from "react-icons/io";
import { LanguageContext } from "./context/LanguageContext";

function CopyButton({ textToCopy, onCopy }) {
  const { language } = useContext(LanguageContext);
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    onCopy();
    // El mensaje "copied!" se ocultará después de 2 segundos
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        class="flex items-center bg-transparent px-2 py-1 border border-solid shadow-none rounded-lg dark:border-slate-700 border-slate-300 bg-clip-border  ease-in-out group text-slate-500 "
      >
        <IoMdCopy />
        <span class="ml-1 text-xs leading-normal">
          {language === "english" ? "EXT: 66486" : "EXT: 66173"}
        </span>
      </button>
    </div>
  );
}

export default CopyButton;
