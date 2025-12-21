import { Mail, Instagram, Linkedin, MessageCircle, Trophy } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 sm:py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Hack@Davidson</h3>
              <p className="opacity-90 text-sm sm:text-base">
                Building the future, one hack at a time. Join us for an unforgettable weekend of innovation.
              </p>
            </div>

            <div>
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Quick Links</h4>
              <ul className="space-y-2 opacity-90 text-sm sm:text-base">
                <li>
                  <a href="#about" className="hover:text-accent transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#schedule" className="hover:text-accent transition-colors">
                    Schedule
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-accent transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-accent transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#sponsors" className="hover:text-accent transition-colors">
                    Sponsors
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Connect With Us</h4>
              <div className="flex gap-3 sm:gap-4">
                <a
                  href="mailto:hack@davidson.edu"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://discord.com/invite/jvaPqNssAa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
                  aria-label="Discord"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/hackatdavidson/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/hackatdavidson/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://hackatdavidson.devpost.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
                  aria-label="Devpost"
                >
                  <Trophy className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 sm:pt-8 border-t border-primary-foreground/20 text-center opacity-75 text-sm sm:text-base">
            <p>© 2025 Hack@Davidson. All rights reserved. Built with ❤️ by the organizing team.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
