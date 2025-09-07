import React from 'react'
import SMS1 from '../assets/SMS/SMS1.png'
import SMS2 from '../assets/SMS/SMS2.png'
import SMS3 from '../assets/SMS/SMS3.png'
import SMS4 from '../assets/SMS/SMS4.png'
import SMS5 from '../assets/SMS/SMS5.png'
import SMS6 from '../assets/SMS/SMS6.png'
import SMS7 from '../assets/SMS/SMS7.png'

function SMS() {
  return (
    <div className="min-h-screen p-8 md:p-12 bg-gradient-to-b from-[#0f172a] via-[#1e3a8a] to-[#0f172a] text-white">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-sky-400 to-indigo-300">
        Student Management System
      </h1>
      <p className="text-center mb-10 text-lg">
        Language used: <span className="font-semibold text-sky-300">C</span>
      </p>

      {/* Intro image */}
      <div className="flex justify-center mb-10">
        <img src={SMS1} alt="SMS Menu" className="rounded-xl shadow-xl max-w-lg w-full" />
      </div>

      {/* Development Process Section */}
      <div className="bg-[#1e293b]/60 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-10 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-sky-300">Development Process</h2>
        <p className="mb-6 text-gray-200 leading-relaxed">
          The <span className="font-semibold text-sky-300">Student Management System</span> was built in
          C with a strong focus on applying the concept of <span className="font-semibold text-sky-300">
            file handling</span> to manage student records persistently.
        </p>

        <ol className="list-decimal list-inside space-y-5 text-gray-100">
          <li>
            <span className="font-semibold text-sky-200">Planning the Features:</span>
            Outlined main operations: add, display, search, update, delete, and exit.
          </li>
          <li>
            <span className="font-semibold text-sky-200">Designing the Menu Interface:</span>
            A menu-driven program where users select operations by entering numeric options.
          </li>
          <li>
            <span className="font-semibold text-sky-200">Implementing File Handling:</span>
            Used <code>fopen</code>, <code>fread</code>, <code>fwrite</code>, and <code>fseek</code>
            to store and retrieve student data efficiently.
          </li>
          <li>
            <span className="font-semibold text-sky-200">Developing CRUD Functionalities:</span>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li><b>Add:</b> Stores student details</li>
              <li><b>Display:</b> Shows all students</li>
              <li><b>Search:</b> Finds student by roll number</li>
              <li><b>Update:</b> Edits student details</li>
              <li><b>Delete:</b> Removes student record</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold text-sky-200">Improving the UI:</span>
            Even though console-based, the interface was kept clean with headings and separators.
          </li>
          <li>
            <span className="font-semibold text-sky-200">Testing and Debugging:</span>
            Each feature was tested with valid and invalid inputs for stability.
          </li>
        </ol>

        <p className="mt-8 text-gray-300">
          This project not only strengthened my <b>C programming</b> skills but also gave me
          hands-on experience with <b>file handling, modular programming, and structured design</b>.
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <a
          href="https://github.com/SamratVsn/C-codes/blob/main/Student_Management.c"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 text-lg font-semibold rounded-xl shadow-lg 
                     bg-gradient-to-r from-indigo-500 via-sky-500 to-indigo-400
                     hover:from-sky-500 hover:via-indigo-500 hover:to-sky-400
                     transform hover:scale-105 transition duration-300 ease-in-out
                     text-white"
        >
          🔗 View Source Code
        </a>
      </div>

      <div className="bg-[#1e293b]/60 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-10 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-rose-300">Challenges Faced</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-200">
          <li>
            <span className="font-semibold text-rose-200">File Opening:</span>
            In the beginning, I faced issues with opening the file in the correct mode (`rb`, `wb`, `ab+`).
            Sometimes data was getting overwritten or lost because I used the wrong mode.
          </li>
          <li>
            <span className="font-semibold text-rose-200">Data Saving:</span>
            At first, the student details wouldn’t persist after restarting the program.
            I had to carefully use <code>fwrite</code> and <code>fread</code> with structures to store the data correctly.
          </li>
          <li>
            <span className="font-semibold text-rose-200">Updating records:</span>
            Updating specific student details was tricky since I had to move the file pointer
            using <code>fseek</code> and overwrite only the correct record without disturbing others.
          </li>
          <li>
            <span className="font-semibold text-rose-200">Deleting a record:</span>
            Unlike databases, C doesn’t let you directly “delete” a record.
            I had to rewrite the entire file without the deleted record, which was challenging at first.
          </li>
          <li>
            <span className="font-semibold text-rose-200">Handling invalid inputs:</span>
            Sometimes, the program would crash if the user entered unexpected values.
            I learned to validate inputs and handle errors gracefully.
          </li>
          <li>
            <span className="font-semibold text-rose-200">Debugging file corruption:</span>
            A few times, the file got corrupted due to improper closing (<code>fclose</code>) or
            incorrect structure alignment. Fixing this taught me patience and careful debugging.
          </li>
        </ul>
        <p className="mt-6 text-gray-300">
          Overcoming these challenges helped me gain a deeper understanding of how file handling works
          in C and made me more confident in solving real-world problems with low-level programming concepts.
        </p>
      </div>
      {/* Screenshots */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-sky-300">
        System Screenshots
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[SMS2, SMS3, SMS4, SMS5, SMS6, SMS7].map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
          >
            <img src={src} alt={`Screenshot ${index + 2}`} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SMS