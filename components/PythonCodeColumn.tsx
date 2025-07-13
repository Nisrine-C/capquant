
import React from 'react';

interface PythonCodeColumnProps {
  code: string[];
  columnIndex: number;
}

/**
 * Individual scrolling column component for the Python code background
 */
const PythonCodeColumn: React.FC<PythonCodeColumnProps> = ({ code, columnIndex }) => {
  return (
    <div
      className="absolute top-0 h-full"
      style={{
        left: `${columnIndex * 15}%`,
        width: '15%',
        opacity: 0.25 - (columnIndex * 0.03),
      }}
    >
      <div
        className="whitespace-pre font-mono text-xs leading-relaxed text-gray-400"
        style={{
          animation: `scroll-animation ${200 + columnIndex * 30}s linear infinite`,
          animationDelay: `${columnIndex * -60}s`,
        }}
      >
        {Array(10).fill(code).flat().map((line, index) => (
          <div key={index} className="py-0.5">
            {line || '\u00A0'}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PythonCodeColumn;
