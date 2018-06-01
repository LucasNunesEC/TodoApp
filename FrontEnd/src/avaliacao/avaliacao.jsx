import React from 'react'
import PageHeader from '../template/pageHeader'
import { Button } from 'reactstrap';

export default props => (
    <div>
        <PageHeader name='Avaliação' small=''></PageHeader>

<h3>I - ASSIDUIDADE - Refere-se ao comparecimento, pontual, regular e a presença permanente na unidade de trabalho.</h3>
      
      <p>1. Cumpre  os horários de entrada e saída no trabalho com pontualidade.</p>
      <p>2. Permanece no local de trabalho durante o expediente.</p>       
      <p>3. As eventuais chegadas com atraso ou saídas antecipadas realizam-se dentro dos limites de tolerância, estabelecidos pela instituição.</p>

      <h3>II -DISCIPLINA - Refere-se ao comportamento, ao respeito à hierarquia a ao cumprimento da legislação e normas internas.</h3>
      
      <p>1. Segue cuidadosamente as normas de trabalho da unidade.</p>
      <p>2. Conhece e observa a hierarquia funcional, cumprindo as ordens recebidas de quando de acordo com as normas legais.</p>       
      <p>3. Conhece as atribuições de seu cargo.</p>
      
      <h3>III -CAPACIDADE DE INICIATIVA - Refere-se a capacidade do servidor de tomar decisões em face de prolemas surgidos no contexto de suas atividades,
          bem como de adaptar-se ou buscar soluções adequadas por seus próprios meis, visando sempre o sucesso do grupo e a melhoria do trabalho.</h3>
      
      <p>1. Encaminha correta e adequadamente os assuntos que fogem á sua alçada decisória.</p>
      <p>2. Apresenta sugestões e críticas construtivas para realização de trabalho.</p>       
      <p>3. Investe tempo e recursos no seu desenvolvimento profissional.</p>

      <h3>IV -PRODUTIVIDADE - Volume de trabalho produzido, levando-se em conta a complexidade, o tempo de execução e as condições de trabalho sem prejuízo
          da qualidade.</h3>
      
      <p>1. Racionaliza o uso de recursos materiais, para a execução do trabalho.</p>
      <p>2. Executa o seu trabalho sem a necessidade de ordens e orientações constantes.</p>       
      <p>3. Produz volume de trabalho proporcional à sua complexidade.</p>

      <h3>V -RESPONSABILIDADE - Comprometimento, empenho, seriedade com que encara seu trabalho, bem como zelo por equipamentos, informações, valores
          ou pessoas envolvidas na execução de suas tarefas.</h3>
      
      <p>1. Corresponde à confiança que lhe é dada no trabalho.</p>
      <p>2. Resguarda fatos de interesse da administração, agindo com descrição.</p>       
      <p>3. Preocupa-se com o êxito do seu trabalho.</p>
<hr/>
<Button color="primary"> Gravar</Button>{' '}
<Button color="danger">Cancelar</Button>{' '}

<hr/>
    </div>
)

