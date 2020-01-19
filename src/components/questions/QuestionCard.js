import React from 'react';
import {Text, Card, CardItem, Body} from 'native-base';

const QuestionCard = ({card}) => {
  return (
    <Card>
      <CardItem header>
        <Text>Pregunta número: {card.numero}</Text>
      </CardItem>
      <CardItem>
        <Body>
          <Text>{card.pregunta}</Text>
        </Body>
      </CardItem>
      <CardItem footer>
        <Text>Respuesta: {card.respuesta}</Text>
      </CardItem>
    </Card>
  );
};

export default QuestionCard;
