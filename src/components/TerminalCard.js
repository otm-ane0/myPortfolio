import React, { useEffect, useState } from "react";
import { Copy, Terminal, Check } from "lucide-react";
import { motion } from "framer-motion";
import './TerminalCard.css';

const TerminalCard = ({ command, language = "tsx", className = "" }) => {
  const [copied, setCopied] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // Typing animation logic
  useEffect(() => {
    let timeout;

    if (index < command.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + command.charAt(index));
        setIndex((prev) => prev + 1);
      }, 40); // typing speed
    } else {
      setIsComplete(true);
      timeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
        setIsComplete(false);
      }, 2000); // restart delay
    }

    return () => clearTimeout(timeout);
  }, [index, command]);

  // Copy handler
  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  // Simple syntax highlighting for common keywords
  const highlightCode = (code) => {
    if (!isComplete) return code;
    
    return code
      .replace(/(const|let|var|function|return|import|export|from|if|else|for|while|class|extends)/g, '<span style="color: #569cd6;">$1</span>')
      .replace(/(true|false|null|undefined)/g, '<span style="color: #569cd6;">$1</span>')
      .replace(/(".*?"|\'.*?\'|`.*?`)/g, '<span style="color: #ce9178;">$1</span>')
      .replace(/(\d+)/g, '<span style="color: #b5cea8;">$1</span>')
      .replace(/(\/\/.*$)/gm, '<span style="color: #6a9955;">$1</span>');
  };

  return (
    <div className={`terminal-card ${className}`}>
      {/* Header */}
      <div className="terminal-header">
        <div className="terminal-title">
          <Terminal className="terminal-icon" />
          Terminal
        </div>
        <button
          className="copy-button"
          onClick={handleCopy}
          aria-label="Copy to clipboard"
        >
          {copied ? <Check className="copy-icon success" /> : <Copy className="copy-icon" />}
        </button>
      </div>

      {/* Content */}
      <div className="terminal-content">
        {isComplete ? (
          <pre 
            className="code-block"
            dangerouslySetInnerHTML={{ __html: highlightCode(command) }}
          />
        ) : (
          <motion.pre className="typing-text">
            {displayedText}
            <motion.span
              className="cursor"
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 0.6, repeat: Infinity }}
            />
          </motion.pre>
        )}
      </div>
    </div>
  );
};

export default TerminalCard;