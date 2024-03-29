/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
import React, {useReducer, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  Animated,
} from 'react-native';

const INPUT_CHANGE = 'INPUT_CHANGE';
const INPUT_BLUR = 'INPUT_BLUR';
const INPUT_FOCUSE = 'INPUT_FOCUSE';

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
        touched: true,
      };
    case INPUT_BLUR:
      return {
        ...state,
        touched: true,
        focus: false,
      };
    case INPUT_FOCUSE:
      return {
        ...state,
        focus: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const textAnim = useRef(new Animated.Value(0)).current;

  const handleAnimation = () => {
    Animated.timing(textAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const fontSize = textAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [props.fontSize || 18, 13],
  });

  const marginTop = textAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [10, -7],
  });

  const color = textAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(70,70,90)', props.borderColor || 'rgb(70,70,90)'],
  });

  const animatedStyle = {
    fontSize,
    marginTop,
    color: 'rgb(70,70,90)',
  };

  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue ? props.initialValue : '',
    isValid: props.initiallyValid,
    touched: false,
  });

  const {onInputChange} = props;

  useEffect(() => {
    if (inputState.touched) {
      onInputChange(inputState.value, inputState.isValid);
    }
  }, [inputState, onInputChange]);

  const textChangeHandler = (text) => {
    // eslint-disable-next-line no-useless-escape

    const isValid = true;

    dispatch({type: INPUT_CHANGE, value: text, isValid});
  };

  const lostFocusHandler = () => {
    dispatch({type: INPUT_BLUR});
  };

  if (props.outlined) {
    return (
      <Animated.View style={[styles.formControl, props.formControlStyle]}>
        <Animated.Text
          style={[
            styles.label,
            (inputState.touched || inputState.focus) && styles.endLabel,
            props.initialValue ? styles.basic : animatedStyle,
            !inputState.isValid && inputState.touched && styles.redColor,
            // props.borderColor && inputState.focus && {color: props.borderColor},
            props.right && styles.labelRight,
            props.labelStyle,
          ]}
        >
          {props.label}
        </Animated.Text>
        <TextInput
          onSubmitEditing={(text) => (props.submit ? props.submit(text) : null)}
          onFocus={() => {
            dispatch({type: INPUT_FOCUSE, focus: true});
            handleAnimation();
          }}
          textAlignVertical="top"
          {...props}
          style={[
            styles.input,
            {
              borderColor:
                inputState.isValid || !inputState.touched
                  ? '#ccc'
                  : 'rgb(211,55,83)',
            },
            inputState.focus &&
              props.borderColor && {borderColor: props.borderColor},
            props.inputStyle,
          ]}
          value={props.value || inputState.value}
          onChangeText={textChangeHandler}
          onBlur={lostFocusHandler}
        />
        {!inputState.isValid && inputState.touched && props.errorText && (
          <View style={[styles.errorContainer, props.errorContainerStyle]}>
            <Text
              style={[
                styles.errorText,
                props.right && styles.errorTxtRight,
                props.borderColor &&
                  inputState.focus && {color: props.borderColor},
                props.errorText,
              ]}>
              {props.errorText}
            </Text>
          </View>
        )}
      </Animated.View>
    );
  }
  return (
    <View style={[styles.formControl, props.formControl]}>
      <Text
        style={[
          styles.lineLabel,
          props.right && styles.lineLabelRight,
          props.labelStyle,
        ]}
      >
        {props.label}
        {' :'}
      </Text>
      <TextInput
        onFocus={() => {
          dispatch({type: INPUT_FOCUSE, focus: true});
        }}
        onSubmitEditing={(text) => (props.submit ? props.submit(text) : null)}
        textAlignVertical="top"
        {...props}
        style={[
          styles.inputLine,
          {
            borderBottomColor:
              inputState.isValid || !inputState.touched
                ? '#ccc'
                : 'rgb(211,55,83)',
          },
          inputState.focus &&
            props.borderColor && {borderBottomColor: props.borderColor},
          props.inputStyle,
        ]}
        value={props.value || inputState.value}
        onChangeText={textChangeHandler}
        onBlur={lostFocusHandler}
      />
      {!inputState.isValid && inputState.touched && props.errorText && (
        <View style={[styles.errorContainer, props.errorContainer]}>
          <Text
            style={[
              styles.errorText,
              props.right && styles.errorTxtRight,
              props.errorText,
            ]}
          >
            {props.errorText}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  formControl: {
    width: '100%',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  basic: {
    fontSize: 12,
    marginTop: -7,
    zIndex: 10,
  },
  label: {
    marginVertical: 8,
    color: 'rgb(70,70,90)',
    position: 'absolute',
    marginTop: 13,
    left: 20,
    backgroundColor: 'white',
    paddingHorizontal: 5,
  },
  lineLabel: {
    marginVertical: 8,
    fontSize: 13,
    color: 'rgb(60,60,70)',
  },
  endLabel: {
    zIndex: 10,
    color: 'rgb(60,60,70)',
  },
  redColor: {
    color: 'rgb(211,55,83)',
  },
  input: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: 10,

    paddingBottom: Platform.OS === 'ios' ? 8 : 3,
    borderWidth: 1.5,
    borderRadius: 10,
  },
  inputLine: {
    fontSize: 22,
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomWidth: 1,
  },
  errorContainer: {
    marginVertical: 5,
  },
  errorText: {
    paddingHorizontal: 15,
    color: 'rgb(211,55,83)',
    fontSize: 13,
  },
  errorTxtRight: {textAlign: 'right'},
  labelRight: {right: 20},
  lineLabelRight: {textAlign: 'right'},
});

export default Input;
