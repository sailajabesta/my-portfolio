import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";

const Projects = () => {
  const dummyProjects = [
    ,
    {
      id: 1,
      title: "Project 1",
      description:
        " Working Women is a Pakistani television series directed by Yasra Rizvi and written by Bee Gul. It is co-produced by Kashif Nisar and first aired on Green Entertainment may also refer to roles in raising children, particularly within the home: diaper changing and related hygiene, toilet training, bathing, clothing, feeding, monitoring, and education with regard to personal care. Self-Dependency : The most important reason for why a woman must go for work is self-dependency. Shelter & bread and butter are the most essential part of human life and no one deserve to be dependent on others for these fundamental requirements. Woman is no exception Women are the backbone of families and communities. They provide care, support, and nurturing to their families and are essential to the development of children. Women also play a significant role in community building and often take on leadership roles in community organizations. ",
      image: image1,
    },
    {
      id: 2,
      title: "Project 2",
      description:
        "Work helps you gain a sense of pride and self-satisfaction by reaffirming that you can support yourself. With work, you earn money to cover bills and pay for activities in your leisure time. Its becoming more common to see people with disabilities in a wide range of jobs throughout the community. Work is important to most of us on many levels. Doing a job we enjoy and find satisfying can provide a meaningful focus for our lives, as well as bringing in an income. Our standard of living hinges on the money we make, while employment often contributes to our self-image and self-esteem.",
      image: image2,
    },
    {
      id: 3,
      title: "Project 3",
      description:
        "A computer is an electronic machine that processes information—in other words, an information processor: it takes in raw information (or data) at one end, stores it until its ready to work on it, chews and crunches it for a bit, then spits out the results at the other end. All these processes have a name A computer, a digital information-processing machine, works by changing information into binary numbers (ones and zeros) and then using simple mathematics to make decisions about how to rearrange those numbers into words or actions.",
      image: image3,
    },
    {
      id: 4,
      title: "Project 4",
      description:
        "Write a comprehensive description of what your company offers. Explain top products and services, why you created them, and how they can help your customers or clients. This helps readers decide if your business actually has what they need. Its also a good section to link out to your company website or product pages. How to introduce your business.How do I introduce my company in presentation.",
      image: image4,
    },
    {
      id: 5,
      title: "Project 5",
      description:
        "Leadership in business is the capacity of a companys management to set and achieve challenging goals, take fast and decisive action when needed, outperform the competition, and inspire others to perform at the highest level they can.",
      image: image5,
    },
  ];

  return (
    <div className=" mx-auto p-4  bg-gradient-to-r from-purple-700 to-pink-500 md:flex-col">
      <h2 className="text-5xl font-bold mb-4 flex justify-center py-5  underline ">
        Projects
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {dummyProjects.map((project) => (
          <li
            key={project.id}
            className=" mb-8 flex items-center gap-3 justify-center flex-col border p-6"
          >
            <h3 className="text-2xl font-bold mb-3 underline">
              {project.title}
            </h3>
            <p className="text-l font-serif mb-4 px-2 md:px-10 text-white ">
              {project.description}
            </p>

            <img className=" h-44 " src={project.image} alt="" />
            <button className="border bg-transparent text-white p-3 font-bold ">
              {" "}
              <a
                className="hover:underline "
                href="https://github.com/sailajabesta"
                target="_blank"
              >
                See More{" "}
              </a>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
