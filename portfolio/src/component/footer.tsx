import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
      {/* Links */}
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover" href="/about">About us</a>
        <a className="link link-hover" href="/contac">Contact</a>
        <a className="link link-hover" href="/port">Portfolio</a>
        <a className="link link-hover" href="/">Home</a>
      </nav>

      {/* Social media icons */}
      <nav>
        <div className="grid grid-flow-col gap-4">
          {/* GitHub */}
          <a
            href="https://github.com/NaufalNurAdrian"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.303 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.17c-3.338.725-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.204.085 1.837 1.236 1.837 1.236 1.07 1.834 2.809 1.304 3.492.997.108-.774.418-1.305.762-1.604-2.665-.304-5.467-1.332-5.467-5.931 0-1.31.467-2.381 1.236-3.221-.123-.304-.535-1.528.117-3.182 0 0 1.008-.323 3.3 1.23A11.48 11.48 0 0112 5.8c1.02.004 2.045.137 3.002.4 2.29-1.552 3.297-1.23 3.297-1.23.654 1.654.242 2.878.119 3.182.77.84 1.235 1.911 1.235 3.221 0 4.61-2.805 5.624-5.476 5.922.43.372.815 1.1.815 2.222v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.303 24 12 24 5.37 18.63 0 12 0z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/n.naufalll_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              className="fill-current text-pink-500">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-5.826.07-7.106c.06-1.28.3-2.472 1.324-3.496 1.024-1.024 2.216-1.264 3.496-1.324C8.417 2.175 8.797 2.163 12 2.163zm0-2.163C8.738 0 8.332.014 7.052.072 5.772.132 4.58.373 3.556 1.398 2.531 2.422 2.291 3.614 2.232 4.894 2.174 6.174 2.163 6.58 2.163 12s.012 5.826.07 7.106c.06 1.28.3 2.472 1.324 3.496 1.024 1.024 2.216 1.264 3.496 1.324C8.332 23.986 8.738 24 12 24s3.668-.014 4.948-.072c1.28-.06 2.472-.3 3.496-1.324 1.024-1.024 1.264-2.216 1.324-3.496.058-1.28.07-1.686.07-7.106s-.012-5.826-.07-7.106c-.06-1.28-.3-2.472-1.324-3.496C19.444.373 18.252.132 16.972.072 15.692.014 15.286 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/naufal-nur-adrian-613705234/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              className="fill-current text-blue-600">
              <path d="M22.23 0H1.77C.792 0 0 .77 0 1.724v20.551C0 23.23.792 24 1.77 24h20.46c.978 0 1.77-.77 1.77-1.724V1.724C24 .77 23.208 0 22.23 0zM7.06 20.452H3.56V9h3.5v11.452zM5.31 7.51c-1.12 0-2.028-.915-2.028-2.043 0-1.13.91-2.043 2.028-2.043 1.117 0 2.03.915 2.03 2.043 0 1.13-.912 2.043-2.03 2.043zm15.14 12.94h-3.5V14.82c0-1.345-.027-3.078-1.877-3.078-1.878 0-2.166 1.467-2.166 2.977v5.733h-3.5V9h3.363v1.562h.05c.467-.88 1.61-1.808 3.32-1.808 3.554 0 4.207 2.34 4.207 5.378v6.32z"/>
            </svg>
          </a>
        </div>
      </nav>

      {/* Copyright */}
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All rights reserved by NAUFAL NUR ADRIAN</p>
      </aside>
    </footer>
  );
}

export default Footer;
