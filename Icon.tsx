// Icon.tsx: drop into src/components/ in your Lovable project.
// Loads icons from the maternity-icons GitHub repo via the jsDelivr CDN.
// 1. Replace YOUR-GITHUB-USERNAME below.
// 2. Use: <Icon name="sleep-routine" size={32} />

const BASE_URL =
  "https://cdn.jsdelivr.net/gh/YOUR-GITHUB-USERNAME/maternity-icons@v1.0.0/icons";

export type IconName =
  | "home"
  | "search"
  | "explore"
  | "saved"
  | "daily-card"
  | "guides"
  | "topics"
  | "my-baby"
  | "partner"
  | "community"
  | "messages"
  | "settings"
  | "feeding"
  | "sleep"
  | "development"
  | "sensory-play"
  | "play"
  | "solids"
  | "diapering"
  | "health"
  | "doctor-visits"
  | "vaccinations"
  | "growth-milestones"
  | "wellbeing"
  | "breastfeeding"
  | "formula"
  | "burping"
  | "pumping"
  | "recipes"
  | "food-ideas"
  | "weaning"
  | "hydration"
  | "mealtime"
  | "nutrition"
  | "allergies"
  | "meal-plan"
  | "sleep-routine"
  | "nursery"
  | "sleep-aids"
  | "soothing"
  | "white-noise"
  | "comfort-items"
  | "nighttime-routine"
  | "parenting-tips"
  | "expert-advice"
  | "articles"
  | "videos"
  | "podcasts"
  | "nappy-change"
  | "wipes"
  | "bath-time"
  | "skincare"
  | "illness-care"
  | "medicine"
  | "first-aid"
  | "health-log"
  | "doctor-appointments"
  | "immunisations"
  | "health-checklist"
  | "growth-tracker"
  | "routine"
  | "reminders"
  | "notifications"
  | "to-do"
  | "partner-sync"
  | "co-parenting"
  | "mental-health"
  | "self-care"
  | "me-time"
  | "fitness"
  | "support-groups"
  | "ask-a-question"
  | "find-support"
  | "nearby-services"
  | "product-picks"
  | "registry"
  | "offers"
  | "milestones"
  | "photos"
  | "journal"
  | "progress"
  | "achievements"
  | "special-days"
  | "gift-ideas";

type IconProps = {
  name: IconName;
  /** Rendered box size in px (icons are centred and scaled to fit). Sharp up to ~40px. */
  size?: number;
  /** Pass a label if the icon carries meaning on its own (no visible text next to it). */
  label?: string;
  className?: string;
};

export function Icon({ name, size = 24, label, className }: IconProps) {
  return (
    <img
      src={`${BASE_URL}/${name}.png`}
      width={size}
      height={size}
      alt={label ?? ""}
      aria-hidden={label ? undefined : true}
      loading="lazy"
      draggable={false}
      className={className}
      style={{ width: size, height: size, objectFit: "contain" }}
    />
  );
}

export default Icon;
