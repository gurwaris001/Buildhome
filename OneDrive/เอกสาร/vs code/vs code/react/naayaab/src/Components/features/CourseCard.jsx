import React from 'react';
import { useApp } from '../../context/AppContext';

export const CourseCard = ({ course }) => {
  const { openBooking, setActiveSyllabus } = useApp();

  return (
    <div className="bg-[#15151e] border border-amber-500/20 rounded-xl p-6 flex flex-col justify-between">
      <div>
        <div className="flex flex-wrap gap-2 mb-4">
          {course.tags.map((tag, idx) => (
            <span key={idx} className="text-[10px] uppercase bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="serif-font text-2xl font-bold text-white mb-2">{course.title}</h3>
        <p className="text-xs text-gray-400 mb-4">Duration: {course.duration}</p>
        <p className="text-amber-300 text-xl font-bold mb-6">{course.fee}</p>
      </div>

      <div className="flex space-x-3">
        <button
          onClick={() => setActiveSyllabus(course)}
          className="flex-1 py-2 border border-gray-700 hover:border-amber-400 text-gray-300 hover:text-amber-400 rounded-lg text-xs font-semibold transition-colors"
        >
          Syllabus
        </button>
        <button
          onClick={() => openBooking(course.title, 'course')}
          className="flex-1 py-2 bg-amber-400 hover:bg-amber-300 text-black rounded-lg text-xs font-semibold transition-colors"
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};