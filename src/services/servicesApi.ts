import emailjs from "@emailjs/browser";
import axios from "axios";

interface Data {
  remetente: string;
  assunto: string;
  messagem: string;
}

export async function enviarEmail(data: Data) {
  try {
    const response = await emailjs.send(
      "service_rcmi9oi",
      "template_e6ik63p",
      {
        remetente: data.remetente,
        assunto: data.assunto,
        messagem: data.messagem,
      },
      { publicKey: "ZkULdo3tzcNtOjiFp" }
    );

    return response;
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    throw error;
  }
}

export async function enviarCadastroGit(file: File | null) {
  if (!file) throw new Error("Nenhum arquivo selecionado");

  const owner = "CarlosVarao";
  const repo = "new_portfolio";
  const path = `src/data/${file.name}`;
  const token = "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"
  const urlApi = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

  const content = await file.text();
  const base64Content = btoa(unescape(encodeURIComponent(content)));

  try {
    let sha: string | undefined;

    const getResponse = await axios.get(urlApi, {
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    sha = getResponse.data.sha;

    const putResponse = await axios.put(
      urlApi,
      {
        message: sha
          ? `Atualizando ${file.name} via API`
          : `Adicionando ${file.name} via API`,
        content: base64Content,
        sha
      },
      {
        headers: {
          Authorization: `token ${token}`,
          Accept: "application/vnd.github.v3+json",
        },
      }
    );
    return putResponse.data;
  } catch (error: any) {
    console.error("❌ Erro ao enviar:", error.response?.data || error.message);
    throw error;
  }
}