import React from 'react';
import { pythonCode } from '@/data/pythonCodeData';
import PythonCodeColumn from '@/components/PythonCodeColumn';

/**
 * Standalone Python Code Background Animation Component
 *
 * A reusable animated background component featuring scrolling Python code.
 * Perfect for tech websites, coding portfolios, or any developer-focused application.
 *
 * Features:
 * - Smooth vertical scrolling animation
 * - Covers 50% of screen width
 * - Gradient transparency fade
 * - Multiple columns with staggered timing
 * - Completely transparent and non-interactive
 * - Zero dependencies (pure React + CSS)
 *
 * Usage:
 * 1. Copy this component to your project
 * 2. Import and use: <StandalonePythonCodeBackground />
 * 3. Place it behind your main content with lower z-index
 * 4. Customize colors, speed, or opacity as needed
 *
 * CSS Requirements:
 * - Tailwind CSS (or add equivalent CSS classes)
 * - The scrolling animation keyframes (included below)
 */
const StandalonePythonCodeBackground: React.FC = () => {
  // Inline styles for non-Tailwind projects
  const containerStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    pointerEvents: 'none',
    zIndex: 0,
  };

  const wrapperStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '50%',
    height: '100%',
  };

  const gradientStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      'linear-gradient(to right, transparent 0%, transparent 70%, black 100%)',
    zIndex: 10,
  };

  const getColumnStyle = (columnIndex: number): React.CSSProperties => ({
    position: 'absolute',
    top: 0,
    left: `${columnIndex * 15}%`,
    width: '15%',
    height: '100%',
    opacity: 0.25 - columnIndex * 0.03,
  });

  const getAnimationStyle = (columnIndex: number): React.CSSProperties => ({
    fontFamily: 'monospace',
    fontSize: '12px',
    lineHeight: '1.5',
    color: '#9CA3AF',
    whiteSpace: 'pre',
    animation: `scroll-animation ${200 + columnIndex * 30}s linear infinite`,
    animationDelay: `${columnIndex * -60}s`,
  });

  return (
    <>
      {/* CSS Animation Keyframes - Add this to your global CSS */}
      <style>{`
        @keyframes scroll-animation {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100vh);
          }
        }
      `}</style>

      {/* Tailwind Version */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black z-10" />

          {[0, 1, 2].map((columnIndex) => (
            <PythonCodeColumn
              key={columnIndex}
              code={pythonCode}
              columnIndex={columnIndex}
            />
          ))}
        </div>
      </div>

      {/* Non-Tailwind Version (Commented out - uncomment if not using Tailwind) */}
      {/*
      <div style={containerStyle}>
        <div style={wrapperStyle}>
          <div style={gradientStyle} />
          
          {[0, 1, 2].map((columnIndex) => (
            <div key={columnIndex} style={getColumnStyle(columnIndex)}>
              <div style={getAnimationStyle(columnIndex)}>
                {Array(10).fill(pythonCode).flat().map((line, index) => (
                  <div key={index} style={{ paddingTop: '2px', paddingBottom: '2px' }}>
                    {line || '\u00A0'}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      */}
    </>
  );
};

export default StandalonePythonCodeBackground;
