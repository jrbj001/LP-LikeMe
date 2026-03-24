import type { FormEvent } from "react";
import { useState } from "react";
import { NEWSLETTER_PROFILE_OPTIONS } from "../constants/newsletter";
import { SECTION_ANCHORS } from "../constants/sectionAnchors";
import { styles } from "../screens/Home/styles";
import { submitNewsletterLead } from "../services/submitNewsletterLead";
import { isValidEmail } from "../utils/isValidEmail";

export function NewsletterSection(): JSX.Element {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitState, setSubmitState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
    setFeedback(null);
    setSubmitState("idle");

    const trimmedEmail = email.trim();
    if (!isValidEmail(trimmedEmail)) {
      setFeedback("Informe um e-mail válido.");
      return;
    }
    if (!selectedProfile) {
      setFeedback("Selecione seu perfil.");
      return;
    }

    setSubmitState("loading");
    try {
      await submitNewsletterLead({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: trimmedEmail,
        profile: selectedProfile,
        message: message.trim(),
      });
      setSubmitState("success");
      setFeedback("Cadastro enviado. Obrigado!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      setSelectedProfile(null);
    } catch (error) {
      console.error("Falha ao enviar cadastro da newsletter", {
        operation: "submitNewsletterLead",
        email: trimmedEmail,
        error,
      });
      setSubmitState("error");
      setFeedback(
        "Não foi possível enviar agora. Tente novamente em instantes.",
      );
    }
  };

  return (
    <section className={styles.newsletter} id={SECTION_ANCHORS.JUNTE_SE}>
      <h3>
        Receba novidades, acesso antecipado
        <br />e conteúdos exclusivos sobre bem-estar.
      </h3>
      <form
        onSubmit={(event) => {
          void handleSubmit(event);
        }}
        noValidate
        aria-busy={submitState === "loading"}
      >
        <input
          name="firstName"
          autoComplete="given-name"
          placeholder="PRIMEIRO NOME"
          value={firstName}
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
        <input
          name="lastName"
          autoComplete="family-name"
          placeholder="SOBRENOME"
          value={lastName}
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
        <div className={styles.newsletterSelect}>
          <button
            className={`${styles.newsletterSelectButton} ${
              isProfileMenuOpen ? styles.newsletterSelectButtonOpen : ""
            } ${
              selectedProfile ? styles.newsletterSelectButtonHasValue : ""
            }`}
            type="button"
            onClick={() => {
              setIsProfileMenuOpen((previous) => !previous);
            }}
            aria-haspopup="listbox"
            aria-expanded={isProfileMenuOpen}
          >
            <span className={styles.newsletterSelectLabel}>
              {selectedProfile ?? "SELECIONE SEU PERFIL"}
            </span>
            <span className={styles.newsletterSelectIcon} aria-hidden>
              <svg
                viewBox="0 0 12 8"
                width="12"
                height="8"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.5L6 6.5L11 1.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>

          {isProfileMenuOpen ? (
            <div className={styles.newsletterSelectOptions} role="listbox">
              {NEWSLETTER_PROFILE_OPTIONS.map((option) => (
                <button
                  className={styles.newsletterSelectOption}
                  key={option}
                  type="button"
                  onClick={() => {
                    setSelectedProfile(option);
                    setIsProfileMenuOpen(false);
                  }}
                  role="option"
                  aria-selected={selectedProfile === option}
                >
                  {option}
                </button>
              ))}
            </div>
          ) : null}
        </div>
        <input
          name="email"
          type="email"
          autoComplete="email"
          placeholder="E-MAIL *"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          required
        />
        <textarea
          name="message"
          rows={3}
          placeholder="SUA MENSAGEM"
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
        <button
          className={styles.newsletterSubmitButton}
          type="submit"
          disabled={submitState === "loading"}
        >
          {submitState === "loading" ? "Enviando…" : "Cadastre-se"}
        </button>
        {feedback ? (
          <p
            className={`${styles.newsletterFormFeedback} ${
              submitState === "success"
                ? styles.newsletterFormFeedbackSuccess
                : styles.newsletterFormFeedbackError
            }`}
            role="status"
            aria-live="polite"
          >
            {feedback}
          </p>
        ) : null}
      </form>
    </section>
  );
}
