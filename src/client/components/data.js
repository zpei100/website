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
      name: 'React/Redux',
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
      title: 'UI/UX development',
      description: 'Build responsive, interactive components',
      bulletpoints: [
         'Responsive layouts and all the basic compnents, including carousels, galleries, modals, dropdowns, forms etc...',
         'Custom animations based on user interactions',
         'Client-side caching, and use of service workers for better 3G and even off-line experience (learning)',
         'Modular codebase with React, Redux and Sass',
      ]
    },
    {
      icon: 'assets/images/optimization.svg',
      title: 'Optimization',
      description: 'Improve page loading speed and user experience',
      bulletpoints: [
        'Deliver content to users more quickly with server-side-rendering',
        'Lazy loading below the fold, and non-critical content, images with observers',
        'Dynamically import components to lessen size of initial data transfered',
        'Single page applications with bundling tools to reduce number of resource requests'
      ]
    },
    {
      icon: 'assets/images/server.svg',
      title: 'Server',
      description: 'Implement RESTful APIs as well as GraphQL back ends',
      bulletpoints: [
        'Implement RESTful APIs to support all CRUD operations and nested queries with MySQL and MongoDB',
        'GraphQL integration for exact and efficient queries',
        'Server-side caching, templating, routing, authentication and SSL handling',
      ]
    },
    {
      icon: 'assets/images/scale.svg',
      title: 'Scaling',
      description: 'Leveraging server caching, CDN, load balancers and reverse proxies to increase back end scaliability',
      bulletpoints: [
        'Leveraging CDN and reverse-proxies to reduce server load (learning)',
        'Reduce numbers of requests hitting the server via caching on multiple layers',
        'Deploy Dockerized applications across multiple AWS cloud instances',
        'Benchmarked back-end performance with JMeter, ApacheBench, New Relic'
      ]
    }
  ],
  projects: [
    {
      name: 'CozySheets',
      description: `Recreated Airbnb's listing page`,
      technologies: ['React', 'Redux', 'Bootstrap', 'Sass'],
      thumbnail: 'assets/gallery/cozysheets/thumbnail.png',
      images: [
        'assets/gallery/cozysheets/performance.png',
        'assets/gallery/cozysheets/booking_01.png',
        'assets/gallery/cozysheets/booking_02.png',
        'assets/gallery/cozysheets/descriptions.png',
        'assets/gallery/cozysheets/gallery.png',
        'assets/gallery/cozysheets/modal.png',
        'assets/gallery/cozysheets/performance_02.png',
        'assets/gallery/cozysheets/related.png'
      ],
      website: 'https://airbnbui-service.herokuapp.com/rooms/5'
    },
    {
      name: 'Reddit-Clone',
      description: 'Posting and commenting app',
      technologies: ['React', 'Apollo', 'GraphQL', 'MongoDB'],
      thumbnail: 'assets/gallery/reddit-clone/thumbnail.png',
      images: [
        'assets/gallery/reddit-clone/Main.png',
        'assets/gallery/reddit-clone/Details.png',
        'assets/gallery/reddit-clone/Edit1.png',
        'assets/gallery/reddit-clone/Edit2.png',
        'assets/gallery/reddit-clone/Main.png',
        'assets/gallery/reddit-clone/NestedComments.png',
        'assets/gallery/reddit-clone/NewPost.png',
        'assets/gallery/reddit-clone/performance_02.png',
        'assets/gallery/reddit-clone/performance.png'
      ],
      website: 'https://reddit-clon.herokuapp.com/'
    },
    {
      name: 'upScale',
      description: 'Back end optimization and scaling',
      technologies: ['Node.js', 'MongoDB', 'Redis', 'Docker', 'AWS', ],
      thumbnail: 'assets/gallery/upScale/Main.png',
      images: [
        'assets/gallery/upScale/Main.png',
        'assets/gallery/upScale/JMeter.png',
        'assets/gallery/upScale/NewRelic.png'
      ]
    }
  ]
} 
