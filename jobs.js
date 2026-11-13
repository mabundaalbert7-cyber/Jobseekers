// ADD YOUR JOBS HERE. Copy one block, paste it at the top, and change the details.
// "link" = the company's career page or the direct link to the job posting.
// "date" = the day you added it (YYYY-MM-DD). Jobs added in the last 7 days show a "New" tag.
// Delete a block when the job closes.

const JOBS = [
  {
    title: "Careers at Shoprite, Checkers and Usave",
    company: "Shoprite Group",
    location: "South Africa",
    type: "Retail",
    date: "2026-11-12",
    link: "https://www.shopriteholdings.co.za/careers.html"
  },
  {
    title: "Careers at Pick n Pay",
    company: "Pick n Pay",
    location: "South Africa",
    type: "Retail",
    date: "2026-11-12",
    link: "https://picknpay.wd3.myworkdayjobs.com/PNP_Careers"
  },
  {
    title: "Careers at Woolworths",
    company: "Woolworths",
    location: "South Africa",
    type: "Retail",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=Woolworths+careers+South+Africa"
  },
  {
    title: "Careers at SPAR",
    company: "SPAR",
    location: "South Africa",
    type: "Retail",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=SPAR+careers+South+Africa"
  },
  {
    title: "Careers at Boxer Superstores",
    company: "Boxer Superstores",
    location: "South Africa",
    type: "Retail",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=Boxer+Superstores+careers+South+Africa"
  },
  {
    title: "Careers at PEP",
    company: "PEP",
    location: "South Africa",
    type: "Retail",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=PEP+careers+South+Africa"
  },
  {
    title: "Careers at Ackermans",
    company: "Ackermans",
    location: "South Africa",
    type: "Retail",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=Ackermans+careers+South+Africa"
  },
  {
    title: "Careers at Mr Price Group",
    company: "Mr Price Group",
    location: "South Africa",
    type: "Retail",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=Mr+Price+Group+careers+South+Africa"
  },
  {
    title: "Careers at TFG (Foschini, Markham, Totalsports)",
    company: "TFG (Foschini, Markham, Totalsports)",
    location: "South Africa",
    type: "Retail",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=TFG+%28Foschini%2C+Markham%2C+Totalsports%29+careers+South+Africa"
  },
  {
    title: "Careers at Clicks",
    company: "Clicks",
    location: "South Africa",
    type: "Retail",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=Clicks+careers+South+Africa"
  },
  {
    title: "Careers at Dis-Chem",
    company: "Dis-Chem",
    location: "South Africa",
    type: "Retail",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=Dis-Chem+careers+South+Africa"
  },
  {
    title: "Careers at Game and Makro",
    company: "Game and Makro",
    location: "South Africa",
    type: "Retail",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=Game+and+Makro+careers+South+Africa"
  },
  {
    title: "Careers at Cash Crusaders",
    company: "Cash Crusaders",
    location: "South Africa",
    type: "Retail",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=Cash+Crusaders+careers+South+Africa"
  },
  {
    title: "Careers at Capitec Bank",
    company: "Capitec Bank",
    location: "South Africa",
    type: "Banking & finance",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=Capitec+Bank+careers+South+Africa"
  },
  {
    title: "Careers at Nedbank",
    company: "Nedbank",
    location: "South Africa",
    type: "Banking & finance",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=Nedbank+careers+South+Africa"
  },
  {
    title: "Careers at Standard Bank",
    company: "Standard Bank",
    location: "South Africa",
    type: "Banking & finance",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=Standard+Bank+careers+South+Africa"
  },
  {
    title: "Careers at FNB / FirstRand",
    company: "FNB / FirstRand",
    location: "South Africa",
    type: "Banking & finance",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=FNB+%2F+FirstRand+careers+South+Africa"
  },
  {
    title: "Careers at Absa",
    company: "Absa",
    location: "South Africa",
    type: "Banking & finance",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=Absa+careers+South+Africa"
  },
  {
    title: "Careers at Discovery",
    company: "Discovery",
    location: "South Africa",
    type: "Banking & finance",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=Discovery+careers+South+Africa"
  },
  {
    title: "Careers at Sanlam",
    company: "Sanlam",
    location: "South Africa",
    type: "Banking & finance",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=Sanlam+careers+South+Africa"
  },
  {
    title: "Careers at Old Mutual",
    company: "Old Mutual",
    location: "South Africa",
    type: "Banking & finance",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=Old+Mutual+careers+South+Africa"
  },
  {
    title: "Careers at MTN South Africa",
    company: "MTN South Africa",
    location: "South Africa",
    type: "Telecoms & tech",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=MTN+South+Africa+careers+South+Africa"
  },
  {
    title: "Careers at Vodacom",
    company: "Vodacom",
    location: "South Africa",
    type: "Telecoms & tech",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=Vodacom+careers+South+Africa"
  },
  {
    title: "Careers at Telkom",
    company: "Telkom",
    location: "South Africa",
    type: "Telecoms & tech",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=Telkom+careers+South+Africa"
  },
  {
    title: "Careers at Takealot",
    company: "Takealot",
    location: "South Africa",
    type: "Telecoms & tech",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=Takealot+careers+South+Africa"
  },
  {
    title: "Careers at Uber",
    company: "Uber",
    location: "South Africa",
    type: "Telecoms & tech",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=Uber+careers+South+Africa"
  },
  {
    title: "Careers at Yoco",
    company: "Yoco",
    location: "South Africa",
    type: "Telecoms & tech",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=Yoco+careers+South+Africa"
  },
  {
    title: "Careers at Eskom",
    company: "Eskom",
    location: "South Africa",
    type: "Energy & industry",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=Eskom+careers+South+Africa"
  },
  {
    title: "Careers at Sasol",
    company: "Sasol",
    location: "South Africa",
    type: "Energy & industry",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=Sasol+careers+South+Africa"
  },
  {
    title: "Careers at Transnet",
    company: "Transnet",
    location: "South Africa",
    type: "Energy & industry",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=Transnet+careers+South+Africa"
  },
  {
    title: "Careers at Anglo American",
    company: "Anglo American",
    location: "South Africa",
    type: "Energy & industry",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=Anglo+American+careers+South+Africa"
  },
  {
    title: "Careers at Sibanye-Stillwater",
    company: "Sibanye-Stillwater",
    location: "South Africa",
    type: "Energy & industry",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=Sibanye-Stillwater+careers+South+Africa"
  },
  {
    title: "Careers at BMW South Africa",
    company: "BMW South Africa",
    location: "South Africa",
    type: "Energy & industry",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=BMW+South+Africa+careers+South+Africa"
  },
  {
    title: "Careers at Toyota South Africa",
    company: "Toyota South Africa",
    location: "South Africa",
    type: "Energy & industry",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=Toyota+South+Africa+careers+South+Africa"
  },
  {
    title: "Careers at Coca-Cola Beverages South Africa",
    company: "Coca-Cola Beverages South Africa",
    location: "South Africa",
    type: "Energy & industry",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=Coca-Cola+Beverages+South+Africa+careers+South+Africa"
  },
  {
    title: "Careers at Fidelity Services Group",
    company: "Fidelity Services Group",
    location: "South Africa",
    type: "Security, health & food",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=Fidelity+Services+Group+careers+South+Africa"
  },
  {
    title: "Careers at G4S",
    company: "G4S",
    location: "South Africa",
    type: "Security, health & food",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=G4S+careers+South+Africa"
  },
  {
    title: "Careers at Thorburn Security",
    company: "Thorburn Security",
    location: "South Africa",
    type: "Security, health & food",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=Thorburn+Security+careers+South+Africa"
  },
  {
    title: "Careers at Mediclinic",
    company: "Mediclinic",
    location: "South Africa",
    type: "Security, health & food",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=Mediclinic+careers+South+Africa"
  },
  {
    title: "Careers at Netcare",
    company: "Netcare",
    location: "South Africa",
    type: "Security, health & food",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=Netcare+careers+South+Africa"
  },
  {
    title: "Careers at Tsogo Sun and Southern Sun Hotels",
    company: "Tsogo Sun and Southern Sun Hotels",
    location: "South Africa",
    type: "Security, health & food",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=Tsogo+Sun+and+Southern+Sun+Hotels+careers+South+Africa"
  },
  {
    title: "Careers at KFC",
    company: "KFC",
    location: "South Africa",
    type: "Security, health & food",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=KFC+careers+South+Africa"
  },
  {
    title: "Careers at SAPS (South African Police Service)",
    company: "SAPS (South African Police Service)",
    location: "South Africa",
    type: "Government",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=SAPS+%28South+African+Police+Service%29+careers+South+Africa"
  },
  {
    title: "Careers at City of Tshwane",
    company: "City of Tshwane",
    location: "Pretoria",
    type: "Government",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=City+of+Tshwane+careers+South+Africa"
  },
  {
    title: "Careers at NYDA (National Youth Development Agency)",
    company: "NYDA (National Youth Development Agency)",
    location: "South Africa",
    type: "Government",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=NYDA+%28National+Youth+Development+Agency%29+careers+South+Africa"
  },
  {
    title: "Careers at ESSA (Dept of Employment and Labour)",
    company: "ESSA (Dept of Employment and Labour)",
    location: "South Africa",
    type: "Government",
    date: "2026-11-12",
    link: "https://www.google.com/search?q=ESSA+%28Dept+of+Employment+and+Labour%29+careers+South+Africa"
  },
  {
    title: "Cashier jobs in Pretoria",
    company: "Indeed South Africa",
    location: "Pretoria",
    type: "Job search",
    date: "2026-11-12",
    link: "https://za.indeed.com/jobs?q=cashier&l=Pretoria"
  },
  {
    title: "General worker jobs in Pretoria",
    company: "Indeed South Africa",
    location: "Pretoria",
    type: "Job search",
    date: "2026-11-12",
    link: "https://za.indeed.com/jobs?q=general+worker&l=Pretoria"
  },
  {
    title: "Driver jobs in Pretoria",
    company: "Indeed South Africa",
    location: "Pretoria",
    type: "Job search",
    date: "2026-11-12",
    link: "https://za.indeed.com/jobs?q=driver&l=Pretoria"
  },
  {
    title: "Security guard jobs in Pretoria",
    company: "Indeed South Africa",
    location: "Pretoria",
    type: "Job search",
    date: "2026-11-12",
    link: "https://za.indeed.com/jobs?q=security+guard&l=Pretoria"
  },
  {
    title: "Cleaner and domestic jobs in Pretoria",
    company: "Indeed South Africa",
    location: "Pretoria",
    type: "Job search",
    date: "2026-11-12",
    link: "https://za.indeed.com/jobs?q=cleaner&l=Pretoria"
  },
  {
    title: "Admin clerk jobs in Pretoria",
    company: "Indeed South Africa",
    location: "Pretoria",
    type: "Job search",
    date: "2026-11-12",
    link: "https://za.indeed.com/jobs?q=admin+clerk&l=Pretoria"
  },
  {
    title: "Call centre jobs in Pretoria",
    company: "Indeed South Africa",
    location: "Pretoria",
    type: "Job search",
    date: "2026-11-12",
    link: "https://za.indeed.com/jobs?q=call+centre&l=Pretoria"
  },
  {
    title: "Warehouse jobs in Pretoria",
    company: "Indeed South Africa",
    location: "Pretoria",
    type: "Job search",
    date: "2026-11-12",
    link: "https://za.indeed.com/jobs?q=warehouse&l=Pretoria"
  },
  {
    title: "Sales assistant jobs in Pretoria",
    company: "Indeed South Africa",
    location: "Pretoria",
    type: "Job search",
    date: "2026-11-12",
    link: "https://za.indeed.com/jobs?q=sales+assistant&l=Pretoria"
  },
  {
    title: "Waiter and kitchen jobs in Pretoria",
    company: "Indeed South Africa",
    location: "Pretoria",
    type: "Job search",
    date: "2026-11-12",
    link: "https://za.indeed.com/jobs?q=waiter&l=Pretoria"
  },
  {
    title: "Learnerships and internships jobs in Pretoria",
    company: "Indeed South Africa",
    location: "Pretoria",
    type: "Job search",
    date: "2026-11-12",
    link: "https://za.indeed.com/jobs?q=learnership&l=Pretoria"
  },
  {
    title: "Entry-level (no experience) jobs in Pretoria",
    company: "Indeed South Africa",
    location: "Pretoria",
    type: "Job search",
    date: "2026-11-12",
    link: "https://za.indeed.com/jobs?q=entry+level&l=Pretoria"
  }
];
