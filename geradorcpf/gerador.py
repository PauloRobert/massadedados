import random
import datetime
import pathlib

def gerar_cpfs(n):
    """
    Gera n CPFs aleatórios e válidos.

    Returns:
        Uma lista com os CPFs gerados.
    """
    cpfs = []
    for i in range(n):
        cpf = ""
        for j in range(9):
            cpf += str(random.randint(0, 9))

        # Calcula os dígitos verificadores
        soma = 0
        for j in range(9):
            soma += int(cpf[j]) * (10 - j)
        digito1 = 11 - (soma % 11)
        if digito1 > 9:
            digito1 = 0
        cpf += str(digito1)

        soma = 0
        for j in range(10):
            soma += int(cpf[j]) * (11 - j)
        digito2 = 11 - (soma % 11)
        if digito2 > 9:
            digito2 = 0
        cpf += str(digito2)

        # Adiciona o CPF à lista se ele for válido
        if cpf[-2:] == f"{digito1}{digito2}":
            cpfs.append(cpf)

        # Exibe o progresso da geração dos CPFs
        print(f"Gerando CPF {i+1}/{n}", end="\r")

    return cpfs


# Define a quantidade de CPFs a serem gerados
n_cpfs = 500000

# Define o nome da pasta e do arquivo onde os CPFs serão salvos
foldername = "arquivos"
now = datetime.datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
filename = f"{foldername}/cpfs_{now}.txt"

# Cria a pasta "arquivos" se ela não existir
pathlib.Path(foldername).mkdir(exist_ok=True)

# Gera os CPFs aleatórios e válidos
start_time = datetime.datetime.now()
cpfs = gerar_cpfs(n_cpfs)
end_time = datetime.datetime.now()

# Calcula o tempo total de geração dos CPFs
duration = end_time - start_time

# Salva os CPFs em um arquivo de texto
with open(filename, "w") as file:
    file.write("cpf\n")
    for cpf in cpfs:
        file.write(f"{cpf}\n")

# Exibe as informações de geração dos CPFs
print(f"{n_cpfs} CPFs foram gerados e salvos no arquivo {filename}")
print(f"Início da geração: {start_time.strftime('%H:%M:%S')}")
print(f"Término da geração: {end_time.strftime('%H:%M:%S')}")
print(f"Tempo total de geração: {duration.total_seconds():.2f} segundos")
