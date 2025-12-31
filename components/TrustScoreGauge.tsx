
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface Props {
  score: number;
}

const TrustScoreGauge: React.FC<Props> = ({ score }) => {
  const data = [
    { name: 'Score', value: score },
    { name: 'Remaining', value: 100 - score },
  ];

  const getColor = (val: number) => {
    if (val >= 80) return '#22c55e'; // Green
    if (val >= 50) return '#f59e0b'; // Amber
    return '#ef4444'; // Red
  };

  return (
    <div className="relative w-48 h-48">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            startAngle={180}
            endAngle={0}
            paddingAngle={0}
            dataKey="value"
            stroke="none"
          >
            <Cell fill={getColor(score)} />
            <Cell fill="#f1f5f9" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
        <span className="text-4xl font-extrabold text-slate-900 leading-none">{score}</span>
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Trust Score</span>
      </div>
    </div>
  );
};

export default TrustScoreGauge;
