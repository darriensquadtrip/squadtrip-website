interface BrowserFrameProps {
  url?: string;
  children: React.ReactNode;
}

export function BrowserFrame({ url = "squadtrip.com", children }: BrowserFrameProps) {
  return (
    <div className="mockup-frame">
      <div className="mockup-browser-bar">
        <div className="mockup-dots">
          <div className="mockup-dot red" />
          <div className="mockup-dot yellow" />
          <div className="mockup-dot green" />
        </div>
        <div className="mockup-url">{url}</div>
      </div>
      <div className="mockup-content">{children}</div>
    </div>
  );
}
