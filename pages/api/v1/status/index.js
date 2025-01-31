function status(request, response) {
  response.status(200).json({ teste: "Os Alunos do Curso.dev são demais" });
}

export default status;
