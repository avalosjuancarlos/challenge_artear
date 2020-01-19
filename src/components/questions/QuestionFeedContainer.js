/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {SafeAreaView} from 'react-navigation';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import QuestionFeed from './QuestionFeed';
import * as QuestionFeedActions from './actions';

class QuestionFeedContainer extends Component {
  componentDidMount() {
    // Always get the first page of images on mount
    this.props.QuestionFeedActions.getQuestions(1);
  }

  onEndReached = () => {
    const {fetchingQuestions, page} = this.props.questionState;
    if (!fetchingQuestions) {
      this.props.QuestionFeedActions.getQuestions(page + 1);
    }
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#f4511e'}}>
        <QuestionFeed
          {...this.props.questionState}
          getQuestions={this.props.QuestionFeedActions.getQuestions}
          onEndReached={this.onEndReached}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    questionState: state.QuestionFeed,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    QuestionFeedActions: bindActionCreators(QuestionFeedActions, dispatch),
  };
};

const ConnectedQuestionFeed = connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuestionFeedContainer);

export {ConnectedQuestionFeed};
