import React from "react";

export const Footer = () => {
  return (
    <footer id="contact" className="border-t border-zinc-900/70 bg-black">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-4">
        <div className="space-y-2">
          <div className="font-semibold tracking-tight text-emerald-500">
            AllCategory
          </div>
          <p className="text-sm text-zinc-400">
            A flexible template to showcase projects across any category.
          </p>
        </div>
        {/* <div>
            <h4 className="mb-3 text-sm font-medium text-zinc-300">Our Solutions</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>Web Development</li>
              <li>App Development</li>
              <li>Cloud Services</li>
              <li>Security</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-medium text-zinc-300">Company</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>About Us</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Portfolio</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-medium text-zinc-300">Contact</h4>
            <p className="text-sm text-zinc-400">
              hello@example.com
              <br />
              +1 (555) 220-7663
            </p>
          </div> */}
      </div>
      <div className="border-t border-zinc-900/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 text-xs text-zinc-500">
          <span>© {new Date().getFullYear()} AllCategory</span>
          <span>Built with accessibility and performance in mind.</span>
        </div>
      </div>
    </footer>
  );
};
