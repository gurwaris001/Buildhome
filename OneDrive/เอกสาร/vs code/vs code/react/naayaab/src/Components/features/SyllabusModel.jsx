import React from 'react';
import { useApp } from '../../context/AppContext';

export const SyllabusModal = () => {
  const { activeSyllabus, setActiveSyllabus, openBooking } = useApp();

  if (!activeSyllabus) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#15151e] border border-amber-500/30 w-full max-w-lg rounded-2xl p-6 relative">
        <button
          onClick={() => setActiveSyllabus(null)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        <h3 className="serif-font text-2xl font-bold text-amber-300 mb-1">{activeSyllabus.title}</h3>
        <p className="text-xs text-gray-400 mb-6">Curriculum Breakdown ({activeSyllabus.duration})</p>

        <ul className="space-y-3 mb-8">
          {activeSyllabus.syllabus.map((item, idx) => (
            <li key={idx} className="text-xs text-gray-300 flex items-start space-x-2 bg-[#0b0b0f] p-3 rounded-lg border border-gray-800">
              <span className="text-amber-400 font-bold">0{idx + 1}.</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => {
            const title = activeSyllabus.title;
            setActiveSyllabus(null);
            openBooking(title, 'course');
          }}
          className="w-full py-3 bg-amber-400 text-black font-semibold text-xs uppercase tracking-wider rounded-lg hover:bg-amber-300"
        >
          Enroll In Course
        </button>
      </div>
    </div>
  );
};