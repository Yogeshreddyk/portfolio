import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          About <span className="text-accent">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div className="w-64 h-64 bg-accent bg-opacity-20 rounded-lg overflow-hidden">
              <Image
                src="/IMG_20240518_080653_935.jpg"
                alt="K Yogesh Reddy"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:w-2/3 md:pl-12">
            <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
            <p className="mb-6">
              I'm a passionate React.js developer with 3.7 years of experience
              building modern web applications. I specialize in creating
              responsive, performant, and accessible user interfaces using
              React, Next.js, and other cutting-edge technologies.
            </p>
            <p className="mb-6">
              My journey in web development started when I discovered the power
              of JavaScript to create dynamic experiences. Since then, I've
              worked on various projects ranging from small business websites to
              large-scale enterprise applications.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Name:</h4>
                <p>K Yogesh Reddy</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Email:</h4>
                <p>reddykyogesh@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Experience:</h4>
                <p>3.7 Years</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Location:</h4>
                <p>Bengaluru</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
