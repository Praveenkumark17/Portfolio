import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const CODE_SNIPPET = [
    { text: 'class Developer {', dark: '#c678dd', light: '#d73a49' },
    { text: '  constructor() {', dark: '#e06c75', light: '#d73a49' },
    { text: '    this.name = "Praveenkumar K";', dark: '#98c379', light: '#005cc5' },
    { text: '    this.role = "FullStack";', dark: '#98c379', light: '#005cc5' },
    { text: '    this.passion = "Solving Problems";', dark: '#98c379', light: '#005cc5' },
    { text: '  }', dark: '#e06c75', light: '#d73a49' },
    { text: '', dark: '#abb2bf', light: '#24292e' },
    { text: '  async buildFuture() {', dark: '#61afef', light: '#6f42c1' },
    { text: '    while(alive) {', dark: '#c678dd', light: '#d73a49' },
    { text: '      await this.code();', dark: '#56b6c2', light: '#e36209' },
    { text: '      this.innovate();', dark: '#d19a66', light: '#e36209' },
    { text: '    }', dark: '#c678dd', light: '#d73a49' },
    { text: '  }', dark: '#61afef', light: '#6f42c1' },
    { text: '}', dark: '#c678dd', light: '#d73a49' }
];

const TerminalAnimation = () => {
    const [visibleLines, setVisibleLines] = useState([]);
    const isDark = useSelector((state) => state.theme.isTheme);

    // Dynamic Colors based on theme
    const colors = {
        bg: isDark ? '#1e1e2e' : '#f6f8fa',
        text: isDark ? '#abb2bf' : '#24292e',
        lineNum: isDark ? '#5c6370' : '#afb8c1',
        cursor: '#6366f1'
    };

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < CODE_SNIPPET.length) {
                const newLine = CODE_SNIPPET[index];
                if (newLine) {
                    setVisibleLines(prev => [...prev, newLine]);
                }
                index++;
            } else {
                setVisibleLines([]);
                index = 0;
            }
        }, 600);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{
            fontFamily: '"Fira Code", monospace',
            fontSize: '14px',
            padding: '20px',
            lineHeight: '1.6',
            height: '100%',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: colors.bg,
            transition: 'background-color 0.4s ease'
        }}>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f56' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffbd2e' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27c93f' }}></div>
            </div>
            <div style={{ flex: 1 }}>
                {visibleLines.map((line, i) => {
                    if (!line) return null;
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            style={{ 
                                color: isDark ? line.dark : line.light, 
                                position: 'relative', 
                                display: 'flex' 
                            }}
                        >
                            <span style={{ minWidth: '25px', color: colors.lineNum, marginRight: '10px', userSelect: 'none' }}>{i + 1}</span>
                            <pre style={{ margin: 0, whiteSpace: 'pre' }}>{line.text}</pre>
                        </motion.div>
                    );
                })}
                <motion.span
                    animate={{ opacity: [1, 1, 0, 0] }}
                    transition={{ 
                        repeat: Infinity, 
                        duration: 1,
                        times: [0, 0.5, 0.51, 1],
                        ease: "linear"
                    }}
                    style={{ 
                        display: 'inline-block',
                        width: '8px', 
                        height: '1.1em', 
                        backgroundColor: colors.cursor, 
                        marginLeft: '5px',
                        verticalAlign: 'middle'
                    }}
                />
            </div>
        </div>
    );
};

export default TerminalAnimation;
