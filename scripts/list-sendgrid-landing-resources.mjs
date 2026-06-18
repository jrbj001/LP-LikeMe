/**
 * Lista Dynamic Templates e listas Marketing do SendGrid (landing newsletter).
 *
 *   SENDGRID_API_KEY=SG.xxx node scripts/list-sendgrid-landing-resources.mjs
 */

const apiKey = process.env.SENDGRID_API_KEY?.trim();
if (!apiKey) {
  console.error("Defina SENDGRID_API_KEY no ambiente.");
  process.exit(1);
}

async function sendGridRequest(path) {
  const response = await fetch(`https://api.sendgrid.com${path}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
  });
  const text = await response.text();
  if (!response.ok) {
    throw new Error(`${path} (${response.status}): ${text}`);
  }
  return text ? JSON.parse(text) : {};
}

function matchesLandingTemplate(name) {
  const normalized = name.toLowerCase();
  return (
    normalized.includes("landing") ||
    normalized.includes("boas-vindas") ||
    normalized.includes("boas vindas") ||
    normalized.includes("01.1") ||
    normalized.includes("cadastro")
  );
}

async function main() {
  const templatesPayload = await sendGridRequest(
    "/v3/templates?generations=dynamic&page_size=100",
  );
  const templates = templatesPayload.result ?? [];

  console.log("=== Dynamic Templates (candidatos landing) ===\n");
  if (templates.length === 0) {
    console.log("Nenhum Dynamic Template encontrado.\n");
  }

  for (const template of templates) {
    const marker = matchesLandingTemplate(template.name) ? " ← candidato" : "";
    console.log(`- ${template.name}`);
    console.log(`  id: ${template.id}${marker}`);
    console.log(`  updated: ${template.updated_at}\n`);
  }

  const listsPayload = await sendGridRequest("/v3/marketing/lists?page_size=100");
  const lists = listsPayload.result ?? [];

  console.log("=== Marketing Lists ===\n");
  if (lists.length === 0) {
    console.log("Nenhuma lista Marketing encontrada.\n");
  }

  for (const list of lists) {
    console.log(`- ${list.name}`);
    console.log(`  id: ${list.id}`);
    console.log(`  contacts: ${list.contact_count ?? 0}\n`);
  }

  const fieldsPayload = await sendGridRequest("/v3/marketing/field_definitions");
  const customFields = fieldsPayload.custom_fields ?? [];

  if (customFields.length > 0) {
    console.log("=== Custom Fields (perfil) ===\n");
    for (const field of customFields) {
      console.log(`- ${field.name}`);
      console.log(`  id: ${field.id}`);
      console.log(`  type: ${field.field_type}\n`);
    }
  }
}

main().catch((error) => {
  console.error("Erro ao consultar SendGrid", error);
  process.exit(1);
});
