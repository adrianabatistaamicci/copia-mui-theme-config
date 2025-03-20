# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

---

## [1.0.1] - 2023-10-16

### Added

- Adicionado o componente `MuiThemeConfig` para facilitar a configuração do tema do Material UI.
- Adiciona cores personalizadas de acordo com a lista fornecida pelo designer.

## [1.0.2] - 2023-10-19

### Fixed

- Limpeza de arquivos desnecessários.

### Changed

- Ajustes da documentação.

## [1.0.3] - 2023-10-30

### Added

- Adiciona meios de customizar componentes do Material UI.
- Customiza botões de link.
- Customiza card e breadcumbs.

## [1.0.4] - 2023-11-07

### Added

- Remove elevação padrão de Paper

### Fixed

- Corrige ordem de injeção de css.

## [1.0.5] - 2023-11-21

### Added

- Habilita ripple em botões.
- Remove borda do ultimo element da Table.

### Fixed

- Adiciona dependência de build de sass.
- Modifica plugin de build de sass.

### Changed

- Ajuste das cores.

## [1.0.6] - 2023-12-19

### Added

- Customiza componente de Chip.

### Fixed

- Corrige mapeamento de tons de cinza.

## [1.0.6-1] - 2023-12-22

### Added

- Adiciona CHANGELOG.md

## [1.0.7] - 2024-01-19

### Added

- Typography da variante "subtitle1" com peso 500

### Fixed

- Corrige customização de Chip "info"

## [1.0.8] - 2024-01-26

### Added

- Mapeamento de cores de "info"

## [1.0.9] - 2024-03-07

### Added

- Componentes de cabeçalho de página e dialog de confirmação

## [1.1.0] - 2024-03-07

### Changed

- Build da biblioteca refatorado, reduzindo tamanho do bundle e permitindo exportar componentes.
- BREAKING CHANGE: Nesse update, `AmicciThemeProvider` já não é mais exportado por padrão. O import deste deve ser feito com duplas chaves: `{ AmicciThemeProvider }`. Preferencialmente, utilizar o export `theme`.

## [1.1.1] - 2024-03-08

### Added

- Inclusão de novos componentes.
  <DisplayDefault /> Componente utilizado para eventos de documentos exemplo: baixar documentos
  <UploadComponent> - Utilizado para envio de arquivos em nossas aplicações

## [1.1.2] - 2024-03-07

### Changed

- Correções nos componentes DisplayDefault e UploadComponent

## [1.1.3] - 2024-03-12

### Added

- Inclusão de componentes
  <ThreadComment> - Componente para exibição de componente de mensagem em thread
  <ThreadBox> - Componente principal de thread contendo collapse de ThreadComment e Envio de mensagem
  <ThreadTimeline> - Componente para exibição de timeline de threads finalizadas e ativas

## [1.1.4] - 2024-03-12

### Fixed

- Adicionado o parâmetro fileSize em DisplayDefaultProps

### Added

- Inclusão de componente
  <StatusBanner> - Componente para exibição de status de etapas

## [1.1.5] - 2024-03-13

### Fixed

- Correção de parametros no componente <ThreadTimeline>
- Ajustes de layout no componente <ThreadBox>
- Correção do componente <UploadComponent>

## [1.1.6] - 2024-03-14

### Fixed

- Ajuste de layout <ThreadTimeline>

## [1.1.7] - 2024-03-18

### Fixed

- Ajuste de limpeza de campo ao enviar comentário
- Acrescimo de loading ao enviar comentário
- Exibição do campo "Adicionar comentário no primeiro envio"

## [1.1.8] - 2024-03-20

### Fixed

- Aplicação de download e aba nova.

## [1.1.9] - 2024-03-21

### Fix

- Chamdno função de onDownlaod do <DisplayDefault> via <ThreadTimeline>.
- Ajuste de layout

## [1.2.0] - 2024-03-27

### Fix

- Ajuste de espaçamento entre label "Adicione o comentário" e "TextField" no componente <UploadComponente>
- Aplicado alteração de bgColor quando thread estiver desativada.

## [1.2.1] - 2024-06-03

### Added

- Componente <FullPageDialog> para utilização rápida de modal full page com os componentes de cabeçalho já configurados

## [1.2.2] - 2024-07-04

### Added

- Componente <UploadComponent> adicionado disable em Botton para validação de projeto finalizado ou cancelado

## [1.2.3] - 2024-07-04

### Fix

- Fix tag para pipeline

## [1.2.4] - 2024-07-04

### Added

- Componente <UploadComponent> adicionado loading para aviso ao usuário de que o arquivo ainda está em upload, inserido o Skeleton para isso.

## [1.2.5] - 2024-07-05

### Fix

- Alterando para CircularProgress nos dois botões da página de envio de documentos.

## [1.2.6] - 2024-07-18

### Fix

- Correção de comentário fixo no componente <UploadComponent>

## [1.2.7] - 2024-07-26

### Added

- Componentes <ThreadBox> e <ThreadComment> agora possuem capacidade de ter um submenu.

## [1.2.8] - 2024-07-29

### Added

- Componente <ThreadTimeline> pode passar props extras para <ThreadBox> e <ThreadComment>.

## [1.2.9] - 2024-07-29

### Fix

- Corrigir passagem de props de <ThreadTimeline> para <ThreadBox> e <ThreadComment>.

## [1.3.0] - 2024-08-06

### Fix

- Corrigir placeholder de comentário adicional que estava com Teste.

## [1.3.1] - 2024-08-09

### Added

- Muda de textField para RichTextEditor no UploadComponent

## [1.4.0] - 2024-08-08

### Added

- Testes com vitest em componentes

## [1.4.2] - 2024-08-14

### Added

- Alterações no RichTextEditor da Thread

## [1.4.3] - 2024-08-14

### Added

- Adiciona extensoes no RichTextReadOnly da Thread

## [1.4.3] - 2024-08-14

### Added

- Adiciona extensoes no RichTextReadOnly da Thread

## [1.4.4] - 2024-08-14

### Added

- Remove OrderedList do RichTextEditor

## [1.4.6] - 2024-08-15

### Added

- Adiciona função pra limpar o conteúdo do RichTextEditor

## [1.4.7] - 2024-08-21

### Fix

- Corrigir exibição do botão 'Visualizar histórico de Comentários'

## [1.4.8 - 1.5.3] - 2024-08-22

### Fix

- Correção de click do Collapse de comentários

## [1.6.0] - 2024-08-28

### Added

- Adiciona customização de disableEnforceFocus no muiDialog

## [1.7.0] - 2024-09-05

### Added

- Adiciona customização de Amicci Brand e plugin @rollup/plugin-image

## [1.7.1] - 2024-09-09

### Fix

- Fix de chamada de dist

## [1.7.2] - 2024-09-09

### Fix

- Fix de AmicciBrand

## [1.7.3] - 2024-09-09

### Change

- Alteração da paleta de cores para novo DS

## [1.7.4] - 2024-09-10

### Fix

- Cores atualizadas

## [1.7.5] - 2024-09-10

### Fix

- Demais logos

## [1.7.6] - 2024-09-12

### Fix

- RichText com Word break

## [1.7.7] - 2024-09-12

### Added

- Adiciona componente de FileProgress (incluso em UploadComponente)

### Fix

- Corrige testes de ThreadBox

## [1.7.8] - 2024-10-08

### Fix

- Altera texto UploadComponent

## [1.7.9] - 2024-10-24

### Added

- Adiciona componente de ListMenu

## [1.8.0] - 2024-11-04

### Fix

- Adiciona possibilidade customização do UploadComponent

## [1.8.1] - 2024-11-05

### Added

- Adiciona componente de FileUpload

## [1.8.2] - 2024-11-19

### Added

- Adiciona componente <FixedTableCell>

## [1.8.2 > 1.8.5] - 2024-11-19

### Added

- Adiciona componente <FixedTableCell>

## [1.8.6] - 2024-11-21

### Added

- Adiciona paleta de cores magenta

## [1.8.7] - 2024-12-04

### Added

- Adiciona paleta de cores no Alert

## [1.8.8] - 2024-12-09

### Added

- Adiciona novas cores ao componente <Buttons>

## [1.8.9] - 2024-12-09

### Fix

- Corrige novas cores ao componente <Buttons>

## [1.9.0] - 2025-01-14

### Added

- Adiciona componente <DocumentTable>

## [1.9.1] - 2025-01-15

### Added

- Adiciona componente <ChipGroup>

## [1.9.2] - 2025-01-15

### Fix

- Ajustes no componente <ChipGroup>

### Added

- Adiciona o componente <ThreadTimelineDocuments>

## [1.9.3] - 2025-01-16

### Added

- Adiciona o componente <NewTopic>

## [1.9.4] - 2025-01-16

### Fix

- Corrige o componente <DocumentTable>

## [1.9.5] - 2025-01-16

### Change

- Atualiza o componente <FileUpload>

## [1.9.6] - 2025-01-17

### Change

- Atualiza os componentes <NewTopic> <ThreadBoxDocuments>

## [1.9.7] - 2025-01-17

### Change

- Atualiza os componentes <NewTopic> <ThreadBoxDocuments>

## [1.9.8] - 2025-01-17

### Change

- Atualiza os componentes <NewTopic>

## [1.9.9] - 2025-01-17

- Criação Componente <ChipSquare>

## [2.0.0] - 2025-01-21

### Fix

- Atualiza os componentes <FileUpload>

## [2.0.1] - 2025-01-21

### Fix

- Atualiza o componente <DocumentTable>

## [2.0.2] - 2025-01-21

### Fix

- Atualiza o componente <DocumentTable>

## [2.0.3] - 2025-01-21

- Adição <PaletteTertiary>

## [2.0.4] - 2025-01-22

- Aplicacao de paletas no ChipSquare <PaletteTertiary>

## [2.0.5] - 2025-01-22

### Fix

- Corrige o componente <DocumentTable>

## [2.0.6] - 2025-01-23

- Cria o componente <RichTextEditorBox>

## [2.0.7] - 2025-01-23

### Fix docTable

- Corrige o componente <DocumentTable>

## [2.0.7-test] - 2025-01-23

- Remonta tag <RichTextEditorBox>

## [2.0.8-test] - 2025-01-23

### Fix NewTopic

- Corrige o componente <NewTopic>

## [2.0.9] - 2025-01-23

### Fix NewTopic

- Corrige o componente <NewTopic>

## [2.1.0] - 2025-01-23

### Fix NewTopic component

- Corrige o componente <NewTopic>

## [2.1.1] - 2025-01-23

### Fix

- Corrige o componente <NewTopic> <ThreadBoxDocuments> <ThreadTimelineDocuments>

## [2.1.2] - 2025-01-25

### Fix

- Corrige o componente <ThreadBoxDocuments>

## [2.1.3] - 2025-01-25

### Fix

- Corrige o componente <ThreadBoxDocuments>

## [2.1.4] - 2025-01-25

### Fix

- Corrige o componente <ThreadBoxDocuments>

## [2.1.5] - 2025-01-27

### Fix

- Corrige o componente <FileUpload>

## [2.1.6] - 2025-01-27

### Fix

- Corrige o componente <DocumentTable>

## [2.1.7] - 2025-01-28

### Fix

- Corrige o componente <DocumentTable>

## [2.1.8] - 2025-01-28

### Fix

- Corrige o componente <DocumentTable>

## [2.1.9] - 2025-01-28

### Add

- Adiciona o componente <RichTextDisplay>

## [2.2.0] - 2025-01-29

### Fix

- Corrige importação no componente <RichTextEditor>

## [2.2.1] - 2025-01-29

### Fix

- Corrige importação no componente <RichTextEditor>

## [2.2.2] - 2025-01-29

### ?

-

## [2.2.3] - 2025-01-29

### Feat

- Adição disabled <ChipSquare>

## [2.2.4] - 2025-01-29

### Fix

- Adição de initialNote no componente <RichTextEditor>

## [2.2.5] - 2025-01-30

### Feat

- Alteração cor padrão <Link>

## [2.2.6 - 2.2.7] - 2025-01-31

### Feat

- Definição de tamanho <ChipGroup>

## [2.2.8] - 2025-01-31

### fix

- Redirecionado do link "/home" para a Home ao invez de login <Header>

### Fix

- Alteração no componente <DocumentTable>

## [2.2.9] - 2025-02-06

### Fix

- Alteração no componente <DocumentTable>

## [2.3.0] - 2025-02-07

### Fix

- Alteração no componente <DocumentTable>

## [2.3.1] - 2025-02-17

### Fix

- Alteração no componente <DocumentTable>

## [2.3.2] - 2025-02-20

### Feat

- Adição de MenuList ao componente <FileUpload>

## [2.3.2] - 2025-02-20

### Fix

- Alteração no componente <DocumentTable>

## [2.3.4] - 2025-02-24

## [2.3.5 - 2.3.6] - 2025-03-06

### Feat

- Adicao componente <CaseViewer>

## [2.3.7 - 2.4.0] - 2025-03-13

### Feat

- Adicao componente <AmicciFooter>

## [2.4.1 - 2.4.3] - 2025-03-17

### Feat

- Adicao componente <StepCardComponente>

## [2.4.4] - 2025-03-20

### Feat

- Adicao componente <AmyBanner>
