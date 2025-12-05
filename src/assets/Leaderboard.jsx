import React from "react";
import { useState } from "react";
import { Trophy, TrendingUp, Flame, Award, Medal } from "lucide-react";
import "./Leaderboard.css";

export default function Leaderboard() {
  const [timeFilter, setTimeFilter] = useState("all");

  const leaderboardData = [
    {
      rank: 1,
      name: "Ishita",
      xp: 9800,
      streak: 27,
      avatar: "IS",
      change: 2,
      level: 42,
    },
    {
      rank: 2,
      name: "Pranav",
      xp: 9200,
      streak: 21,
      avatar: "PR",
      change: -1,
      level: 40,
    },
    {
      rank: 3,
      name: "Aadhya",
      xp: 8800,
      streak: 19,
      avatar: "AA",
      change: 1,
      level: 38,
    },
    {
      rank: 4,
      name: "Rahul",
      xp: 7600,
      streak: 14,
      avatar: "RA",
      change: 0,
      level: 35,
    },
    {
      rank: 5,
      name: "Diya",
      xp: 7300,
      streak: 11,
      avatar: "DI",
      change: 3,
      level: 34,
    },
    {
      rank: 6,
      name: "Sanjay",
      xp: 6900,
      streak: 9,
      avatar: "SA",
      change: -2,
      level: 32,
    },
    {
      rank: 7,
      name: "Varun",
      xp: 6600,
      streak: 7,
      avatar: "VA",
      change: 1,
      level: 31,
    },
    {
      rank: 8,
      name: "Anika",
      xp: 6300,
      streak: 6,
      avatar: "AN",
      change: 0,
      level: 30,
    },
    {
      rank: 9,
      name: "Meera",
      xp: 6100,
      streak: 5,
      avatar: "ME",
      change: -1,
      level: 29,
    },
    {
      rank: 10,
      name: "Karthika",
      xp: 5800,
      streak: 4,
      avatar: "KA",
      change: 2,
      level: 28,
    },
  ];

  const getRankIcon = (rank) => {
    if (rank === 1) return <Trophy className="w-5 h-5 text-amber-400" />;
    if (rank === 2) return <Medal className="w-5 h-5 text-slate-400" />;
    if (rank === 3) return <Medal className="w-5 h-5 text-amber-600" />;
    return <span className="text-slate-500 font-semibold">#{rank}</span>;
  };

  const getAvatarColor = (index) => {
    const colors = [
      "bg-gradient-to-br from-purple-500 to-pink-500",
      "bg-gradient-to-br from-blue-500 to-cyan-500",
      "bg-gradient-to-br from-emerald-500 to-teal-500",
      "bg-gradient-to-br from-orange-500 to-red-500",
      "bg-gradient-to-br from-indigo-500 to-purple-500",
      "bg-gradient-to-br from-pink-500 to-rose-500",
      "bg-gradient-to-br from-cyan-500 to-blue-500",
      "bg-gradient-to-br from-teal-500 to-emerald-500",
      "bg-gradient-to-br from-amber-500 to-orange-500",
      "bg-gradient-to-br from-violet-500 to-purple-500",
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Award className="w-10 h-10 text-amber-400" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
              Leaderboard
            </h1>
          </div>
          <p className="text-slate-400 text-lg">Top performers this season</p>
        </div>

        {/* Filters */}
        <div className="flex gap-3 mb-8 justify-center">
          {["all", "week", "month"].map((filter) => (
            <button
              key={filter}
              onClick={() => setTimeFilter(filter)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                timeFilter === filter
                  ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30"
                  : "bg-slate-800 text-slate-400 hover:bg-slate-700"
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)} Time
            </button>
          ))}
        </div>

        {/* Leaderboard Card */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-700/50 overflow-hidden">
          {/* Top 3 Podium */}
          <div className="bg-gradient-to-b from-slate-800/80 to-slate-800/50 p-8 border-b border-slate-700/50">
            <div className="flex items-end justify-center gap-6">
              {/* 2nd Place */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-20 h-20 rounded-2xl ${getAvatarColor(
                    1
                  )} flex items-center justify-center text-white font-bold text-xl mb-3 shadow-lg`}
                >
                  {leaderboardData[1].avatar}
                </div>
                <Medal className="w-8 h-8 text-slate-400 mb-2" />
                <p className="text-white font-semibold mb-1">
                  {leaderboardData[1].name}
                </p>
                <p className="text-slate-400 text-sm">
                  {leaderboardData[1].xp.toLocaleString()} XP
                </p>
                <div className="mt-2 px-4 py-1.5 bg-slate-700/50 rounded-full text-xs text-slate-300">
                  Level {leaderboardData[1].level}
                </div>
              </div>

              {/* 1st Place */}
              <div className="flex flex-col items-center -mt-4">
                <div
                  className={`w-24 h-24 rounded-2xl ${getAvatarColor(
                    0
                  )} flex items-center justify-center text-white font-bold text-2xl mb-3 shadow-2xl ring-4 ring-amber-400/30`}
                >
                  {leaderboardData[0].avatar}
                </div>
                <Trophy className="w-10 h-10 text-amber-400 mb-2" />
                <p className="text-white font-bold text-lg mb-1">
                  {leaderboardData[0].name}
                </p>
                <p className="text-amber-400 font-semibold">
                  {leaderboardData[0].xp.toLocaleString()} XP
                </p>
                <div className="mt-2 px-5 py-1.5 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full text-sm text-amber-300 font-medium">
                  Level {leaderboardData[0].level}
                </div>
              </div>

              {/* 3rd Place */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-20 h-20 rounded-2xl ${getAvatarColor(
                    2
                  )} flex items-center justify-center text-white font-bold text-xl mb-3 shadow-lg`}
                >
                  {leaderboardData[2].avatar}
                </div>
                <Medal className="w-8 h-8 text-amber-600 mb-2" />
                <p className="text-white font-semibold mb-1">
                  {leaderboardData[2].name}
                </p>
                <p className="text-slate-400 text-sm">
                  {leaderboardData[2].xp.toLocaleString()} XP
                </p>
                <div className="mt-2 px-4 py-1.5 bg-slate-700/50 rounded-full text-xs text-slate-300">
                  Level {leaderboardData[2].level}
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700/50">
                  <th className="text-left py-4 px-6 text-slate-400 font-semibold text-sm uppercase tracking-wider">
                    Rank
                  </th>
                  <th className="text-left py-4 px-6 text-slate-400 font-semibold text-sm uppercase tracking-wider">
                    Player
                  </th>
                  <th className="text-right py-4 px-6 text-slate-400 font-semibold text-sm uppercase tracking-wider">
                    Level
                  </th>
                  <th className="text-right py-4 px-6 text-slate-400 font-semibold text-sm uppercase tracking-wider">
                    XP
                  </th>
                  <th className="text-right py-4 px-6 text-slate-400 font-semibold text-sm uppercase tracking-wider">
                    Streak
                  </th>
                  <th className="text-right py-4 px-6 text-slate-400 font-semibold text-sm uppercase tracking-wider">
                    Change
                  </th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData.slice(3).map((user, index) => (
                  <tr
                    key={user.rank}
                    className="border-b border-slate-700/30 hover:bg-slate-700/30 transition-colors"
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        {getRankIcon(user.rank)}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl ${getAvatarColor(
                            index + 3
                          )} flex items-center justify-center text-white font-semibold text-sm shadow-md`}
                        >
                          {user.avatar}
                        </div>
                        <span className="text-white font-medium">
                          {user.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <span className="text-slate-300 font-medium">
                        {user.level}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <span className="text-slate-200 font-semibold">
                        {user.xp.toLocaleString()}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-500/20 rounded-full">
                        <Flame className="w-4 h-4 text-orange-400" />
                        <span className="text-orange-300 font-medium">
                          {user.streak}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-right">
                      {user.change > 0 && (
                        <div className="inline-flex items-center gap-1 text-emerald-400">
                          <TrendingUp className="w-4 h-4" />
                          <span className="font-medium">+{user.change}</span>
                        </div>
                      )}
                      {user.change < 0 && (
                        <div className="inline-flex items-center gap-1 text-red-400">
                          <TrendingUp className="w-4 h-4 rotate-180" />
                          <span className="font-medium">{user.change}</span>
                        </div>
                      )}
                      {user.change === 0 && (
                        <span className="text-slate-500">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 text-center">
            <TrendingUp className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">87%</p>
            <p className="text-slate-400 text-sm">Active Users</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 text-center">
            <Flame className="w-6 h-6 text-orange-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">14</p>
            <p className="text-slate-400 text-sm">Avg Streak</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 text-center">
            <Award className="w-6 h-6 text-amber-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">7.2K</p>
            <p className="text-slate-400 text-sm">Avg XP</p>
          </div>
        </div>
      </div>
    </div>
  );
}
