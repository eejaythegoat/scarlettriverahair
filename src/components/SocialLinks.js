import React from 'react';

const socials = [
  { name: "Instagram", url: "https://www.instagram.com/scarlettriverahair/?hl=en", icon: "bi bi-instagram" },
  { name: "Facebook", url: "https://www.facebook.com/p/Scarlett-Rivera-Hair-61577646897809/", icon: "bi bi-facebook" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/scarlett-rivera-05a650101", icon: "bi bi-linkedin" },
  { name: "TikTok", url: "https://www.tiktok.com/@scarlettscissorhands", icon: "bi bi-tiktok" },
];

function SocialLinks({ className = "" }) {
  return (
    <div className={`d-flex gap-3 ${className}`}>
      {socials.map((s) => (
        <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
          <i className={s.icon} style={{ fontSize: "1.5rem" }}></i>
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;