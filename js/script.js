const API = "http://localhost:3000"

let token = ""

function formatJson(value) {
  return JSON.stringify(value, null, 2)
}

async function requestJson(url, options = {}) {
  try {
    const response = await fetch(url, options)
    const data = await response.json()
    return { ok: response.ok, data }
  } catch (error) {
    return { ok: false, data: { error: "Falha na requisição", details: error.message } }
  }
}

async function checkApi() {
  const { ok, data } = await requestJson(`${API}/status`)
  document.getElementById("status").textContent = formatJson(data)
}

async function login() {
  const email = document.getElementById("email").value.trim()
  const password = document.getElementById("password").value.trim()

  const { ok, data } = await requestJson(`${API}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })

  if (ok && data.token) {
    token = data.token
  }

  document.getElementById("loginResponse").textContent = formatJson(data)
}

async function listarProdutos() {
  const { ok, data } = await requestJson(`${API}/produtos`)
  document.getElementById("produtos").textContent = formatJson(data)
}

async function comprar() {
  const produtoId = Number(document.getElementById("produtoId").value)
  const quantity = Number(document.getElementById("quantity").value)

  const { ok, data } = await requestJson(`${API}/comprar`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ produtoId, quantidade: quantity })
  })

  document.getElementById("purchaseResponse").textContent = formatJson(data)
}
