import { TierLevel, UserAccessState } from '../types';

export interface AccessCodeConfig {
  code: string;
  tier: TierLevel;
  label: string;
}

// Default access codes provided for the platform
// The creator can also customize these in the Creator Settings or via environment
export const DEFAULT_ACCESS_CODES: Record<TierLevel, string[]> = {
  1: ['SABAIDEE-P1', 'PROFIL2025', 'LAO-P1'],
  2: ['SABAIDEE-V2', 'VIDEO2025', 'LAO-V2'],
  3: ['SABAIDEE-VIP3', 'FRANCE2025', 'LAO-VIP3']
};

const STORAGE_KEY_ACCESS = 'sabaidee_love_access_state';
const STORAGE_KEY_CUSTOM_CODES = 'sabaidee_love_custom_codes';
const STORAGE_KEY_STRIPE_LINKS = 'sabaidee_love_stripe_links';
const STORAGE_KEY_COMPLETED_CHAPTERS = 'sabaidee_love_completed_chapters';
const STORAGE_KEY_COMPLETED_CHECKLISTS = 'sabaidee_love_completed_checklists';

export function getStoredAccessState(): UserAccessState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_ACCESS);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed.currentTier === 'number') {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Failed to load access state', e);
  }
  return {
    currentTier: 0,
    enteredCode: null,
    unlockedAt: null
  };
}

export const getUserAccessState = getStoredAccessState;

export function saveAccessState(state: UserAccessState): void {
  try {
    localStorage.setItem(STORAGE_KEY_ACCESS, JSON.stringify(state));
  } catch (e) {
    console.error('Failed to save access state', e);
  }
}

export const saveUserAccessState = saveAccessState;

export function getCompletedChapters(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_COMPLETED_CHAPTERS);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error('Failed to load completed chapters', e);
  }
  return [];
}

export function saveCompletedChapters(chapters: string[]): void {
  try {
    localStorage.setItem(STORAGE_KEY_COMPLETED_CHAPTERS, JSON.stringify(chapters));
  } catch (e) {
    console.error('Failed to save completed chapters', e);
  }
}

export function getCompletedChecklists(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_COMPLETED_CHECKLISTS);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error('Failed to load completed checklists', e);
  }
  return [];
}

export function saveCompletedChecklists(items: string[]): void {
  try {
    localStorage.setItem(STORAGE_KEY_COMPLETED_CHECKLISTS, JSON.stringify(items));
  } catch (e) {
    console.error('Failed to save completed checklists', e);
  }
}

export function clearAccessState(): void {
  try {
    localStorage.removeItem(STORAGE_KEY_ACCESS);
  } catch (e) {
    console.error('Failed to clear access state', e);
  }
}

export function getCustomCodes(): Record<TierLevel, string[]> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CUSTOM_CODES);
    if (raw) {
      const parsed = JSON.parse(raw);
      // If the cached codes contain old Thai-related defaults, clear them to use Lao defaults
      const hasOld = Object.values(parsed).some((list: any) => 
        Array.isArray(list) && list.some(code => typeof code === 'string' && code.toUpperCase().includes('THAI'))
      );
      if (!hasOld) {
        return parsed;
      }
      localStorage.removeItem(STORAGE_KEY_CUSTOM_CODES);
    }
  } catch (e) {
    console.error('Failed to load custom codes', e);
  }
  return DEFAULT_ACCESS_CODES;
}

export function saveCustomCodes(codes: Record<TierLevel, string[]>): void {
  try {
    localStorage.setItem(STORAGE_KEY_CUSTOM_CODES, JSON.stringify(codes));
  } catch (e) {
    console.error('Failed to save custom codes', e);
  }
}

export function verifyAccessCode(inputCode: string): { valid: boolean; tier: TierLevel | 0; message?: string } {
  const cleanCode = inputCode.trim().toUpperCase();
  if (!cleanCode) {
    return { valid: false, tier: 0, message: 'ກະລຸນາປ້ອນລະຫັດຜ່ານ / Veuillez entrer un code' };
  }

  const customCodes = getCustomCodes();

  // Check tier 3 first (highest access)
  if (
    customCodes[3]?.some(c => c.toUpperCase() === cleanCode) ||
    DEFAULT_ACCESS_CODES[3].some(c => c.toUpperCase() === cleanCode)
  ) {
    return { valid: true, tier: 3 };
  }

  // Check tier 2
  if (
    customCodes[2]?.some(c => c.toUpperCase() === cleanCode) ||
    DEFAULT_ACCESS_CODES[2].some(c => c.toUpperCase() === cleanCode)
  ) {
    return { valid: true, tier: 2 };
  }

  // Check tier 1
  if (
    customCodes[1]?.some(c => c.toUpperCase() === cleanCode) ||
    DEFAULT_ACCESS_CODES[1].some(c => c.toUpperCase() === cleanCode)
  ) {
    return { valid: true, tier: 1 };
  }

  return { valid: false, tier: 0, message: 'ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ, ກະລຸນາກວດສອບລະຫັດຂອງທ່ານ / Code invalide' };
}

export function getStripePaymentLinks(): Record<TierLevel, string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_STRIPE_LINKS);
    if (raw) {
      const parsed = JSON.parse(raw);
      // Extremely robust case-insensitive check to detect any old Stripe link IDs
      const hasOld = Object.values(parsed).some(val => {
        if (typeof val !== 'string') return false;
        const lower = val.toLowerCase();
        return (
          lower.includes('7sy00') ||
          lower.includes('cni8w') ||
          lower.includes('bjebj13') ||
          lower.includes('sawasdee')
        );
      });
      if (!hasOld) {
        return parsed;
      }
      localStorage.removeItem(STORAGE_KEY_STRIPE_LINKS);
    }
  } catch (e) {
    console.error('Failed to load Stripe links', e);
  }
  return {
    1: 'https://buy.stripe.com/bJebJ152Lga7gOM7Wu1B604',
    2: 'https://buy.stripe.com/8x2eVd1QzaPN1TS2Ca1B605',
    3: 'https://buy.stripe.com/14A3cv8eXbTRbusdgO1B606'
  };
}

export function saveStripePaymentLinks(links: Record<TierLevel, string>): void {
  try {
    localStorage.setItem(STORAGE_KEY_STRIPE_LINKS, JSON.stringify(links));
  } catch (e) {
    console.error('Failed to save Stripe links', e);
  }
}
