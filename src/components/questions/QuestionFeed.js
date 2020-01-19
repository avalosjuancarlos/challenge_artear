/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList} from 'react-native';
import {Container, Text, Body, ListItem} from 'native-base';
import Loader from '../shared/Loader';

import QuestionCard from './QuestionCard';

const renderItem = ({item}) => {
  return (
    <ListItem style={{borderBottomWidth: 0}}>
      <Body>
        <QuestionCard card={item} />
      </Body>
    </ListItem>
  );
};

const _keyExtractor = item => item.numero.toString();

const QuestionFeed = props => {
  return (
    <Container style={{flex: 1, backgroundColor: '#999'}}>
      {props.fetchingQuestions && props.questions.length <= 0 ? (
        <Loader />
      ) : props.questionError ? (
        <Text style={{alignSelf: 'center'}}>Question Error</Text>
      ) : props.questions.length > 0 ? (
        <FlatList
          keyExtractor={_keyExtractor}
          style={{flex: 1}}
          data={props.questions}
          renderItem={renderItem}
          onEndReached={props.onEndReached}
          onEndReachedThreshold={5}
        />
      ) : null}
    </Container>
  );
};

export default QuestionFeed;
