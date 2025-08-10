export type NavItem = {
  label: string;
  to: string;
  hasDropdown?: boolean;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services", hasDropdown: true },
  { label: "Product", to: "/product", hasDropdown: true },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];


