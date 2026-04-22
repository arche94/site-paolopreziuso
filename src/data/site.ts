import raw from "./site.json";

export type Site = typeof raw & { phone?: string };

export default raw as Site;
