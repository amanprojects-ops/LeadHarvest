# Google Maps Scraper — Extract Business Leads in One Click

> **Built & Maintained by [amanprojects](https://amanprojects.com)** ⚡

A powerful Chrome extension that extracts business leads from Google Maps search results — including emails, phone numbers, websites, social media profiles — and exports them to CSV/Excel with one click. **No limits. No login required.**

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔍 **Smart Search** | Search Google Maps directly from the extension popup |
| ⚡ **Auto Extract** | Automatically scrolls & scrapes all results from the feed |
| 📧 **Email Finder** | Deep-crawls websites to find emails & social profiles |
| 📥 **Export CSV/XLSX** | One-click download — no limits, no quotas |
| 🌍 **Global Support** | Works on all 200+ Google Maps country domains |
| 🔒 **Privacy First** | All processing happens locally in your browser |
| 🎨 **Premium UI** | Dark glassmorphism theme with smooth animations |
| ♾️ **Unlimited** | No restrictions on scraping or downloads |

---

## 📊 Data Points Extracted

Our scraper captures comprehensive business information:

- **Business Name** — Company or establishment name
- **Phone Number** — Direct business contact
- **Website URL** — Official website link
- **Email Address** — Extracted from business websites (deep search)
- **Social Profiles** — Instagram, Facebook, LinkedIn, Twitter/X, YouTube, Yelp
- **Physical Address** — Complete street address
- **Google Place ID** — Unique Google Maps identifier
- **CID** — Google's internal customer ID
- **Star Rating** — Average review rating
- **Review Count** — Total number of reviews
- **Business Category** — Industry classification
- **Business Hours** — Operating hours per day
- **Lat/Lng Coordinates** — GPS coordinates

---

## 🚀 Quick Start

### Installation

1. Download or clone this repository
2. Open `chrome://extensions` in your browser
3. Enable **Developer Mode** (top-right toggle)
4. Click **Load Unpacked** and select the project folder
5. The extension icon will appear in your toolbar

### Usage

1. **Click the extension icon** — a premium dark popup opens
2. **Enter your search** — e.g. "restaurants near New York"
3. **Click "Search Google Maps"** — opens Google Maps with your query
4. **On Google Maps** — a floating panel appears on the left side
5. **Click "Start Auto Extract"** — the scraper automatically scrolls through all results
6. **Click "Export Leads"** — opens the dashboard with your extracted data
7. **Download CSV or XLSX** — export instantly, no limits!

---

## 🖥️ Screenshots

### Extension Popup
![Google Maps Scraper Popup](./screenshot/popup.png)
_Premium dark-themed popup with search & stats_

### Data Extraction Panel
![Extraction UI on Google Maps](./screenshot/ui.png)
_Floating overlay on Google Maps for controlling extraction_

### Leads Dashboard
![Extracted Leads Dashboard](./screenshot/demo_data.png)
_Full data table with CSV/XLSX export options_

---

## 🏗️ Project Structure

```
lead-scraper/
├── popup.html              # Extension popup UI
├── dashboard.html          # Data export dashboard
├── bg.js                   # Service worker (background script)
├── contentScript.js        # Main content script (scraping logic)
├── contentScript2.js       # Script injector
├── injected.js             # XHR interceptor for Google Maps API
├── manifest.json           # Extension manifest (MV3)
├── js/
│   ├── popup.js            # Popup logic
│   ├── dashboard.js        # Dashboard logic & table rendering
│   └── util.js             # Utility functions
├── css/
│   ├── style.css           # Popup styles (dark theme)
│   ├── dashboard.css       # Dashboard styles (dark theme)
│   └── contentScript.css   # Overlay panel styles
├── lib/                    # Third-party libraries
│   ├── tabulator/          # Data table library
│   ├── xlsx.full.min.js    # Excel export
│   └── ...
└── icons/                  # Extension icons
```

---

## 🎯 Use Cases

### Lead Generation
- Build targeted prospect lists from any location
- Extract contact info for cold outreach campaigns
- Find businesses in specific industries and cities

### Local SEO & Market Research
- Analyze local competition in any area
- Research market saturation for franchise development
- Benchmark ratings and review counts

### Business Intelligence
- Collect competitor data at scale
- Map business density across neighborhoods
- Track business categories and trends

---

## ⚙️ Technical Details

### How It Works

1. **XHR Interception** — `injected.js` hooks into Google Maps' internal API calls to capture search response data
2. **Data Parsing** — `contentScript.js` processes the raw response and extracts structured business information
3. **Email Extraction** — `bg.js` (service worker) crawls business websites to find emails and social links
4. **Deep Search** — Automatically visits contact pages, about pages, etc. for comprehensive data
5. **Export** — `dashboard.js` renders data in a Tabulator table and supports CSV/XLSX download via SheetJS

### System Requirements

- **Browser:** Chrome 90+, Edge, Brave, or any Chromium-based browser
- **OS:** Windows, macOS, or Linux
- **Internet:** Stable broadband connection

### Permissions Used

| Permission | Purpose |
|-----------|---------|
| `storage` | Store extracted leads locally |
| `scripting` | Inject content scripts into Google Maps |
| `tabs` | Open dashboard and Google Maps tabs |
| `host_permissions` | Access websites for email extraction |

---

## 🛡️ Privacy & Security

- ✅ **100% Local Processing** — No data is sent to any external server
- ✅ **No Account Required** — No login, no signup, no tracking
- ✅ **No Analytics** — Zero telemetry or usage tracking
- ✅ **Open Source** — Full transparency, audit the code yourself
- ✅ **Your Data, Your Control** — All extracted data stays on your machine

---

## 💡 Tips for Best Results

1. **Be Specific** — "Italian restaurants in downtown Chicago" works better than just "restaurants"
2. **Use "near" keyword** — "plumbers near Austin, TX" gives location-focused results
3. **Let It Finish** — Auto Extract stops automatically when all results are loaded
4. **Clear Between Searches** — Use the Clear button before starting a new extraction
5. **Check Emails** — Email extraction depends on businesses having publicly visible contact info

---

## 🗺️ Supported Google Maps Domains

Works on **200+ country-specific Google Maps domains** including:
- google.com, google.co.uk, google.co.in, google.de, google.fr, google.es, google.com.br, google.co.jp, google.com.au, and many more.

Full list is configured in `manifest.json` content_scripts matches.

---

## 📋 Comparison

| Feature | This Extension | Manual Copy | Google Maps API | Other Tools |
|---------|---------------|-------------|-----------------|-------------|
| **Free** | ✅ Unlimited | ✅ | ❌ Paid | ⚠️ Limited |
| **Speed** | ⚡ Fast | 🐌 Slow | ⚡ Fast | ⚠️ Varies |
| **Email Extraction** | ✅ Deep search | ❌ | ❌ | ⚠️ Some |
| **No Login** | ✅ | ✅ | ❌ | ❌ |
| **Bulk Export** | ✅ CSV + XLSX | ❌ | ✅ | ✅ |
| **No Coding** | ✅ | ✅ | ❌ | ⚠️ Some |

---

## ⚠️ Legal Disclaimer

**Google Maps** is a trademark of Google LLC. This extension is not affiliated with, endorsed by, or sponsored by Google LLC.

Users are responsible for:
- Complying with Google Maps Terms of Service
- Following applicable data protection laws (GDPR, CCPA, etc.)
- Using extracted data ethically and for legitimate business purposes
- Respecting rate limits and not overloading servers

This tool is provided "as is" for legitimate business purposes only.

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs via GitHub Issues
- Submit pull requests with improvements
- Suggest new features

---

## 📄 License

This project is open source. See the license file for details.

---

<div align="center">

### ⚡ Built & Maintained by [amanprojects](https://amanprojects.com)

**[amanprojects.com](https://amanprojects.com)** — Building tools that make a difference.

</div>

---

**Tags:** google maps scraper, google maps extractor, google maps data scraper, google maps email extractor, chrome extension, lead generation, business data extraction, local seo tool, free google maps scraper, amanprojects
