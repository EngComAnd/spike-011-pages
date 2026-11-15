// Validação do site (modelo da esteira; fora das pastas de escrita dos agentes). Roda no `npm run build` e no deploy.
import { readFileSync, statSync } from "node:fs";

const arquivo = "public/index.html";
try {
  if (!statSync(arquivo).isFile()) throw new Error("não é arquivo");
  const html = readFileSync(arquivo, "utf8");
  if (html.trim().length < 50) throw new Error("vazio ou curto demais");
  if (!/<html[\s>]/i.test(html) || !/<title>[^<]+<\/title>/i.test(html)) throw new Error("falta <html> ou <title>");
  console.log("site válido: public/index.html");
} catch (e) {
  console.error(`site inválido (${arquivo}): ${e.message}`);
  process.exit(1);
}
