import React, { Component } from 'react';

import {ADD_PERSON, DELETE_PERSON} from '../redux/action';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import {connect} from 'react-redux';

class Persons extends Component {
    personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }
        this.props.onAddPerson(newPerson);
    }

    personDeletedHandler = (personId) => {
        this.props.onDeletePerson(personId);
    }

    render () {
        return (
            <div>
                <AddPerson personAdded={this.personAddedHandler} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.personDeletedHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        persons: state.persons.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddPerson: (newperson) => dispatch({type:ADD_PERSON, payload: newperson}),
        onDeletePerson: (id) => dispatch({type:DELETE_PERSON, payload: id}),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Persons);