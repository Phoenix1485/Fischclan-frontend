import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils/index";
import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import {
  Copy,
  Check,
  Users,
  Zap,
  Shield,
  Heart,
  Sword,
  Trophy,
  MessageCircle,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [onlinePlayers, setOnlinePlayers] = useState(42);
  const serverIP = "play.fischclan.de";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(serverIP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    // Simulate player count changes
    const interval = setInterval(() => {
      setOnlinePlayers(prev => Math.max(30, Math.min(60, prev + Math.floor(Math.random() * 5) - 2)));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Sword,
      title: "PvP & Survival",
      description: "Spannende Kämpfe und friedliches Bauen in perfekter Harmonie",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Tolle Community",
      description: "Freundliche Spieler und aktive Admins helfen dir jederzeit",
      color: "from-cyan-500 to-blue-400"
    },
    {
      icon: Shield,
      title: "Grief-Schutz",
      description: "Deine Builds sind sicher mit unserem Schutzsystem",
      color: "from-blue-600 to-blue-400"
    },
    {
      icon: Zap,
      title: "Custom Features",
      description: "Einzigartige Plugins und spezielle Events nur für dich",
      color: "from-cyan-600 to-cyan-400"
    }
  ];

  const stats = [
    { label: "Spieler Online", value: onlinePlayers, icon: Users },
    { label: "Uptime", value: "99.9%", icon: Zap },
    { label: "Discord Mitglieder", value: "500+", icon: MessageCircle },
    { label: "Daily Events", value: "3+", icon: Trophy }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-blue-400 font-medium">{onlinePlayers} Spieler online</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                Willkommen bei
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Fischclan
              </span>
            </h1>

            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              Tauche ein in ein einzigartiges Minecraft-Abenteuer mit einer großartigen Community,
              spannenden Events und endlosen Möglichkeiten!
            </p>

            {/* Server IP Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <div className="flex items-center gap-3 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl px-6 py-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-slate-400 text-sm">Server IP:</span>
                </div>
                <code className="text-white font-mono text-lg font-semibold">{serverIP}</code>
                <Button
                  onClick={copyToClipboard}
                  size="sm"
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 text-lg rounded-xl shadow-lg shadow-blue-500/30"
              >
                Jetzt beitreten
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Link to={createPageUrl("Regeln")}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-700 text-white hover:bg-slate-800 px-8 py-4 text-lg rounded-xl"
                >
                  Regeln ansehen
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-800 hover:border-blue-500/50 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Icon className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Warum Fischclan?
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Erlebe Minecraft wie nie zuvor mit unseren einzigartigen Features
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="group bg-slate-900/50 backdrop-blur-sm border-slate-800 hover:border-blue-500/50 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-slate-400">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/20 !border-blue-500/30 overflow-hidden relative z-10">
          <CardContent className="p-12 text-center relative">
            <div className="relative">
              <Heart className="w-16 h-16 mx-auto mb-6 text-blue-400" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Bereit für dein Abenteuer?
              </h2>
              <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                Schließe dich unserer wachsenden Community an und erlebe unvergessliche Momente!
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 text-lg rounded-xl"
                >
                  Discord beitreten
                  <MessageCircle className="w-5 h-5 ml-2" />
                </Button>
                <Link to={createPageUrl("Team")}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-700 text-white hover:bg-slate-800 px-8 py-3 text-lg rounded-xl"
                  >
                    Team kennenlernen
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}