const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 100 },
        { name: "TypeScript", level: 100 },
        { name: "Tailwind CSS", level: 100 },
        { name: "Next.js", level: 100 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 100 },
        { name: "Python", level: 100 },
      ],
    },
    {
      category: "AI & Automation",
      skills: [
        { name: "OpenAI API", level: 100 },
        { name: "Machine Learning", level: 90 },
        { name: "Automation Tools", level: 97 },
        { name: "Data Analysis", level: 90 },
      ],
    },
    {
      category: "DevOps",
      skills: [
        { name: "Docker", level: 92 },
        { name: "AWS", level: 98 },
        { name: "CI/CD", level: 100 },
        { name: "Git", level: 100 },
      ],
    },
    {
      category: "Database",
      skills: [
        { name: "MySQL", level: 100 },
        { name: "PostgreSQL", level: 100 },
        { name: "MongoDB", level: 100 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary text-sm uppercase tracking-wider font-medium mb-2">
            My Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Excellence</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.category}
              className="bg-card border border-border rounded-lg p-6 animate-fade-in"
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-foreground/60">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${
                            (catIndex * 4 + skillIndex) * 0.1
                          }s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
