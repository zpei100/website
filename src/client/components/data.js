export default {
  skills: [
    {
      name: 'JavaScript (ES6+)',
      value: '85%'
    },
    {
      name: 'HTML/CSS',
      value: '75%'
    },
    {
      name: 'React & Redux',
      value: '90%'
    },
    {
      name: 'Angular 2+',
      value: '40%'
    },
    {
      name: 'Node.js',
      value: '80%'
    },
    {
      name: 'MongoDB',
      value: '65%'
    },
    {
      name: 'MySQL',
      value: '60%'
    },
    {
      name: 'GraphQL',
      value: '65%'
    }
  ],
  expertises: [
    {
      icon: 'assets/images/coding2.svg',
      title: 'UI/UX Development',
      bulletpoints: [
         'Responsive layouts',
         'Custom components, with vanilla JS and CSS, or popular front end libraries',
         'PWA service workers and client side caching',
         'Project intgration with external APIs',
         'Modular codebase with React, Redux, Bootstrap and Sass',
      ]
    },
    {
      icon: 'assets/images/optimization.svg',
      title: 'Optimization',
      bulletpoints: [
        'Quick content delivery and improving SEO with server side rendering',
        'Better mobile experience through lazy loading non-critical content',
        'Lessen initial resource required by dynamically importing components',
        'Reduce number of requests. Single page applications with bundling tools and app routing',
      ]
    },
    {
      icon: 'assets/images/server.svg',
      title: 'Back End',
      bulletpoints: [
        'Serve JSON payload. Engineer REST APIs with Node.js and Express.js',
        'Schema design, data migrations with MySQL',
        'Efficeintly query SQL and NoSQL databases through ORMs, ODMs',
        'JavaScript implementation of GraphQL',
        'Server-side caching, templating, routing, authentication and SSL handling',
      ]
    },
    {
      icon: 'assets/images/scale.svg',
      title: 'DevOps (Learning)',
      bulletpoints: [
        'Leverage CDN and reverse-proxies to handle large traffic',
        'Deploy Dockerized applications across multiple AWS EC2 instances',
        'Reduce server load with multiple layers of caching',
        'Stress tested back-end performance with JMeter, New Relic'
      ]
    }
  ],
  projects: [
    {
      name: 'CozySheets',
      description: `Recreated Airbnb's listing page`,
      technologies: ['React', 'Redux', 'Bootstrap', 'Sass'],
      thumbnail: 'assets/gallery/cozysheets/gallery.png',
      images: [
        'assets/gallery/cozysheets/gallery.png',
        'assets/gallery/cozysheets/performance.png',
        'assets/gallery/cozysheets/performance_02.png',
        'assets/gallery/cozysheets/body.png',
        'assets/gallery/cozysheets/booking_01.png',
        'assets/gallery/cozysheets/booking_02.png',
        'assets/gallery/cozysheets/booking-modal.png',
        'assets/gallery/cozysheets/modal.png',
        'assets/gallery/cozysheets/related.png',
        'assets/gallery/cozysheets/thumbnail.png'
      ],
      website: 'https://airbnbui-service.herokuapp.com/rooms/5',
      github: 'https://github.com/zpei100/AirBnbUI'
    },
    {
      name: 'DashDoor',
      description: 'Landing page clone for DoorDash',
      technologies: ['Node.js', 'React', 'Bootstrap', 'jQuery'],
      thumbnail: 'assets/gallery/doordash/hero.png',
      images: [
        'assets/gallery/doordash/hero.png',
        'assets/gallery/doordash/slide.png',
        'assets/gallery/doordash/order.png',
        'assets/gallery/doordash/footer.png'
      ],
      website: 'https://doordash-clone.herokuapp.com/',
      github: 'https://github.com/zpei100/Door-dash'
    },
    {
      name: 'Reddit-Clone',
      description: 'Posting and commenting app',
      technologies: ['React', 'Apollo', 'GraphQL', 'MongoDB'],
      thumbnail: 'assets/gallery/reddit-clone/main.png',
      images: [
        'assets/gallery/reddit-clone/main.png',
        'assets/gallery/reddit-clone/Details.png',
        'assets/gallery/reddit-clone/Edit2.png',
        'assets/gallery/reddit-clone/nested.png',
        'assets/gallery/reddit-clone/post.png',
        'assets/gallery/reddit-clone/posting.png',
        'assets/gallery/reddit-clone/reply.png'
      ],
      website: 'https://reddit-clon.herokuapp.com/',
      github: 'https://github.com/zpei100/Reddit-clone'
    },
    {
      name: 'upScale',
      description: 'Back end optimization and scaling',
      technologies: ['Node.js', 'MongoDB', 'Redis', 'Docker', 'AWS', ],
      thumbnail: 'assets/gallery/upScale/main.jpg',
      images: [
        'assets/gallery/upScale/main.jpg',
        'assets/gallery/upScale/newRelic-00.jpg',
        'assets/gallery/upScale/newRelic-01.jpg',
        'assets/gallery/upScale/spdy.png'
      ],
      github: 'https://github.com/zpei100/Up-Scale'
    },
  ]
} 
