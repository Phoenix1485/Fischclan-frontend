import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { 
  Trophy, 
  Gift, 
  Star,
  ExternalLink,
  Crown,
  Sparkles,
  Award
} from "lucide-react";
import { motion } from "framer-motion";

export default function Voten() {
  const [votes, setVotes] = useState({
    daily: 12,
    monthly: 234
  });

  const voteLinks = [
    {
      name: "Minecraft-Server.eu",
      url: "https://minecraft-server.eu",
      icon: "🇪🇺",
      description: "Deutschlands größte Server-Liste",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Minecraft-Server.net",
      url: "https://minecraft-server.net",
      icon: "🌐",
      description: "Internationale Voting-Plattform",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      name: "TopG.org",
      url: "https://topg.org",
      icon: "⭐",
      description: "Beliebte Gaming-Server-Liste",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const rewards = [
    {
      votes: 1,
      reward: "Vote Key",
      description: "Öffne Vote-Kisten für tolle Belohnungen",
      icon: Gift,
      color: "from-blue-500 to-cyan-500"
    },
    {
      votes: 7,
      reward: "Rare Key + 5.000$",
      description: "Wöchentliche Treue-Belohnung",
      icon: Star,
      color: "from-purple-500 to-pink-500"
    },
    {
      votes: 30,
      reward: "Legendary Key + Special Item",
      description: "Epische monatliche Belohnung",
      icon: Crown,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const topVoters = [
    { rank: 1, name: "MaximusVoter", votes: 87, icon: "👑" },
    { rank: 2, name: "VoteQueen", votes: 82, icon: "🥈" },
    { rank: 3, name: "FischFanatic", votes: 78, icon: "🥉" },
    { rank: 4, name: "DailyPlayer", votes: 65, icon: "⭐" },
    { rank: 5, name: "LoyalGamer", votes: 61, icon: "⭐" }
  ];

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
            <Trophy className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">Unterstütze uns</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Vote für
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Fischclan
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Unterstütze unseren Server durch deine Stimme und erhalte fantastische Belohnungen!
            Du kannst alle 24 Stunden auf jeder Plattform voten.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20">
            <CardContent className="p-8 text-center">
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <div className="text-4xl font-bold text-white mb-2">{votes.daily}</div>
              <div className="text-slate-400">Votes heute</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20">
            <CardContent className="p-8 text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <div className="text-4xl font-bold text-white mb-2">{votes.monthly}</div>
              <div className="text-slate-400">Votes diesen Monat</div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Vote Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Jetzt voten!
            </h2>
            <p className="text-lg text-slate-400">
              Klicke auf die Buttons und unterstütze Fischclan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {voteLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="group bg-slate-900/50 backdrop-blur-sm border-slate-800 hover:border-blue-500/50 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {link.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{link.name}</h3>
                      <p className="text-sm text-slate-400">{link.description}</p>
                    </div>
                    
                    <Button 
                      className={`w-full bg-gradient-to-r ${link.color} hover:opacity-90 text-white`}
                      onClick={() => window.open(link.url, '_blank')}
                    >
                      Jetzt voten
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Rewards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Vote-Belohnungen
            </h2>
            <p className="text-lg text-slate-400">
              Je mehr du votest, desto bessere Belohnungen erhältst du!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {rewards.map((reward, index) => {
              const Icon = reward.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-800 h-full">
                    <div className={`h-2 bg-gradient-to-r ${reward.color}`} />
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${reward.color} flex items-center justify-center`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className="text-center mb-4">
                        <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50 mb-2">
                          {reward.votes} {reward.votes === 1 ? 'Vote' : 'Votes'}
                        </Badge>
                        <h3 className="text-xl font-bold text-white mb-2">{reward.reward}</h3>
                        <p className="text-sm text-slate-400">{reward.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Top Voters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Top Voter diesen Monat
            </h2>
            <p className="text-lg text-slate-400">
              Die fleißigsten Unterstützer unserer Community
            </p>
          </div>

          <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-800 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="space-y-4">
                {topVoters.map((voter, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors"
                  >
                    <div className="text-3xl">{voter.icon}</div>
                    <div className="flex-1">
                      <div className="font-semibold text-white">{voter.name}</div>
                      <div className="text-sm text-slate-400">Rang #{voter.rank}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-400">{voter.votes}</div>
                      <div className="text-xs text-slate-500">Votes</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}