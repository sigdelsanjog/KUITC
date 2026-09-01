const unitContent = {
  hpc: {
    badge: 'HPC',
    title: 'High Performance Computing Unit (HPC)',
    intro:
      'ITC at Kathmandu University currently hosts its High Performance Computing (HPC) unit with abundant storage and compute capacity. This facility supports research computation across different departments of Kathmandu University.',
    paragraphs: [
      'Clusters of networked computers running complex software together over a high-bandwidth network give us a competitive computing advantage. The HPC Unit acts as a strong backbone for research and development of cutting-edge technologies supporting large data storage, analysis, software as a service, and fast computation.',
      'Kathmandu University received its HPC facility from the European Organization for Nuclear Research (CERN), Switzerland, on June 28, 2018. Currently located at the NTIC building, this infrastructure is used for research, education, and training.',
      'The HPC Unit stands out as a secure and scalable infrastructure supporting the Artificial Intelligence Excellence Unit (AIE) and Crisis Informatics Research Unit (CIR).',
      'A dedicated team of researchers maintain the HPC Unit, and its information is managed here: '
    ],
    badgeClass: '',
  },
  aie: {
    badge: 'AIE',
    title: 'Artificial Intelligence Excellence Unit (AIE)',
    intro:
      'The Government of Nepal launched its first-ever Artificial Intelligence Policy in 2081 B.S., identifying AI literacy and contextual data as key challenges. The policy aims to create a secure and sustainable AI ecosystem, enhance capacity development, and ensure ethical AI use across sectors.',
    paragraphs: [
      'Our core objectives include preparing educational materials for universities, communities, and private sectors; conducting workshops and bootcamps to refine the AI Policy; and providing research-based recommendations for government AI initiatives.',
      'We identify requirements for AI Excellence Centers at local and national levels, empower students and researchers to apply AI in ICT, health, education, agriculture, and beyond, and promote awareness and secure usage of AI tools.',
      'We also leverage KU\'s High Performance Computing Unit for AI computation and storage.'
    ],
    badgeClass: 'orange',
  },
  ciu: {
    badge: 'CIU',
    title: 'Crisis Informatics Unit (CIU)',
    intro:
      'The Crisis Informatics Unit at Kathmandu University focuses on developing technology-driven systems to improve crisis response, disaster risk reduction, and public information coordination across Nepal.',
    paragraphs: [
      'The unit integrates data, digital tools, and research methods to support timely decision-making during emergencies, helping universities, government agencies, and local institutions respond more effectively to crises.',
      'Through interdisciplinary collaboration, the unit promotes evidence-based disaster monitoring, communication systems, and resilient planning for climate, public health, and infrastructure-related risks.',
      'Its work strengthens Nepal\'s preparedness by connecting research, community response, and digital intelligence into a practical crisis information framework.'
    ],
    badgeClass: 'aqua',
  },
}

function UnitPage({ slug, onNavigate }) {
  const unit = unitContent[slug] || unitContent.hpc

  return (
    <main className="unit-page-shell">
      <section className="unit-page">
        <div className="container unit-page-inner">
          <button
            type="button"
            className="unit-back"
            onClick={() => onNavigate('/')}
          >
            ← Back to Units
          </button>

          <div className="unit-header">
            <span className={`feature-badge ${unit.badgeClass}`}>{unit.badge}</span>
            <h1>{unit.title}</h1>
          </div>

          <p className="unit-intro">{unit.intro}</p>

          {unit.paragraphs.map((paragraph, index) => (
            <p key={`${unit.title}-paragraph-${index}`} className="unit-copy">
              {index === 3 && slug === 'hpc' ? (
                <>
                  {paragraph}{' '}
                  <a href="https://hpc.ku.edu.np" target="_blank" rel="noreferrer">
                    hpc.ku.edu.np
                  </a>
                </>
              ) : (
                paragraph
              )}
            </p>
          ))}
        </div>
      </section>
    </main>
  )
}

export default UnitPage
