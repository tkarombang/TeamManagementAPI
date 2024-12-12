function editDeveloper(developerId) {
  // Fetch developer details and populate the form (replace with server-side logic)
  alert('Edit developer ID: ' + developerId);
}

function deleteDeveloper(developerId) {
  // Confirm and send delete request
  if (confirm('Are you sure you want to delete developer ID ' + developerId + '?')) {
    alert('Developer deleted');
    // Replace with actual server request
  }
}

function editProject(projectId) {
  alert('Edit project ID: ' + projectId);
}

function deleteProject(projectId) {
  if (confirm('Are you sure you want to delete project ID ' + projectId + '?')) {
    alert('Project deleted');
  }
}