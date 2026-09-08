/* ==========================================
   CONFIGURAÇÕES GERAIS (EDITE AQUI)
   ========================================== */
const CONFIG = {
    taxaEntrega: 10.00,
    numerosWhatsApp: ["5593991743705", "5593991493751"], // O primeiro será o principal. Apenas números.
    estoqueBaixo: 3,
    imgPlaceholder: "https://images.unsplash.com/photo-1495147466023-bc5c9ddcb159?auto=format&fit=crop&w=150&q=80" // Imagem ilustrativa genérica (Usada se o produto não tiver foto)
};

/* 
  ESTRUTURA DE PRODUTOS
  - Se for preço único: use `preco`
  - Se tiver variações ("a partir de", tamanhos): não use `preco`, use `opcoes: [{nome: "Tamanho", preco: 10}]`
  - Adicione a chave `imagem` apontando para a sua pasta. Ex: imagem: "imagens/foto1.jpg"
*/
const PRODUTOS = [
    // PADARIA / BOLOS
    { id: "bolo-macaxeira", nome: "Bolo de macaxeira", categoria: "Padaria / Bolos", preco: 5.00, estoque: 10, ativo: true, imagem: "img/bolo-macaxeira.jpg" },
    { id: "bolo-milho", nome: "Bolo de milho", categoria: "Padaria / Bolos", preco: 5.00, estoque: 8, ativo: true, imagem: "img/bolo-milho.webp" },
    { id: "bolo-pulba", nome: "Bolo de pulba", categoria: "Padaria / Bolos", preco: 5.00, estoque: 5, ativo: true, imagem: "img/bolo-pulba.jpg" },
    { id: "bolo-tapioca", nome: "Bolo de tapioca", categoria: "Padaria / Bolos", preco: 5.00, estoque: 10, ativo: true, imagem: "img/bolo-tapioca.jpg" },
    { id: "pao-caseiro", nome: "Pão caseiro", categoria: "Padaria / Bolos", preco: 10.00, estoque: 4, ativo: true, imagem: "img/pao-caseiro.jpg" },
    { id: "pao-queijo", nome: "Pão de queijo", categoria: "Padaria / Bolos", preco: 2.50, estoque: 20, ativo: true, imagem: "img/pao-de-queijo.jpg" },

    // LANCHES
    { id: "pao-carne", nome: "Pão com carne", categoria: "Lanches", preco: 10.00, estoque: 15, ativo: true, imagem: "img/pao-carne.jpg" },
    { id: "pao-frango", nome: "Pão com frango", categoria: "Lanches", preco: 10.00, estoque: 10, ativo: true, imagem: "img/pao-frango.jpg" },
    { id: "pao-ovo", nome: "Pão com ovo", categoria: "Lanches", preco: 7.00, estoque: 12, ativo: true, imagem: "img/pao-ovo.jpg" },
    { id: "pao-presunto-queijo", nome: "Pão com presunto e queijo", categoria: "Lanches", preco: 7.00, estoque: 15, ativo: true, imagem: "img/pao-presunto.jpg" },
    { id: "tapioca-frango", nome: "Tapioquinha com frango", categoria: "Lanches", preco: 8.00, estoque: 10, ativo: true, imagem: "img/tapioquinha-frango.jpg" },
    { id: "tapioca-ovo", nome: "Tapioquinha com ovo", categoria: "Lanches", preco: 7.00, estoque: 10, ativo: true, imagem: "img/tapioquinha-ovo.jpg" },
    { id: "tapioca-queijo", nome: "Tapioquinha com queijo", categoria: "Lanches", preco: 5.00, estoque: 15, ativo: true, imagem: "img/tapioquinha-queijo.jpg" },

    // BEBIDAS QUENTES
    { id: "cafe-levar", nome: "Café para levar", categoria: "Bebidas Quentes", preco: 6.00, estoque: 20, ativo: true, imagem: "img/copo-cafe-viagem.webp" },
    { id: "cafe-leite", nome: "Café com leite", categoria: "Bebidas Quentes", preco: 5.00, estoque: 20, ativo: true, imagem: "img/cafe-com-leite.jpg" },
    {
        id: "cafe-puro", nome: "Café puro", categoria: "Bebidas Quentes",
        opcoes: [{ nome: "", preco: 3.00 },],
        estoque: 20, ativo: true, imagem: "img/cafe.webp"
    },
    {
        id: "leite-puro", nome: "Leite puro", categoria: "Bebidas Quentes",
        opcoes: [{ nome: "", preco: 5.00 },],
        estoque: 15, ativo: true, imagem: "img/leite.webp"
    },

    // LEITES E DERIVADOS
    { id: "leite-2l", nome: "Garrafa de leite — 2 litros", categoria: "Leites e Derivados", preco: 18.00, estoque: 5, ativo: true, imagem: "img/garrafa-leite.webp" },
    { id: "leite-1l", nome: "Leite de vaca — 1 litro", categoria: "Leites e Derivados", preco: 9.00, estoque: 10, ativo: true, imagem: "img/leite-garrafa1.jpg" },
    { id: "queijo-1kg", nome: "Queijo — 1 kg", categoria: "Leites e Derivados", preco: 50.00, estoque: 3, ativo: true, imagem: "img/queijo1k.jpg" },
    { id: "queijo-fatias", nome: "Queijo — fatias", categoria: "Leites e Derivados", preco: 10.00, estoque: 10, ativo: true, imagem: "img/queijo-fatia.webp" },

    // BEBIDAS GELADAS
    { id: "agua-mineral", nome: "Água mineral — 500 ml", categoria: "Bebidas Geladas", preco: 5.00, estoque: 30, ativo: true, imagem: "img/agua-mineral.jpg" },
    { id: "copo-nescau", nome: "Copo de Nescau", categoria: "Bebidas Quentes", preco: 7.00, estoque: 15, ativo: true, imagem: "img/copo-nescau.jpg" },
    {
        id: "copo-suco", nome: "Copo de suco", categoria: "Bebidas Geladas",
        opcoes: [{ nome: "", preco: 5.00 }, { nome: "", preco: 7.00 }],
        estoque: 20, ativo: true, imagem: "img/copo-suco.avif"
    },
    { id: "vitamina-abacate", nome: "Vitamina de Abacate", categoria: "Bebidas Geladas", preco: 10.00, estoque: 30, ativo: true, imagem: "img/vitamina-abacate.jpg" },
    { id: "garrafa-suco", nome: "Garrafinha de suco", categoria: "Bebidas Geladas", preco: 7.00, estoque: 12, ativo: true, imagem: "img/garrafinha-suco.webp" },
];

/* ==========================================
   ESTADO DA APLICAÇÃO E UTILITÁRIOS
   ========================================== */
let carrinho = JSON.parse(localStorage.getItem('rds_cart')) || [];
let coordsEntrega = "";

// Formatar moeda
const formatMoney = (value) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

// Obter categorias únicas
const categorias = [...new Set(PRODUTOS.map(p => p.categoria))];

/* ==========================================
   INICIALIZAÇÃO DA UI
   ========================================== */
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('lbl-taxa').textContent = CONFIG.taxaEntrega.toFixed(2).replace('.', ',');
    renderCategories();
    renderProducts();
    updateCartUI();
});

// Renderizar Menu de Categorias
function renderCategories() {
    const nav = document.getElementById('categories-nav');
    nav.innerHTML = `<button class="cat-btn active" onclick="filterCategory('Todas', this)">Todas</button>`;
    categorias.forEach(cat => {
        nav.innerHTML += `<button class="cat-btn" onclick="filterCategory('${cat}', this)">${cat}</button>`;
    });
}

// Filtrar Categorias
function filterCategory(cat, btnElement) {
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    renderProducts(cat);
}

// Analisar Status do Estoque
function getStatusProduto(produto) {
    if (!produto.ativo) return { text: "Indisponível no momento", class: "status-indisponivel", disabled: true };
    if (produto.estoque === 0) return { text: "Esgotado", class: "status-esgotado", disabled: true };
    if (produto.estoque === 1) return { text: "Última unidade", class: "status-alerta", disabled: false };
    if (produto.estoque <= CONFIG.estoqueBaixo) return { text: "Restam poucas unidades", class: "status-alerta", disabled: false };
    return { text: "Disponível", class: "status-disponivel", disabled: false };
}

// Renderizar Produtos
function renderProducts(filtroCat = 'Todas') {
    const container = document.getElementById('products-container');
    container.innerHTML = "";

    const categoriasParaRenderizar = filtroCat === 'Todas' ? categorias : [filtroCat];

    categoriasParaRenderizar.forEach(cat => {
        const produtosDaCategoria = PRODUTOS.filter(p => p.categoria === cat);
        if (produtosDaCategoria.length === 0) return;

        const section = document.createElement('div');
        section.className = 'category-section';
        section.innerHTML = `<h2 class="category-title">${cat}</h2>`;

        const grid = document.createElement('div');
        grid.className = 'products-grid';

        produtosDaCategoria.forEach(prod => {
            const status = getStatusProduto(prod);

            // Construir bloco de preço / opções
            let priceHTML = "";
            if (prod.opcoes) {
                let optionsList = prod.opcoes.map((opt, idx) => `<option value="${idx}">${opt.nome} — ${formatMoney(opt.preco)}</option>`).join('');
                priceHTML = `<select class="product-select" id="sel-${prod.id}" ${status.disabled ? 'disabled' : ''}>${optionsList}</select>`;
            } else {
                priceHTML = `<div class="product-price">${formatMoney(prod.preco)}</div>`;
            }

            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <!-- AQUI: Tenta usar prod.imagem, se não existir/falhar, usa a genérica -->
                <img src="${prod.imagem || CONFIG.imgPlaceholder}" alt="${prod.nome}" class="product-img" onerror="this.src='${CONFIG.imgPlaceholder}'">
                <div class="product-info">
                    <div class="product-name">${prod.nome}</div>
                    ${priceHTML}
                    <div class="product-status ${status.class}">${status.text}</div>
                    <button class="btn-add" onclick="addToCart('${prod.id}')" ${status.disabled ? 'disabled' : ''}>
                        Adicionar
                    </button>
                </div>
            `;
            grid.appendChild(card);
        });

        section.appendChild(grid);
        container.appendChild(section);
    });
}

/* ==========================================
   LÓGICA DO CARRINHO
   ========================================== */
function addToCart(produtoId) {
    const produto = PRODUTOS.find(p => p.id === produtoId);
    if (!produto || !produto.ativo || produto.estoque === 0) return;

    let precoFinal = produto.preco;
    let nomeOpcao = null;
    let optIndex = null;

    if (produto.opcoes) {
        const selectElement = document.getElementById(`sel-${produto.id}`);
        optIndex = selectElement.value;
        const opcaoSelecionada = produto.opcoes[optIndex];
        precoFinal = opcaoSelecionada.preco;
        nomeOpcao = opcaoSelecionada.nome;
    }

    const cartKey = nomeOpcao ? `${produto.id}-${optIndex}` : produto.id;
    const itemExistente = carrinho.find(item => item.cartKey === cartKey);
    const qtdTotalNoCarrinho = carrinho.filter(item => item.id === produto.id).reduce((acc, item) => acc + item.quantidade, 0);

    if (qtdTotalNoCarrinho >= produto.estoque) {
        showToast("Estoque máximo atingido para este item.");
        return;
    }

    if (itemExistente) {
        itemExistente.quantidade++;
    } else {
        carrinho.push({
            cartKey,
            id: produto.id,
            nome: produto.nome,
            opcao: nomeOpcao,
            preco: precoFinal,
            quantidade: 1
        });
    }

    salvarCarrinho();
    showToast("Adicionado ao carrinho!");
}

function updateQty(cartKey, delta) {
    const itemIndex = carrinho.findIndex(item => item.cartKey === cartKey);
    if (itemIndex === -1) return;

    const item = carrinho[itemIndex];
    const produto = PRODUTOS.find(p => p.id === item.id);

    if (delta > 0) {
        const qtdTotalNoCarrinho = carrinho.filter(i => i.id === produto.id).reduce((acc, i) => acc + i.quantidade, 0);
        if (qtdTotalNoCarrinho >= produto.estoque) {
            showToast("Estoque máximo atingido.");
            return;
        }
    }

    item.quantidade += delta;

    if (item.quantidade <= 0) {
        carrinho.splice(itemIndex, 1);
    }

    salvarCarrinho();
}

function clearCart() {
    carrinho = [];
    salvarCarrinho();
    showToast("Carrinho esvaziado.");
}

function salvarCarrinho() {
    localStorage.setItem('rds_cart', JSON.stringify(carrinho));
    updateCartUI();
}

function updateCartUI() {
    document.getElementById('cart-count').textContent = carrinho.reduce((acc, item) => acc + item.quantidade, 0);

    const container = document.getElementById('cart-items');
    container.innerHTML = "";

    if (carrinho.length === 0) {
        container.innerHTML = "<p style='text-align:center; color:#7f8c8d; margin-top:20px;'>Seu carrinho está vazio.</p>";
        document.getElementById('cart-total-value').textContent = "R$ 0,00";
        document.getElementById('btn-checkout').disabled = true;
        return;
    }

    document.getElementById('btn-checkout').disabled = false;
    let total = 0;

    carrinho.forEach(item => {
        total += item.preco * item.quantidade;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.nome}</h4>
                ${item.opcao ? `<small>${item.opcao}</small><br>` : ''}
                <p>${formatMoney(item.preco)}</p>
            </div>
            <div class="cart-controls">
                <button class="qty-btn" onclick="updateQty('${item.cartKey}', -1)">-</button>
                <span>${item.quantidade}</span>
                <button class="qty-btn" onclick="updateQty('${item.cartKey}', 1)">+</button>
            </div>
        `;
        container.appendChild(div);
    });

    document.getElementById('cart-total-value').textContent = formatMoney(total);
}

/* ==========================================
   MODAIS E FINALIZAÇÃO (CHECKOUT)
   ========================================== */
function toggleCart() {
    document.getElementById('cart-modal').classList.toggle('active');
}

function openCheckout() {
    if (carrinho.length === 0) return;
    toggleCart();
    document.getElementById('checkout-modal').classList.add('active');
    updateResumo();
}

function closeCheckout() {
    document.getElementById('checkout-modal').classList.remove('active');
    toggleCart();
}

function toggleAddress() {
    const isEntrega = document.querySelector('input[name="tipo-pedido"]:checked').value === "Entrega";
    const addressFields = document.getElementById('address-fields');
    if (isEntrega) {
        addressFields.classList.remove('hidden');
    } else {
        addressFields.classList.add('hidden');
    }
    updateResumo();
}

function updateResumo() {
    const subtotal = carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
    const isEntrega = document.querySelector('input[name="tipo-pedido"]:checked').value === "Entrega";
    const taxa = isEntrega ? CONFIG.taxaEntrega : 0;
    const total = subtotal + taxa;

    document.getElementById('resumo-subtotal').textContent = formatMoney(subtotal);
    document.getElementById('resumo-taxa').textContent = formatMoney(taxa);
    document.getElementById('resumo-total').textContent = formatMoney(total);

    if (isEntrega) {
        document.getElementById('resumo-taxa-row').classList.remove('hidden');
    } else {
        document.getElementById('resumo-taxa-row').classList.add('hidden');
    }
}

// Geolocalização
function getLocation() {
    const status = document.getElementById('location-status');
    status.textContent = "Buscando localização...";

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                coordsEntrega = `https://www.google.com/maps?q=${lat},${lng}`;
                status.textContent = "Localização capturada com sucesso!";
                showToast("Localização capturada!");
            },
            () => {
                status.textContent = "Erro ao capturar localização. Preencha manualmente.";
                coordsEntrega = "";
            }
        );
    } else {
        status.textContent = "Geolocalização não suportada pelo navegador.";
    }
}

function showToast(msg) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    container.appendChild(toast);
    setTimeout(() => { toast.remove(); }, 3000);
}

// Gerar Código e Enviar WhatsApp
function generateOrderCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = 'RDS-';
    for (let i = 0; i < 5; i++) code += chars.charAt(Math.floor(Math.random() * chars.length));
    return code;
}

function finishOrder() {
    const nome = document.getElementById('cli-nome').value.trim();
    const telefone = document.getElementById('cli-telefone').value.trim();
    const tipo = document.querySelector('input[name="tipo-pedido"]:checked').value;

    if (!nome || !telefone) {
        showToast("Preencha seu Nome e Telefone.");
        return;
    }

    let enderecoTexto = "";
    if (tipo === "Entrega") {
        const rua = document.getElementById('end-rua').value.trim();
        const num = document.getElementById('end-numero').value.trim();
        const bairro = document.getElementById('end-bairro').value.trim();
        const comp = document.getElementById('end-complemento').value.trim();
        const ref = document.getElementById('end-referencia').value.trim();

        if (!rua || !num || !bairro) {
            showToast("Preencha Rua, Número e Bairro para entrega.");
            return;
        }

        enderecoTexto = `${rua}, ${num} - ${bairro}`;
        if (comp) enderecoTexto += ` (${comp})`;
        if (ref) enderecoTexto += ` | Ref: ${ref}`;
        if (coordsEntrega) enderecoTexto += `\n📍 Link Maps: ${coordsEntrega}`;
    }

    const orderCode = generateOrderCode();
    const subtotal = carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
    const taxa = tipo === "Entrega" ? CONFIG.taxaEntrega : 0;
    const total = subtotal + taxa;

    // Construir Mensagem
    let msg = `*NOVO PEDIDO — RDS*\n`;
    msg += `*Código:* ${orderCode}\n`;
    msg += `*Cliente:* ${nome}\n`;
    msg += `*Telefone:* ${telefone}\n`;
    msg += `*Tipo:* ${tipo}\n`;

    if (tipo === "Entrega") {
        msg += `*Endereço:* ${enderecoTexto}\n`;
    }

    msg += `\n*ITENS:*\n`;
    carrinho.forEach(item => {
        let det = item.opcao ? ` - ${item.opcao}` : "";
        msg += `${item.quantidade}x ${item.nome}${det} (${formatMoney(item.preco)})\n`;
    });

    msg += `\n*Subtotal:* ${formatMoney(subtotal)}`;
    if (tipo === "Entrega") msg += `\n*Taxa de entrega:* ${formatMoney(taxa)}`;
    msg += `\n*TOTAL A PAGAR:* ${formatMoney(total)}`;

    // Limpar Carrinho e Enviar
    carrinho = [];
    salvarCarrinho();

    const numWhats = CONFIG.numerosWhatsApp[0]; // Envia para o primeiro número
    const urlWhats = `https://wa.me/${numWhats}?text=${encodeURIComponent(msg)}`;

    window.location.href = urlWhats;
}

// Função para mudar o tema
function mudarTema(tema) {
    if (tema === 'claro') {
        document.documentElement.removeAttribute('data-theme');
    } else {
        document.documentElement.setAttribute('data-theme', tema);
    }
    localStorage.setItem('rds_theme', tema);
}

// Carregar o tema salvo ao abrir a página
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem('rds_theme') || 'claro';

    const selectElement = document.getElementById('theme-select');
    if (selectElement) {
        selectElement.value = savedTheme;
    }

    if (savedTheme !== 'claro') {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }
});

// Sistema de Feedback
let currentRating = 5; // Valor padrão inicial

function setRating(rating) {
    currentRating = rating;
    const stars = document.querySelectorAll('#star-rating .star');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('active');
            star.textContent = '★';
        } else {
            star.classList.remove('active');
            star.textContent = '☆';
        }
    });
}

function enviarFeedback() {
    const nome = document.getElementById('fb-nome').value.trim();
    const comentario = document.getElementById('fb-comentario').value.trim();

    if (!nome) {
        mostrarToast('Por favor, informe seu nome!');
        return;
    }
    if (!comentario) {
        mostrarToast('Por favor, escreva seu comentário!');
        return;
    }

    const novoFeedback = {
        nome: nome,
        rating: currentRating,
        comentario: comentario,
        data: new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })
    };

    // Pega os antigos do localStorage ou inicia array vazio
    let feedbacks = JSON.parse(localStorage.getItem('rds_feedbacks')) || [];

    // Adiciona o novo no topo da lista
    feedbacks.unshift(novoFeedback);

    // Salva novamente
    localStorage.setItem('rds_feedbacks', JSON.stringify(feedbacks));

    // Limpa os campos do formulário e reseta as estrelas
    document.getElementById('fb-nome').value = '';
    document.getElementById('fb-comentario').value = '';
    setRating(5);

    mostrarToast('Feedback enviado com sucesso! Obrigado ❤️');
    carregarFeedbacks();
}

function carregarFeedbacks() {
    const container = document.getElementById('feedbacks-list');
    if (!container) return;

    let feedbacks = JSON.parse(localStorage.getItem('rds_feedbacks')) || [];

    if (feedbacks.length === 0) {
        container.innerHTML = `
            <div class="feedback-card" style="text-align: center; color: var(--text-muted); padding: 24px;">
                <p>Ainda não há avaliações cadastradas. Seja o primeiro a deixar seu feedback! 🌟</p>
            </div>
        `;
        return;
    }

    let html = '';
    feedbacks.forEach(fb => {
        const estrelasHtml = '★'.repeat(fb.rating) + '☆'.repeat(5 - fb.rating);
        html += `
            <div class="feedback-card">
                <div class="feedback-header">
                    <span class="feedback-author">${escapeHtml(fb.nome)}</span>
                    <span class="feedback-date">${fb.data}</span>
                </div>
                <div class="feedback-stars">${estrelasHtml}</div>
                <p class="feedback-text">${escapeHtml(fb.comentario)}</p>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Função de segurança simples para evitar injeção de HTML no input do usuário
function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Inicializa carregando os feedbacks salvos e marcando 5 estrelas por padrão ao abrir a página
document.addEventListener('DOMContentLoaded', () => {
    setRating(5);
    carregarFeedbacks();
});

function mostrarToast(mensagem) {
    const container = document.getElementById('toast-container');
    if (!container) {
        alert(mensagem); // Fallback caso o container não exista
        return;
    }
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = mensagem;
    container.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000);
}