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
  if (!file) throw new Error("Arquivo inválido ou inexistente.");

  const repo = "new_portfolio";
  const owner = "CarlosVarao";
  const path = "package.json";
  const token =
    "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";

  try {
    const response = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
      {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    );

    console.log(response);
    return response;
  } catch (error) {
    console.error("Erro ao enviar dados:", error);
    throw error;
  }
}
