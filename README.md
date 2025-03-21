# mui-theme-config

## Biblioteca de Centralização de Configurações para MUI

Nossa biblioteca foi desenvolvida com o objetivo de simplificar e centralizar a configuração do Material-UI. Ela oferece configurações personalizadas para acelerar o desenvolvimento de aplicativos com MUI. Aqui estão algumas das principais características:

- Configuração Simplificada: Com nossa biblioteca, você pode configurar facilmente as configurações globais do Material-UI em um único lugar, economizando tempo e esforço.
- Personalização Flexível: Você pode personalizar facilmente os estilos e componentes do Material-UI de acordo com as necessidades.
- Integração com Rollup e Storybook: A biblioteca foi construída com Rollup para facilitar a geração de pacotes otimizados e possui integração com o Storybook para desenvolvimento e documentação visual.

## Instalação

Nossa biblioteca está guardada em um repositório dentro do bitbucket. Para começar primeiro você precisa garantir que sua chave ssh esteja configurada em sua máquina local, em seguida pode instalá-la facilmente via npm ou yarn:

`$ npm install git+ssh://git@bitbucket.org:amicci/mui-theme-config.git#1.0.1`
ou
`$ yarn add git+ssh://git@bitbucket.org:amicci/mui-theme-config.git#1.0.1`

É importante usar o número da versão correto na hora da instalação, verifique no repositório a última versão disponível e substitua na url da biblioteca.

##Exemplo de Uso
Aqui está um exemplo simples de como configurar seu aplicativo usando nossa biblioteca:

    import { ThemeProvider } from '@mui/material/styles';
    import { theme } from 'mui-theme-config';

    // Use o tema em seu aplicativo React
    function App() {
      return (
    	<ThemeProvider theme={theme}>
    	  {/* Seus componentes MUI aqui */}
    	</ThemeProvider>
      );
    }

## Personalização

Nossa biblioteca tem a seguinte estrutura:

![](./folder-structure.png)

> Estrutura de pastas.

- dist _// arquivos distribuídos da biblioteca_
- src
    + components _// use esse diretório para componentes personalizados_
    + scss _// configurações globais de estilo_
    + stories _// aqui ficam os exemplos de uso dos seus componentes_
    + theme _// personalizações do tema principal_
- storybook-static _// build estatico dos stories_

### Passo a passo

#### 1º Suas personalizações

Faça seus ajustes personalizados dentro do diretório `src/theme/` e centralize eles no arquivo `ThemeCustomization.tsx`:

    import { createTheme } from "@mui/material/styles";
    // importe a configuração personalizada
    import Palette from "./palette";

    export const theme = createTheme({
    // configure no tema
      palette: Palette().palette,
      spacing: 4,
    });

#### 2º Opcional:

Caso tenha criado/ajustado algum componente, e tenha criado seus stories, você pode ver como eles serão exibidos rodando o comando:

`$ npm run storybook`

Para gerar os arquivos estáticos de seus stories, use o comando:

`$ npm run build-storybook`

Os arquivos gerados serão guardados dentro do diretório `sorybook-static`.

#### 3º Build da biblioteca

Após fazer todos os seus ajustes, use o próximo comando para gerar os arquivos da biblioteca:

`$ npm run build`

O Rollup vai empacotar os arquivos de forma instalável e var guardar-los no diretório `dist`.

#### 4º Ajustes finais

Antes de enviar seus ajustes para o diretório, abra o arquivo `package.json` na raiz do projeto e incremente o número da versão:

    {
    	"name": "mui-theme-config",
    	"version": "1.0.1",
    	...
    }

Assim que subir os arquivos, crie uma tag para o último commit feito, não esqueça de usar o mesmo número de versão que usou no `package.json`:

`$ git tag -a 1.0.1 -m "descrição da tag"`

Use o comando push para subir as alterações:

`$ git push --tags`

### Trazendo as alterações para sua aplicação

Tendo finalizado as alterações na biblioteca, é hora de trazer esses ajustes para o seu sistema. Para isso, abra o `package.json` na raiz do seu projeto e coloque o número da versão dos seus ajustes:

    {
    	...
    	"dependencies": {
    		...
    		"mui-theme-config": "git+ssh://git@bitbucket.org:amicci/mui-theme-config.git#1.0.1"
    		...
    	}
    }

Feito isso, rode o comando de instalação:

`$ npm install`

ou

`$ yarn install`

Por fim, todas as novas configurações devem ter sido carregadas na sua instalação local.

## CHANGELOG

## [1.0.6] - 2023-12-19

### Added

- Customiza componente de Chip.

### Fixed

- Corrige mapeamento de tons de cinza.

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

## [1.4.4] - 2024-08-14

### Added

- Remove OrderedList do RichTextEditor

## [1.4.6] - 2024-08-15

### Added

- Adiciona função pra limpar o conteúdo do RichTextEditor

## [1.4.7] - 2024-08-21

### Fix

- Corrigir exibição do botão 'Visualizar histórico de Comentários'

## [1.4.8 > 1.5.3] - 2024-08-22

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

- Ajusta o componente <RichTextEditorBox>

## [2.0.8] - 2025-01-23

- Remonta tag <RichTextEditorBox>

## [2.0.8-test] - 2025-01-23

### Fix NewTopic e TreadBoxDocuments

- Corrige o componente <NewTopic> e <TreadBoxDocuments>

## [2.0.8-test-3] - 2025-01-23

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
