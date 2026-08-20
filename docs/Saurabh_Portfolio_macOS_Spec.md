# SAURABH YADAV — macOS PORTFOLIO SPEC
> Complete design + feature specification for Antigravity / Developer
> Theme: macOS (Desktop) · iOS (Mobile) · iPadOS (Tablet)
> Every interaction, every window, every pixel — specified here.

---

## CORE CONCEPT

The portfolio IS a macOS desktop environment running in the browser.
The user lands on a desktop — not a webpage.
There is no scroll. There are no sections. There are no navbars.
Everything lives inside draggable, resizable macOS windows.
On mobile it becomes an iOS home screen with apps.
On tablet it becomes an iPadOS split-view environment.

**The emotional experience:**
- Desktop: "I just booted into Saurabh's machine"
- Mobile: "This is his iPhone"
- First impression: curiosity + delight + "I've never seen a portfolio like this"

---

## SECTION 1 — DESKTOP (macOS)

### 1.1 THE DESKTOP

**Wallpaper:**
A clean, dark gradient wallpaper. Options:
- Option A: Deep dark navy → black gradient (like macOS Sonoma dark)
- Option B: A subtle animated gradient that slowly shifts (very slow, like 60s cycle)
- Option C: A custom illustrated wallpaper with subtle code/circuit motifs
Recommended: Option B — animated dark gradient. Subtle, alive, premium.

**Desktop Icons:**
Arranged in a grid on the right side of the desktop (macOS style).
Each icon is a macOS-style app icon (rounded square, 512px design, scaled to 80px on desktop).

Icons to show on desktop:
```
Row 1:
[About Me.app]    [Projects.app]    [Experience.app]

Row 2:
[Skills.app]      [Terminal.app]    [Contact.app]

Row 3:
[Resume.app]      [GitHub.app]      [Blog/Twitter.app]
```

Each icon:
- Has a label below it (macOS style, white text, small shadow)
- Single click = highlight (blue glow border)
- Double click = opens the app in a window
- Right click = context menu (Open, Get Info, Move to Trash — "Move to Trash" shows a toast: "Nice try.")

**Desktop right-click (on empty desktop area):**
Context menu appears:
```
Change Wallpaper
New Folder
Get Info
——————————
Sort By
Clean Up
——————————
Download Resume  →  (directly downloads PDF)
```

---

### 1.2 THE MENU BAR

Fixed at top. Exactly like macOS.

**Left side:**
```
[🍎 Apple logo]  Saurabh  File  Edit  View  Window  Help
```

- Apple logo click → dropdown:
  ```
  About This Developer
  ————————————————
  System Preferences...
  ————————————————
  Sleep  ·  Restart  ·  Shut Down
  ```
  - "About This Developer" → opens About Me window
  - "System Preferences" → opens a fake System Preferences window (fun easter egg — shows "Theme: Dark", "Language: TypeScript", "Storage: PostgreSQL", etc.)
  - "Sleep" → dims screen with a sleep animation, click to wake
  - "Restart" → page reload with a fake reboot screen
  - "Shut Down" → screen goes black with "Goodbye." centered, then after 2s fades back

- "Saurabh" menu click → dropdown:
  ```
  About Saurabh
  ————————————————
  Preferences...
  ————————————————
  Hide Windows
  Hide Others
  Show All
  ————————————————
  Quit Saurabh
  ```

- "File" menu:
  ```
  New Window         ⌘N
  Open...            ⌘O
  ————————————————
  Download Resume    ⌘D
  ————————————————
  Print              ⌘P
  ```

- "View" menu:
  ```
  Show Dock          ✓
  Show Menu Bar      ✓
  ————————————————
  Dark Mode          ✓
  Light Mode
  ```

- "Window" menu: lists all open windows with ability to focus them

- "Help" menu:
  ```
  Saurabh's Portfolio Help
  ————————————————
  Keyboard Shortcuts
  ————————————————
  Contact Support  → opens Contact window
  ```

**Right side (System Tray):**
```
[🔋 100%]  [WiFi signal]  [🔊 Volume]  [2026-07-29  10:30 AM]
```
- Battery: always 100% with a ⚡ charging icon. Tooltip: "Always charged."
- WiFi: shows "Connected" (tooltip: "Connected to: Building Things")
- Volume: click shows a volume slider (decorative)
- Clock: shows real current time + date. Click shows a mini calendar widget.

**Spotlight Search:**
`⌘ + Space` → Spotlight search bar appears center screen.
User can type any of:
- "about" → opens About Me
- "projects" → opens Projects
- "resume" → downloads resume
- "contact" → opens Contact
- "github" → opens GitHub in new tab
- "skills" → opens Skills
- Anything unrecognized → shows: "No results for '[query]'. Try asking Saurabh directly."

---

### 1.3 THE DOCK

Fixed at bottom center. Exact macOS dock behavior.

**Icons in dock (left to right):**
```
[Finder] | [About Me] [Projects] [Experience] [Skills] | [Terminal] [Resume] | [GitHub] [LinkedIn] [Twitter] | [Trash]
```

Separators between groups (macOS style thin line).

**Dock behaviors:**
- Hover → icon bounces up (macOS magnification effect), label appears above
- Click → opens app window + icon gets dot indicator below it
- Active apps → small dot below icon
- Drag to rearrange (optional — nice to have)
- Minimize to dock → window shrinks into dock icon with genie effect
- Right click on dock icon → context menu: Open · Show in Finder · Options · Keep in Dock

**Trash:**
- Empty by default
- Drag any open window's close button area → window goes to trash with animation
- Empty Trash → confirmation dialog → "Are you sure? This will close all windows." (just closes all windows)

---

### 1.4 THE WINDOWS

Every "app" opens as a draggable, resizable macOS window.

**Window anatomy (all windows share this):**
```
┌─────────────────────────────────────────────────────────┐
│  🔴 🟡 🟢    Window Title                    ─  □  ✕   │
│─────────────────────────────────────────────────────────│
│                                                         │
│                   WINDOW CONTENT                        │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Traffic lights (top left):**
- 🔴 Red = Close window
- 🟡 Yellow = Minimize (genie effect into dock)
- 🟢 Green = Fullscreen (fills browser viewport, menu bar still visible)
- Hover over red → shows ✕ inside the circle
- Hover over yellow → shows ─ inside
- Hover over green → shows ⤢ inside

**Window behaviors:**
- Drag by title bar → moves window
- Drag bottom-right corner → resize
- Double-click title bar → minimize/maximize (macOS default behavior)
- Windows stack in z-order — clicking brings to front
- Slight drop shadow on active window (more prominent than inactive)
- Inactive windows → slightly dimmed title bar
- Windows open with a smooth scale-up animation from dock icon
- Windows close with a scale-down animation back to dock icon

**Default window positions (when first opened):**
- About Me → center-left
- Projects → center
- Terminal → center-right
- Experience → slightly offset from center
- Each subsequent window opens offset by 20px from previous (cascade)

---

### 1.5 THE APP WINDOWS — CONTENT

#### APP 1: ABOUT ME
```
Window title: About Me — Saurabh Yadav
Default size: 580px × 480px
```

Layout mimics macOS "About This Mac" dialog:

```
┌─────────────────────────────────────────────────────────┐
│  🔴 🟡 🟢    About Me — Saurabh Yadav                  │
│─────────────────────────────────────────────────────────│
│                                                         │
│   [Avatar / Memoji-style illustration]                  │
│                                                         │
│   SAURABH YADAV                                        │
│   Full-Stack & AI Developer                             │
│                                                         │
│   Version  2026.1  (B.Tech AI-ML Final Year)            │
│   Silver Oak University, Ahmedabad, Gujarat             │
│                                                         │
│   ─────────────────────────────────────────────────     │
│                                                         │
│   I build systems that think, scale, and ship.          │
│                                                         │
│   Currently at 2 internships simultaneously.            │
│   Building Postik Aahar (SaaS) on the side.             │
│   Co-founded EaseTech4. Shipped real products.          │
│   Mentoring 3 junior developers.                        │
│                                                         │
│   ─────────────────────────────────────────────────     │
│                                                         │
│   [  LinkedIn  ]  [  GitHub  ]  [  Email  ]             │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

Tabs at top (like macOS About This Mac tabs):
```
[ Overview ] [ Internships ] [ Education ] [ Certifications ]
```
- Overview: the layout above
- Internships: shows Canovet + Hubbl cards side by side
- Education: Silver Oak + Sheryians timeline
- Certifications: any certs (Sheryians cohort, etc.)

---

#### APP 2: PROJECTS
```
Window title: Projects
Default size: 900px × 620px
Resizable: yes
```

Layout: macOS Finder-style with sidebar + main content area

```
┌─────────────────────────────────────────────────────────────┐
│  🔴 🟡 🟢    Projects                       [⊞] [☰] [  🔍]  │
│─────────────────────────────────────────────────────────────│
│  SIDEBAR          │  MAIN CONTENT AREA                      │
│  ─────────────    │  ────────────────────────────────────── │
│  ⭐ Featured      │                                         │
│                   │  [Project Card Grid]                    │
│  CATEGORIES       │                                         │
│  📦 All           │                                         │
│  🌐 Full-Stack    │                                         │
│  🧠 AI / ML       │                                         │
│  ⚙️  Backend       │                                         │
│  📱 Mobile        │                                         │
│                   │                                         │
│  TAGS             │                                         │
│  #react           │                                         │
│  #nodejs          │                                         │
│  #postgresql      │                                         │
│  #gemini          │                                         │
│  #python          │                                         │
└─────────────────────────────────────────────────────────────┘
```

View toggle (top right): Grid view [⊞] or List view [☰]

**Grid view — each project card:**
```
┌──────────────────────────────────┐
│  [Project icon/logo]             │
│                                  │
│  POSTIK AAHAR                    │
│  Multi-tenant SaaS Restaurant OS │
│                                  │
│  ●●●●●  (tech stack dots)        │
│  [Turborepo] [Hono] [Next.js]    │
│                                  │
│  [ GitHub ↗ ]  [ Live ↗ ]        │
└──────────────────────────────────┘
```

**Click on project card → opens a sub-window / Quick Look (spacebar on selected card):**
Like macOS Quick Look (spacebar preview) — a modal-style overlay with:
- Full project description
- Tech stack pills
- All stat chips (files, LOC, endpoints, tables)
- GitHub button
- Live button (if exists)
- Screenshots (if added later)

**List view — each row:**
```
[icon]  Postik Aahar        SaaS · Full-Stack · AI    172 endpoints    2025–2026   [GitHub ↗]
```

Projects to include (in order):
1. ⭐ Postik Aahar (Featured — show with star badge)
2. CooLogs
3. Talk2Hire
4. Flatmate Finder Pro
5. Hubbl (also a project/portfolio piece)

---

#### APP 3: EXPERIENCE
```
Window title: Experience
Default size: 720px × 560px
```

Layout: macOS System Information style — left sidebar timeline, right detail panel

```
┌─────────────────────────────────────────────────────────────┐
│  🔴 🟡 🟢    Experience                                      │
│─────────────────────────────────────────────────────────────│
│  TIMELINE              │  DETAIL PANEL                      │
│  ──────────────────    │  ─────────────────────────────     │
│                        │                                    │
│  2026                  │  Full-Stack Developer Intern        │
│  ▶ Canovet ●           │  Canovet · Jan 2026 – Present      │
│                        │                                    │
│  2025                  │  [Company description + logo]      │
│  ▶ Hubbl ●             │                                    │
│  ▶ EaseTech4 ●         │  • Architecting cross-platform     │
│                        │    pet-care platform (monorepo,    │
│  2024                  │    189 files, 34K+ LOC)            │
│                        │  • Built weighted matchmaking      │
│                        │    engine with Haversine geo...    │
│                        │  • Redis <1ms session caching      │
│                        │  • Razorpay payment lifecycle      │
│                        │  • Mentoring 3 junior devs         │
│                        │                                    │
│                        │  [  5 packages  ]  [  34 APIs  ]   │
│                        │  [  17 tables   ]  [  Redis    ]   │
│                        │                                    │
└─────────────────────────────────────────────────────────────┘
```

Click on each timeline entry → right panel updates with that experience's content.

---

#### APP 4: SKILLS
```
Window title: Skills & Technologies
Default size: 680px × 520px
```

Layout: macOS Activity Monitor style — tabs at top, data below

Tabs:
```
[ All ]  [ Backend ]  [ Frontend ]  [ AI & ML ]  [ Databases ]  [ Infrastructure ]
```

Under each tab: skill pills grouped by subcategory.
Each pill on hover shows a small tooltip with: "Used in: Canovet, Postik Aahar"

Add a "proficiency bar" for key skills (like macOS CPU/Memory bars):
```
Node.js          ████████████████████  Expert
PostgreSQL       ██████████████████░░  Advanced
React.js         ██████████████████░░  Advanced
Python           █████████████░░░░░░░  Intermediate
Gemini API       ████████████████░░░░  Advanced
Redis            ████████████████░░░░  Advanced
```

Footer stat: "Across 6 production projects · 2 active internships"

---

#### APP 5: TERMINAL
```
Window title: Terminal — saurabh@portfolio ~ %
Default size: 680px × 440px
Font: Menlo / SF Mono / monospace
Background: #1e1e1e (classic dark terminal)
Text: #39ff14 (terminal green) or classic white
```

This is the most impressive window. It's a fake interactive terminal.

**On open, auto-types this welcome message:**
```
Last login: Tue Jul 29 2026 on portfolio

saurabh@portfolio ~ % whoami
Saurabh Yadav — Full-Stack & AI Developer

saurabh@portfolio ~ % cat about.txt
Building systems since 2022.
Currently: 2 internships + 1 SaaS + learning in public.
Stack: Node.js · PostgreSQL · Redis · React · Expo RN · Gemini API
Open to: Full-Stack · Backend · AI Engineering · SDE · APM roles

saurabh@portfolio ~ % _
```

**Available commands (user can type these):**

```bash
help                → lists all available commands
whoami              → prints name + title
skills              → lists all tech skills grouped
projects            → lists all projects with one-line descriptions
experience          → lists all work experience
contact             → shows email + linkedin + github
resume              → "Downloading resume..." then triggers PDF download
github              → opens github.com/saurabhyadav0 in new tab
linkedin            → opens linkedin profile in new tab
email               → "Opening mail client..." → mailto link
hire me             → shows a fun ASCII art "HIRE ME" banner
clear               → clears terminal
neofetch            → shows ASCII art + system info (see below)
open [appname]      → opens that app window (e.g. "open projects")
secret              → easter egg (see Easter Eggs section)
sudo rm -rf /       → "Nice try. Portfolio protected by Saurabh's firewall. 🔐"
npm install         → "Installing... ✓ Done. No node_modules here though."
git log             → shows a fake git log of Saurabh's projects
pwd                 → /Users/saurabh/portfolio
ls                  → lists "files": about.txt projects/ skills.json resume.pdf
cat resume.pdf      → "Binary file (resume.pdf) — use 'resume' command to download"
ping saurabh          → "PING saurabh: 1 packet transmitted, 1 received, 0% packet loss. RT: ∞ms (always available)"
```

**neofetch output:**
```
                    saurabh@portfolio
   🖥️  🖥️  🖥️        ──────────────────
  🖥️  🖥️  🖥️  🖥️      OS:       Portfolio OS 2026
   🖥️  🖥️  🖥️        Host:     saurabh-yadav0.dev
                    Kernel:   React 19 + Next.js 14
saurabh@portfolio     Uptime:   Always building
                    Shell:    TypeScript zsh
                    IDE:      Cursor / VS Code
                    CPU:      Brain (overclocked)
                    RAM:      Redis (sub-millisecond)
                    Disk:     PostgreSQL (17+ tables)
                    GPU:      Gemini 2.0 Flash
                    Network:  Vercel CDN (edge-native)
                    ──────────────────
                    🟥🟧🟨🟩🟦🟪⬛⬜
```

**hire me command:**
```
 _   _ ___ ____  _____   __  __ _____ _ 
| | | |_ _|  _ \| ____| |  \/  | ____| |
| |_| || || |_) |  _|   | |\/| |  _| | |
|  _  || ||  _ <| |___  | |  | | |___| |___
|_| |_|___|_| \_\_____| |_|  |_|_____|_____|

Email: yadavv.saurab@gmail.com
LinkedIn: linkedin.com/in/saurabh-yadav0
```

---

#### APP 6: RESUME
```
Window title: Resume.pdf — Preview
Default size: 640px × 800px
```

Mimics macOS Preview app showing a PDF.

Layout:
- Left sidebar: thumbnail strip (Page 1, Page 2 if multi-page)
- Main area: rendered resume (show as image or embedded PDF viewer)
- Top toolbar (macOS Preview style): zoom in, zoom out, fit page, share

At bottom: a "Download" button that downloads the actual PDF.

Add a role switcher at top:
```
Viewing:  [ Full-Stack ▾ ]
          ─────────────────
          Full-Stack
          Backend
          SDE
          Gen AI
          AI/ML
          Product Manager
```
Switching role → shows the corresponding resume variant.

---

#### APP 7: CONTACT
```
Window title: Contact — Get in Touch
Default size: 520px × 400px
```

Mimics macOS Contacts app:

```
┌─────────────────────────────────────────────────────┐
│  🔴 🟡 🟢    Contacts                               │
│─────────────────────────────────────────────────────│
│  [VU]  Saurabh Yadav                               │
│        Full-Stack & AI Developer                    │
│        Ahmedabad, Gujarat, IN                       │
│                                                     │
│  ─────────────────────────────────────────────────  │
│                                                     │
│  📧  yadavv.saurab@gmail.com    [copy] [open]   │
│  📱  99788 03941                    [copy]          │
│  💼  linkedin.com/in/saurabh-yadav0 [open ↗]        │
│  🐙  github.com/saurabhyadav0            [open ↗]        │
│  🐦  @saurabh_dev (Twitter)           [open ↗]        │
│                                                     │
│  ─────────────────────────────────────────────────  │
│                                                     │
│  NOTES                                              │
│  Open to full-time · internship · remote            │
│  Available: Immediately                             │
│  Graduating: 2026                                   │
│                                                     │
│  ─────────────────────────────────────────────────  │
│  [  Send Message  ]  [  Download vCard  ]           │
│                                                     │
└─────────────────────────────────────────────────────┘
```

"Send Message" → opens a macOS Mail-style compose window:
```
┌──────────────────────────────────────────────────┐
│  🔴 🟡 🟢    New Message                         │
│──────────────────────────────────────────────────│
│  To:       yadavv.saurab@gmail.com           │
│  Subject:  [                                   ] │
│  ──────────────────────────────────────────────  │
│                                                  │
│  [                                            ]  │
│  [                                            ]  │
│  [                                            ]  │
│  [                                            ]  │
│                                                  │
│                                   [ Send ↗ ]     │
└──────────────────────────────────────────────────┘
```
Send button → actually sends via EmailJS or Formspree to Saurabh's email.

"Download vCard" → downloads a .vcf file with Saurabh's contact info (works with iPhone/Mac Contacts).

---

#### APP 8: GITHUB (Browser window style)
```
Window title: GitHub — saurabhyadav0
```
Opens an iframe or a stylized preview of the GitHub profile.
Or: a macOS Safari-style window with address bar showing github.com/saurabhyadav0 and an "Open in Browser" button.

---

### 1.6 ADDITIONAL DESKTOP FEATURES

**Mission Control (F3 or swipe gesture simulation):**
- On click of a Mission Control button in menu: all open windows fan out like macOS Mission Control
- Click any window thumbnail to bring it forward

**Notification Center:**
- Click clock area → notification center slides in from right
- Shows fake notifications:
  ```
  ✅ Canovet  "New booking matched"     2 min ago
  ✅ Hubbl    "Scraper: 47 new events"  1 hr ago
  ✅ GitHub   "3 new stars on CooLogs"  3 hrs ago
  🔔 Postik   "Kitchen: Order #47 ready" Just now
  ```

**AirDrop easter egg:**
- Right-click desktop → "AirDrop Resume" → animated AirDrop UI → "Resume sent to HR's MacBook" → triggers download

**Cmd+Tab App Switcher:**
- Press Cmd+Tab (or a button) → macOS app switcher appears with all open apps

**Boot Screen (first visit):**
If first visit, show a brief macOS boot sequence:
```
[Apple Logo]
[Progress bar loading ~2s]
→ Desktop appears
```
Store in localStorage so it only shows once.

**Lock Screen:**
- After 5 minutes of inactivity → screen dims to a macOS-style lock screen
- Shows: time (large), date, "saurabh@portfolio"
- Click or press any key to "unlock" → desktop reappears

---

## SECTION 2 — MOBILE (iOS)

### 2.1 THE HOME SCREEN

The mobile view is a pixel-perfect iOS home screen.

**Status Bar (top):**
```
9:41 AM                    ● ●●●  WiFi  🔋
```
Time shows real current time. 9:41 AM is the Apple keynote time — use real time but add a small easter egg: if it IS 9:41, show "✨ 9:41" in gold.

**Wallpaper:** Same dark animated gradient as desktop, but portrait crop.

**App Icons (home screen grid — 4 columns):**
```
Row 1:  [About]    [Projects]  [Experience]  [Skills]
Row 2:  [Terminal] [Resume]    [Contact]     [GitHub]
Row 3:  [LinkedIn] [Twitter]   [Settings]    [  ]
```

Each icon:
- Proper iOS rounded-square shape (superellipse, ~27% corner radius)
- Long press → wiggle mode (icons shake like iOS edit mode)
- In wiggle mode: ✕ badge appears on each icon
- Tap ✕ → "Are you sure you want to delete [App]? You'll lose everything." → Cancel / Delete → Delete just closes the icon (reappears on refresh)
- Tap icon → app opens (full-screen slide-up like iOS)

**Dock (bottom 4 icons):**
```
[About]  [Projects]  [Terminal]  [Contact]
```
Frosted glass background. Always visible.

**Swipe gestures:**
- Swipe right on home screen → Search screen (iOS Spotlight)
- Swipe up from bottom → App switcher (open apps as cards, swipe up to close)
- Swipe left → Page 2 of home screen (if more apps added later)

**Home screen page dots:** Shown below icon grid, above dock.

---

### 2.2 MOBILE APP VIEWS

When an app icon is tapped:
- Zoom animation from icon position to full screen (iOS style)
- Full-screen modal with swipe-down to close

Each app is redesigned as a full-screen iOS app:

**About Me (iOS):**
- Large profile image/avatar at top
- Name + title
- Scrollable bio sections
- Segmented control: Overview / Internships / Education
- Bottom: Contact buttons (Email, LinkedIn, GitHub) as iOS-style list rows

**Projects (iOS):**
- Search bar at top
- Filter chips below: All · Full-Stack · AI/ML · Backend
- Project cards as iOS list or card scroll
- Tap project → push to detail view (like iOS navigation)
- Back button top-left

**Terminal (iOS):**
- Full-screen dark terminal
- iOS keyboard appears on tap
- Same commands as desktop version
- Output scrolls up

**Resume (iOS):**
- PDF viewer (native iOS-style)
- Share button top-right → iOS share sheet appears (Download, Copy Link, AirDrop)
- Role switcher as iOS segmented control at bottom

**Contact (iOS):**
- iOS Contacts-style full-screen view
- Tap email → opens Mail app
- Tap phone → shows "Call" or "Copy" action sheet
- Tap LinkedIn → opens in Safari

---

### 2.3 iOS-SPECIFIC FEATURES

**Dynamic Island (top center, if showing on modern iPhone frame):**
Shows rotating status:
- "Building at Canovet 👨‍💻"
- "Interning at Hubbl 🚀"
- "Postik Aahar: 172 endpoints 📦"
- Tap → expands to show current "activity" card

**Control Center (swipe down from top-right):**
Shows mock iOS control center with:
- Brightness slider (decorative)
- Volume slider (decorative)
- WiFi toggle (decorative)
- "AirDrop Resume" button → triggers download

**Lock Screen (mobile):**
```
Tuesday
July 29

9:41 AM

[Notification: "Canovet: New internship milestone reached"]
[Notification: "GitHub: CooLogs received a star"]

[Camera]  ────────  [Flashlight]
```

---

## SECTION 3 — TABLET (iPadOS)

### 3.1 IPAD HOME SCREEN

Similar to iOS but with larger grid (5 or 6 columns) and room for widgets.

**Left side of iPad home screen:** Widget area
```
[Large widget: About Me — shows name, title, 3 stats]
[Medium widget: Latest Project — Postik Aahar]
[Small widget: GitHub Activity]
```

**Right side:** App icon grid

**iPad Dock (bottom):** 
Wider, shows 6 icons. Also shows "Recent Apps" on right side (like real iPadOS).

---

### 3.2 SPLIT VIEW (iPadOS)

Key iPadOS feature: two apps side by side.

Default split view on tablet:
- Left (60%): Projects app
- Right (40%): Terminal app

User can drag the divider to resize. They can also trigger split view by:
- Long press app icon → "Open in Split View"
- Drag app from dock to side of screen

Split view combinations that make sense:
- Projects (left) + About Me (right)
- Experience (left) + Skills (right)
- Resume (left) + Contact (right)

---

## SECTION 4 — INTERACTIONS & ANIMATIONS

### 4.1 WINDOW ANIMATIONS
```
Open:     Scale from 0.8 + fade in, 200ms, ease-out
Close:    Scale to 0.8 + fade out, 150ms, ease-in
Minimize: Genie effect (CSS clip-path animation) into dock icon
Maximize: Expand to fill viewport, 250ms, ease-in-out
Focus:    Drop shadow intensifies, 100ms
Unfocus:  Drop shadow dims, title bar grays, 100ms
```

### 4.2 DOCK ANIMATIONS
```
Hover:    Icon scales to 1.4x, neighbors scale to 1.2x and 1.1x (magnification)
          Cubic bezier: cubic-bezier(0.34, 1.56, 0.64, 1)
          Duration: 150ms
Label:    Fades in above icon on hover, 100ms
Click:    Icon bounces (translateY -12px → 0, 200ms, spring)
```

### 4.3 DESKTOP INTERACTIONS
```
Icon hover:        Subtle glow
Icon single click: Highlight (blue border)
Icon double click: Opens window with bounce animation
Right click:       Context menu appears at cursor, 150ms fade+scale
Drag icon:         Ghost follows cursor
```

### 4.4 SYSTEM ANIMATIONS
```
Spotlight open:    Search bar drops from top, blur background, 200ms
Spotlight close:   200ms reverse
Mission Control:   All windows fan out with spring physics
App Switcher:      Icons slide in from right, 200ms stagger
Boot screen:       Apple logo fades in, progress bar fills over 2s
Sleep:             Screen dims to black over 500ms
Wake:              Screen brightens over 300ms
Lock screen:       Blurred desktop + time, fade in 300ms
Notification:      Slides in from top-right, 300ms spring
```

### 4.5 TERMINAL ANIMATIONS
```
Typing:       Simulated typing effect (typewriter), 30-50ms per char
Cursor:       Blinking block cursor, 1s blink interval
Command exec: Brief 100ms delay then output appears
```

---

## SECTION 5 — EASTER EGGS

Hidden interactions that delight anyone who finds them.

**1. Konami Code:**
Up Up Down Down Left Right Left Right B A → Shows:
```
🎉 ACHIEVEMENT UNLOCKED: You know the Konami Code
Reward: Secret project revealed
→ Opens a window showing an unreleased project / WIP
```

**2. sudo command in Terminal:**
```
saurabh@portfolio ~ % sudo hire-me
Password: ••••••••
Sorry, user 'hr' is not in the sudoers file. This incident will be reported.
(Just kidding. Email yadavv.saurab@gmail.com)
```

**3. Move to Trash (any icon):**
Icon goes into trash with macOS trash animation.
Open Trash → shows: "saurabh_resume_rejected.pdf" (greyed out)
Double-click it → "This file cannot be opened. Consider hiring Saurabh instead."

**4. System Preferences (fake):**
```
General:
  Theme:          Dark Mode (always)
  Language:       TypeScript
  Region:         Ahmedabad, India

Storage:
  PostgreSQL      17 tables
  Redis           <1ms
  MongoDB         Aggregations
  Total           Production-ready

Battery:
  Condition:      Outstanding
  Charge:         100% (always building)

Network:
  Connected To:   "Building Things"
  IP Address:     0.0.0.0 (available everywhere)
  DNS:            Vercel Edge Network

Users:
  Admin:          Saurabh Yadav
  Guest:          HR / Recruiter (you)
```

**5. Click the clock 3 times fast:**
Shows a fake "Time Machine" backup window:
```
Backing up to: "The Future"
Items remaining: 1 (your hiring decision)
```

**6. "Open in Finder" reveals:**
A fake Finder window showing:
```
📁 saurabh-portfolio/
  📄 about.txt
  📁 projects/
      📦 postik-aahar/     (327 files, 50K LOC)
      📦 coologs/          (Final Year Project)
      📦 talk2hire/        (AI Voice Interviewer)
      📦 flatmate-finder/  (Edge deployed)
      📦 canovet/          (34K LOC, in progress)
      📦 hubbl/            (89K LOC, in progress)
  📄 resume.pdf           (6 variants)
  📄 skills.json
  🗑️  excuses.txt          (0 bytes)
```

**7. Cmd+Q (quit):**
Shows dialog:
```
Are you sure you want to quit?
Saurabh is still available for hire.

[ Cancel ]  [ Quit Anyway ]
```
Quit Anyway → page fades black → "Come back anytime. yadavv.saurab@gmail.com"

---

## SECTION 6 — TECHNICAL SPEC FOR DEVELOPER

### 6.1 TECH STACK RECOMMENDATION
```
Framework:        Next.js 14 (App Router) or pure React + Vite
Styling:          Tailwind CSS + custom CSS for macOS-specific effects
Animations:       Framer Motion (window open/close/drag) + CSS transitions
Drag/Resize:      react-rnd (draggable + resizable windows)
Terminal:         Custom component (fake terminal, no external lib needed)
State:            Zustand (track open windows, z-index order, window positions)
Email:            EmailJS or Resend (for contact form)
Deployment:       Vercel
```

### 6.2 Z-INDEX SYSTEM
```
Desktop background:  0
Desktop icons:       10
Windows:             100 - 200 (each new focused window gets +1)
Active window:       highest z-index in that range
Dock:                300
Menu bar:            400
Spotlight overlay:   500
Context menus:       600
Notifications:       700
Boot/lock screen:    1000
```

### 6.3 STATE TO MANAGE (Zustand store)
```javascript
{
  windows: [
    {
      id: string,
      app: string,
      isOpen: boolean,
      isMinimized: boolean,
      isMaximized: boolean,
      position: { x, y },
      size: { width, height },
      zIndex: number,
      title: string
    }
  ],
  activeWindowId: string,
  isDarkMode: boolean,
  isSleeping: boolean,
  isLocked: boolean,
  notifications: [],
  terminalHistory: [],
  trashItems: []
}
```

### 6.4 WINDOW MANAGER FUNCTIONS
```javascript
openWindow(appName)         // opens a new window or focuses if already open
closeWindow(id)             // closes + removes from state
minimizeWindow(id)          // genie animation + hide
maximizeWindow(id)          // expand to fullscreen
focusWindow(id)             // bring to front (highest z-index)
moveWindow(id, x, y)        // update position
resizeWindow(id, w, h)      // update size
```

### 6.5 RESPONSIVE BREAKPOINTS
```
≥ 1024px:   macOS desktop experience
768–1023px: iPadOS tablet experience
< 768px:    iOS mobile experience
```

### 6.6 PERFORMANCE NOTES
```
- Lazy load window content (don't render Projects content until window is opened)
- Use CSS transforms for window drag (not top/left — GPU accelerated)
- Throttle drag events to 60fps
- Preload resume PDF on idle
- Animated wallpaper should use CSS animation or canvas, not JS setInterval
- Use will-change: transform on windows for smooth dragging
- Terminal typewriter effect: requestAnimationFrame, not setTimeout
```

### 6.7 ACCESSIBILITY NOTES
```
- All windows must be keyboard navigable
- Tab order: menu bar → active window → dock
- Each window has role="dialog" with aria-label
- Close/minimize/maximize buttons have aria-label
- Animations respect prefers-reduced-motion
- Terminal accessible as a form with role="log" for output
- Color contrast: all text meets WCAG AA minimum
```

### 6.8 LOCAL STORAGE KEYS
```
saurabh-boot-shown:        boolean (skip boot screen after first visit)
saurabh-wallpaper:         string (selected wallpaper index)
saurabh-dark-mode:         boolean
saurabh-window-positions:  JSON (remember where user moved windows)
saurabh-open-apps:         JSON (restore open windows on refresh)
```

---

## SECTION 7 — CONTENT REFERENCE

> All actual text content (hero copy, project descriptions, experience bullets, skills)
> is defined in the companion file: **Saurabh_Portfolio_Master.md**
> This spec only defines structure, interactions, and layout.
> Pull all copy from that document.

**Project data file (create as data/projects.ts):**
```typescript
export const projects = [
  {
    id: "postik-aahar",
    title: "Postik Aahar",
    subtitle: "Multi-Tenant SaaS Restaurant OS",
    tags: ["Full-Stack", "AI/ML", "Backend", "SaaS"],
    featured: true,
    status: "Production-Ready",
    github: "https://github.com/saurabhyadav0",
    live: null,
    tech: ["Turborepo", "Hono.js", "Next.js 14", "PostgreSQL", "Prisma ORM",
           "Gemini 2.0 Flash", "Cloudflare R2", "SSE", "TanStack Query", "Zustand"],
    stats: { files: 327, loc: "~50K", endpoints: 172, tables: 28, enums: 15 },
    icon: "🍽️"
  },
  // ... other projects
]
```

---

## SECTION 8 — LAUNCH CHECKLIST

Before going live, verify:

```
□ Boot screen shows on first visit, skips on return
□ All 8 app windows open and close correctly
□ Window drag works on desktop
□ Window resize works
□ Dock magnification works
□ Menu bar all dropdowns work
□ Spotlight search returns correct results for all keywords
□ Terminal responds to all listed commands
□ "hire me" ASCII art renders correctly
□ neofetch renders correctly
□ Contact form actually sends email
□ Resume download works for all 6 variants
□ vCard download works
□ All project GitHub links open correctly
□ Mobile iOS view renders correctly on iPhone screen sizes
□ iPadOS split view works on tablet
□ All easter eggs functional
□ Lock screen triggers after 5 min inactivity
□ Notifications show and dismiss correctly
□ prefers-reduced-motion respected
□ All windows keyboard navigable
□ OG meta tags set (for LinkedIn/Twitter share preview)
□ Favicon is the macOS-style app icon
□ Page title: "Saurabh Yadav — Portfolio"
□ No console errors in production
□ Lighthouse score: Performance ≥ 90, Accessibility ≥ 90
```

---

*End of macOS Portfolio Spec.*
*Companion file: Saurabh_Portfolio_Master.md (all copy/content)*
*Hand both files to Antigravity or developer to implement.*
