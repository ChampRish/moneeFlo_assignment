// src/components/FileUploader.tsx
import React, { ChangeEvent } from 'react';

interface FileUploaderProps {
  label: string;
  onFileChange: (file: File | null) => void;
  acceptedTypes?: string[];
}

const FileUploader: React.FC<FileUploaderProps> = ({ label, onFileChange, acceptedTypes = ['.png', '.pdf'] }) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file && acceptedTypes.includes(file.type)) {
      onFileChange(file);
    } else {
      alert('Invalid file type');
      onFileChange(null);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2">{label}</label>
      <input
        type="file"
        accept={acceptedTypes.join(',')}
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:bg-blue-600"
      />
    </div>
  );
};

export default FileUploader;
