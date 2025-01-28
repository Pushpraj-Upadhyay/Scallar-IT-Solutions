const Projects = () => {
  const allProjects = [
    {
      image:
        "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=600",
      hiddenInfo: "Web Design",
    },
    {
      image:
        "https://images.pexels.com/photos/6330644/pexels-photo-6330644.jpeg?auto=compress&cs=tinysrgb&w=600",
      hiddenInfo: "Cyber Security",
    },
    {
      image:
        "https://images.pexels.com/photos/1901388/pexels-photo-1901388.jpeg?auto=compress&cs=tinysrgb&w=600",
      hiddenInfo: "Mobile Info",
    },
    {
      image:
        "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600",
      hiddenInfo: "Web Development",
    },

    {
      image:
        "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
      hiddenInfo: "Digital Marketing",
    },
    {
      image:
        "https://images.pexels.com/photos/934062/pexels-photo-934062.jpeg?auto=compress&cs=tinysrgb&w=600",
      hiddenInfo: "Keyword Research",
    },
  ];
  return (
    <div className="px-12 my-14 common-padding-margin">
      <div className="font-bold text-center my-4">
        <p className="text-2xl text-primary">Our Projects</p>
        <h3 className="text-4xl">Our Recently Completed Projects</h3>
      </div>
      <div className="flex flex-wrap justify-around items-center">
        {allProjects.map((project, id) => (
          <div className="relative project-info h-60 w-80 m-8" key={id}>
            <div className="absolute -top-4 -left-4 h-40 w-40 bg-blue-800 -z-10 rounded-lg box1"/>
            <div className="absolute -bottom-4 -right-4 h-40 w-40 bg-blue-800 -z-10 rounded-lg box2"/>

            <img
              src={project.image}
              alt=""
              className="h-full w-full z-50 rounded-lg project-image"
            />
            <p className="absolute opacity-0 bg-blue-800 text-white text-center font-semibold text-xl p-4 rounded-lg project-hidden-info">{project.hiddenInfo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
