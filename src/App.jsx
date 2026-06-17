import React from 'react'
import Card from './components/Card'

function App() {

  const jobsData = [
    {
      id: 1,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaL-7RRx5SW9qx4AJw4mjQHfar35O2ScabD2zkXUV8kg&s=10",
      company: "Amazon",
      postedTime: "2 days ago",
      title: "Senior UI/UX Designer",
      jobType: "Part-Time",
      level: "Senior Level",
      salary: "$120/hr",
      location: "Mumbai, India"
    },
    {
      id: 2,
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
      company: "Google",
      postedTime: "5 days ago",
      title: "Full-Stack Web Developer",
      jobType: "Full-Time",
      level: "Mid Level",
      salary: "$150k/yr",
      location: "Bengaluru, India"
    },
    {
      id: 3,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS8LRBHNKZcFOCx7NoQZmMw2gYOyXaGU3hpOqz0f1GfQ&s",
      company: "Dribbble",
      postedTime: "1 week ago",
      title: "Senior Motion Designer",
      jobType: "Contract",
      level: "Remote",
      salary: "$85/hr",
      location: "Pune, India"
    },
    {
      id: 4,
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      company: "Apple",
      postedTime: "Just now",
      title: "Frontend React Engineer",
      jobType: "Full-Time",
      level: "Senior Level",
      salary: "$165k/yr",
      location: "Hyderabad, India"
    },
    {
      id: 5,
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
      company: "Meta",
      postedTime: "3 days ago",
      title: "Product Designer",
      jobType: "Full-Time",
      level: "Senior Level",
      salary: "$130/hr",
      location: "Delhi, India"
    },
    {
      id: 6,
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      company: "Amazon Web Services",
      postedTime: "12 days ago",
      title: "Cloud Support Associate",
      jobType: "Full-Time",
      level: "Entry Level",
      salary: "$90k/yr",
      location: "Chennai, India"
    },
    {
      id: 7,
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg",
      company: "Notion",
      postedTime: "4 days ago",
      title: "UX Researcher",
      jobType: "Contract",
      level: "Mid Level",
      salary: "$75/hr",
      location: "Remote, India"
    },
    {
      id: 8,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIxruV4RgkOfbcgrOM7G0NWwi5tiXAjt6y55W69GsK4w&s=10",
      company: "Vercel",
      postedTime: "1 day ago",
      title: "DevOps Engineer",
      jobType: "Full-Time",
      level: "Senior Level",
      salary: "$140k/yr",
      location: "Bengaluru, India"
    },
    {
      id: 9,
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      company: "Microsoft",
      postedTime: "2 weeks ago",
      title: "Software Engineer II",
      jobType: "Full-Time",
      level: "Mid Level",
      salary: "$135k/yr",
      location: "Noida, India"
    },
    {
      id: 10,
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg",
      company: "LinkedIn",
      postedTime: "6 days ago",
      title: "UI Engineer",
      jobType: "Part-Time",
      level: "Entry Level",
      salary: "$60/hr",
      location: "Mumbai, India"
    }
  ];

  return (
    <>

      <div className='parent'>

        {jobsData.map(function (elem) {
          return <Card image={elem.logo} company={elem.company} title={elem.title} jobType={elem.jobType} level={elem.level} salary={elem.salary} location={elem.location} />
        })}

      </div>

    
    </>
  )
}

export default App