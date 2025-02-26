"use client";
import React from 'react';
import { motion } from "framer-motion";

export function AnimatedText({ text }: Readonly<{ text: string }>) {
    const splittedText = text.split('');
    return (
        <>
            {splittedText.map((letter, index) => (
                <motion.span
                    key={'t' + index}
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }}  
                    transition={{ delay: index * 0.1, duration: 0.5 }} 
                    className="inline-block"
                >
                    {letter}
                </motion.span>
            ))}
        </>
    );
};
export default AnimatedText