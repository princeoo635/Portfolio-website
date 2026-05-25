/* ============================================================
   DATA — Prince Kumar's Projects & Certificates
   ============================================================ */

const projectData = [
  {
    title: 'Video Blog Platform REST API',
    emoji: '🎬',
    bannerClass: 'banner-g2',
    liveUrl: 'https://videoblog.onrender.com/api/v1',
    githubUrl: '#',   // ← replace with your GitHub repo URL
    desc: 'A scalable REST API built with MVC architecture to manage video content, user accounts, and media uploads. Fully deployed on Render with JWT-based authentication and Cloudinary media integration.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Cloudinary', 'JWT', 'bcrypt', 'Mongoose'],
    features: [
      'MVC architecture for clean, maintainable code structure',
      'Secure JWT-based authentication and bcrypt password hashing',
      'Modular CRUD endpoints for users, videos, and media management',
      'Cloudinary integration for image and video upload handling',
      'Standardized API response structures and centralized error handling',
      'Deployed live on Render — accessible at videoblog.onrender.com'
    ]
  },
  {
    title: 'Real-Time Group Chat Application',
    emoji: '💬',
    bannerClass: 'banner-g3',
    liveUrl: 'https://websocket-1-wzlk.onrender.com',
    githubUrl: '#',   // ← replace with your GitHub repo URL
    desc: 'A real-time messaging platform enabling instant communication across multiple users and chat rooms using persistent WebSocket connections. Responsive UI for desktop and mobile.',
    tech: ['Node.js', 'Express.js', 'Socket.io', 'WebSockets', 'HTML5', 'CSS3'],
    features: [
      'Persistent WebSocket connections via Socket.io for low-latency messaging',
      'Room-based architecture supporting multiple concurrent chat rooms',
      'Instant bidirectional communication across all connected users',
      'Responsive UI designed for seamless desktop and mobile experience',
      'Efficient concurrent user session management',
      'Live and accessible at websocket-1-wzlk.onrender.com'
    ]
  }
];

/* ============================================================
   NOTE: Replace githubUrl '#' values above with your actual
   GitHub repository links once you add them.

   Certificates below are placeholders — replace with your
   real certifications when you have them.
   ============================================================ */

const certData = [
  {
    title: 'Add Your Certificate Title',
    org:   'Issuing Organization',
    date:  'Month Year',
    emoji: '🏅',
    bgClass: 'cert-bg-1',
    link:  '#'
  },
  {
    title: 'Add Your Certificate Title',
    org:   'Issuing Organization',
    date:  'Month Year',
    emoji: '🌐',
    bgClass: 'cert-bg-3',
    link:  '#'
  },
  {
    title: 'Add Your Certificate Title',
    org:   'Issuing Organization',
    date:  'Month Year',
    emoji: '🗄️',
    bgClass: 'cert-bg-4',
    link:  '#'
  }
];