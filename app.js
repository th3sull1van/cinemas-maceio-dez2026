(() => {
  'use strict';

  /* ========================================================================
     1. DADOS OFICIAIS COLETADOS EM 26/11/2026 — MACEIÓ / AL
     Fontes: Ingresso.com, Cinesystem, Kinoplex, Centerplex, Cine Arte Pajuçara
     ======================================================================== */

  const CHAINS = [
    {
      id: 'cinesystem',
      name: 'Cinesystem Maceió',
      venue: 'Parque Shopping Maceió',
      neighborhood: 'Cruz das Almas',
      address: 'Av. Comendador Gustavo Paiva, 5945, Loja 3032 — Cruz das Almas, Maceió - AL',
      color: 'var(--chain-cinesystem)',
      statusText: 'Pré-venda 13/12 e 20/12',
      statusLive: true,
      tags: 'Cinépic Dolby Atmos • Infinity Vision • 2D / 3D • Dublado e Legendado',
    },
    {
      id: 'kinoplex',
      name: 'Kinoplex Maceió',
      venue: 'Maceió Shopping',
      neighborhood: 'Mangabeiras',
      address: 'Av. Comendador Gustavo Paiva, 2990, Loja E — Mangabeiras, Maceió - AL',
      color: 'var(--chain-kinoplex)',
      statusText: 'Pré-venda 13/12 e 20/12',
      statusLive: true,
      tags: 'KinoEvolution / Klaser • Infinity Vision • Parte Baixa',
    },
    {
      id: 'centerplex',
      name: 'Centerplex Pátio Maceió',
      venue: 'Shopping Pátio Maceió',
      neighborhood: 'Tabuleiro dos Martins',
      address: 'Av. Menino Marcelo, 3800, 2º Piso — Tabuleiro dos Martins, Maceió - AL',
      color: 'var(--chain-centerplex)',
      statusText: 'Pré-venda 20/12',
      statusLive: true,
      tags: 'Parte Alta • Salas 2D • Vingadores em Pré-venda',
    },
    {
      id: 'pajucara',
      name: 'Cine Arte Pajuçara',
      venue: 'Centro Cultural Arte Pajuçara',
      neighborhood: 'Pajuçara (Orla)',
      address: 'Av. Dr. Antônio Gouveia, 1113 — Pajuçara, Maceió - AL (CEP 57030-170)',
      color: 'var(--chain-pajucara)',
      statusText: 'Grade regular até 02/12',
      statusLive: false,
      tags: 'Cinema de Rua • Circuito Independente • Programação própria',
    },
    {
      id: 'cinepremium',
      name: 'CinePremium Cinemas',
      venue: 'Pinheiros (Em mudança de endereço)',
      neighborhood: 'Pinheiros',
      address: 'Av. Fernandes Lima, 2551 — Pinheiros, Maceió - AL',
      color: 'var(--chain-cinepremium)',
      statusText: 'Sem sessões no momento',
      statusLive: false,
      tags: 'Retorno anunciado em novo local (@cinepremiummaceio)',
      wide: true,
    },
  ];

  const CHAIN_BY_ID = Object.fromEntries(CHAINS.map((c) => [c.id, c]));

  const DATES = [
    {
      id: '2026-12-13',
      badge: 'DOM 13/12',
      badgeClass: '',
      title: '13 de Dezembro de 2026',
      meta: 'PRÉ-VENDA • 2 FILMES • 5 SESSÕES',
      footnote:
        'Centerplex Pátio Maceió e Cine Arte Pajuçara ainda não abriram sessões para 13/12/2026 (grade regular vigente até 02/12; novas sessões abrem na semana de 10/12).',
      movies: [
        {
          id: 'shrek-25',
          title: 'Shrek (25º Aniversário)',
          subtitle: 'Edição Comemorativa de 25 Anos • Relançamento 10/12/2026',
          posterTag: 'PRÉ-VENDA • RELANÇAMENTO',
          posterKey: 'shrek-25',
          duration: '1h30',
          rating: 'L',
          genre: 'Animação • Aventura',
          rt: { critic: 88, audience: 90, status: null },
          synopsis:
            'Em um pântano distante vive Shrek, um ogro solitário que vê sua tranquilidade invadida por personagens de contos de fada expulsos pelo maligno Lorde Farquaad. Para recuperar seu lar, Shrek faz um acordo com Farquaad e parte com o amigo Burro para resgatar uma princesa prisioneira de um dragão.',
          showtimesByChain: [
            {
              chainId: 'kinoplex',
              rooms: [
                {
                  room: 'Sala 3',
                  format: '2D',
                  audio: 'Dublado',
                  tech: 'KinoEvolution / Klaser',
                  times: ['16:00', '18:00', '20:00'],
                },
              ],
            },
            {
              chainId: 'cinesystem',
              rooms: [
                {
                  room: 'Sala 8',
                  format: '2D',
                  audio: 'Dublado',
                  tech: null,
                  times: ['17:00'],
                },
              ],
            },
          ],
        },
        {
          id: 'paixao-de-cristo',
          title: 'A Paixão de Cristo (Relançamento)',
          subtitle: 'The Passion of the Christ • Relançamento 10/12/2026',
          posterTag: 'PRÉ-VENDA • RELANÇAMENTO',
          posterKey: 'paixao-de-cristo',
          duration: '2h07',
          rating: '18',
          genre: 'Drama • Religião',
          rt: { critic: 50, audience: 81, status: null },
          synopsis:
            'Retrata as últimas 12 horas da vida de Jesus de Nazaré (James Caviezel). Traído por Judas no Monte das Oliveiras e preso sob ordem de Caifás, Jesus é entregue ao governador romano Pôncio Pilatos, que tenta transferir a decisão a Herodes antes de ceder à pressão popular sob os olhares de sua esposa Cláudia.',
          showtimesByChain: [
            {
              chainId: 'cinesystem',
              rooms: [
                {
                  room: 'Sala 7',
                  format: '2D',
                  audio: 'Dublado',
                  tech: null,
                  times: ['19:00'],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: '2026-12-20',
      badge: 'DOM 20/12',
      badgeClass: 'is-dunesday',
      title: '20 de Dezembro de 2026 — Especial Dunesday',
      meta: 'PRÉ-VENDA • 2 BLOCKBUSTERS • 24 SESSÕES',
      footnote:
        'Cine Arte Pajuçara ainda não publicou programação para 20/12. O Centerplex Pátio Maceió anuncia Duna - Parte 3 em "Vem Aí" (17/12), mas até 26/11 abriu pré-venda apenas para Vingadores: Doutor Destino.',
      movies: [
        {
          id: 'vingadores-destino',
          title: 'Vingadores: Doutor Destino',
          subtitle: 'Avengers: Doomsday • Estreia Brasil: 16/12/2026',
          posterTag: 'PRÉ-VENDA • ESTREIA',
          posterKey: 'vingadores-destino',
          duration: '2h45',
          rating: 'SC',
          genre: 'Ação • Aventura • Ficção',
          rt: { critic: null, audience: null, status: 'Sem nota ainda (embargo até estreia)' },
          synopsis:
            'Heróis icônicos de três universos diferentes são colocados em rota de colisão mortal e enfrentam uma ameaça existencial sem precedentes, diferente de tudo que já vivenciaram antes. Dirigido pelos Irmãos Russo, marca a chegada do vilão Doutor Destino.',
          showtimesByChain: [
            {
              chainId: 'cinesystem',
              rooms: [
                {
                  room: 'Sala 2',
                  format: '2D',
                  audio: 'Dublado',
                  tech: 'Cinépic Dolby Atmos • Infinity Vision',
                  times: ['12:15', '22:00'],
                },
                {
                  room: 'Sala 2',
                  format: '3D',
                  audio: 'Dublado',
                  tech: 'Cinépic Dolby Atmos • Infinity Vision',
                  times: ['15:30'],
                },
                {
                  room: 'Sala 2',
                  format: '2D',
                  audio: 'Legendado',
                  tech: 'Cinépic Dolby Atmos • Infinity Vision',
                  times: ['18:45'],
                },
                {
                  room: 'Sala 3',
                  format: '2D',
                  audio: 'Legendado',
                  tech: 'Infinity Vision',
                  times: ['13:30', '16:45', '20:00'],
                },
                {
                  room: 'Sala 9',
                  format: '2D',
                  audio: 'Dublado',
                  tech: 'Infinity Vision',
                  times: ['14:45', '18:00', '21:15'],
                },
              ],
            },
            {
              chainId: 'kinoplex',
              rooms: [
                {
                  room: 'Sala 1',
                  format: '2D',
                  audio: 'Dublado',
                  tech: 'Infinity Vision',
                  times: ['13:40', '17:00', '20:20'],
                },
                {
                  room: 'Sala 3',
                  format: '2D',
                  audio: 'Dublado',
                  tech: 'KinoEvolution / Klaser • Infinity Vision',
                  times: ['14:00', '17:20', '20:40'],
                },
              ],
            },
            {
              chainId: 'centerplex',
              rooms: [
                {
                  room: 'Sala 1',
                  format: '2D',
                  audio: 'Dublado',
                  tech: null,
                  times: ['12:00', '15:15', '18:30', '21:50'],
                },
              ],
            },
          ],
        },
        {
          id: 'duna-parte-3',
          title: 'Duna - Parte 3',
          subtitle: 'Dune: Part Three • Estreia Brasil: 15/12/2026',
          posterTag: 'PRÉ-VENDA • ESTREIA',
          posterKey: 'duna-parte-3',
          duration: '2h47',
          rating: '14',
          genre: 'Ação • Aventura • Ficção Científica',
          rt: { critic: null, audience: null, status: 'Sem nota ainda (embargo até estreia)' },
          synopsis:
            'Adaptação do terceiro livro de Frank Herbert ("Duna: Messias"), ambientada 12 anos após a Parte 2, durante o império de Paul Atreides (Timothée Chalamet). Apaixonado por Chani (Zendaya) e casado com a Princesa Irulan (Florence Pugh), Paul enfrenta visões apocalípticas e as consequências da Guerra Santa travada em seu nome.',
          showtimesByChain: [
            {
              chainId: 'kinoplex',
              rooms: [
                {
                  room: 'Sala 2',
                  format: '2D',
                  audio: 'Dublado',
                  tech: null,
                  times: ['15:00', '18:00', '21:00'],
                },
              ],
            },
            {
              chainId: 'cinesystem',
              rooms: [
                {
                  room: 'Sala 6',
                  format: '2D',
                  audio: 'Legendado',
                  tech: null,
                  times: ['20:45'],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: '2026-12-27',
      badge: 'DOM 27/12',
      badgeClass: 'is-pending',
      title: '27 de Dezembro de 2026',
      meta: 'GRADE EM ABERTO • HORÁRIOS A CONFIRMAR',
      pending: true,
      movies: [],
    },
  ];

  const DECEMBER_RADAR = [
    {
      posterKey: 'malu-tatu',
      title: 'Malu Tatu',
      releaseDate: 'Estreia 17/12',
      genre: 'Animação Nacional',
      rt: { critic: null, label: 'Sem página no RT' },
      synopsis:
        'Malu, uma jovem tatu-mulita, desafia regras para salvar sua comunidade da seca e lidera um plano ousado para reconstruir a toca dos tatus.',
    },
    {
      posterKey: 'filhas-da-noite',
      title: 'Filhas da Noite',
      releaseDate: 'Estreia 17/12',
      genre: 'Documentário',
      rt: { critic: null, label: 'Sem página no RT' },
      synopsis:
        'Seis ícones das noites pernambucanas revisitam seus passados e revivem memórias íntimas como pioneiras de uma revolução cultural ainda em curso.',
    },
    {
      posterKey: 'intervencao',
      title: 'Intervenção',
      releaseDate: 'Estreia 17/12',
      genre: 'Documentário',
      rt: { critic: null, label: 'Sem página no RT' },
      synopsis:
        'Filmado ao longo de quatro anos, acompanha a luta de moradores pela urbanização de duas favelas e um conjunto habitacional na zona oeste de SP.',
    },
    {
      posterKey: 'one-piece-dobro',
      title: 'One Piece: Aventura em Dobro',
      releaseDate: 'Estreia 10/12',
      genre: 'Animê • Aventura',
      rt: { critic: null, label: 'Sem nota no RT' },
      synopsis:
        'Reúne dois episódios estendidos dos Chapéus de Palha em busca do Going Merry e Chopper na ilha dos animais estranhos, mais curta inédito.',
    },
    {
      posterKey: 'ultima-entrega',
      title: 'A Última Entrega',
      releaseDate: 'Estreia 03/12',
      genre: 'Ação • Suspense',
      rt: { critic: null, label: 'Sem nota agregada' },
      synopsis:
        'Um horticultor silencioso com passado secreto como assassino letal vê sua identidade ameaçada ao ajudar uma testemunha de corrupção policial.',
    },
    {
      posterKey: 'verao-da-lata',
      title: 'Verão da Lata',
      releaseDate: 'Estreia 03/12',
      genre: 'Comédia Policial',
      rt: { critic: null, label: 'Sem página no RT' },
      synopsis:
        'Inspirado no episódio de 1987 no RJ, acompanha os policiais Brasa (Babu Santana) e Sandra (Samantha Schmütz) no caos das latas que chegam às praias.',
    },
    {
      posterKey: 'noite-infeliz',
      title: 'Noite Ainda Mais Infeliz',
      releaseDate: 'Estreia 03/12',
      genre: 'Ação • Natal',
      rt: { critic: null, label: 'Aguardando críticas' },
      synopsis:
        'Encalhado em um shopping em ruínas em Nova Jersey e isolado do Polo Norte, Papai Noel faz justiça brutal contra um senhor do crime e seus capangas.',
    },
    {
      posterKey: 'psicopata-vitoriana',
      title: 'Psicopata Vitoriana',
      releaseDate: 'Estreia 03/12',
      genre: 'Terror • Suspense',
      rt: { critic: 75, label: null },
      synopsis:
        'Na sombria Ensor House, a nova governanta Winifred (Maika Monroe) esconde impulsos violentos sob modos impecáveis enquanto funcionários somem.',
    },
  ];

  /* ========================================================================
     2. ESTADO & RENDERIZAÇÃO
     ======================================================================== */
  const state = {
    dateFilter: 'all',
    chainFilter: 'all',
    theme: 'light',
  };

  function getVisibleDates() {
    return state.dateFilter === 'all' ? DATES : DATES.filter((d) => d.id === state.dateFilter);
  }

  function renderSummaryBar() {
    const el = document.getElementById('summary-bar');
    const visibleDates = getVisibleDates();
    let sessions = 0;
    const titles = new Set();

    for (const d of visibleDates) {
      for (const m of d.movies) {
        for (const cs of m.showtimesByChain) {
          if (state.chainFilter !== 'all' && cs.chainId !== state.chainFilter) continue;
          titles.add(m.id);
          for (const r of cs.rooms) sessions += r.times.length;
        }
      }
    }

    const chainsCount = state.chainFilter === 'all' ? '4+1' : '1';
    const chainsLabel =
      state.chainFilter === 'all' ? 'redes em Maceió' : CHAIN_BY_ID[state.chainFilter].name;

    el.innerHTML = `
      <div class="summary-cell"><strong>${titles.size}</strong><span>filmes com horário</span></div>
      <div class="summary-cell"><strong>${sessions}</strong><span>sessões confirmadas</span></div>
      <div class="summary-cell"><strong>${chainsCount}</strong><span>${chainsLabel}</span></div>
      <div class="summary-cell"><strong>02/12</strong><span>limite grade regular</span></div>
    `;
  }

  function renderMovieRT(rt) {
    if (!rt) return '';
    if (rt.critic === null && rt.audience === null) {
      return `
        <div class="rt-row" aria-label="Rotten Tomatoes">
          <span class="rt-pill is-pending">
            <span class="rt-label">Rotten Tomatoes</span>
            <span class="rt-val pending">${rt.status || 'Sem nota'}</span>
          </span>
        </div>
      `;
    }

    const parts = [];
    if (rt.critic !== null) {
      const cls = rt.critic >= 60 ? 'fresh' : 'rotten';
      parts.push(`
        <span class="rt-pill" title="Tomatometer — Crítica no Rotten Tomatoes">
          <span class="rt-label">RT Crítica</span>
          <span class="rt-val ${cls}">${rt.critic}%</span>
        </span>
      `);
    }
    if (rt.audience !== null) {
      const cls = rt.audience >= 60 ? 'popcorn' : 'rotten';
      parts.push(`
        <span class="rt-pill" title="Popcornmeter — Público no Rotten Tomatoes">
          <span class="rt-label">RT Público</span>
          <span class="rt-val ${cls}">${rt.audience}%</span>
        </span>
      `);
    }
    return `<div class="rt-row" aria-label="Notas no Rotten Tomatoes">${parts.join('')}</div>`;
  }

  function renderMovie(movie) {
    const chains = movie.showtimesByChain.filter(
      (cs) => state.chainFilter === 'all' || cs.chainId === state.chainFilter
    );
    if (chains.length === 0) return '';

    const posterSrc = `assets/posters/${movie.posterKey}.webp`;

    const chainsHtml = chains
      .map((cs) => {
        const chain = CHAIN_BY_ID[cs.chainId];
        const roomsHtml = cs.rooms
          .map(
            (r) => `
            <div class="room-item">
              <div class="room-meta">
                <span class="room-name">${r.room}</span>
                <span class="room-tag">${r.format}</span>
                <span class="room-tag ${r.audio === 'Legendado' ? 'is-leg' : ''}">${r.audio}</span>
                ${r.tech ? `<span class="room-tag is-tech">${r.tech}</span>` : ''}
              </div>
              <div class="times-row">
                ${r.times.map((t) => `<span class="time-box">${t}</span>`).join('')}
              </div>
            </div>
          `
          )
          .join('');

        return `
          <div class="chain-block" style="--chain-color:${chain.color}">
            <div class="chain-block-head">
              <span class="chain-block-name">
                <span class="chain-swatch"></span>
                ${chain.name} — ${chain.venue}
              </span>
              <span class="chain-block-address">${chain.address}</span>
            </div>
            <div class="room-list">${roomsHtml}</div>
          </div>
        `;
      })
      .join('');

    return `
      <article class="movie-row">
        <div class="movie-poster-col">
          <img src="${posterSrc}" alt="Cartaz oficial de ${movie.title}" />
          <div class="poster-tag">${movie.posterTag}</div>
        </div>
        <div class="movie-info-col">
          <div class="movie-head">
            <div class="movie-title-line">
              <div>
                <h3 class="movie-title">${movie.title}</h3>
                <div class="movie-subtitle">${movie.subtitle}</div>
              </div>
              <div class="movie-facts">
                <span class="rating-box rating-${movie.rating}" title="Classificação indicativa">${movie.rating}</span>
                <span class="fact-chip">${movie.duration}</span>
                <span class="fact-chip">${movie.genre}</span>
              </div>
            </div>
            ${renderMovieRT(movie.rt)}
          </div>
          <p class="movie-synopsis">${movie.synopsis}</p>
          <div class="chains-schedule">${chainsHtml}</div>
        </div>
      </article>
    `;
  }

  function renderPending27() {
    const cards = DECEMBER_RADAR.map((item) => {
      const posterSrc = `assets/posters/${item.posterKey}.webp`;
      const rtHtml =
        item.rt && item.rt.critic !== null
          ? `<div class="radar-rt"><span>ROTTEN TOMATOES</span><span class="radar-rt-score ${item.rt.critic < 60 ? 'rotten' : ''}">${item.rt.critic}%</span></div>`
          : `<div class="radar-rt"><span>RT</span><span class="radar-rt-score pending">${item.rt?.label || 'Sem nota'}</span></div>`;
      return `
        <article class="radar-item">
          <div class="radar-poster-wrap">
            <img src="${posterSrc}" alt="Cartaz de ${item.title}" loading="lazy" />
            <span class="radar-release-tag">${item.releaseDate}</span>
          </div>
          <div class="radar-content">
            <span class="radar-genre">${item.genre}</span>
            <h4>${item.title}</h4>
            <p>${item.synopsis}</p>
            ${rtHtml}
          </div>
        </article>
      `;
    }).join('');

    return `
      <div class="pending-notice">
        <strong>Nenhuma sessão publicada para 27/12/2026 até 26/11/2026</strong>
        <p>
          Na consulta realizada na Ingresso.com e nos sites oficiais de Cinesystem, Kinoplex, Centerplex e Cine Arte Pajuçara, ainda não existem horários regulares nem pré-vendas para <strong>27/12/2026</strong> (as pré-vendas de <em>Vingadores</em> e <em>Duna 3</em> vão até 23/12 e saltam para 29/12 com <em>BTS World Tour</em>). A grade definitiva deve abrir na semana do Natal (~23–24/12).
        </p>
      </div>
      <div class="radar-title-bar">
        <h3>Radar de Estreias Previstas para Dezembro (Horários a Confirmar)</h3>
        <span>Além da provável continuidade de Vingadores: Doutor Destino e Duna - Parte 3</span>
      </div>
      <div class="radar-grid">${cards}</div>
    `;
  }

  function renderDates() {
    const container = document.getElementById('dates-container');
    const visibleDates = getVisibleDates();

    container.innerHTML = visibleDates
      .map((d) => {
        let bodyHtml = '';

        if (d.pending) {
          bodyHtml = renderPending27();
        } else {
          const cards = d.movies.map(renderMovie).filter(Boolean);
          if (cards.length === 0) {
            const cname = CHAIN_BY_ID[state.chainFilter]?.name || 'Esta rede';
            bodyHtml = `
              <div class="empty-state">
                <strong>${cname}</strong> ainda não publicou sessões ou pré-vendas para <strong>${d.title}</strong> até 26/11/2026. Troque o filtro para <strong>Todas as redes</strong> para ver as sessões disponíveis em Maceió.
              </div>
            `;
          } else {
            bodyHtml = `
              <div class="movies-list">${cards.join('')}</div>
              <div class="date-footnote"><strong>Observação:</strong> ${d.footnote}</div>
            `;
          }
        }

        return `
          <section class="date-section" id="section-${d.id}">
            <div class="date-bar">
              <div class="date-bar-left">
                <span class="date-bar-day ${d.badgeClass}">${d.badge}</span>
                <h2>${d.title}</h2>
              </div>
              <span class="date-bar-meta">${d.meta}</span>
            </div>
            <div class="date-body">${bodyHtml}</div>
          </section>
        `;
      })
      .join('');
  }

  function renderDirectory() {
    const grid = document.getElementById('chains-grid');
    const list =
      state.chainFilter === 'all' ? CHAINS : CHAINS.filter((c) => c.id === state.chainFilter);

    grid.innerHTML = list
      .map(
        (c) => `
        <div class="dir-card ${c.wide && state.chainFilter === 'all' ? 'dir-wide' : ''}" style="--chain-color:${c.color}">
          <div class="dir-top">
            <strong>${c.name}</strong>
            <span class="dir-status ${c.statusLive ? 'live' : ''}">${c.statusText}</span>
          </div>
          <div class="dir-venue">${c.venue} • ${c.neighborhood}</div>
          <div class="dir-address">${c.address}</div>
          <div class="dir-tags">${c.tags}</div>
        </div>
      `
      )
      .join('');
  }

  function renderAll() {
    renderSummaryBar();
    renderDates();
    renderDirectory();
  }

  /* ========================================================================
     3. EVENTOS
     ======================================================================== */
  document.querySelectorAll('.tab-btn[data-date]').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn[data-date]').forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      state.dateFilter = btn.dataset.date;
      renderAll();
    });
  });

  document.getElementById('chain-filter').addEventListener('change', (e) => {
    state.chainFilter = e.target.value;
    renderAll();
  });

  document.getElementById('theme-toggle').addEventListener('click', () => {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    document.body.classList.toggle('theme-dark', state.theme === 'dark');
    document.body.classList.toggle('theme-light', state.theme === 'light');
    document.getElementById('theme-label').textContent =
      state.theme === 'light' ? 'Escuro' : 'Claro';
  });

  renderAll();
})();
