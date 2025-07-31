import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import errorImage from '../assets/Home1.png';

export default function NotFound() {
    return (
        <div
            className="min-h-screen flex items-center justify-center bg-center bg-cover px-4 py-10 text-white"
            style={{ backgroundImage: `url(${errorImage})` }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center bg-[rgba(0,0,0,0.6)] p-10 rounded-3xl max-w-lg w-full border border-white/20 backdrop-blur-md"
            >
                <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-br from-[#00e673] to-[#0080ff] text-transparent bg-clip-text mb-4 animate-glow">
                    404
                </h1>

                <p className="text-xl sm:text-2xl mb-6 text-[#cccccc]">
                    Oops! The page you're looking for doesn’t exist.
                </p>

                <p className="text-sm italic text-[#a0f0c0] mb-6">
                    “Return back to where you came from. This page is cooking for later.”
                </p>

                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm sm:text-base rounded-lg font-semibold border-2 border-[#00e673] bg-transparent text-[#00e673] hover:bg-[#00e673] hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_#00e673]"
                >
                    <FaArrowLeft /> Go Back Home
                </Link>
            </motion.div>
        </div>
    )
};