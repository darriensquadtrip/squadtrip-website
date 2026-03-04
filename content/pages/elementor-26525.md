# Elementor #26525

Slug: elementor-26525

Stop Chasing Payments for Group Trips | SquadTrip         :root { --purple-primary: #6B46C1; --purple-light: #9F7AEA; --purple-dark: #553C9A; --yellow-primary: #F6C744; --yellow-hover: #E5B93D; --bg-light: #F8F7FF; --bg-white: #FFFFFF; --text-dark: #1A1A2E; --text-gray: #6B7280; --text-light: #9CA3AF; --border-light: #E5E7EB; --success-green: #10B981; --error-red: #EF4444; } \* { margin: 0; padding: 0; box-sizing: border-box; } /\* Smooth scroll behavior \*/ html { scroll-behavior: smooth; } body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; color: var(--text-dark); line-height: 1.6; background: var(--bg-light); } /\* ==================== ANIMATIONS ==================== \*/ /\* Scroll-triggered fade in \*/ .animate-on-scroll { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; } .animate-on-scroll.visible { opacity: 1; transform: translateY(0); } /\* Stagger animation for children \*/ .stagger-children > \* { opacity: 0; transform: translateY(20px); transition: opacity 0.5s ease-out, transform 0.5s ease-out; } .stagger-children.visible > \*:nth-child(1) { transition-delay: 0s; } .stagger-children.visible > \*:nth-child(2) { transition-delay: 0.1s; } .stagger-children.visible > \*:nth-child(3) { transition-delay: 0.2s; } .stagger-children.visible > \*:nth-child(4) { transition-delay: 0.3s; } .stagger-children.visible > \*:nth-child(5) { transition-delay: 0.4s; } .stagger-children.visible > \*:nth-child(6) { transition-delay: 0.5s; } .stagger-children.visible > \* { opacity: 1; transform: translateY(0); } /\* Counter animation class \*/ .count-up { display: inline-block; } /\* ==================== ENHANCED HOVER EFFECTS ==================== \*/ /\* Card lift effect \*/ .hover-lift { transition: transform 0.3s ease, box-shadow 0.3s ease; } .hover-lift:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(107, 70, 193, 0.15); } /\* Button glow effect \*/ .btn-primary { position: relative; overflow: hidden; } .btn-primary::before { content: ''; position: absolute; top: 50%; left: 50%; width: 0; height: 0; background: rgba(255, 255, 255, 0.3); border-radius: 50%; transform: translate(-50%, -50%); transition: width 0.6s ease, height 0.6s ease; } .btn-primary:hover::before { width: 300px; height: 300px; } @keyframes pulse-glow { 0%, 100% { box-shadow: 0 0 0 0 rgba(246, 199, 68, 0.4); } 50% { box-shadow: 0 0 20px 10px rgba(246, 199, 68, 0); } } .btn-primary:hover { animation: pulse-glow 2s infinite; } /\* Animated underline for links \*/ .animated-underline { position: relative; text-decoration: none; } .animated-underline::after { content: ''; position: absolute; bottom: -2px; left: 0; width: 0; height: 2px; background: var(--purple-primary); transition: width 0.3s ease; } .animated-underline:hover::after { width: 100%; } /\* ==================== HERO DASHBOARD ANIMATIONS ==================== \*/ @keyframes fillProgress { from { width: 0%; } to { width: 85%; } } @keyframes countUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } } @keyframes slideInNotification { from { opacity: 0; transform: translateX(-30px) translateY(0); } to { opacity: 1; transform: translateX(0) translateY(0); } } .hero-loaded .mini-progress-fill { animation: fillProgress 1.5s ease-out forwards; } .hero-loaded .mini-stat-value { animation: countUp 0.6s ease-out forwards; } .hero-loaded .mini-stat:nth-child(1) .mini-stat-value { animation-delay: 0.2s; } .hero-loaded .mini-stat:nth-child(2) .mini-stat-value { animation-delay: 0.4s; } .hero-loaded .mini-stat:nth-child(3) .mini-stat-value { animation-delay: 0.6s; } .hero-loaded .hero-floating-card { animation: slideInNotification 0.5s ease-out forwards; animation-delay: 2s; opacity: 0; } /\* ==================== PARALLAX ==================== \*/ .parallax-container { perspective: 1000px; } .parallax-slow { transition: transform 0.1s ease-out; } /\* ==================== BENTO GRID INTERACTIONS ==================== \*/ .bento-card { transition: transform 0.3s ease, box-shadow 0.3s ease; transform-style: preserve-3d; } .bento-card:hover { box-shadow: 0 25px 50px rgba(107, 70, 193, 0.15); } /\* 3D tilt effect \*/ .tilt-card { transform-style: preserve-3d; transition: transform 0.1s ease-out; } /\* Icon bounce on hover \*/ .bento-card:hover .bento-icon { animation: iconBounce 0.5s ease; } @keyframes iconBounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } } /\* Progress bar fill on hover \*/ .bento-card-autocharge .payment-bar-fill { transition: width 0.8s ease-out; } .bento-card-autocharge:hover .payment-bar-fill { width: 100% !important; } /\* Stats counter on hover \*/ .bento-card-stats:hover .stat-number { transform: scale(1.1); transition: transform 0.3s ease; } /\* Link card hover effect \*/ .bento-card-link:hover .link-preview { transform: scale(1.02); transition: transform 0.3s ease; } /\* Reminder cards stagger on hover \*/ .bento-card-reminders:hover .reminder-card:nth-child(1) { transform: translateY(-4px); transition-delay: 0s; } .bento-card-reminders:hover .reminder-card:nth-child(2) { transform: translateY(-4px); transition-delay: 0.05s; } .bento-card-reminders:hover .reminder-card:nth-child(3) { transform: translateY(-4px); transition-delay: 0.1s; } .bento-card-reminders:hover .reminder-card:nth-child(4) { transform: translateY(-4px); transition-delay: 0.15s; } .reminder-card { transition: transform 0.3s ease; } /\* ==================== HEADER ==================== \*/ .header { background: var(--text-dark); padding: 16px 0; position: sticky; top: 0; z-index: 1000; } .header-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; display: flex; justify-content: space-between; align-items: center; } .logo { font-size: 1.5rem; font-weight: 700; color: white; text-decoration: none; z-index: 1001; } .logo span { color: var(--purple-light); } .nav { display: flex; align-items: center; gap: 32px; } .nav a { color: white; text-decoration: none; font-size: 0.95rem; font-weight: 500; transition: color 0.2s; } .nav a:hover { color: var(--purple-light); } .header-cta { display: flex; align-items: center; gap: 16px; } .btn-login { color: white; text-decoration: none; font-weight: 500; } .btn-signup { background: transparent; border: 2px solid var(--yellow-primary); color: var(--yellow-primary); padding: 10px 24px; border-radius: 50px; font-weight: 600; text-decoration: none; transition: all 0.2s; } .btn-signup:hover { background: var(--yellow-primary); color: var(--text-dark); } /\* Mobile Menu Toggle \*/ .mobile-menu-toggle { display: none; flex-direction: column; justify-content: center; gap: 5px; width: 28px; height: 28px; background: none; border: none; cursor: pointer; z-index: 1001; } .mobile-menu-toggle span { display: block; width: 100%; height: 2px; background: white; transition: all 0.3s; } .mobile-menu-toggle.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); } .mobile-menu-toggle.active span:nth-child(2) { opacity: 0; } .mobile-menu-toggle.active span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); } /\* Mobile Nav Overlay \*/ .mobile-nav-overlay { display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: var(--text-dark); z-index: 999; padding: 100px 24px 40px; flex-direction: column; opacity: 0; transition: opacity 0.3s; } .mobile-nav-overlay.active { display: flex; opacity: 1; } .mobile-nav-overlay a { color: white; text-decoration: none; font-size: 1.5rem; font-weight: 600; padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,0.1); transition: color 0.2s; } .mobile-nav-overlay a:hover { color: var(--yellow-primary); } .mobile-nav-overlay .mobile-cta { margin-top: auto; display: flex; flex-direction: column; gap: 12px; } .mobile-nav-overlay .btn-signup-mobile { background: var(--yellow-primary); color: var(--text-dark); padding: 16px 32px; border-radius: 50px; font-weight: 600; text-decoration: none; text-align: center; } /\* ==================== BUTTONS ==================== \*/ .btn-primary { background: var(--yellow-primary); color: var(--text-dark); padding: 16px 32px; border-radius: 50px; font-weight: 600; font-size: 1rem; text-decoration: none; display: inline-block; transition: all 0.2s; border: none; cursor: pointer; } .btn-primary:hover { background: var(--yellow-hover); transform: translateY(-2px); box-shadow: 0 10px 30px rgba(246, 199, 68, 0.3); } .btn-secondary { background: transparent; color: var(--purple-primary); padding: 16px 32px; border-radius: 50px; font-weight: 600; font-size: 1rem; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s; } .btn-secondary:hover { color: var(--purple-dark); } .btn-outline { background: transparent; border: 2px solid var(--purple-primary); color: var(--purple-primary); padding: 14px 28px; border-radius: 50px; font-weight: 600; text-decoration: none; display: inline-block; transition: all 0.2s; } .btn-outline:hover { background: var(--purple-primary); color: white; } /\* ==================== HERO ==================== \*/ .hero { background: var(--bg-light); padding: 80px 0 100px; overflow: hidden; } .hero-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: auto auto auto auto; gap: 20px 60px; align-items: start; } /\* Desktop: Text on left, image spanning right \*/ .hero-headline { grid-column: 1; grid-row: 1; font-size: 3.25rem; font-weight: 800; line-height: 1.1; margin-bottom: 0; color: var(--text-dark); } .hero-subtitle { grid-column: 1; grid-row: 2; font-size: 1.25rem; color: var(--text-gray); margin-bottom: 0; line-height: 1.7; max-width: 560px; } .hero-visual { grid-column: 2; grid-row: 1 / 5; position: relative; align-self: center; } .hero-eyebrow { grid-column: 1; grid-row: 3; color: var(--purple-primary); font-weight: 600; font-size: 0.9rem; display: flex; align-items: center; gap: 8px; margin-top: 12px; } .hero-eyebrow span { display: inline-flex; align-items: center; } .hero-eyebrow .divider { color: var(--text-light); margin: 0 4px; } .hero-ctas { grid-column: 1; grid-row: 4; display: flex; align-items: center; gap: 16px; margin-top: 12px; } .hero-trust { grid-column: 1; grid-row: 5; font-size: 0.875rem; color: var(--text-light); margin-top: 8px; } .hero-trust span { margin: 0 8px; } .hero-image { width: 100%; max-width: 560px; border-radius: 16px; box-shadow: 0 40px 80px rgba(107, 70, 193, 0.15); } /\* Floating cards for hero \*/ .hero-floating-card { position: absolute; background: white; border-radius: 12px; padding: 16px 20px; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1); animation: float 6s ease-in-out infinite; } .hero-floating-card.payment { bottom: 40px; left: -40px; border-left: 4px solid var(--success-green); } .hero-floating-card .amount { font-size: 1.5rem; font-weight: 700; color: var(--success-green); } .hero-floating-card .label { font-size: 0.8rem; color: var(--text-gray); } @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } } /\* ==================== SOCIAL PROOF BAR ==================== \*/ .social-proof-bar { background: white; border-top: 1px solid var(--border-light); border-bottom: 1px solid var(--border-light); padding: 24px 0; } .social-proof-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; display: flex; justify-content: center; align-items: center; gap: 48px; flex-wrap: wrap; } .social-proof-stat { text-align: center; } .social-proof-stat .number { font-size: 1.5rem; font-weight: 700; color: var(--purple-primary); } .social-proof-stat .label { font-size: 0.875rem; color: var(--text-gray); } .social-proof-divider { width: 1px; height: 40px; background: var(--border-light); } /\* ==================== PROBLEM VALIDATION ==================== \*/ .problem-section { background: var(--text-dark); color: white; padding: 80px 0; } .problem-container { max-width: 1000px; margin: 0 auto; padding: 0 24px; text-align: center; } .problem-section h2 { font-size: 2.25rem; font-weight: 700; margin-bottom: 12px; } .problem-subtitle { color: rgba(255, 255, 255, 0.6); font-size: 1.1rem; margin-bottom: 50px; } .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-bottom: 40px; } .stat-card { background: rgba(255, 255, 255, 0.05); border-radius: 16px; padding: 28px 20px; border: 1px solid rgba(255, 255, 255, 0.1); transition: transform 0.2s, background 0.2s; } .stat-card:hover { transform: translateY(-4px); background: rgba(255, 255, 255, 0.08); } .stat-icon { font-size: 2rem; margin-bottom: 16px; } .stat-number { font-size: 3rem; font-weight: 800; line-height: 1; margin-bottom: 8px; } .stat-card:nth-child(1) .stat-number { color: var(--error-red); } .stat-card:nth-child(2) .stat-number { color: #F59E0B; } .stat-card:nth-child(3) .stat-number { color: #EC4899; } .stat-card:nth-child(4) .stat-number { color: #8B5CF6; } .stat-label { font-size: 0.9rem; color: rgba(255, 255, 255, 0.6); line-height: 1.4; } .stats-caption { color: rgba(255, 255, 255, 0.4); font-size: 0.8rem; margin-bottom: 40px; font-style: italic; } .problem-familiar { font-size: 1.5rem; font-weight: 600; margin-bottom: 16px; color: white; } .problem-cta { color: var(--yellow-primary); font-weight: 600; font-size: 1.1rem; display: inline-flex; align-items: center; gap: 8px; text-decoration: none; transition: transform 0.2s; } .problem-cta:hover { transform: translateY(4px); } /\* ==================== FEATURE OVERVIEW ==================== \*/ .feature-overview { background: white; padding: 80px 0; } .feature-overview-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; } .feature-overview h2 { text-align: center; font-size: 2rem; font-weight: 700; margin-bottom: 16px; } .feature-overview-subtitle { text-align: center; color: var(--text-gray); font-size: 1.125rem; margin-bottom: 50px; } /\* Bento Grid Layout \*/ .bento-grid { display: grid; grid-template-columns: repeat(12, 1fr); grid-template-rows: auto auto; gap: 20px; } .bento-card { border-radius: 20px; padding: 28px; position: relative; overflow: hidden; display: flex; flex-direction: column; } /\* Card 1: Auto-charge - Large featured card \*/ .bento-card-autocharge { grid-column: span 5; background: linear-gradient(135deg, var(--purple-primary) 0%, #553C9A 100%); color: white; min-height: 280px; } .bento-card-autocharge h3 { color: white; font-size: 1.5rem; margin-bottom: 8px; } .bento-card-autocharge p { color: rgba(255,255,255,0.85); font-size: 0.95rem; margin-bottom: 20px; } .autocharge-visual { margin-top: auto; display: flex; gap: 12px; align-items: flex-end; } .payment-bar { flex: 1; background: rgba(255,255,255,0.2); border-radius: 8px; position: relative; height: 80px; display: flex; flex-direction: column; justify-content: flex-end; padding: 10px; } .payment-bar-fill { background: var(--yellow-primary); border-radius: 6px; height: 100%; display: flex; align-items: center; justify-content: center; font-weight: 600; color: var(--text-dark); font-size: 0.75rem; } .payment-bar.bar-1 .payment-bar-fill { height: 100%; } .payment-bar.bar-2 .payment-bar-fill { height: 100%; } .payment-bar.bar-3 .payment-bar-fill { height: 60%; background: rgba(255,255,255,0.4); } .payment-bar.bar-4 .payment-bar-fill { height: 30%; background: rgba(255,255,255,0.25); } .payment-bar-label { position: absolute; bottom: -24px; left: 50%; transform: translateX(-50%); font-size: 0.7rem; color: rgba(255,255,255,0.7); white-space: nowrap; } .payment-bar .check-badge { position: absolute; top: -8px; right: -8px; width: 22px; height: 22px; background: #10B981; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 12px; border: 2px solid white; } /\* Card 2: Dashboard - Medium card \*/ .bento-card-dashboard { grid-column: span 4; background: var(--bg-light); min-height: 280px; } .bento-card-dashboard h3 { font-size: 1.25rem; margin-bottom: 8px; } .bento-card-dashboard > p { color: var(--text-gray); font-size: 0.9rem; margin-bottom: 16px; } .mini-dashboard-preview { background: white; border-radius: 12px; padding: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); margin-top: auto; } .dashboard-row { display: flex; align-items: center; padding: 8px 0; border-bottom: 1px solid #f0f0f0; } .dashboard-row:last-child { border-bottom: none; } .dashboard-avatar { width: 28px; height: 28px; border-radius: 50%; background: var(--purple-light); color: var(--purple-primary); display: flex; align-items: center; justify-content: center; font-size: 0.7rem; font-weight: 600; margin-right: 10px; } .dashboard-name { flex: 1; font-size: 0.8rem; font-weight: 500; } .dashboard-status { font-size: 0.7rem; padding: 3px 8px; border-radius: 20px; font-weight: 500; } .dashboard-status.paid { background: #D1FAE5; color: #059669; } .dashboard-status.pending { background: #FEF3C7; color: #D97706; } /\* Card 3: One Link - Medium card \*/ .bento-card-link { grid-column: span 3; background: linear-gradient(145deg, #FEF3C7 0%, #FDE68A 100%); min-height: 280px; } .bento-card-link h3 { font-size: 1.25rem; margin-bottom: 8px; } .bento-card-link > p { color: var(--text-gray); font-size: 0.9rem; margin-bottom: 16px; } .link-visual { margin-top: auto; background: white; border-radius: 12px; padding: 12px 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); } .link-url-bar { display: flex; align-items: center; gap: 10px; background: #f8f8f8; border-radius: 8px; padding: 10px 14px; margin-bottom: 12px; } .link-url-bar svg { width: 16px; height: 16px; color: var(--purple-primary); } .link-url-bar span { font-size: 0.8rem; color: var(--text-gray); font-family: monospace; } .link-share-buttons { display: flex; gap: 8px; } .link-share-btn { flex: 1; padding: 8px; border-radius: 6px; font-size: 0.7rem; font-weight: 500; text-align: center; background: var(--bg-light); color: var(--text-dark); } .link-share-btn.primary { background: var(--purple-primary); color: white; } /\* Card 4: Reminders - Wide card \*/ .bento-card-reminders { grid-column: span 7; background: var(--bg-light); min-height: 200px; } .bento-card-reminders h3 { font-size: 1.25rem; margin-bottom: 8px; } .bento-card-reminders > p { color: var(--text-gray); font-size: 0.9rem; margin-bottom: 16px; } .reminders-visual { display: flex; gap: 16px; margin-top: auto; } .reminder-card { flex: 1; background: white; border-radius: 12px; padding: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); } .reminder-card-header { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; } .reminder-icon { width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 14px; } .reminder-icon.email { background: #DBEAFE; } .reminder-icon.sms { background: #D1FAE5; } .reminder-icon.receipt { background: #FEE2E2; } .reminder-card-header span { font-size: 0.8rem; font-weight: 600; } .reminder-preview { font-size: 0.75rem; color: var(--text-gray); line-height: 1.4; } .reminder-preview strong { color: var(--text-dark); } /\* Card 5: Stats - Narrow card \*/ .bento-card-stats { grid-column: span 5; background: linear-gradient(135deg, #1E1E2E 0%, #2D2D3F 100%); color: white; min-height: 200px; } .bento-card-stats h3 { color: white; font-size: 1.125rem; margin-bottom: 16px; } .stats-row { display: flex; gap: 24px; margin-top: auto; } .stat-item { text-align: center; } .stat-number { font-size: 2rem; font-weight: 700; color: var(--yellow-primary); display: block; } .stat-label { font-size: 0.75rem; color: rgba(255,255,255,0.7); } /\* ==================== FEATURE BLOCKS ==================== \*/ .feature-blocks { background: var(--bg-light); padding: 80px 0; } .feature-block { max-width: 1200px; margin: 0 auto 80px; padding: 0 24px; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; } .feature-block:last-child { margin-bottom: 0; } .feature-block.reverse { direction: rtl; } .feature-block.reverse > \* { direction: ltr; } .feature-block-content h3 { font-size: 2rem; font-weight: 700; margin-bottom: 20px; color: var(--text-dark); } .feature-block-content p { font-size: 1.1rem; color: var(--text-gray); margin-bottom: 24px; line-height: 1.7; } .feature-testimonial { background: white; border-left: 4px solid var(--purple-primary); padding: 20px 24px; margin-bottom: 24px; border-radius: 0 12px 12px 0; } .feature-testimonial p { font-style: italic; margin-bottom: 8px; color: var(--text-dark); } .feature-testimonial .attribution { font-size: 0.875rem; color: var(--text-gray); font-style: normal; } .feature-block-link { color: var(--purple-primary); font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; transition: gap 0.2s; } .feature-block-link:hover { gap: 12px; } .feature-highlight { display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 24px; padding: 20px; background: white; border-radius: 12px; border: 1px solid var(--border-light); } .highlight-item { display: flex; align-items: center; gap: 8px; font-size: 0.95rem; font-weight: 500; color: var(--text-dark); } .highlight-icon { font-size: 1.1rem; } .feature-bonus { font-size: 0.95rem; color: var(--purple-primary); font-weight: 500; padding: 12px 16px; background: var(--bg-light); border-radius: 8px; border-left: 3px solid var(--purple-primary); margin-bottom: 24px; } .feature-block-image { background: white; border-radius: 16px; padding: 24px; box-shadow: 0 20px 60px rgba(107, 70, 193, 0.1); } .feature-block-image img { width: 100%; border-radius: 8px; } /\* Placeholder for images \*/ .image-placeholder { background: linear-gradient(135deg, var(--purple-light), var(--purple-primary)); border-radius: 12px; height: 300px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.25rem; font-weight: 600; } /\* ==================== INLINE MOCKUPS ==================== \*/ .mockup-frame { background: var(--bg-light); border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); } .mockup-browser-bar { background: white; padding: 12px 16px; display: flex; align-items: center; gap: 8px; border-bottom: 1px solid var(--border-light); } .mockup-dots { display: flex; gap: 6px; } .mockup-dot { width: 10px; height: 10px; border-radius: 50%; background: var(--border-light); } .mockup-dot.red { background: #FF5F57; } .mockup-dot.yellow { background: #FFBD2E; } .mockup-dot.green { background: #28CA41; } .mockup-url { flex: 1; background: var(--bg-light); padding: 6px 12px; border-radius: 6px; font-size: 0.75rem; color: var(--text-gray); margin-left: 12px; } .mockup-content { padding: 20px; background: white; } /\* Dashboard Mockup Styles \*/ .mini-dashboard { background: white; } .mini-stats-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 16px; } .mini-stat { background: var(--bg-light); padding: 16px; border-radius: 10px; text-align: center; } .mini-stat-value { font-size: 1.5rem; font-weight: 700; color: var(--purple-primary); } .mini-stat-value.green { color: var(--success-green); } .mini-stat-label { font-size: 0.7rem; color: var(--text-gray); text-transform: uppercase; letter-spacing: 0.5px; margin-top: 4px; } .mini-progress { margin-bottom: 16px; } .mini-progress-header { display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 8px; } .mini-progress-bar { height: 8px; background: var(--border-light); border-radius: 4px; overflow: hidden; } .mini-progress-fill { height: 100%; background: linear-gradient(90deg, var(--purple-primary), var(--purple-light)); border-radius: 4px; } .mini-table { width: 100%; font-size: 0.8rem; } .mini-table-header { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; padding: 8px 12px; background: var(--bg-light); border-radius: 6px; font-weight: 600; color: var(--text-gray); font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px; } .mini-table-row { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; padding: 10px 12px; border-bottom: 1px solid var(--border-light); align-items: center; } .mini-table-row:last-child { border-bottom: none; } .mini-avatar { width: 28px; height: 28px; border-radius: 50%; background: var(--purple-light); color: white; display: inline-flex; align-items: center; justify-content: center; font-size: 0.65rem; font-weight: 600; margin-right: 8px; } .mini-badge { padding: 3px 8px; border-radius: 12px; font-size: 0.65rem; font-weight: 600; } .mini-badge.paid { background: #D1FAE5; color: var(--success-green); } .mini-badge.partial { background: #FEF3C7; color: #D97706; } .mini-badge.pending { background: var(--border-light); color: var(--text-gray); } /\* Payment Setup Mockup \*/ .payment-setup-mockup { background: white; } .setup-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid var(--border-light); } .setup-title { font-weight: 600; font-size: 0.95rem; } .setup-toggle { display: flex; align-items: center; gap: 8px; font-size: 0.8rem; } .toggle-switch { width: 40px; height: 22px; background: var(--success-green); border-radius: 11px; position: relative; } .toggle-switch::after { content: ''; position: absolute; width: 18px; height: 18px; background: white; border-radius: 50%; top: 2px; right: 2px; box-shadow: 0 1px 3px rgba(0,0,0,0.2); } .payment-schedule { margin-bottom: 16px; } .schedule-item { display: flex; align-items: center; gap: 12px; padding: 12px; background: var(--bg-light); border-radius: 8px; margin-bottom: 8px; font-size: 0.85rem; } .schedule-icon { width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem; } .schedule-icon.complete { background: #D1FAE5; color: var(--success-green); } .schedule-icon.upcoming { background: var(--purple-light); color: white; } .schedule-info { flex: 1; } .schedule-date { font-weight: 500; } .schedule-label { font-size: 0.75rem; color: var(--text-gray); } .schedule-amount { font-weight: 600; color: var(--purple-primary); } .auto-features { display: flex; gap: 8px; flex-wrap: wrap; } .auto-feature { display: flex; align-items: center; gap: 6px; padding: 6px 12px; background: #D1FAE5; border-radius: 20px; font-size: 0.75rem; color: var(--success-green); font-weight: 500; } /\* Payment Methods Logos \*/ .payment-methods { display: flex; align-items: center; justify-content: center; gap: 24px; margin-top: 20px; padding: 16px 0; } .payment-methods-label { font-size: 0.75rem; color: var(--text-gray); margin-right: 8px; } .payment-method-logo { height: 24px; opacity: 0.7; transition: opacity 0.2s; } .payment-method-logo:hover { opacity: 1; } .payment-method-logo.apple-pay { height: 20px; } .payment-method-logo.klarna { height: 18px; } .payment-method-logo.affirm { height: 20px; } .payment-method-logo.afterpay { height: 16px; } .payment-method-logo.card { height: 22px; } /\* Booking Page Mockup \*/ .booking-mockup-mini { background: white; } .booking-hero-mini { background: linear-gradient(135deg, #667EEA, #764BA2); padding: 20px; color: white; border-radius: 8px 8px 0 0; margin: -20px -20px 16px -20px; } .booking-hero-mini h4 { font-size: 1.1rem; margin-bottom: 4px; } .booking-hero-mini p { font-size: 0.75rem; opacity: 0.9; } .package-mini { border: 2px solid var(--purple-primary); background: var(--bg-light); border-radius: 10px; padding: 14px; margin-bottom: 12px; } .package-mini-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; } .package-mini-name { font-weight: 600; font-size: 0.9rem; } .package-mini-price { font-weight: 700; color: var(--purple-primary); } .package-mini-features { display: flex; flex-wrap: wrap; gap: 6px; } .package-mini-feature { font-size: 0.7rem; background: white; padding: 4px 8px; border-radius: 12px; color: var(--text-gray); } .booking-summary-mini { background: var(--bg-light); padding: 14px; border-radius: 10px; } .summary-mini-row { display: flex; justify-content: space-between; align-items: flex-start; font-size: 0.75rem; margin-bottom: 8px; gap: 8px; } .summary-mini-row span:first-child { flex: 1; min-width: 0; } .summary-mini-row span:last-child { white-space: nowrap; font-weight: 500; } .summary-mini-row.total { font-weight: 700; font-size: 0.9rem; padding-top: 8px; border-top: 1px solid var(--border-light); margin-bottom: 12px; } .summary-mini-row.total span:last-child { color: var(--purple-primary); } .book-btn-mini { width: 100%; padding: 12px; background: var(--yellow-primary); border: none; border-radius: 8px; font-weight: 600; font-size: 0.85rem; cursor: pointer; } .payment-plan-hint { text-align: center; font-size: 0.75rem; color: var(--text-gray); margin-top: 8px; } .booking-two-col { display: grid; grid-template-columns: 1fr 165px; gap: 16px; } .booking-left-col { display: flex; flex-direction: column; gap: 12px; } .booking-right-col .booking-summary-mini { height: 100%; display: flex; flex-direction: column; } .booking-right-col .book-btn-mini { margin-top: auto; } .itinerary-mini { background: var(--bg-light); border-radius: 10px; padding: 12px; } .itinerary-mini-header { font-weight: 600; font-size: 0.8rem; margin-bottom: 10px; color: var(--text-dark); } .itinerary-mini-day { display: flex; align-items: center; gap: 10px; padding: 6px 0; border-bottom: 1px solid var(--border-light); font-size: 0.75rem; } .itinerary-mini-day:last-of-type { border-bottom: none; } .day-label { background: var(--purple-primary); color: white; padding: 2px 8px; border-radius: 4px; font-weight: 600; font-size: 0.65rem; white-space: nowrap; } .day-title { color: var(--text-gray); } .itinerary-mini-more { font-size: 0.7rem; color: var(--purple-primary); font-weight: 500; margin-top: 8px; cursor: pointer; } /\* Email Mockup \*/ .email-mockup-mini { background: var(--bg-light); padding: 16px; border-radius: 8px; } .email-preview { background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.05); } .email-preview-header { background: linear-gradient(135deg, var(--purple-primary), #553C9A); padding: 20px; text-align: center; color: white; } .email-preview-header h4 { font-size: 1rem; margin-bottom: 4px; } .email-preview-header p { font-size: 0.75rem; opacity: 0.9; } .email-preview-body { padding: 20px; } .email-preview-greeting { font-size: 0.9rem; margin-bottom: 12px; } .email-payment-box-mini { background: var(--bg-light); padding: 14px; border-radius: 8px; margin-bottom: 16px; } .email-payment-row { display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 6px; } .email-payment-row:last-child { margin-bottom: 0; } .email-payment-row .amount { font-weight: 600; color: var(--purple-primary); } .email-cta-mini { display: block; width: 100%; padding: 12px; background: var(--purple-primary); color: white; text-align: center; border-radius: 8px; font-weight: 600; font-size: 0.85rem; text-decoration: none; } .email-auto-badge { display: inline-flex; align-items: center; gap: 6px; padding: 8px 12px; background: #D1FAE5; border-radius: 8px; font-size: 0.75rem; color: var(--success-green); margin-top: 12px; } /\* ==================== LEARN MORE CTA ==================== \*/ .learn-more-section { background: var(--bg-light); padding: 80px 0; } .learn-more-container { max-width: 1000px; margin: 0 auto; padding: 0 24px; text-align: center; } .learn-more-section h2 { font-size: 2rem; margin-bottom: 12px; } .learn-more-section > p, .learn-more-container > p { color: var(--text-gray); font-size: 1.1rem; margin-bottom: 40px; } .learn-more-cards { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; max-width: 700px; margin: 0 auto; } .learn-more-card { background: white; border-radius: 16px; padding: 32px 24px; text-decoration: none; color: var(--text-dark); border: 2px solid transparent; transition: all 0.2s; display: flex; flex-direction: column; text-align: left; } .learn-more-card:hover { border-color: var(--purple-primary); transform: translateY(-4px); box-shadow: 0 12px 40px rgba(102, 51, 153, 0.15); } .learn-more-card.featured { background: linear-gradient(135deg, var(--purple-primary) 0%, #553C9A 100%); color: white; } .learn-more-card.featured:hover { border-color: var(--yellow-primary); } .learn-more-icon { font-size: 2rem; margin-bottom: 16px; } .learn-more-card h3 { font-size: 1.25rem; margin-bottom: 8px; } .learn-more-card p { font-size: 0.9rem; color: var(--text-gray); margin-bottom: 16px; flex: 1; } .learn-more-card.featured p { color: rgba(255,255,255,0.8); } .learn-more-link { font-weight: 600; font-size: 0.9rem; color: var(--purple-primary); } .learn-more-card.featured .learn-more-link { color: var(--yellow-primary); } /\* ==================== HOW IT WORKS ==================== \*/ .how-it-works { background: white; padding: 80px 0; } .how-it-works-container { max-width: 1000px; margin: 0 auto; padding: 0 24px; } .how-it-works h2 { text-align: center; font-size: 2.25rem; font-weight: 700; margin-bottom: 60px; } .steps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; margin-bottom: 50px; } .step-card { text-align: center; position: relative; } .step-number { width: 60px; height: 60px; background: var(--purple-primary); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 700; margin: 0 auto 24px; } .step-card h3 { font-size: 1.25rem; font-weight: 600; margin-bottom: 12px; } .step-card p { color: var(--text-gray); font-size: 1rem; line-height: 1.6; } /\* Arrow between steps \*/ .step-card:not(:last-child)::after { content: '→'; position: absolute; right: -30px; top: 30px; font-size: 1.5rem; color: var(--purple-light); } .how-it-works .cta-center { text-align: center; } /\* ==================== COMPARISON ==================== \*/ .comparison-section { background: var(--bg-light); padding: 80px 0; } .comparison-container { max-width: 900px; margin: 0 auto; padding: 0 24px; } .comparison-section h2 { text-align: center; font-size: 2rem; font-weight: 700; margin-bottom: 16px; } .comparison-intro { text-align: center; color: var(--text-gray); margin-bottom: 40px; font-size: 1.1rem; } .comparison-table { background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08); margin-bottom: 40px; } .comparison-table table { width: 100%; border-collapse: collapse; } .comparison-table th { padding: 20px 24px; text-align: left; font-weight: 600; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.5px; } .comparison-table th:first-child { background: var(--bg-light); color: var(--text-gray); } .comparison-table th:nth-child(2) { background: #FEE2E2; color: var(--error-red); } .comparison-table th:nth-child(3) { background: var(--purple-primary); color: white; } .comparison-table td { padding: 18px 24px; border-bottom: 1px solid var(--border-light); font-size: 0.95rem; } .comparison-table tr:last-child td { border-bottom: none; } .comparison-table td:first-child { font-weight: 500; color: var(--text-dark); } .comparison-table td:nth-child(2) { color: var(--text-gray); } .comparison-table td:nth-child(3) { color: var(--purple-primary); font-weight: 500; } .compare-x { display: inline-flex; align-items: center; justify-content: center; width: 20px; height: 20px; background: #FEE2E2; color: var(--error-red); border-radius: 50%; font-size: 0.75rem; font-weight: 700; margin-right: 8px; } .compare-check { display: inline-flex; align-items: center; justify-content: center; width: 20px; height: 20px; background: #D1FAE5; color: var(--success-green); border-radius: 50%; font-size: 0.75rem; font-weight: 700; margin-right: 8px; } .comparison-section .cta-center { text-align: center; } /\* ==================== WHO USES ==================== \*/ .who-uses { background: white; padding: 80px 0; } .who-uses-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; } .who-uses h2 { text-align: center; font-size: 2.25rem; font-weight: 700; margin-bottom: 50px; } .who-uses-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; } .who-uses-card { background: var(--bg-light); border-radius: 16px; padding: 40px 32px; text-align: center; transition: all 0.3s; border: 2px solid transparent; } .who-uses-card:hover { border-color: var(--purple-primary); transform: translateY(-4px); box-shadow: 0 20px 40px rgba(107, 70, 193, 0.15); } .who-uses-icon { font-size: 3rem; margin-bottom: 20px; } .who-uses-card h3 { font-size: 1.25rem; font-weight: 600; margin-bottom: 12px; } .who-uses-card p { color: var(--text-gray); font-style: italic; margin-bottom: 20px; } .who-uses-card a { color: var(--purple-primary); font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; } .who-uses-card a:hover { text-decoration: underline; } /\* ==================== TESTIMONIALS ==================== \*/ .testimonials-section { background: var(--bg-light); padding: 80px 0; } .testimonials-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; } .testimonials-section h2 { text-align: center; font-size: 2.25rem; font-weight: 700; margin-bottom: 16px; } .testimonials-subtitle { text-align: center; color: var(--text-gray); margin-bottom: 50px; } /\* Testimonial badge \*/ .testimonial-badge { display: inline-block; background: rgba(102, 51, 153, 0.1); color: var(--purple-primary); padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 16px; } .testimonial-card-featured .testimonial-badge { background: rgba(255, 255, 255, 0.2); color: white; } /\* Featured testimonial layout \*/ .testimonials-featured { display: grid; grid-template-columns: 1.2fr 1fr; gap: 30px; margin-bottom: 30px; } .testimonial-card-featured { background: linear-gradient(135deg, var(--purple-primary) 0%, #553C9A 100%); border-radius: 20px; padding: 40px; color: white; position: relative; overflow: hidden; } .testimonial-card-featured::before { content: '"'; position: absolute; top: -20px; right: 20px; font-size: 12rem; font-family: Georgia, serif; opacity: 0.1; line-height: 1; } .featured-badge { display: inline-flex; align-items: center; gap: 6px; background: rgba(255, 255, 255, 0.2); padding: 6px 14px; border-radius: 20px; font-size: 0.8rem; font-weight: 500; margin-bottom: 20px; } .featured-stars { color: var(--yellow-primary); margin-bottom: 20px; font-size: 1.25rem; letter-spacing: 2px; } .testimonial-card-featured .testimonial-quote { font-size: 1.25rem; line-height: 1.7; margin-bottom: 30px; position: relative; z-index: 1; } .testimonial-card-featured .testimonial-author { display: flex; align-items: center; gap: 16px; } .testimonial-card-featured .testimonial-avatar { width: 56px; height: 56px; background: rgba(255, 255, 255, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 1.1rem; } .testimonial-card-featured .testimonial-info h4 { font-weight: 600; margin-bottom: 4px; font-size: 1.1rem; } .testimonial-card-featured .testimonial-info p { opacity: 0.8; font-size: 0.9rem; } .featured-metric { margin-top: 30px; padding-top: 24px; border-top: 1px solid rgba(255, 255, 255, 0.2); display: flex; gap: 40px; } .metric-item { text-align: left; } .metric-value { font-size: 2rem; font-weight: 700; } .metric-label { font-size: 0.85rem; opacity: 0.8; } /\* Side testimonials (stacked) \*/ .testimonials-side { display: flex; flex-direction: column; gap: 20px; } .testimonial-card-side { background: white; border-radius: 16px; padding: 24px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05); flex: 1; display: flex; flex-direction: column; } .side-badge { display: inline-flex; align-items: center; gap: 6px; background: var(--bg-light); padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 500; color: var(--purple-primary); margin-bottom: 12px; width: fit-content; } .testimonial-card-side .testimonial-quote { font-size: 0.95rem; line-height: 1.6; color: var(--text-dark); margin-bottom: 16px; flex: 1; } .testimonial-card-side .testimonial-author { display: flex; align-items: center; gap: 12px; } .testimonial-card-side .testimonial-avatar { width: 40px; height: 40px; background: var(--purple-light); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 0.85rem; } .testimonial-card-side .testimonial-info h4 { font-weight: 600; font-size: 0.9rem; margin-bottom: 2px; } .testimonial-card-side .testimonial-info p { font-size: 0.8rem; color: var(--text-gray); } /\* Bottom row testimonials \*/ .testimonials-bottom { display: grid; grid-template-columns: repeat(2, 1fr); gap: 30px; } .testimonial-card-bottom { background: white; border-radius: 16px; padding: 28px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05); border-left: 4px solid var(--purple-primary); } .bottom-badge { display: inline-flex; align-items: center; gap: 6px; background: var(--bg-light); padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 500; color: var(--purple-primary); margin-bottom: 16px; } .testimonial-card-bottom .testimonial-quote { font-size: 1rem; line-height: 1.7; color: var(--text-dark); margin-bottom: 20px; } .testimonial-card-bottom .testimonial-author { display: flex; align-items: center; gap: 12px; } .testimonial-card-bottom .testimonial-avatar { width: 44px; height: 44px; background: var(--purple-light); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 0.9rem; } .testimonial-card-bottom .testimonial-info h4 { font-weight: 600; font-size: 0.95rem; margin-bottom: 2px; } .testimonial-card-bottom .testimonial-info p { font-size: 0.85rem; color: var(--text-gray); } /\* ==================== TRUST SIGNALS ==================== \*/ .trust-section { background: white; padding: 40px 0; border-top: 1px solid var(--border-light); border-bottom: 1px solid var(--border-light); } .trust-container { max-width: 800px; margin: 0 auto; padding: 0 24px; display: flex; justify-content: center; align-items: center; gap: 48px; flex-wrap: wrap; } .trust-item { display: flex; align-items: center; gap: 12px; color: var(--text-gray); font-size: 0.95rem; } .trust-item svg { width: 24px; height: 24px; color: var(--purple-primary); } /\* ==================== FAQ ==================== \*/ .faq-section { background: var(--bg-light); padding: 80px 0; } .faq-container { max-width: 800px; margin: 0 auto; padding: 0 24px; } .faq-section h2 { text-align: center; font-size: 2.25rem; font-weight: 700; margin-bottom: 50px; } .faq-item { background: white; border-radius: 12px; margin-bottom: 16px; overflow: hidden; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04); } .faq-question { width: 100%; padding: 24px; background: none; border: none; text-align: left; font-size: 1.1rem; font-weight: 600; color: var(--text-dark); cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-family: inherit; } .faq-question:hover { color: var(--purple-primary); } .faq-question .icon { font-size: 1.5rem; color: var(--purple-primary); transition: transform 0.3s; } .faq-item.open .faq-question .icon { transform: rotate(45deg); } .faq-answer { padding: 0 24px 24px; color: var(--text-gray); line-height: 1.7; display: none; } .faq-item.open .faq-answer { display: block; } /\* ==================== FINAL CTA ==================== \*/ .final-cta { background: linear-gradient(135deg, var(--purple-primary) 0%, var(--purple-dark) 100%); color: white; padding: 100px 0; text-align: center; } .final-cta-container { max-width: 700px; margin: 0 auto; padding: 0 24px; } .final-cta h2 { font-size: 2.5rem; font-weight: 700; margin-bottom: 16px; } .final-cta p { font-size: 1.2rem; opacity: 0.9; margin-bottom: 40px; } .final-cta-buttons { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; } .final-cta .btn-primary { background: var(--yellow-primary); color: var(--text-dark); } .final-cta .btn-outline { border-color: white; color: white; } .final-cta .btn-outline:hover { background: white; color: var(--purple-primary); } /\* ==================== FOOTER ==================== \*/ .footer { background: var(--text-dark); color: white; padding: 60px 0 30px; } .footer-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; } .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 60px; margin-bottom: 50px; } .footer-brand .logo { font-size: 1.75rem; margin-bottom: 16px; display: block; } .footer-brand p { color: rgba(255, 255, 255, 0.7); font-size: 0.95rem; line-height: 1.6; } .footer-column h4 { font-weight: 600; margin-bottom: 20px; font-size: 1rem; } .footer-column ul { list-style: none; } .footer-column li { margin-bottom: 12px; } .footer-column a { color: rgba(255, 255, 255, 0.7); text-decoration: none; font-size: 0.95rem; transition: color 0.2s; } .footer-column a:hover { color: white; } .footer-bottom { border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 30px; display: flex; justify-content: space-between; align-items: center; font-size: 0.875rem; color: rgba(255, 255, 255, 0.5); } .footer-legal a { color: rgba(255, 255, 255, 0.5); text-decoration: none; margin-left: 24px; } .footer-legal a:hover { color: white; } /\* ==================== RESPONSIVE ==================== \*/ @media (max-width: 1024px) { /\* Hero: Single column, elements in HTML order \*/ .hero-container { display: flex; flex-direction: column; text-align: center; gap: 24px; } .hero-headline { order: 1; } .hero-subtitle { order: 2; max-width: 100%; } .hero-visual { order: 3; max-width: 500px; margin: 0 auto; } .hero-eyebrow { order: 4; justify-content: center; margin-top: 0; text-align: center; } .hero-ctas { order: 5; justify-content: center; align-items: center; margin-top: 0; } .hero-trust { order: 6; margin-top: 0; text-align: center; } .feature-grid { grid-template-columns: repeat(2, 1fr); } /\* Bento grid tablet \*/ .bento-grid { grid-template-columns: repeat(6, 1fr); } .bento-card-autocharge { grid-column: span 6; } .bento-card-dashboard { grid-column: span 3; } .bento-card-link { grid-column: span 3; } .bento-card-reminders { grid-column: span 6; } .bento-card-stats { grid-column: span 6; } .reminders-visual { flex-wrap: wrap; } .reminder-card { flex: 1 1 calc(50% - 8px); min-width: 200px; } .feature-block { grid-template-columns: 1fr; gap: 40px; } .feature-block.reverse { direction: ltr; } .steps-grid { grid-template-columns: 1fr; gap: 30px; } .step-card::after { display: none; } .who-uses-grid { grid-template-columns: repeat(2, 1fr); } .stats-grid { grid-template-columns: repeat(2, 1fr); } .stat-number { font-size: 2.5rem; } .testimonials-grid { grid-template-columns: 1fr; } .testimonials-featured { grid-template-columns: 1fr; } .testimonial-card-featured { padding: 30px; } .featured-metric { margin-bottom: 20px; } .testimonials-bottom { grid-template-columns: 1fr; } .footer-grid { grid-template-columns: 1fr 1fr; } /\* Learn more section tablet \*/ .learn-more-cards { grid-template-columns: 1fr; gap: 16px; } .learn-more-card { flex-direction: row; text-align: left; padding: 24px; gap: 20px; } .learn-more-icon { font-size: 2rem; flex-shrink: 0; } .learn-more-card h3 { margin-bottom: 4px; } .learn-more-card p { margin-bottom: 8px; } } @media (max-width: 768px) { .nav, .header-cta { display: none; } .mobile-menu-toggle { display: flex; } .hero-eyebrow { display: none; } } @media (max-width: 640px) { /\* Hero: Compact for above-the-fold on iPhone \*/ .hero { padding: 40px 0 60px; } .hero-container { gap: 16px; } .hero-headline { font-size: 1.75rem; line-height: 1.2; } .hero-subtitle { font-size: 0.95rem; line-height: 1.5; } .hero-visual { max-width: 100%; } /\* Hide floating card on mobile to save space \*/ .hero-floating-card { display: none; } .hero-eyebrow { justify-content: center; text-align: center; } .hero-ctas { flex-direction: column; align-items: center; width: 100%; } .hero-ctas .btn-primary { width: 100%; max-width: 280px; text-align: center; } .hero-ctas .btn-secondary { text-align: center; } .hero-trust { text-align: center; } .social-proof-container { flex-direction: column; gap: 20px; } .social-proof-divider { display: none; } .feature-grid { grid-template-columns: 1fr; } /\* Stats grid mobile \*/ .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; } .stat-card { padding: 20px 16px; } .stat-number { font-size: 2rem; } .stat-label { font-size: 0.8rem; } .problem-section h2 { font-size: 1.75rem; } /\* Bento grid mobile \*/ .bento-grid { grid-template-columns: 1fr; } .bento-card-autocharge, .bento-card-dashboard, .bento-card-link, .bento-card-reminders, .bento-card-stats { grid-column: span 1; } .bento-card { padding: 24px; min-height: auto; } .bento-card-autocharge { min-height: 260px; } .autocharge-visual { gap: 8px; } .payment-bar { height: 60px; } .payment-bar-label { font-size: 0.6rem; } .reminders-visual { flex-direction: column; } .reminder-card { flex: 1; min-width: auto; } .stats-row { gap: 16px; } .stat-number { font-size: 1.5rem; } .who-uses-grid { grid-template-columns: 1fr; } .comparison-table { overflow-x: auto; } .testimonial-card-featured { padding: 24px; } .featured-metric .metric-before, .featured-metric .metric-after { font-size: 2.5rem; } .featured-metric .metric-arrow { font-size: 1.5rem; } .testimonial-card-side, .testimonial-card-bottom { padding: 20px; } .footer-grid { grid-template-columns: 1fr; gap: 40px; } .footer-bottom { flex-direction: column; gap: 16px; text-align: center; } /\* Learn more section mobile \*/ .learn-more-section { padding: 60px 0; } .learn-more-container h2 { font-size: 1.5rem; } .learn-more-card { flex-direction: column; text-align: center; padding: 24px 20px; gap: 12px; } .learn-more-icon { font-size: 2.5rem; } /\* Compact mockup for mobile \*/ .mockup-browser-bar { padding: 8px 12px; } .mockup-dot { width: 8px; height: 8px; } .mockup-url { font-size: 0.65rem; padding: 4px 8px; } .mockup-content { padding: 12px; } .mini-stats-row { gap: 8px; margin-bottom: 12px; } .mini-stat { padding: 10px 8px; } .mini-stat-value { font-size: 1.1rem; } .mini-stat-label { font-size: 0.6rem; } .mini-progress { margin-bottom: 12px; } .mini-progress-header { font-size: 0.7rem; } .mini-table-header, .mini-table-row { font-size: 0.65rem; padding: 6px 0; } .mini-avatar { width: 20px; height: 20px; font-size: 0.5rem; } .mini-badge { font-size: 0.55rem; padding: 2px 6px; } } /\* Extra small screens (iPhone SE, etc.) \*/ @media (max-width: 375px) { .hero { padding: 32px 0 48px; } .hero-container { gap: 12px; } .hero-headline { font-size: 1.5rem; } .hero-subtitle { font-size: 0.875rem; } .mini-stat-value { font-size: 1rem; } .mini-table { display: none; } .btn-primary { padding: 14px 24px; font-size: 0.95rem; } }

[squadtrip](/)

[Features](#features) [How It Works](/how-it-works) [Pricing](/pricing) [Resources](/resources)

[Log in](/login) [Sign up free](https://dashboard.squadtrip.com/organizer-info/0)

[Features](#features) [How It Works](/how-it-works) [Pricing](/pricing) [Resources](/resources)

[Log in](/login) [Sign up free](https://dashboard.squadtrip.com/organizer-info/0)

# Stop Chasing Payments for Your Group Trip

Create a booking page, set up automatic payment plans, and track who paid—all in one place. So you can focus on the trip, not the spreadsheet.

dashboard.squadtrip.com

$28,900

Collected

85%

Complete

18

Travelers

Cancun 2025 $28,900 / $34,200

Traveler Paid Balance Status

SMSarah M. $1,900 $0 Paid

JDJames D. $1,200 $700 3 of 4

MJMaria J. $1,900 $0 Paid

+$650.00

Payment received from Sarah M.

Trusted by 2,000+ trip organizers | 50,000+ travelers booked

[Create your trip for free](https://dashboard.squadtrip.com/organizer-info/0) [See how it works →](#how-it-works)

No credit card required • Free for trips under $1,000

2,000+

trip organizers

50,000+

travelers booked

## Planning a group trip? Here's the part nobody warns you about.

The real cost of DIY group trip planning:

⏰

0

hours spent chasing payments

😬

0

awkward "did you pay?" texts

💳

$0

fronted on your credit card

📊

0

spreadsheet updates (still wrong)

\* Based on average 15-person group trip over 4 months

Sound familiar?

[There's a better way ↓](#features)

## Everything you need to collect payments and manage your group trip

Set it up once. Watch payments roll in automatically.

### Payments on autopilot

Enable auto-charge and travelers are billed automatically on schedule. No more chasing.

✓

$250 Jan 15

✓

$250 Feb 15

Mar 15

Apr 15

### See who paid at a glance

Real-time dashboard shows payment status for every traveler.

MJ Maria J. Paid in full

TK Tyler K. 3 of 4 paid

SL Sarah L. Due tomorrow

### One link does it all

Share your trip page anywhere.

sqtrp.co/cancun2025

Copy

Text

Email

### Automatic emails & reminders

Confirmation emails, payment reminders, and receipts—all sent automatically.

📧 Payment Reminder

**Hi Maria,** your payment of $250 for Cancun 2025 is due in 3 days...

🧾 Receipt

**Payment received!** $250 for Cancun 2025. 2 of 4 payments complete.

💬 SMS Alert

**New booking!** Tyler K. just signed up for your trip.

### Trusted by organizers worldwide

2,000+ Organizers

50K+ Travelers

50+ Destinations

## How it works

1

### Create your trip

Add your packages, rooms, pricing, and trip details. Takes about 10 minutes.

2

### Share your link

Send one link to your group. Travelers book and pay online—no back and forth.

3

### Track everything

Watch payments come in, send updates, and export reports. All from one dashboard.

[Create your first trip →](https://dashboard.squadtrip.com/organizer-info/0)

## Who uses SquadTrip?

👔

### Tour Operators & Travel Agencies

"I run trips professionally and need to scale my business"

[See how agencies use SquadTrip →](#)

👥

### Group Trip Organizers

"I'm planning a trip for friends, family, or my community"

[See how organizers use SquadTrip →](#)

💒

### Destination Weddings & Events

"I'm coordinating travel for a special occasion"

[See how event planners use SquadTrip →](#)

🧘

### Retreat Organizers

"I'm hosting a wellness retreat and need to manage bookings"

[See how retreat leaders use SquadTrip →](#)

### Sick of chasing payments for 3 months?

"Hey, did you pay yet?" is the worst text to send—and worse to send 12 times.

Set up payment plans once, enable auto-charge, and you're done. Travelers' cards are charged automatically on schedule. They get reminders before each payment and receipts after. You get notified when money hits your account.

⚡ Auto-charge on schedule

🔔 Automatic reminders

🧾 Receipts sent instantly

"I used to front $15K on my credit card and pray everyone paid me back. Now I set up the payment plan, enable auto-charge, and the money just shows up in my account."

— First-time organizer [See how auto-charge works →](#)

dashboard.squadtrip.com/trips/cancun-2025/payments

Payment Plan Settings

Auto-charge

✓

Nov 15, 2024

Deposit collected

$534.75

✓

Dec 15, 2024

Auto-charged

$534.75

3

Jan 15, 2025

Scheduled

$534.75

✓ Auto-charge enabled

✓ Reminders sent

✓ Receipts automatic

![Apple Pay](/Content/images/paymentgateways/applepay.svg) ![Klarna](/Content/images/paymentgateways/klarna.svg) ![Affirm](/Content/images/paymentgateways/affirm.svg) ![Afterpay](/Content/images/paymentgateways/afterpay.svg) 

### Finally see who paid—without checking a spreadsheet

Your group chat says "I paid!" but your spreadsheet says otherwise. Sound familiar?

SquadTrip shows you exactly who paid, who's on track, and who needs a nudge—updated in real-time. No more guessing, no more "let me check," no more 30 minutes updating cells.

📊 Real-time payment status

👀 See who's behind at a glance

📥 Export reports in one click

"I used to spend 30 minutes a week updating my spreadsheet and still got it wrong. Now I just open my dashboard and it's all there—who paid, who hasn't, how much I've collected."

— Repeat organizer [See the dashboard →](#)

dashboard.squadtrip.com/trips/cancun-2025

Collection Progress 85% complete

Traveler Paid Balance Status

SMSarah Mitchell $1,900 $0 Paid in Full

JDJames Davis $1,200 $700 3 of 4

MJMaria Johnson $1,900 $0 Paid in Full

RWRobert Wilson $500 $2,400 Deposit

### Tired of explaining "what's included?" in 47 DMs?

When trip details live in your head (or scattered across texts), you become a full-time FAQ machine.

Create a beautiful booking page with packages, rooms, pricing, and itinerary—shareable with one link. Your travelers get the info they need. You stop repeating yourself.

Plus, collect traveler details (passport info, dietary restrictions, roommate preferences) right at checkout—no more copying from screenshots.

"I used to spend hours answering the same questions. Now I send my SquadTrip link and they have everything—and I get all their info automatically."

— Group trip organizer [See example booking page →](#)

book.squadtrip.com/cancun-beach-retreat

#### Cancun Beach Retreat 2025

📅 Mar 15-22 · 📍 Cancun, Mexico · 👥 18 joined

Ocean View Double $1,900

🛏️ 2 Queen 🌊 Ocean View 🍳 Breakfast

📋 Itinerary

Day 1 Arrival & Welcome Dinner

Day 2 Beach Day & Snorkeling

Day 3 Chichen Itza Excursion

+4 more days...

Ocean View Double $1,900

Excursion Package $150

Total $2,050 Book Now

or $512.50/mo × 4

### Send reminders without being "that person"

Nobody wants to be the friend who's always asking about money. But someone has to.

Let SquadTrip be the bad guy. Automatic payment reminders go out before each due date—professional, friendly, and not from your personal number. Failed payment? We notify them and retry automatically.

📧 Automatic email reminders

🔄 Auto-retry failed payments

📱 SMS notifications available

"The automatic reminders are a lifesaver. I don't have to nag anyone, and everyone still pays on time. When a card fails, SquadTrip handles it—I just get an alert."

— Community trip leader [Get started →](https://dashboard.squadtrip.com/organizer-info/0)

#### Payment Reminder

Your next payment is coming up!

Hi Sarah,

Trip Cancun Beach Retreat

Payment 3 of 4

Due Date Jan 15, 2025

Amount $534.75 [View Payment Details](#)

✓ Auto-charge enabled — we'll charge your card on file

## "Can't I just use Venmo and a spreadsheet?"

You could. Here's what that looks like:

Task

DIY Approach

With SquadTrip

Collecting payments

✗ Chase people for months

✓ Automatic payment plans

Tracking who paid

✗ Spreadsheet (always outdated)

✓ Real-time dashboard

Sending reminders

✗ Awkward texts ("hey, did you...?")

✓ Automatic emails they expect

Payment failures

✗ You find out when they tell you

✓ Auto-retry + instant alerts

Professional look

✗ Venmo request screenshots

✓ Branded booking page

Your time

✗ 10+ hours of admin per trip

✓ Set it up once, done

[Start your free trip →](https://dashboard.squadtrip.com/organizer-info/0)

## Trusted by over 2,000 group trip creators

Used for trips to: Cancun • Jamaica • Costa Rica • Bali • Greece • 50+ destinations

Tour Operator

50 → 500 guests per trip

"If it wasn't for SquadTrip, I wouldn't have been able to grow my group trips from 50 guests to 500. Before, I was using spreadsheets, collecting money individually across a number of platforms. I was struggling to identify an efficient solution for traveler receipts, reminders, and invoices. **SquadTrip changed the game completely.**"

CW

#### Collin D. Williams, Jr.

CDE Antigua

Travel Business

"Switching to SquadTrip was one of the best decisions I've made for my business. The platform's ability to track trip package inventory and offer payment plans has made it easier for me to manage my bookings."

AB

#### Andrew Bennett

Passport Society

Wedding Coordinator

"I'm not a travel agent—I'm just trying to get 60 people to my wedding. SquadTrip let me set up room blocks, collect deposits, and track everything without losing my mind."

DW

#### Diana Wilson

Riviera Maya Wedding

First-Time Organizer

"I was nervous about planning my first group trip, but SquadTrip made it so easy. I thought software like this was only for travel professionals, but it's actually perfect for someone like me."

ML

#### Michelle L.

Friends Trip to Cancun

Retreat Leader

"Managing payments for my yoga retreats used to be a nightmare. Now I set up payment plans, and everything runs on autopilot. My guests appreciate the professional experience."

SK

#### Sarah K.

Serenity Retreats

Payments secured by Stripe

256-bit encryption

PCI DSS compliant

## Want to see everything SquadTrip can do?

Explore our full feature set and transparent pricing.

[](/features)

[🎯

### All Features

Payment plans, booking pages, traveler portal, and more

Explore features →](/features)[](/pricing)

[💰

### Pricing

Free plan available. Paid plans start at $29/mo

View pricing →](/pricing)

## Frequently Asked Questions

Is there an easier way to collect money for a group trip? +

Yes—that's exactly why we built SquadTrip. Instead of chasing Venmo payments and tracking everything in a spreadsheet, you create one booking page, set up automatic payment plans, and let the platform handle reminders and tracking. Most organizers say it saves them 10+ hours per trip.

How is this different from just using Venmo or a spreadsheet? +

Venmo is great for splitting a dinner tab, but group trips involve thousands of dollars, multiple payments over months, and detailed traveler information. SquadTrip gives you automatic payment plans, a real-time dashboard showing who paid, professional booking pages, and automatic reminders—so you're not chasing people or updating spreadsheets for months.

Can I use this for a small friends trip, or is it only for businesses? +

SquadTrip works for trips of any size. Planning a bachelorette for 8 people? Perfect. Running a travel business with 500 guests per trip? Also perfect. The free plan works great for smaller trips, and you can upgrade as your needs grow.

What does it cost? Are there hidden fees? +

SquadTrip is free to start. We offer a free plan plus paid plans starting at $29/month with additional features. Booking fees are 6%, which includes the credit card processing fee (2.9% + 30¢) that Stripe charges. So if your trip costs $1,000, your traveler pays $1,060—you receive $1,000, and the $60 covers Stripe and our platform fee. No hidden fees, no surprises.

Is it complicated for my travelers to pay? +

Not at all. Your travelers see a clean booking page, select their package, enter their info, and pay with a credit card or Apple Pay. If they choose a payment plan, their card is charged automatically each month. They can also log into a traveler portal to update their payment method, view receipts, and see their balance. Most travelers find it easier than receiving Venmo requests.

What happens if someone's payment fails? +

SquadTrip automatically retries failed payments and sends the traveler a notification to update their card. You get an alert so you know what's happening, but you don't have to chase anyone down. The platform handles it.

Can I try it before committing? +

Absolutely. You can create your first trip for free—no credit card required. You'll only pay when your travelers start booking. This lets you see exactly how it works before any money changes hands.

How do I get my money? +

When travelers pay, the money goes to your connected Stripe account and is deposited into your bank account. You can set up daily or weekly payouts. SquadTrip never holds your money—it goes directly from your traveler's card to your bank through Stripe.

## Ready to stop chasing payments?

Create your first trip in 10 minutes. Free to start, no credit card required.

[Create your trip for free](https://dashboard.squadtrip.com/organizer-info/0)

[squadtrip](/)

The all-in-one booking, invoicing, and payment collection platform for managing your group trips.

#### Built for

-   [Tour Operators](#)
-   [Destination Weddings](#)
-   [Travel Agencies](#)
-   [Retreats](#)
-   [Group Trips](#)

#### How it works

-   [Professional Dashboard](#)
-   [Traveler Experience](#)
-   [Booking Trip Pages](#)

#### Resources

-   [Pricing](#)
-   [Blog](#)
-   [About](#)
-   [Help Center](#)
-   [Videos](#)

© 2025 SquadTrip. All rights reserved.

[Privacy Policy](#) [Terms of Service](#)

function toggleMobileMenu() { const mobileNav = document.getElementById('mobileNav'); const menuToggle = document.querySelector('.mobile-menu-toggle'); mobileNav.classList.toggle('active'); menuToggle.classList.toggle('active'); // Prevent body scroll when menu is open if (mobileNav.classList.contains('active')) { document.body.style.overflow = 'hidden'; } else { document.body.style.overflow = ''; } } // Close mobile menu when clicking outside document.addEventListener('click', (e) => { const mobileNav = document.getElementById('mobileNav'); const menuToggle = document.querySelector('.mobile-menu-toggle'); if (mobileNav.classList.contains('active') && !mobileNav.contains(e.target) && !menuToggle.contains(e.target)) { toggleMobileMenu(); } }); // Close mobile menu on escape key document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { const mobileNav = document.getElementById('mobileNav'); if (mobileNav.classList.contains('active')) { toggleMobileMenu(); } } }); document.querySelectorAll('.faq-question').forEach(button => { button.addEventListener('click', () => { const item = button.parentElement; const isOpen = item.classList.contains('open'); // Close all other items document.querySelectorAll('.faq-item').forEach(faq => { faq.classList.remove('open'); }); // Toggle current item if (!isOpen) { item.classList.add('open'); } }); }); // ==================== SCROLL-TRIGGERED ANIMATIONS ==================== const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 }; const animationObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); // Optional: unobserve after animation (uncomment if you want one-time animation) // animationObserver.unobserve(entry.target); } }); }, observerOptions); // Observe all elements with animation classes document.querySelectorAll('.animate-on-scroll, .stagger-children').forEach(el => { animationObserver.observe(el); }); // ==================== COUNTER ANIMATION ==================== function animateCounter(element, start, end, duration, suffix = '') { let startTime = null; const step = (timestamp) => { if (!startTime) startTime = timestamp; const progress = Math.min((timestamp - startTime) / duration, 1); const current = Math.floor(progress \* (end - start) + start); element.textContent = current + suffix; if (progress < 1) { window.requestAnimationFrame(step); } }; window.requestAnimationFrame(step); } // Counter observer for stats const counterObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting && !entry.target.classList.contains('counted')) { entry.target.classList.add('counted'); const target = parseInt(entry.target.dataset.target); const suffix = entry.target.dataset.suffix || ''; animateCounter(entry.target, 0, target, 1500, suffix); } }); }, { threshold: 0.5 }); document.querySelectorAll('.count-up').forEach(el => { counterObserver.observe(el); }); // ==================== HERO DASHBOARD ANIMATION ==================== window.addEventListener('load', () => { // Trigger hero animations after a short delay setTimeout(() => { document.querySelector('.hero-visual')?.classList.add('hero-loaded'); }, 500); }); // ==================== PARALLAX EFFECT ==================== let ticking = false; window.addEventListener('scroll', () => { if (!ticking) { window.requestAnimationFrame(() => { const scrolled = window.pageYOffset; // Parallax for floating card const floatingCard = document.querySelector('.hero-floating-card'); if (floatingCard) { const speed = 0.3; floatingCard.style.transform = \`translateY(${scrolled \* speed}px)\`; } // Subtle parallax for hero visual const heroVisual = document.querySelector('.hero-visual .mockup-frame'); if (heroVisual && scrolled < 800) { heroVisual.style.transform = \`translateY(${scrolled \* 0.1}px)\`; } ticking = false; }); ticking = true; } }); // ==================== 3D TILT EFFECT FOR BENTO CARDS ==================== document.querySelectorAll('.bento-card').forEach(card => { card.addEventListener('mousemove', (e) => { const rect = card.getBoundingClientRect(); const x = e.clientX - rect.left; const y = e.clientY - rect.top; const centerX = rect.width / 2; const centerY = rect.height / 2; const rotateX = (y - centerY) / 20; const rotateY = (centerX - x) / 20; card.style.transform = \`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)\`; }); card.addEventListener('mouseleave', () => { card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)'; }); }); // ==================== ANIMATED LINK UNDERLINES ==================== document.querySelectorAll('.feature-block-link, .who-uses-card a, .learn-more-link').forEach(link => { link.classList.add('animated-underline'); }); // ==================== ADD HOVER-LIFT TO CARDS ==================== document.querySelectorAll('.who-uses-card, .step-card, .learn-more-card, .testimonial-card-featured, .testimonial-card-side, .testimonial-card-bottom').forEach(card => { card.classList.add('hover-lift'); }); // ==================== ADD SCROLL ANIMATIONS TO SECTIONS ==================== document.querySelectorAll('.social-proof-bar, .problem-section, .feature-overview, .how-it-works, .who-uses, .feature-blocks .feature-block, .comparison-section, .testimonials-section, .learn-more-section, .faq-section, .final-cta').forEach(section => { section.classList.add('animate-on-scroll'); animationObserver.observe(section); }); // Add stagger animation to grids document.querySelectorAll('.who-uses-grid, .steps-grid, .stats-grid, .bento-grid').forEach(grid => { grid.classList.add('stagger-children'); animationObserver.observe(grid); });
