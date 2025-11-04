import React from "react";
import { motion } from "framer-motion";
import {
  Send,
  Download,
  Upload,
  RefreshCw,
  Settings,
  DollarSign,
  BarChart3,
  Brain,
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#6a11cb] via-[#2575fc] to-[#ff6ec4] bg-[length:400%_400%] animate-gradientShift p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md rounded-3xl backdrop-blur-2xl bg-white/10 border border-white/20 shadow-2xl p-8"
      >
        <h1 className="text-3xl font-extrabold text-center text-white mb-6">
          <span className="inline-flex items-center gap-2">
            🔷 AlgoNova Wallet
          </span>
        </h1>

        <div className="flex justify-around mb-6 text-white">
          <IconButton icon={<Send size={20} />} label="Send" />
          <IconButton icon={<Upload size={20} />} label="Receive" />
          <IconButton icon={<RefreshCw size={20} />} label="Swap" />
          <IconButton icon={<Download size={20} />} label="Withdraw" />
          <IconButton icon={<DollarSign size={20} />} label="FX Rate" />
          <IconButton icon={<Settings size={20} />} label="Settings" />
          <IconButton icon={<BarChart3 size={20} />} label="Market" />
          <IconButton icon={<Brain size={20} />} label="AI" />
        </div>

        <h2 className="text-xl font-semibold text-indigo-200 mb-4 flex items-center gap-2">
          Send Payment 💸
        </h2>

        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Recipient Name"
              className="w-full px-4 py-3 rounded-xl bg-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <input
              type="number"
              placeholder="Amount"
              className="w-full px-4 py-3 rounded-xl bg-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <select className="w-full px-4 py-3 rounded-xl bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-pink-400">
              <option value="USD" className="text-black">
                USD
              </option>
              <option value="EUR" className="text-black">
                EUR
              </option>
              <option value="PKR" className="text-black">
                PKR
              </option>
            </select>
          </div>

          <div className="text-sm text-indigo-100">
            Fee: <span className="font-bold">0.00 USD</span> <br />
            Total: <span className="font-bold">0.00 USD</span>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-semibold shadow-lg hover:shadow-pink-600/50 transition-all"
          >
            Send Payment 🚀
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

function IconButton({ icon, label }) {
  return (
    <motion.div
      whileHover={{ scale: 1.15 }}
      className="flex flex-col items-center cursor-pointer text-white/80 hover:text-white"
    >
      <div className="p-2 bg-white/20 rounded-xl mb-1">{icon}</div>
      <span className="text-xs">{label}</span>
    </motion.div>
  );
}
