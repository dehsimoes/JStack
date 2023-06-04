import React from 'react';
import { ThemeProvider as StyledThemeProvider} from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';

import themes from './styles/themes';

//Lifecycle
// render():
// Seria o equivalente ao //useEffect(() => {}); pois sempre que rendereizar executa

// componentDidMount()
//Seria o equivalente ao useEffect(() => {}, []); pois renderiza 1 vez quando monta o componente.

// componentDidUpdate(prevProps, prevState)
/*
  Seria o equivalente ao useEffect(() => {}, [value]); pois executa sempre que alguma prop ou state tiver uma alteração. 
  Obs: ele possue uma propriedade currentState que mostra o valor atual do estado e o prevState o valor anterior a alteração.
  bom para ser utilizado por exemplo, quando renderizar o componente, verificar se o prevState e o currentState sao diferente e se sim,
   chamar uma API para atualizar algum dado.

   Exemplo:
   componentDidUpdate(prevProps, prevState) {
    if*prevState.theme !== this.state.theme {
      console.log('tema mudou...');
    } 
   }

*/

// componentDidCatch(error, info)
// Utitlizado para pegar os erros em nossos componentes filhhos ao componente que foi adicionado

// shouldComponentUpdate(nextProps, nextState)
/* Funciona igual ao componentDidUpdate(), porém ele é executado antes da renderização, por isso nextProps, nextState e nao prevProps, prevState.
   Obs: É o unico lifecycle que necessita de ter um retorno, e este retorno deve ser um boolean(true ou false).
   
   ATENÇÃO IMPORTANTE: O RETORNO BOOLEAN É REFERENTE SE O COMPONENTE DEVE RENDERIZAR OU NAO, CASO RETURN TRUE, RENDERIZA NORMALMENTE, CASO FALSE ELE NAO IRA RENDERIZAR.

   Exemplo de estrutura
   shouldComponentUpdate(nextProps, nextState) {
    currentState: this.state, //valor atual
    nextState,
    nextProps,
   }
   return true
*/

// componentWillUnmount()
// Utilizado quando tiver alguma ação quando o componente for desmontar, um bom lugar para utilizar removeEventListener quando necessario.

class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <StyledThemeProvider theme={themes[theme] || themes.dark}>
              <GlobalStyle />
              <Layout />
            </StyledThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
      
    );
  }
}

export default App;