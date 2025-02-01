export default function Header() {
  return (
    <div className="h-12">
      <div className="flex justify-between px-36 pt-2 text-xl">
        {/* Left side */}
        <div>
          <a href="#main" className="text-2xl font-semibold">
            <span>Alan Khalili</span>
          </a>
        </div>

        {/* Right side */}
        <div className="flex text-md space-x-8">
          <a href="#Experience">
            <span>Experience</span>
          </a>
          <a href="#Projects">
            <span>Projects</span>
          </a>
          <a href="#Contact">
            <span>Contact</span>
          </a>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1Tl-Rk3PzGutTMBqUW4pap3Og_XXCxw2E/view?usp=sharing"
          >
            <span>Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
}
