// Central place for values that are not finalized yet.
// Change a number here and it updates everywhere on the site.

export const BASE_REWARD_PERCENT = 10;
export const HOLDER_REWARD_PERCENT = 25;

export const TOKEN_SYMBOL = "$WATT";
export const CONTRACT_ADDRESS: string | null = null; // null → renders "COMING SOON"

export const TWITTER_URL = "https://x.com/wattonchain";
export const APP_URL = "#";

export const DEMO_BILL_DEFAULT = 184.2;
export const DEMO_BILL_MIN = 20;
export const DEMO_BILL_MAX = 600;

export function standardReward(billAmount: number): number {
  return billAmount * (BASE_REWARD_PERCENT / 100);
}

export function holderReward(billAmount: number): number {
  return billAmount * (HOLDER_REWARD_PERCENT / 100);
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}
