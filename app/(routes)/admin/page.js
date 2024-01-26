import React from 'react';
import EditorForm from '../../components/admin/EditorForm';
function Admin() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="w-full md:w-10/12 lg:w-10/12">
        <h1>Admin</h1>
        <h2>Here you can upload, edit, and delete content on your site.</h2>
        <EditorForm/>
        </div>
      </div>
    </div>
  );
}

export default Admin;