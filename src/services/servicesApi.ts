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

interface DadosInputs {
  fileImg: File | null;
  fileJson: File | null;
}

export async function enviarCadastroGit({ fileImg, fileJson }: DadosInputs) {
  const owner = "CarlosVarao";
  const repo = "new_portfolio";
  const token = import.meta.env.VITE_TOKEN_GIT;

  if (!fileJson && !fileImg) {
    console.error("Nenhum arquivo foi enviado.");
    return;
  }

  // ====== UPLOAD DO JSON ======
  if (fileJson) {
    const pathJson = `src/data/${fileJson.name}`;
    const urlApiJson = `https://api.github.com/repos/${owner}/${repo}/contents/${pathJson}`;

    const content = await fileJson.text();
    const base64Content = btoa(unescape(encodeURIComponent(content)));

    await enviarOuAtualizarArquivo(
      urlApiJson,
      base64Content,
      fileJson.name,
      token
    );
  }

  // ====== UPLOAD DA IMAGEM ======
  if (fileImg) {
    const pathImg = `public/${fileImg.name}`;
    const urlApiImg = `https://api.github.com/repos/${owner}/${repo}/contents/${pathImg}`;

    const buffer = await fileImg.arrayBuffer();
    const base64Img = btoa(
      new Uint8Array(buffer).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ""
      )
    );

    await enviarOuAtualizarArquivo(urlApiImg, base64Img, fileImg.name, token);
  }

  console.log("✅ Upload concluído com sucesso!");
}

// ====== FUNÇÃO AUXILIAR ======
async function enviarOuAtualizarArquivo(
  url: string,
  base64Content: string,
  fileName: string,
  token: string
) {
  let sha: string | undefined;

  try {
    // Verifica se o arquivo já existe
    const getResponse = await axios.get(url, {
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
    });
    sha = getResponse.data.sha;
    console.log(`🔁 ${fileName} já existe. Atualizando...`);
  } catch {
    console.log(`🆕 ${fileName} não existe. Criando novo...`);
  }

  const putResponse = await axios.put(
    url,
    {
      message: sha
        ? `Atualizando ${fileName} via API`
        : `Adicionando ${fileName} via API`,
      content: base64Content,
      sha,
    },
    {
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
    }
  );

  console.log(`✅ ${fileName} enviado com sucesso.`);
  return putResponse.data;
}
