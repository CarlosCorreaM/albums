import React from 'react';
import { View } from 'react-native';

const Card = ( props ) => {
    return (
        <View style={ styles.containerStyle }>
            { props.children }
            {/* props.children will always put inner 
            content of component inside the children component*/}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { widht: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    }
};

export default Card;
