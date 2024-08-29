import file from "../../files/CV_Daniele_Parisi.pdf";

const Home = () => {
  return (
    <div className="flex flex-col w-full lg:w-4/5 gap-4">
      <div className="flex flex-col lg:flex-row gap-2 w-full p-3 ">
        <div className="flex flex-col gap-7 w-full p-7">
          <div className="text-3xl font-semibold text-gray-600">Hello</div>
          <div className="text-5xl font-thin flex flex-col gap-3">
            <div>
              I'm <strong>Daniele Parisi</strong>
            </div>
            <div>a Full-stack developer |</div>
          </div>
          <div className="text-2xl font-thin flex flex-col gap-3">
            <div>
              A highly organized, innovative, and goal-driven undergraduate with
              exceptional communication, problem-solving, and leadership
              abilities, coupled with a passion for exploring the vast realm of
            </div>
            <div className="text-xl text-purple-700 font-thin">
              <code>Information technology</code>
            </div>
          </div>

          <div className="text-xl flex flex-col lg:flex-row gap-4">
            <button className="bg-blue-500 text-white px-7 py-3 align-middle items-center rounded-2xl">
              See Projects
            </button>
            <button className="border-2 border-purple-400 text-purple-500 px-7 py-3 align-middle items-center rounded-2xl">
              See Designs
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center w-full p-7">
          <div className="lg:h-[450px] rounded-xl overflow-hidden items-center flex flex-col justify-center">
            <img
              src="web_developer.jpeg"
              className="rounded-xl w-full"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col lg:flex-row gap-2 p-3 w-full">
        <div className="flex flex-col gap-4 w-full justify-center items-center p-7">
          <div className="w-full lg:w-[450px] rounded-xl overflow-hidden items-center flex flex-col justify-center">
            <img src="profilo_buono.jpg" className="rounded-xl w-full" alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-7 w-full p-7">
          <div className="text-3xl font-semibold text-gray-600">About me</div>
          <div className="text-5xl font-thin flex flex-col gap-3">
            <strong>Daniele Parisi</strong>
          </div>
          <div className="text-2xl font-thin flex flex-col gap-2">
            <div>
              I am a skilled Full Stack Developer with a strong focus on UI/UX
              design.
            </div>
            <div>
              Proficient in{" "}
              <code className="text-xl text-purple-700 font-thin">
                HTML, CSS, Javascript, React, Node.js, Angular, Java, C#/.NET.
              </code>
            </div>
            <div>
              I create visually stunning interfaces and seamless user
              experiences across platforms.
            </div>
            <div>
              With expertise in front-end, back-end, and mobile app development,
              I deliver dynamic applications.
            </div>
            <div>
              I am a proactive problem solver, quick learner, and collaborative
              team player.
            </div>
            <div>
              Passionate about staying updated with the latest technologies and
              driving business success.
            </div>
            <div>Download my resume to learn more.</div>
          </div>
          <div className="text-xl flex flex-row gap-4">
            <a
              href={file}
              download="CV_Daniele_Parisi.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-blue-500 text-white px-7 py-3 align-middle items-center rounded-2xl">
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col lg:flex-row gap-2 p-3 w-full">
        <div className="flex flex-col gap-7 w-full p-7">
          <div className="text-3xl font-semibold text-gray-600">
            Professional Portfolio
          </div>
          <div className="text-5xl font-thin flex flex-col gap-3">
            <strong>Transforming Ideas into Reality</strong>
          </div>
          <div className="text-2xl font-thin flex flex-col gap-2">
            <div>
              As a highly skilled graphic designer and full stack developer, I
              have been passionately pursuing my career since 2019. With a
              strong focus on visual aesthetics and cutting-edge technologies, I
              have consistently delivered captivating designs and seamless user
              experiences. My portfolio showcases a diverse range of successful
              projects, demonstrating my expertise in both design and
              development. I invite you to explore my resume to gain a
              comprehensive understanding of my professional journey. Let's
              collaborate and bring your ideas to life!
            </div>
          </div>
          <div className="text-xl flex flex-row gap-4">
            <a
              href="https://www.linkedin.com/in/danieleparisi/"
              target="_blank"
              className="bg-blue-500 text-white px-7 py-3 align-middle items-center rounded-2xl"
              rel="noreferrer"
            >
              Check LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col lg:flex-row gap-2 p-3 w-full justify-center items-center">
        <div className="flex flex-col gap-7 p-7">
          <div className="text-center text-3xl font-semibold text-gray-600">
            Let's connect
          </div>
          <div className="text-5xl text-center font-thin flex flex-col gap-3">
            <strong>
              Elevate your business with captivating innovation and professional
              expertise.
            </strong>
          </div>
          <div className="text-2xl text-center  font-thin flex flex-col gap-2">
            <div>
              Experience the difference with my transformative approach and
              unwavering commitment to excellence. From striking websites to
              cutting-edge digital solutions, I deliver exceptional results that
              surpass expectations. Let's collaborate to bring your vision to
              life, captivating your audience and propelling your business
              forward.
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col lg:flex-row gap-2 p-3 w-full justify-center items-center">
        <div className="flex flex-col gap-7 p-7">
          <div className="text-center text-3xl font-semibold text-gray-600">
            Let's collaborate
          </div>
          <div className="text-5xl text-center font-thin flex flex-col gap-3">
            <strong>Ready to Start a Project? Hire Me.</strong>
          </div>

          <div className="text-xl justify-center flex lg:flex-row flex-col gap-4">
            <button className="bg-blue-500 text-white px-7 py-3 align-middle items-center rounded-2xl">
              See Projects
            </button>
            <button className="border-2 border-purple-400 text-purple-500 px-7 py-3 align-middle items-center rounded-2xl">
              See Designs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
