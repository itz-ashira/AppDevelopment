import React from 'react';
import './StudentList.css'; // Import CSS for styling
import Slidebar from './Slidebar';

const students = [
  { id: 1, name: 'John Doe', status: 'Confirmed' },
  { id: 2, name: 'Jane Smith', status: 'Not Confirmed' },
  { id: 3, name: 'Alice Johnson', status: 'Confirmed' },
  { id: 4, name: 'Bob Brown', status: 'Not Confirmed' },
  { id: 5, name: 'Charlie Davis', status: 'Confirmed' },
  { id: 6, name: 'Dana Lee', status: 'Not Confirmed' }
];

const StudentList = () => {
  // Separate students into confirmed and not confirmed
  const confirmedStudents = students.filter(student => student.status === 'Confirmed');
  const notConfirmedStudents = students.filter(student => student.status === 'Not Confirmed');

  return (
    <div className="student-list">
      <Slidebar />
      <h1>Student Admissions</h1>

      <h2>Confirmed Admissions</h2>
      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {confirmedStudents.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Not Confirmed Admissions</h2>
      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {notConfirmedStudents.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
