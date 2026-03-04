import { BrowserFrame } from "./BrowserFrame";

interface ShareLinkMockupProps {
  shortUrl?: string;
}

export function ShareLinkMockup({ shortUrl = "sqtrp.co/cancun2026" }: ShareLinkMockupProps) {
  return (
    <BrowserFrame url="dashboard.squadtrip.com/share">
      <div style={{ padding: "8px 0" }}>
        <div className="link-visual">
          <div className="link-url-bar">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M6.5 11.5L3 8l3.5-3.5M9.5 4.5L13 8l-3.5 3.5" />
            </svg>
            <span>{shortUrl}</span>
          </div>
          <div className="link-share-buttons">
            <div className="link-share-btn primary">Copy Link</div>
            <div className="link-share-btn">Email</div>
            <div className="link-share-btn">Text</div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}
