export default function About() {
  function renderAbout() {
    const aboutData = [
      {
        id: 1,
        title: "Frontend Course",
        blog: `It was really awesome to learn so much information in such a short amount of time. The past 15 weeks flew by. I have made leaps and bounds from where I am to where I first started. I was able to fill in so many gaps that I had in my web development knowledge. A coule mile stones reached were realizing the power of scss and how you can speed up your styles. Another one was learning how to create something out of thin air with vanilla js. Third but surley not last was see the power associated with being able to fetch and reder data from apis it is a game changer. I like to think of the random color generator as a symbol of this class and how much my skills have grown. Initially (when we had little to no js expeiance) we created the random color generator as a console app.Which was cool at the time. Until(with our growing js skills) we were able to replicate the random color generator with vanilla js. Lastly (with our new react js skill set) I was able to build the random color generator with react js. Some of the biggest take aways are I have found something that I enjoy the process of. Its fun to learn new concepts, ideas, and processes. Its awesome to solve a problem after working on it for 10+ hours. This is an amzing oportunity and I am greatful to both BHI and to Devpipeline for giving me this chance.`,
      },
    ];

    return aboutData.map((about) => {
      return (
        <div key={about.id} className="single-about">
          <div className="about-title">{about.title}</div>
          <div className="about-blog">{about.blog}</div>
        </div>
      );
    });
  }
  return (
    <div className="about-container">
      <div>{renderAbout()}</div>
    </div>
  );
}
