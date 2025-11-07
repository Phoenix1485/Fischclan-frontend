import React from "react";
import { Card, CardContent } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { 
  Shield, 
  Users, 
  MessageCircle, 
  Ban, 
  Heart,
  AlertTriangle,
  CheckCircle,
  XCircle
} from "lucide-react";
import { motion } from "framer-motion";

export default function Regeln() {
  const rules = [
    {
      icon: Heart,
      title: "Respekt & Freundlichkeit",
      severity: "wichtig",
      description: "Behandle alle Spieler mit Respekt. Beleidigungen, Diskriminierung und Mobbing sind streng verboten.",
      examples: [
        { good: true, text: "Freundlich mit anderen kommunizieren" },
        { good: false, text: "Andere Spieler beleidigen oder belästigen" }
      ]
    },
    {
      icon: Ban,
      title: "Kein Griefing",
      severity: "kritisch",
      description: "Das Zerstören oder Verändern fremder Builds ohne Erlaubnis ist verboten.",
      examples: [
        { good: true, text: "Eigene Projekte bauen" },
        { good: false, text: "Fremde Häuser zerstören oder ausrauben" }
      ]
    },
    {
      icon: MessageCircle,
      title: "Chat-Verhalten",
      severity: "wichtig",
      description: "Spam, Werbung und unangemessene Inhalte im Chat sind nicht erlaubt.",
      examples: [
        { good: true, text: "Normal chatten und helfen" },
        { good: false, text: "Spam, Caps-Lock oder Werbung für andere Server" }
      ]
    },
    {
      icon: Shield,
      title: "Fair Play",
      severity: "kritisch",
      description: "Cheats, Hacks, X-Ray oder andere unfaire Vorteile sind strengstens verboten.",
      examples: [
        { good: true, text: "Legitim spielen und Ressourcen farmen" },
        { good: false, text: "Hacks, X-Ray Texture Packs oder Duping nutzen" }
      ]
    },
    {
      icon: Users,
      title: "PvP Regeln",
      severity: "normal",
      description: "PvP ist nur in ausgewiesenen Zonen erlaubt. Spawn-Killing ist verboten.",
      examples: [
        { good: true, text: "PvP in der Arena" },
        { good: false, text: "Anfänger am Spawn töten" }
      ]
    },
    {
      icon: AlertTriangle,
      title: "Bugs & Exploits",
      severity: "kritisch",
      description: "Das Ausnutzen von Bugs oder Exploits ist verboten. Melde Bugs an das Team!",
      examples: [
        { good: true, text: "Bugs dem Team melden" },
        { good: false, text: "Bugs ausnutzen für eigenen Vorteil" }
      ]
    }
  ];

  const consequences = [
    {
      severity: "Leicht",
      punishment: "Verwarnung",
      color: "from-yellow-500 to-orange-500",
      examples: ["Leichter Chat-Verstoß", "Unbeabsichtigtes Fehlverhalten"]
    },
    {
      severity: "Mittel",
      punishment: "Temporärer Ban (1-7 Tage)",
      color: "from-orange-500 to-red-500",
      examples: ["Mehrfache Verstöße", "Spam", "Leichtes Griefing"]
    },
    {
      severity: "Schwer",
      punishment: "Permanenter Ban",
      color: "from-red-500 to-red-700",
      examples: ["Cheating/Hacking", "Schweres Griefing", "Diskriminierung"]
    }
  ];

  const getSeverityBadge = (severity) => {
    switch(severity) {
      case "kritisch":
        return "bg-red-500/20 text-red-400 border-red-500/50";
      case "wichtig":
        return "bg-orange-500/20 text-orange-400 border-orange-500/50";
      default:
        return "bg-blue-500/20 text-blue-400 border-blue-500/50";
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <Shield className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">Server Regeln</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Regeln für ein
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Faires Miteinander
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Diese Regeln sorgen dafür, dass jeder Spieler Spaß haben kann.
            Bitte lies sie sorgfältig durch!
          </p>
        </motion.div>

        {/* Rules Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {rules.map((rule, index) => {
            const Icon = rule.icon;
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
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <Badge className={`${getSeverityBadge(rule.severity)} border`}>
                        {rule.severity}
                      </Badge>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">{rule.title}</h3>
                    <p className="text-slate-400 mb-6">{rule.description}</p>

                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-slate-300 mb-2">Beispiele:</div>
                      {rule.examples.map((example, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          {example.good ? (
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          ) : (
                            <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                          )}
                          <span className={`text-sm ${example.good ? 'text-slate-400' : 'text-slate-500'}`}>
                            {example.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Consequences Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Konsequenzen bei Verstößen
            </h2>
            <p className="text-lg text-slate-400">
              Regelbrüche werden je nach Schwere unterschiedlich geahndet
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {consequences.map((consequence, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-800 h-full">
                  <div className={`h-2 bg-gradient-to-r ${consequence.color}`} />
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{consequence.severity}</h3>
                    <div className="text-xl font-semibold text-blue-400 mb-6">
                      {consequence.punishment}
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-slate-400 mb-2">Beispiele:</div>
                      {consequence.examples.map((example, idx) => (
                        <div key={idx} className="text-sm text-slate-500">
                          • {example}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Important Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Wichtiger Hinweis</h3>
                  <p className="text-slate-400">
                    Das Team behält sich vor, in besonderen Fällen auch andere Maßnahmen zu ergreifen.
                    Bei Unklarheiten oder Fragen zu den Regeln kannst du dich jederzeit an das Team wenden.
                    Unwissenheit schützt nicht vor Strafe!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}