// lib/recaptcha.ts
export async function validateRecaptcha(token: string): Promise<boolean> {
    if (!process.env.RECAPTCHA_SECRET_KEY) return true; // Bypass in development
  
    try {
      const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
        { method: 'POST' }
      );
      const data = await response.json();
      return data.success && data.score >= 0.5;
    } catch (error) {
      console.error('reCAPTCHA validation error:', error);
      return false;
    }
  }