
import React from "react";
import { Card, CardContent } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { Crown, Shield, Star, MessageCircle, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Team() {
  const teamMembers = [
    {
      name: "FischMax",
      role: "Owner",
      roleColor: "from-yellow-500 to-orange-500",
      icon: Crown,
      description: "Gründer und Entwickler des Servers",
      avatar: "👑",
      status: "online"
    },
    {
      name: "AquaMaria",
      role: "Admin",
      roleColor: "from-red-500 to-pink-500",
      icon: Shield,
      description: "Verantwortlich für Community-Management",
      avatar: "🛡️",
      status: "online"
    },
    {
      name: "BuilderTom",
      role: "Admin",
      roleColor: "from-red-500 to-pink-500",
      icon: Shield,
      description: "Erstellt epische Builds und Events",
      avatar: "🏗️",
      status: "offline"
    },
    {
      name: "ModLisa",
      role: "Moderator",
      roleColor: "from-blue-500 to-cyan-500",
      icon: Star,
      description: "Hilft Spielern und überwacht den Chat",
      avatar: "⭐",
      status: "online"
    },
    {
      name: "HelperJan",
      role: "Moderator",
      roleColor: "from-blue-500 to-cyan-500",
      icon: Star,
      description: "Unterstützt neue Spieler",
      avatar: "🌟",
      status: "online"
    },
    {
      name: "EventEmma",
      role: "Event Manager",
      roleColor: "from-purple-500 to-pink-500",
      icon: Star,
      description: "Organisiert spannende Server-Events",
      avatar: "🎉",
      status: "offline"
    }
  ];

  const getRoleBadgeStyle = (role) => {
    switch(role) {
      case "Owner":
        return "bg-gradient-to-r from-yellow-500 to-orange-500";
      case "Admin":
        return "bg-gradient-to-r from-red-500 to-pink-500";
      case "Moderator":
        return "bg-gradient-to-r from-blue-500 to-cyan-500";
      case "Event Manager":
        return "bg-gradient-to-r from-purple-500 to-pink-500";
      default:
        return "bg-slate-700";
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
            <Users className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">Unser Team</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Die Menschen hinter
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Fischclan
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Lerne unser engagiertes Team kennen, das Tag für Tag daran arbeitet,
            dir das beste Minecraft-Erlebnis zu bieten!
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="group bg-slate-900/50 backdrop-blur-sm border-slate-800 hover:border-blue-500/50 transition-all duration-300 h-full overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${member.roleColor}`} />
                  
                  <CardContent className="p-8">
                    {/* Avatar & Status */}
                    <div className="relative mb-6">
                      <div className="w-24 h-24 mx-auto bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300 shadow-xl">
                        {member.avatar}
                      </div>
                      <div className="absolute bottom-0 right-1/2 translate-x-8 translate-y-2">
                        <div className={`w-6 h-6 rounded-full border-4 border-slate-900 ${
                          member.status === 'online' ? 'bg-green-400' : 'bg-slate-600'
                        }`} />
                      </div>
                    </div>

                    {/* Name & Role */}
                    <div className="text-center mb-4">
                      <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                      <div className="flex items-center justify-center gap-2">
                        <Badge className={`${getRoleBadgeStyle(member.role)} text-white border-0`}>
                          <Icon className="w-3 h-3 mr-1" />
                          {member.role}
                        </Badge>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 text-center text-sm mb-6">
                      {member.description}
                    </p>

                    {/* Contact Button */}
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm font-medium">Kontaktieren</span>
                    </button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20">
            <CardContent className="p-12 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Werde Teil unseres Teams!
              </h2>
              <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                Wir suchen immer nach engagierten Spielern, die unserem Team beitreten möchten.
                Bewirb dich jetzt und hilf uns, Fischclan noch besser zu machen!
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-500/30">
                Jetzt bewerben
              </button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
