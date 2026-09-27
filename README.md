# NeuroAtlas P2 — Revisão Interativa

Site estático de revisão de Neuroanatomia, otimizado para tablet e construído a partir dos materiais enviados:

- Telencéfalo
- Núcleos da Base
- Tronco Encefálico
- Cerebelo

## Como publicar no GitHub Pages

1. Crie um repositório novo no GitHub, por exemplo `neuroatlas-p2`.
2. Extraia todos os arquivos deste projeto na raiz do repositório.
3. Faça commit e push.
4. No GitHub: **Settings → Pages**.
5. Em **Build and deployment**, escolha **Deploy from a branch**.
6. Selecione a branch `main` e a pasta `/ (root)`.
7. Salve. O GitHub fornecerá a URL pública.

## Tablet

O layout foi feito para toque e não depende de hover. O menu recolhe em telas menores e todas as imagens podem ser ampliadas com toque.

### Instalar como app

Depois de publicado em HTTPS (GitHub Pages), o site inclui `manifest.json` e `service-worker.js`.

- Android/Chrome: menu → **Adicionar à tela inicial**.
- iPad/Safari: compartilhar → **Adicionar à Tela de Início**.

Após a primeira visita, o service worker salva os arquivos visitados em cache; isso melhora o uso com conexão instável.

## Progresso

XP, capítulos concluídos, flashcards vistos, tema e última página ficam no `localStorage` do navegador. Esse progresso é local por dispositivo/navegador.

## Estrutura

```text
anatomia_interativa_site/
├── index.html
├── styles.css
├── app.js
├── manifest.json
├── sw.js
├── README.md
└── assets/
    ├── icon.svg
    └── images/
```

## Observação sobre o conteúdo

O texto foi organizado a partir dos PDFs fornecidos e preserva a nomenclatura e as classificações usadas nesses materiais. Para divergências com atlas, livro-texto ou aula prática, siga a orientação da disciplina.
