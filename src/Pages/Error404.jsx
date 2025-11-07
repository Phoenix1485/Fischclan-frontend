import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function Error404() {
    return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <div className="flex items-center justify-center mb-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center">
                        <AlertTriangle className="w-12 h-12 text-white" />
                    </div>
                </div>

                <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
                    404
                </h1>
                <p className="text-xl text-slate-400 mb-8">
                    Oops! Die Seite, die du suchst, existiert nicht.
                </p>

                <Link to="/">
                    <Button
                        size="lg"
                        className="bg-gradient-to-r w-md from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-5 text-lg rounded-xl"
                    >
                        Zur Startseite
                    </Button>
                </Link>

                <p className="text-slate-500 mt-6">
                    Wenn du denkst, das ist ein Fehler, kontaktiere unser Team.
                </p>
            </motion.div>
        </div>
    );
}
