
export const deleteCarById = async (carId: string) =>{
  const token = localStorage.getItem('token');
  if (!token) {
    console.error('Token não encontrado');
    return;
  }

  try {
    const response = await fetch(`http://localhost:8080/carros/${carId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Erro na requisição');
    }

    console.log('Carro deletado com sucesso');
  } catch (error) {
    console.error('Erro ao deletar o carro:', error);
  }
}

