import emailjs from '@emailjs/browser';


interface data {
  remetente: string;
  assunto: string;
  mensagem: string;
}

export async function enviarEmail(data: data) {
  try {


    const response = await 
    return response;

  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    throw error;
  }
}
