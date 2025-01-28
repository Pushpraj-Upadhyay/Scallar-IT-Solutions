const Blogs = () => {
  const blogDetails = [
    {
      title: "Web Design",
      blogImage: "https://scallar.in/img/blog-1.jpg",
      creatorName: "Deepanshu Prajapati",
      creatorImage: "https://scallar.in/img/admin.jpg",
      date: "24 Aug 2024",
      description:
        "User-Friendly Navigation : A simple, intuitive menu structure helps users find content quickly. This includes a clear menu bar with categories like Home, About, Blog Posts, Categories, Contact, and Search. Whitespace Utilization: Ensure plenty of space between elements to avoid a cluttered feel. Responsive Design: Your blog must adapt seamlessly to different screen sizes (mobile, tablet, desktop).",
      share: "4",
      comments: "3",
    },
    {
      title: "Development",
      blogImage: "https://scallar.in/img/blog-2.jpg",
      creatorName: "Deepanshu Prajapati",
      creatorImage: "https://scallar.in/img/admin.jpg",
      date: "20 sept 2024",
      description:
        "Web Development : Decide on your focus within web development. Front-End Development: HTML, CSS, JavaScript, UI/UX design. Back-End Development: Databases, server management, APIs. Full-Stack Development: A mix of front-end and back-end. Frameworks and Libraries: Focus on specific tools like React, Angular, Node.js, etc. DevOps: Cover CI/CD pipelines, server configuration, cloud solutions. ",
      share: "4",
      comments: "5",
    },
    {
      title: "Mobile App",
      blogImage: "https://scallar.in/img/blog-3.jpg",
      creatorName: "Deepanshu Prajapati",
      creatorImage: "https://scallar.in/img/admin.jpg",
      date: "20 sept 2024",
      description:
        "Mobile App Development : Decide on your focus: iOS Development: Swift, Objective-C, Xcode, UI design, and Apple’s Human Interface Guidelines. Android Development: Kotlin, Java, Android Studio, Material Design. Cross-Platform Development: React Native, Flutter, Xamarin, or other hybrid app development frameworks.",
      share: "10",
      comments: "5",
    },
  ];
  return (
    <div className="px-12 my-14 common-padding-margin">
      <div className="font-bold text-center my-4">
        <p className="text-2xl text-primary">Our Blogs</p>
        <h3 className="text-4xl">Latest blogs and news</h3>
      </div>
      <div className="flex flex-wrap justify-around">
        {blogDetails.map((blog, id) => (
          <div
            className="w-96 mx-2 my-10 shadow-2xl rounded-xl flex flex-col items-center relative"
            key={id}
          >
            <span className="bg-primary text-white p-5 rounded-xl font-bold absolute z-50 -top-8">
              {blog.title}
            </span>
            <div className="relative">
              <img
                src={blog.blogImage}
                alt=""
                className="w-full rounded-t-xl"
              />
              <div className="w-full px-2 flex justify-between absolute -bottom-1">
                <button className="mx-2 p-2 text-primary absolute left-0 font-semibold">Read More</button>
                <button className="mx-2 p-2 text-primary absolute right-0 font-semibold">Share</button>
              </div>
            </div>
            <div className="relative h-20 w-28">
              <img
                src={blog.creatorImage}
                alt=""
                className="absolute z-50 -top-10 rounded-full border-4 border-white"
              />
            </div>
            <span className="font-bold text-lg my-1">{blog.creatorName}</span>
            <span className="text-lg">{blog.date}</span>
            <p className="text-gray-600 my-2 text-center px-3 pb-2">
              {blog.description}
            </p>
            <div className="flex justify-between bg-blue-800 text-white px-4 py-2 rounded-b-xl absolute bottom-0 w-full">
              <span>{`${blog.share} share`}</span>
              <span>{`${blog.comments} comments`}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
