-- Make sure pgcrypto is enabled for gen_random_uuid()
create extension if not exists "pgcrypto";

INSERT INTO open_houses (
  id, title, address, price, bedrooms, bathrooms, square_feet, image_url, description, open_house_date, status, created_at
)
VALUES
-- 2896 S Quartz Dr
(gen_random_uuid(),
 '2896 S Quartz Dr',
 '2896 S Quartz Dr, Cornelius, OR 97113',
 545600,
 3,
 2.5,
 1609,
 'https://via.placeholder.com/1200x800.png?text=2896+S+Quartz+Dr',
 'MLS estimate ~ $545,600; 3 beds, 2.5 baths, 1,609 sqft', now() + interval '3 days',
 'active',
 now()),

-- 3380 NE Sunburst Ave
(gen_random_uuid(),
 '3380 NE Sunburst Ave',
 '3380 NE Sunburst Ave, Hillsboro, OR 97124',
 605000,
 3,
 2,
 2235,
 'https://via.placeholder.com/1200x800.png?text=3380+NE+Sunburst+Ave',
 'Sold ~ $605,000 in Dec 2024; 3 beds, 2 baths, 2,235 sqft',
 now() - interval '10 days',
 'sold',
 now()),

-- 24149 SW Washouga Ave
(gen_random_uuid(),
 '24149 SW Washouga Ave',
 '24149 SW Washouga Ave, Portland, OR 97239',
 679900,
 3,
 3,
 2027,
 'https://via.placeholder.com/1200x800.png?text=24149+SW+Washouga+Ave',
 'Sold ~ $679,900 in Nov 2024; 3 beds, 3 baths, 2,027 sqft',
 now() - interval '15 days',
 'sold',
 now()),

-- 14123 SW Todd St
(gen_random_uuid(),
 '14123 SW Todd St',
 '14123 SW Todd St, Beaverton, OR 97006',
 550000,
 3,
 2,
 1878,
 'https://via.placeholder.com/1200x800.png?text=14123+SW+Todd+St',
 'Sold ~ $550,000 in Nov 2024; 3 beds, 2 baths, 1,878 sqft',
 now() - interval '20 days',
 'sold',
 now()),

-- Placeholder rows
(gen_random_uuid(), '24249 SW Washouga Ave', '24249 SW Washouga Ave, Portland, OR 97239', 0, 0, 0, 0, 'https://via.placeholder.com/1200x800.png?text=24249+SW+Washouga+Ave', 'Placeholder — update MLS data later', now() - interval '30 days', 'sold', now()),
(gen_random_uuid(), '14575 SW Walker Rd #C‑15', '14575 SW Walker Rd #C‑15, Beaverton, OR 97006', 0, 0, 0, 0, 'https://via.placeholder.com/1200x800.png?text=14575+SW+Walker+Rd', 'Placeholder — update MLS data later', now() - interval '30 days', 'sold', now()),
(gen_random_uuid(), '11995 NE 50th Way', '11995 NE 50th Way, Hillsboro, OR 97124', 0, 0, 0, 0, 'https://via.placeholder.com/1200x800.png?text=11995+NE+50th+Way', 'Placeholder — update MLS data later', now() - interval '30 days', 'sold', now()),
(gen_random_uuid(), '111 SW Harrison St APT 7A', '111 SW Harrison St APT 7A, Portland, OR 97201', 0, 0, 0, 0, 'https://via.placeholder.com/1200x800.png?text=111+SW+Harrison+St+APT+7A', 'Placeholder — update MLS data later', now() - interval '30 days', 'sold', now()),
(gen_random_uuid(), '543 N Tomahawk Island Drive', '543 N Tomahawk Island Drive, Portland, OR 97217', 0, 0, 0, 0, 'https://via.placeholder.com/1200x800.png?text=543+N+Tomahawk+Island', 'Placeholder — update MLS data later', now() - interval '30 days', 'sold', now()),
(gen_random_uuid(), '17410 NW Woodrush Way', '17410 NW Woodrush Way, Portland, OR 97229', 0, 0, 0, 0, 'https://via.placeholder.com/1200x800.png?text=17410+NW+Woodrush+Way', 'Placeholder — update MLS data later', now() - interval '30 days', 'sold', now()),
(gen_random_uuid(), '54886 Fullerton Rd', '54886 Fullerton Rd, Scappoose, OR 97056', 0, 0, 0, 0, 'https://via.placeholder.com/1200x800.png?text=54886+Fullerton+Rd', 'Placeholder — update MLS data later', now() - interval '30 days', 'sold', now()),
(gen_random_uuid(), '18180 SW Madeline St', '18180 SW Madeline St, Beaverton, OR 97078', 0, 0, 0, 0, 'https://via.placeholder.com/1200x800.png?text=18180+SW+Madeline+St', 'Placeholder — update MLS data later', now() - interval '30 days', 'sold', now()),
(gen_random_uuid(), '35420 Portland View Dr', '35420 Portland View Dr, St. Helens, OR 97051', 0, 0, 0, 0, 'https://via.placeholder.com/1200x800.png?text=35420+Portland+View+Dr', 'Placeholder — update MLS data later', now() - interval '30 days', 'sold', now()),
(gen_random_uuid(), '35470 Valley View Dr', '35470 Valley View Dr, St. Helens, OR 97051', 0, 0, 0, 0, 'https://via.placeholder.com/1200x800.png?text=35470+Valley+View+Dr', 'Placeholder — update MLS data later', now() - interval '30 days', 'sold', now()),
(gen_random_uuid(), '3232 Watercrest Rd', '3232 Watercrest Rd, Forest Grove, OR 97116', 0, 0, 0, 0, 'https://via.placeholder.com/1200x800.png?text=3232+Watercrest+Rd', 'Placeholder — update MLS data later', now() - interval '30 days', 'sold', now()),
(gen_random_uuid(), '7671 NW Buckthorn Way', '7671 NW Buckthorn Way, Portland, OR 97229', 0, 0, 0, 0, 'https://via.placeholder.com/1200x800.png?text=7671+NW+Buckthorn+Way', 'Placeholder — update MLS data later', now() - interval '30 days', 'sold', now());
