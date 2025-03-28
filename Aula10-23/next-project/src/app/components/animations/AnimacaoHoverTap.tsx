"use client";

import {motion} from "framer-motion"

export default function AnimacaoHoverTap () {
    return (
        <motion.div
            whileHover={{scale: 1.2}}
            whileTap={{scale: 0.9}}
            className="w-20 h-20 bg-red-500"
        >
        Clica-me!
        </motion.div>
    )
}