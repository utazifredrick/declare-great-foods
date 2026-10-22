export const storeInfo = {
  name: "Declare Great Foods",
  subtitle: "African & Caribbean Foods and Accessories",
  address: "374 Moston Lane, Moston, Manchester, M40 9JS, United Kingdom",
  openingHours: "Monday to Saturday, 9:00 AM to 9:00 PM",
  phoneNumbers: [
    { label: "07402 754401", href: "tel:+447402754401" },
    { label: "07404 531998", href: "tel:+447404531998" },
    { label: "07737 217861", href: "tel:+447737217861" },
  ],
  // Verify this WhatsApp number with the owner before launch.
  whatsappNumber: "447402754401",
  heroImage:
    "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=2200&q=85",
  aboutImage:
    "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1400&q=85",
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=Declare+Great+Foods%2C+374+Moston+Lane%2C+Moston%2C+Manchester%2C+M40+9JS%2C+United+Kingdom",
};

export const whatsappUrl = `https://wa.me/${storeInfo.whatsappNumber}`;

export const weeklyHours = [
  { day: "Monday", hours: "9:00 AM–9:00 PM" },
  { day: "Tuesday", hours: "9:00 AM–9:00 PM" },
  { day: "Wednesday", hours: "9:00 AM–9:00 PM" },
  { day: "Thursday", hours: "9:00 AM–9:00 PM" },
  { day: "Friday", hours: "9:00 AM–9:00 PM" },
  { day: "Saturday", hours: "9:00 AM–9:00 PM" },
  { day: "Sunday", hours: "Please contact the store to confirm." },
];
