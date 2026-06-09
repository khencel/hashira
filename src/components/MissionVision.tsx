import s from '../components/styles/MissionVision.module.css'

const cards = [
  
  {
    title: 'Mission',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
          stroke="#709C6B" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    text: `To create an inspiring learning environment for students where the
      Japanese language and culture are practiced daily, leading to their personal development, growth and future success. We hope that the
      success of our students will lead to more opportunities for Filipinos to work in Japan.`,
  },
  {
    title: 'Vision',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="#8F6843" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="6" stroke="#8F6843" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="2" fill="#8F6843"/>
        <line x1="12" y1="2" x2="12" y2="5" stroke="#8F6843" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="12" y1="19" x2="12" y2="22" stroke="#8F6843" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="2" y1="12" x2="5" y2="12" stroke="#8F6843" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="19" y1="12" x2="22" y2="12" stroke="#8F6843" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    text: `To make the Filipino the top choice for Japanese companies that need
        foreign labor. We aim to make our institution one of the prime spots for Filipinos who are looking to find work in Japan.`,
  }
];

export default function MissionVision() {
  return (
    <section className={s.section}>
      <div className="header">
        <h2 className="title">Mission Vision</h2>
        <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className={s.grid}>
        {cards.map((card) => (
            <div className={s.card} key={card.title}>
                <div className={s.iconWrapper}>
                {card.icon}
                </div>
                <h3 className={s.cardTitle}>{card.title}</h3>
                <p className={s.cardText}>{card.text}</p>
            </div>
            ))}
      </div>
    </section>
  );
}