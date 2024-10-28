import React from "react";
import { DownloadIcon, UploadIcon, DocumentIcon, TemplateIcon } from '@heroicons/react/outline';

function FileActions({ viewType, setViewType }) {
  return (
    <div className="file-actions">
      <div className="payroll-area">
        <span style={{ fontSize: '1.2em', fontWeight: 'bold' }}>Payroll Area:</span>
        <select
          value={viewType}
          onChange={e => setViewType(e.target.value)}
          className="payroll-dropdown"
        >
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div>
      <div className="file-actions-buttons">
        <button className="flex items-center">
          <DownloadIcon className="h-5 w-5 mr-2" aria-hidden="true" /> File Download
        </button>
        <button className="flex items-center">
          <UploadIcon className="h-5 w-5 mr-2" aria-hidden="true" /> Full Upload
        </button>
        <button className="flex items-center">
          <DocumentIcon className="h-5 w-5 mr-2" aria-hidden="true" /> Partial Upload
        </button>
        <button className="flex items-center">
          <TemplateIcon className="h-5 w-5 mr-2" aria-hidden="true" /> File Template
        </button>
      </div>
    </div>
  );
}

export default FileActions;
