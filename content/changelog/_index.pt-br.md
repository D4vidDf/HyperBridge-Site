---
title: "Changelog"
description: "Release history and updates for HyperBridge (Português (Brasil))."
showTableOfContents: true
---

Follow the latest updates, features, and release history for **HyperBridge**.


---

## v0.5.7: Atualização de Performance e Sincronização `Latest`

**Otimizações e Correções**

- **Otimização de Código:** Atualizado para o plugin Gradle mais recente e ativado o encolhimento de código R8 para um aplicativo menor e mais rápido.

- **Estabilidade:** Melhoria na sincronização de notificações e correção de um problema onde as notificações originais às vezes eram descartadas prematuramente.

---

## v0.5.6: Landscape Hide & Stability Fixes *(English)*

**Fixes & Improvements**

- **System UI Stability:** Validated highlightColor before passing to SystemUI to prevent crashes.

- **Permanent Island Behavior:** Fixed an issue where the permanent island disappeared after notifications or unlock.

- **Landscape Mode:** Added an option to hide the Permanent Island in landscape orientation.

---

## v0.5.5: Messaging & Update Fixes *(English)*

**Live Updates & Islands**

- **Icons:** Fixed an issue where the original app icon wouldn't display properly on Android 16 Live Updates.

- **Inline Replies:** You can now use inline replies directly from Live Update notifications.

- **Island Removal:** Fixed an issue where islands were not being properly removed when dismissed.


**Messaging Grouping Overhaul**

- **Deduplication:** Completely reworked how messaging-style notifications (like WhatsApp) are grouped to prevent duplicated islands.


**Fixes & Stability**

- **Update Migration:** Fixed a critical bug where updating the app wouldn't trigger the proper database migration logic.

- **Defaults:** Disabled "Show in shade" by default on the onboarding screen.

- **Localization:** Resolved broken characters in translated strings.

---

## v0.5.2: Performance & Stability Update

**Play Store Crash Fixes & Stability**

? **Theme Creator:** Fixed a crash when parsing large sets of custom assets.

? **Performance:** Resolved an ANR (Application Not Responding) issue on the initial Welcome Screen.

? **Widget Picker:** Eliminated crashes and Out-Of-Memory (OOM) errors caused by extremely large widget previews.

? **UI Layouts:** Fixed Jetpack Compose layout constraint exceptions that crashed the app when resizing certain menus.

? **Backups:** Resolved OOM errors when importing large backup files by optimizing JSON parsing.

? **Warm Starts:** Significantly improved app launch speeds and eliminated UI thread blocking on mid-range devices.

? **Background Service:** Completely overhauled the Notification Listener memory architecture, dropping background overhead to 0% and improving battery life.

---

## v0.5.1: Fixes & Refinements

**Fixes & Stability**

WhatsApp Duplicates Fixed: Resolved an issue that caused duplicate WhatsApp notifications to appear.

Notification Flicker & Crashes Fixed: Fixed a crash caused by receiving multiple notifications in a short timeframe. The app now safely updates notifications normally, eliminating the notification flicker and improving stability.

Notification Intents Restored: Fixed an issue where clicking a featured notification would incorrectly route to the troubleshooting screen instead of the original app.


**Features & Polish**

Remove Island on Dismiss: Added a new option to automatically remove the island if the original system notification is dismissed.

Featured Notifications Diagnostics: Added a new check screen during Onboarding to verify if your Xiaomi device supports Featured Notifications and if the required permissions are enabled.

Setup Health Integration: The Featured Notifications permission status is now continuously monitored and displayed inside the Setup Health screen.

Troubleshooting Screen: Added a dedicated Troubleshooting Screen that guides users on how to enable the necessary hidden system permissions (or use Shizuku) to get islands working on strict Xiaomi ROMs.

Clearer Terminology: Renamed the "Live Updates" section in the settings menu to "Notification Management" to better reflect its purpose.

Settings UI Polish: Restored the missing rounded corners on the "Permanent Island" option in the Global Settings list.

Spanish Translations: Added full Spanish translations for all the new troubleshooting dialogues, setup health checks, and notification management settings.

---

## v0.5.0: The Live Update

**CN ROM Support**

- Enable the new Sui & Shizuku workaround to enjoy the Hyper Islands in your devices running HyperOS CN (Chinese) ROMs without native support.


**Theme Engine Improvements**

- Engine Selection: You can now choose animation engines per-app or globally.

- Shizuku Workaround: Toggle added directly to the Theme Editor Engine tab.

- Behavior Controls: Custom timeouts and popup logic are now fully supported.


**Intelligent Permanent Island**

- Always Visible: Keep the island on screen even without active notifications.

- Auto-Hide: The permanent island now automatically hides itself whenever an active widget is shown on the screen.


**Smart Icon Tinting**

- New detection system automatically analyzes extracted notification icons and intelligently tints them white if they are dark or monochrome.


**Downloads & Progress**

- New Dedicated Download Layout: Separated download and progress layouts with dedicated visual designs.

- Text Progress Support: Parsed percentage text (e.g. "12%") for app updates even without native progress bars.

- Smart Filtering: Restricted text-based progress checking to store and installer downloads to prevent false triggers on other status notifications.


**Messaging Fixes**

- Fixed missing sender avatars in apps like Telegram (now correctly extracts "sender_person" data).

- Resolved issues with grouped notifications (chat summaries) not triggering islands.

- Fixed island disappearance bugs caused by notification update race conditions.


**System & Onboarding**

- New Onboarding Screen: A brand new and easier setup process for critical permissions.

- Boot Fix: Service now starts immediately and reliably after restart.

- Smarter Alerts: Downloads and Media update silently, while messaging updates reliably trigger popup animations.

- Navigation: Faster and smoother app transitions.

---

## v0.4.2: Atualização de correção

- **Crash Fix:** Resolved a critical issue that caused the app to crash when opening the settings menu in Traditional Chinese.

- **Under the Hood:** General bug fixes and stability improvements to keep your Island running smoothly.

---

## v0.4.0: A Atualização da Customização

**Engine de Tema**

A maior atualização até agora! Agora você pode personalizar totalmente a experiência visual das Ilhas Dinâmicas.

- **Criador de Tema:**  Crie temas diretamente do seu celular com prévias em tempo real.

- ** Controle Granular:** Escolha exatamente como os ícones aparecem, personalize cores e formas das notificações de chamada e configure ajustes individuais por app.

- **Cores Inteligentes:** Extraia automaticamente cores vibrantes dos ícones dos apps.

- **Personalização por Ação (Beta):** Ajuste o visual de ações específicas da notificação.

- **Compartilhando:** Exporte e importe temas como pacotes <i>.hbr</i>.



**Suporte a Widget 🧩**

Fixe widgets do Android na ilha para acesso rápido—mesmo na sua **Tela de Bloqueio**!

- Escolha entre modo **Interativo** para velocidade ou modo **Snapshot** para economia de bateria.



**Engine de Notificação 2.0 ⚡**

Uma reescrita completa da lógica principal para melhor estabilidade:

- **Análise mais Inteligente:** Corrigidos problemas em que as notificações exibiam o nome do pacote (ex: com.whatsapp) em vez do conteúdo da mensagem.

- **Anti-Flicker:** O novo sistema de hashing de conteúdo evita atualizações redundantes e engasgos visuais.

- **Correções Fantasmas:** Resolvidas as condições de execução onde as ilhas permaneciam na tela após serem descartadas.



**Atualização Visual ✨**

- Aba "Design" redesenhada com carrosséis fluidos e com aspecto nativo.

- Novos botões estilo "Pílula de Texto" para ações de notificação mais claras.

- Adicionado suporte para 🇮🇩 Indonésio e 🇹🇷 Turco.



<i>Nota: Esta atualização inclui mudanças significativas na arquitetura do app. Por favor reporte qualquer bug no GitHub!</i>

---

## v0.3.1: Atualização de Backup e Poliglota

**Backup e Restauração 📦**
Novo recurso para usuários avançados! Exporte com segurança suas configurações, listas de bloqueio e prioridades de apps para um arquivo .hbr e restaure-os a qualquer momento.

**Novos Idiomas 🌍**
Adicionado suporte para:
- 🇩🇪 Alemão
- 🇷🇺 Russo
- 🇺🇦 Ucraniano (Melhorado)
<i>Plus: Um novo seletor de idioma no app para alterar idiomas sem afetar as configurações do sistema.</i>

**Atualização Visual 🎨**
O app foi atualizado com o design **Material 3 Expressive**. Desfrute de cabeçalhos maiores, formas mais arredondadas e uma experiência mais fluida.

**Privacidade e Configuração 🛡️**
- Onboarding melhorado com uma página dedicada à Privacidade, esclarecendo a arquitetura totalmente offline.
- Verificações de compatibilidade mais rigorosas para garantir a melhor experiência no HyperOS 3.0.

**Correções 🛠️**
- Corrigido problema crítico onde as configurações eram perdidas após reiniciar (migrado para banco de dados).
- Corrigido o botão Sair na ilha de Navegação que aparecia como ícone em vez de texto.
- Corrigido o carregamento do ícone do App nas Configurações.

---

## v0.3.0: A Atualização Global

**Notificações Ocultas 👻**

Nova opção para ocultar notificações do painel do sistema enquanto mantém a Ilha ativa. Verifique as Configurações Globais!


**Novos Idiomas 🌍**

Agradecimentos especiais para a nossa comunidade por essas traduções:

- 🇧🇷 Português Brasileiro

- 🇵🇱 Polonês

- 🇰🇷 Coreano


- 🇺🇦 Ucraniano


**Customização da Navegação 🧭**

Você agora pode escolher qual informação aparece no lado esquerdo e direito da navegação da Ilha (Distância, Tempo estimado (ETA), Instrução).


**Proteção contra Spoiler 🛡️**

Nova função de "Termos Bloqueados". Defina palavras globalmente ou por app para impedir que notificações especificas apareçam na Ilha.


**Melhorias em Ligações 📞**

Melhorada a lógica de detecção para dar suporte a uma maior variedade de aplicativos de chamadas.


**Correções & Melhorias 🛠️**

- Corrigido um bug crítico no qual o app ficava travado durante o carregamento após uma reinicialização.

- Corrigido notificações as vezes mostrarem o nome do pacote (ex.: "com.google...") em vez do conteúdo.

- As configurações do app foram redesenhadas para melhor usabilidade.

- Melhorada a tela de verificação de compatibilidade com informações detalhadas do aparelho.

---

## v0.2.0: A Atualização de Informações

- **Progresso Avançado:** Suporte para "Passos" (ex.: 1 de 3) e barras de progresso com ícones no painel de notificações.

- **Sistema de Prioridade:** Novos ajustes de "Comportamento". Define a ordem de aparição das ilhas.

- **Filtros Inteligentes:** Detecção melhorada de duplicados.

- **Melhorias Visuais:** Corrigido problemas de layout nas instruções de navegação.

- **Configuração por Aplicativo:** Customize o tempo limite e o comportamento de flutuação para cada aplicativo.

---

## v0.1.0: A Atualização Expressiva

- **Grandes mudanças na IU:** Hyper Bridge agora usa o Material 3 Expressive com novas animações suaves.

- **Melhorias na HyperIsland:** O texto agora aparece à direita e mostra um tick verde para downloads completos.

- **Configuração por aplicativo:** Agora você pode personalizar que tipo de notificação você quer mostrar para cada aplicativo.

- **Filtros Inteligentes:** Hyper Bridge agora bloqueia notificações duplicadas e economiza bateria.

- **Nova Biblioteca:** Filtra aplicativos por categoria e ordem.

- **Idiomas:** Suporte completo para Espanhol.
