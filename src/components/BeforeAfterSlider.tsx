import { useState } from 'react';

interface BeforeAfterProject {
  title: string;
  category: string;
  before: string;
  after: string;
}

const projects: BeforeAfterProject[] = [
  {
    title: 'Modern Kitchen Transformation',
    category: 'Kitchen Remodeling',
    before: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
    after: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Complete Exterior Renovation',
    category: 'Siding & Windows',
    before: 'https://images.pexels.com/photos/1125212/pexels-photo-1125212.jpeg?auto=compress&cs=tinysrgb&w=800',
    after: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Luxury Bathroom Suite',
    category: 'Bathroom Remodeling',
    before: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
    after: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function BeforeAfterSlider() {
  const [currentProject, setCurrentProject] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const position = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const position = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  const project = projects[currentProject];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Work Speaks for Itself
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            See the dramatic transformations we've delivered to homeowners across New Jersey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div
              className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-900 cursor-col-resize"
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
            >
              <img
                src={project.before}
                alt="Before"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div
                className="absolute inset-0 overflow-hidden transition-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={project.after}
                  alt="After"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ width: `${(100 / sliderPosition) * 100}%` }}
                />
              </div>

              <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize transition-none shadow-xl"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-2xl border-4 border-orange-600">
                  <div className="flex gap-1.5">
                    <div className="w-1 h-5 bg-orange-600 transform rotate-45 rounded-full"></div>
                    <div className="w-1 h-5 bg-orange-600 transform -rotate-45 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 left-4 bg-slate-900/70 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
                <p className="text-sm font-semibold">Before</p>
              </div>

              <div className="absolute top-4 right-4 bg-slate-900/70 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
                <p className="text-sm font-semibold">After</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
              <p className="text-lg text-orange-600 font-semibold">{project.category}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900 mb-6">Recent Projects</h4>
            {projects.map((proj, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-full p-4 rounded-xl text-left transition-all ${
                  currentProject === index
                    ? 'bg-orange-600 text-white shadow-lg scale-105'
                    : 'bg-white border-2 border-slate-200 text-slate-900 hover:border-orange-600'
                }`}
              >
                <p className="font-semibold">{proj.title}</p>
                <p className={`text-sm ${currentProject === index ? 'text-orange-100' : 'text-slate-600'}`}>
                  {proj.category}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
