'use client'

import { useState, useEffect } from 'react'

const ADMIN_PASSWORD = 'TeasleyLawn2024' // Change this to your preferred password

export default function AdminProjects() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [projects, setProjects] = useState([])
  const [newProject, setNewProject] = useState({
    title: '',
    service: '',
    description: '',
    beforeImage: null,
    afterImage: null
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  // Load projects from localStorage on mount
  useEffect(() => {
    const savedProjects = localStorage.getItem('teasleyProjects')
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects))
    }
  }, [])

  // Save projects to localStorage whenever they change
  useEffect(() => {
    if (projects.length > 0) {
      localStorage.setItem('teasleyProjects', JSON.stringify(projects))
    }
  }, [projects])

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      setPassword('')
      setMessage('Successfully logged in!')
      setTimeout(() => setMessage(''), 3000)
    } else {
      setMessage('Invalid password')
      setTimeout(() => setMessage(''), 3000)
    }
  }

  const handleImageChange = (e, imageType) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setNewProject(prev => ({
          ...prev,
          [imageType]: reader.result
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAddProject = async (e) => {
    e.preventDefault()
    
    if (!newProject.title || !newProject.service || !newProject.beforeImage || !newProject.afterImage) {
      setMessage('Please fill in all fields and upload both images')
      setTimeout(() => setMessage(''), 3000)
      return
    }

    setLoading(true)

    const project = {
      id: Date.now(),
      title: newProject.title,
      service: newProject.service,
      description: newProject.description,
      beforeImage: newProject.beforeImage,
      afterImage: newProject.afterImage,
      createdAt: new Date().toLocaleDateString()
    }

    setProjects(prev => [project, ...prev])
    setNewProject({
      title: '',
      service: '',
      description: '',
      beforeImage: null,
      afterImage: null
    })
    setMessage('Project added successfully!')
    setTimeout(() => setMessage(''), 3000)
    setLoading(false)
  }

  const handleDeleteProject = (id) => {
    if (confirm('Are you sure you want to delete this project?')) {
      setProjects(prev => prev.filter(p => p.id !== id))
      setMessage('Project deleted')
      setTimeout(() => setMessage(''), 3000)
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setProjects([])
  }

  const services = [
    'Weekly Lawn Maintenance',
    'Bi-Weekly Lawn Maintenance',
    'Mulching',
    'Planting',
    'Pruning',
    'Full Service',
    'Other'
  ]

  if (!isAuthenticated) {
    return (
      <main className="bg-[#f5f3ef] text-[#112018] min-h-screen py-20">
        <div className="max-w-md mx-auto px-5">
          <div className="bg-white border border-[#d7dcd5] p-8 rounded">
            <h1 className="font-serif text-4xl mb-2">Admin Portal</h1>
            <p className="text-[#50685a] mb-8">Manage your project gallery</p>

            <form onSubmit={handleLogin}>
              <div className="mb-6">
                <label className="block uppercase tracking-[0.3em] text-[#50685a] text-sm font-medium mb-2">
                  Admin Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#f5f3ef] border border-[#d7dcd5] px-4 py-3 focus:outline-none focus:border-[#50685a]"
                  placeholder="Enter password"
                />
              </div>

              {message && (
                <div className={`mb-4 p-3 rounded text-sm ${message === 'Invalid password' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                  {message}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-[#021c16] text-white px-6 py-3 rounded hover:bg-[#0a3a2e] transition-colors"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-[#f5f3ef] text-[#112018] min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="font-serif text-5xl mb-2">Project Manager</h1>
            <p className="text-[#50685a]">Manage your before & after gallery</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-[#d7dcd5] text-[#021c16] px-6 py-3 rounded hover:bg-[#c4cfc9] transition-colors"
          >
            Logout
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Add New Project Form */}
          <div className="md:col-span-1">
            <div className="bg-white border border-[#d7dcd5] p-8 sticky top-20">
              <h2 className="font-serif text-2xl mb-6">Add New Project</h2>

              <form onSubmit={handleAddProject}>
                {/* Title */}
                <div className="mb-4">
                  <label className="block uppercase tracking-[0.2em] text-[#50685a] text-xs font-medium mb-2">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    value={newProject.title}
                    onChange={(e) => setNewProject(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="e.g., Backyard Transformation"
                    className="w-full bg-[#f5f3ef] border border-[#d7dcd5] px-3 py-2 text-sm focus:outline-none focus:border-[#50685a]"
                  />
                </div>

                {/* Service */}
                <div className="mb-4">
                  <label className="block uppercase tracking-[0.2em] text-[#50685a] text-xs font-medium mb-2">
                    Service Type *
                  </label>
                  <select
                    value={newProject.service}
                    onChange={(e) => setNewProject(prev => ({ ...prev, service: e.target.value }))}
                    className="w-full bg-[#f5f3ef] border border-[#d7dcd5] px-3 py-2 text-sm focus:outline-none focus:border-[#50685a]"
                  >
                    <option value="">Select service...</option>
                    {services.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Description */}
                <div className="mb-4">
                  <label className="block uppercase tracking-[0.2em] text-[#50685a] text-xs font-medium mb-2">
                    Description
                  </label>
                  <textarea
                    value={newProject.description}
                    onChange={(e) => setNewProject(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Project details..."
                    rows="3"
                    className="w-full bg-[#f5f3ef] border border-[#d7dcd5] px-3 py-2 text-sm focus:outline-none focus:border-[#50685a] resize-none"
                  />
                </div>

                {/* Before Image */}
                <div className="mb-4">
                  <label className="block uppercase tracking-[0.2em] text-[#50685a] text-xs font-medium mb-2">
                    Before Image *
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e, 'beforeImage')}
                    className="w-full text-sm"
                  />
                  {newProject.beforeImage && (
                    <img src={newProject.beforeImage} alt="Before preview" className="w-full mt-2 rounded border border-[#d7dcd5]" />
                  )}
                </div>

                {/* After Image */}
                <div className="mb-6">
                  <label className="block uppercase tracking-[0.2em] text-[#50685a] text-xs font-medium mb-2">
                    After Image *
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e, 'afterImage')}
                    className="w-full text-sm"
                  />
                  {newProject.afterImage && (
                    <img src={newProject.afterImage} alt="After preview" className="w-full mt-2 rounded border border-[#d7dcd5]" />
                  )}
                </div>

                {message && (
                  <div className={`mb-4 p-3 rounded text-sm ${message.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#021c16] text-white px-4 py-3 rounded hover:bg-[#0a3a2e] transition-colors disabled:opacity-50 uppercase tracking-[0.2em] text-sm font-medium"
                >
                  {loading ? 'Adding...' : 'Add Project'}
                </button>
              </form>
            </div>
          </div>

          {/* Projects List */}
          <div className="md:col-span-2">
            <h2 className="font-serif text-2xl mb-6">Your Projects ({projects.length})</h2>

            {projects.length === 0 ? (
              <div className="bg-white border border-[#d7dcd5] p-12 text-center">
                <p className="text-[#4e6055]">No projects yet. Add your first project to get started!</p>
              </div>
            ) : (
              <div className="space-y-6">
                {projects.map(project => (
                  <div key={project.id} className="bg-white border border-[#d7dcd5] p-6">
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-[#50685a] text-xs uppercase tracking-[0.2em] mb-2">Before</p>
                        <img src={project.beforeImage} alt="Before" className="w-full rounded border border-[#d7dcd5]" />
                      </div>
                      <div>
                        <p className="text-[#50685a] text-xs uppercase tracking-[0.2em] mb-2">After</p>
                        <img src={project.afterImage} alt="After" className="w-full rounded border border-[#d7dcd5]" />
                      </div>
                    </div>

                    <h3 className="font-serif text-xl mb-1">{project.title}</h3>
                    <p className="text-[#50685a] text-sm uppercase tracking-[0.2em] mb-2">{project.service}</p>
                    {project.description && (
                      <p className="text-[#4e6055] mb-4">{project.description}</p>
                    )}
                    <div className="flex justify-between items-center">
                      <p className="text-[#4e6055] text-xs">Added: {project.createdAt}</p>
                      <button
                        onClick={() => handleDeleteProject(project.id)}
                        className="text-red-600 hover:text-red-700 text-sm uppercase tracking-[0.2em] font-medium"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
