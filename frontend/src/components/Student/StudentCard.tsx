import React, { useState, useRef, useEffect } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { Dropdown, DropdownButton } from '../StyledComponents/DropDown';
import { Card } from '../StyledComponents/Card';
import { Student } from '../../types';

interface StudentCardProps {
  student: Student;
  onEdit: (uuid: number) => void;
  onDelete: (uuid: number) => void;
}

const StudentCard: React.FC<StudentCardProps> = ({ student, onEdit, onDelete }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };


  // Handle dropdown button clicks
  const handleEdit = () => {
    onEdit(student.uuid);
    setDropdownOpen(false);
  };

  const handleDelete = () => {
    onDelete(student.uuid);
    setDropdownOpen(false);
  };

  return (
    <Card>
      <div style={{ position: 'relative' }}>
        <FaEllipsisV
          onClick={toggleDropdown}
          style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }}
        />
        {isDropdownOpen && (
          <Dropdown ref={dropdownRef}>
            <DropdownButton onClick={handleEdit}>Edit</DropdownButton>
            <DropdownButton onClick={handleDelete}>Delete</DropdownButton>
          </Dropdown>
        )}
      </div>
      <h3>{student.name}</h3>
      <p>Age: {student.age}</p>
      <p>Grade: {student.gpa}</p>
    </Card>
  );
};

export default StudentCard;
