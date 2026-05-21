export type MailchimpConfig = {
  apiKey: string;
  serverPrefix: string;
  audienceId: string;
};

export type NewsletterApiPayload = {
  firstName: string;
  lastName: string;
  email: string;
  profile: string;
  message: string;
};

export type MailchimpMemberBody = {
  email_address: string;
  status: "subscribed";
  merge_fields: {
    FNAME: string;
    LNAME: string;
  };
  tags: string[];
};
