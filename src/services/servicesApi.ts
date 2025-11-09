import emailjs from "@emailjs/browser";

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
