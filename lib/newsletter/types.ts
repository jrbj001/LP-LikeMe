export type NewsletterApiPayload = {
  firstName: string;
  lastName: string;
  email: string;
  profile: string;
  message: string;
};

export type NewsletterHandlerResult = {
  status: number;
  body: {
    ok: boolean;
    message?: string;
    error?: string;
    welcomeEmailSent?: boolean;
  };
};
