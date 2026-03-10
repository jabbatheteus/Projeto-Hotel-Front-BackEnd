import os
from flask import Flask, send_from_directory
import openpyxl
from datetime import (
    datetime,
)


BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

FRONTEND_DIR = os.path.join(BASE_DIR, "frontend")

STATIC_DIR = os.path.join(BASE_DIR, "static")

DB_DIR = os.path.join(os.path.dirname(__file__) ,"..", "db")
EXCEL_FILE = os.path.join(DB_DIR, "client.xlsx")

COLUMMMS = [
    "ID",
    "Nome",
    "CPF",
    "Email",
    "Telefone",
    "Endereço",
    "Observações",
    "Data Cadastro",
]



app = Flask(__name__, static_folder=STATIC_DIR, static_url_path="/" + STATIC_DIR)

@app.route("/")
def home():
    return send_from_directory(FRONTEND_DIR, "index.html")

@app.route("/consulta")
def consulta_page():
    return send_from_directory(FRONTEND_DIR, "consulta.html")

@app.route("/alterar")
def alterar_page():
    return send_from_directory(FRONTEND_DIR, "alterar.html")


if __name__=="__main__":
    print("BASE_DIR:", BASE_DIR)
    print("FRONTEND_DIR:", FRONTEND_DIR)
    print("STATIC_DIR", STATIC_DIR)
    app.run(debug=True)