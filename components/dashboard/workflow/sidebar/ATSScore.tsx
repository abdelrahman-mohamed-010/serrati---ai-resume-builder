import React from "react";

export const ATSScore = () => {
  return (
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium text-sm text-gray-800">درجة ATS</h3>
        <span className="text-emerald-600 font-semibold">92%</span>
      </div>
      <p className="text-xs text-gray-600">
        سيرتك الذاتية متوافقة مع أنظمة تتبع المتقدمين
      </p>
    </div>
  );
};
