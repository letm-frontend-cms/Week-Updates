function AboutUs() {
  const developers = [
    { name: 'Abhay Rai', title: 'Senior Frontend Engineer (Remote)', desc: 'Architecting seamless user experiences and optimizing the core application performance.' },
    { name: 'Ankit Kumar', title: 'Backend Maestro', desc: 'Crafting robust APIs and ensuring the servers are always up and running seamlessly.' },
    { name: 'Chintan Kukadiya', title: 'DevOps & Infrastructure', desc: 'Automating deployment pipelines and scaling our cloud architecture for the future.' },
    { name: 'Nitin Dhakad', title: 'Lead Fullstack Developer', desc: 'Bridging the gap between frontend and backend architectures with elegant solutions.' },
    { name: 'Suraj Pandey', title: 'UI/UX Designer', desc: 'Designing beautiful and intuitive interfaces that our users absolutely love.' },
    { name: 'Utkarsh Mahajan', title: 'Quality Assurance Engineer', desc: 'Writing bulletproof tests to ensure our application functions perfectly every time.' }
  ];

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* About Project Section */}
      <section style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '1rem' }}>About the Project</h1>
        <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
          This project embodies a modern web architecture, utilizing a cutting-edge Module Federation 
          approach to create independent, scalable microfrontends. By decoupling the presentation layer 
          from the core logic, we enable multiple teams to build, test, and ship features rapidly and autonomously.
        </p>
      </section>

      {/* About Developers Section */}
      <section>
        <h2 style={{ fontSize: '2rem', color: '#333', textAlign: 'center', marginBottom: '2rem' }}>Meet the Developers</h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem' 
        }}>
          {developers.map((dev, idx) => (
            <div key={idx} style={{ 
              padding: '2rem', 
              background: '#fff', 
              borderRadius: '12px', 
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              border: '1px solid #eaeaea',
              transition: 'transform 0.2s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '50%', 
                backgroundColor: '#e0e7ff', 
                color: '#4f46e5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '1rem'
              }}>
                {dev.name.charAt(0)}
              </div>
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#111' }}>{dev.name}</h3>
              <h4 style={{ margin: '0 0 1rem 0', color: '#4f46e5', fontSize: '0.9rem', fontWeight: '600' }}>{dev.title}</h4>
              <p style={{ margin: 0, color: '#666', lineHeight: '1.5', fontSize: '0.95rem' }}>{dev.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default AboutUs
